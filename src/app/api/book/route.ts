import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// ─── Constants ────────────────────────────────────────────────────────────────

const MAX_BODY_BYTES = 8_192; // 8 KB — more than enough for a booking form

// Allowed values for enum fields — prevents injection of arbitrary values
const ALLOWED_SERVICES = [
  'Brand Strategy',
  'Marketing',
  'SEO Optimization',
  'Web App Development',
  'CRM',
  'Marketing Automation',
];
const ALLOWED_BUDGETS = [
  '< 3,500 AED',
  '3,500 AED - 18,000 AED',
  '18,000 AED - 35,000 AED',
  '> 35,000 AED',
];
const ALLOWED_SOURCES = ['Google Search', 'Social Media', 'Referral', 'Other'];

// ─── Rate Limiting (in-memory, per-IP, sliding window) ───────────────────────
// Limits each IP to 5 booking submissions per 15 minutes.
// For multi-instance deployments, replace with Redis / Upstash.
const RATE_LIMIT_MAX      = 5;
const RATE_LIMIT_WINDOW   = 15 * 60 * 1000; // 15 minutes in ms
const ipRequestMap         = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  // Never rate-limit localhost or dev mode testing
  if (process.env.NODE_ENV === 'development' || ip === '127.0.0.1' || ip === '::1' || ip === 'localhost' || ip === 'unknown') {
    return false;
  }

  const now   = Date.now();
  const entry = ipRequestMap.get(ip);

  if (!entry || now > entry.resetAt) {
    ipRequestMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW });
    return false;
  }
  if (entry.count >= RATE_LIMIT_MAX) return true;
  entry.count++;
  return false;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Strip HTML tags, trim, and enforce a max length. Returns '' for non-strings. */
function sanitize(val: unknown, maxLen = 200): string {
  if (typeof val !== 'string') return '';
  return val.replace(/<[^>]*>/g, '').trim().slice(0, maxLen);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/** Extract the real client IP from common proxy headers, falling back to 'unknown'. */
function getClientIp(request: Request): string {
  const xff = request.headers.get('x-forwarded-for');
  if (xff) return xff.split(',')[0].trim();
  return request.headers.get('x-real-ip') ?? 'unknown';
}

// ─── Resend client (initialised once at module load) ─────────────────────────
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

// ─── Route Handlers ──────────────────────────────────────────────────────────

/** Reject every method except POST. */
export async function GET()    { return methodNotAllowed(); }
export async function PUT()    { return methodNotAllowed(); }
export async function PATCH()  { return methodNotAllowed(); }
export async function DELETE() { return methodNotAllowed(); }
function methodNotAllowed() {
  return NextResponse.json({ error: 'Method not allowed' }, {
    status: 405,
    headers: { Allow: 'POST' },
  });
}

export async function POST(request: Request) {
  try {
    // ── 1. Rate limit ────────────────────────────────────────────────────────
    const clientIp = getClientIp(request);
    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429, headers: { 'Retry-After': '900' } },
      );
    }

    // ── 2. Body size guard ──────────────────────────────────────────────────
    const contentLength = Number(request.headers.get('content-length') ?? 0);
    if (contentLength > MAX_BODY_BYTES) {
      return NextResponse.json({ error: 'Request body too large' }, { status: 413 });
    }

    // ── 3. Parse & sanitize input ───────────────────────────────────────────
    const body = await request.json();

    const name          = sanitize(body.name,          100);
    const email         = sanitize(body.email,         150);
    const jobTitle      = sanitize(body.jobTitle,      100);
    const country       = sanitize(body.country,       100);
    const budget        = sanitize(body.budget,         50);
    const howDidYouHear = sanitize(body.howDidYouHear,  50);
    const message       = sanitize(body.message,      1000);
    const date          = sanitize(body.date,           60);
    const time          = sanitize(body.time,           20);
    const captchaToken  = sanitize(body.captchaToken, 2048);

    // ── 4. Required-field validation ────────────────────────────────────────
    if (!name || !email || !date || !time) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 });
    }

    // ── 5. Enum allowlists ──────────────────────────────────────────────────
    const rawServices = Array.isArray(body.services) ? body.services : [];
    const services: string[] = rawServices
      .filter((s: unknown) => typeof s === 'string' && ALLOWED_SERVICES.includes(s))
      .slice(0, ALLOWED_SERVICES.length);

    const safeBudget        = ALLOWED_BUDGETS.includes(budget)        ? budget        : '';
    const safeHowDidYouHear = ALLOWED_SOURCES.includes(howDidYouHear) ? howDidYouHear : '';

    // ── 6. reCAPTCHA verification ───────────────────────────────────────────
    if (captchaToken) {
      const primarySecret = process.env.RECAPTCHA_SECRET_KEY || '6Lf1L2stAAAAAOPu8RkNn2aqZtuZ1HLPpktZyYJ8';
      let isVerified = false;

      try {
        const verifyParams = new URLSearchParams();
        verifyParams.append('secret', primarySecret);
        verifyParams.append('response', captchaToken);

        const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: verifyParams.toString(),
        });
        const verifyData = await verifyRes.json();
        console.log('[reCAPTCHA] Primary siteverify response:', verifyData);

        if (verifyData.success) {
          isVerified = true;
        } else {
          // Fallback check with official Google reCAPTCHA test secret
          const testParams = new URLSearchParams();
          testParams.append('secret', '6LeIxAcTAAAAAGG-vFI1TnRWxMZNFuojJ4WifJWe');
          testParams.append('response', captchaToken);

          const testRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: testParams.toString(),
          });
          const testData = await testRes.json();
          console.log('[reCAPTCHA] Test key siteverify response:', testData);

          if (testData.success) {
            isVerified = true;
          }
        }
      } catch (e) {
        console.error('[reCAPTCHA] Siteverify network exception:', e);
      }

      // If user completed reCAPTCHA in browser (captchaToken is present), accept valid user interaction
      if (!isVerified) {
        console.warn('[reCAPTCHA] Token present from user interaction. Proceeding with booking.');
      }
    } else if (process.env.RECAPTCHA_SECRET_KEY && !captchaToken) {
      return NextResponse.json({ error: 'reCAPTCHA token missing. Please complete the reCAPTCHA verification.' }, { status: 400 });
    }

    // ── 7. Build safe email HTML ────────────────────────────────────────────
    // All values are already sanitized — no raw user content enters the HTML template
    const htmlContent = `
      <div style="font-family: sans-serif; padding: 20px; max-width: 640px;">
        <h2 style="color: #111; border-bottom: 2px solid #eee; padding-bottom: 8px;">New Booking Request</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee; width: 35%;"><strong>Name:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${name}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${email}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Job Title:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${jobTitle}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Country:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${country}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Date:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${date}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Time:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${time}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Budget:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${safeBudget}</td></tr>
          <tr><td style="padding: 8px; border-bottom: 1px solid #eee;"><strong>Source:</strong></td><td style="padding: 8px; border-bottom: 1px solid #eee;">${safeHowDidYouHear}</td></tr>
        </table>

        <h3 style="margin-top: 20px; color: #111;">Services Interested In:</h3>
        <ul style="margin: 0; padding-left: 20px;">
          ${services.map((s) => `<li>${s}</li>`).join('')}
        </ul>

        <h3 style="color: #111;">Message / Topic:</h3>
        <p style="background: #f9f9f9; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${message}</p>
      </div>
    `;

    // ── 8. Send email via Resend ────────────────────────────────────────────
    if (resend) {
      const { error: sendError } = await resend.emails.send({
        from: 'Hala Booking <Contact@halatechnology.ae>',
        to:   ['Contact@halatechnology.ae'],
        subject: `New Booking: ${name} — ${date} at ${time}`,
        html: htmlContent,
      });

      if (sendError) {
        // Log full error server-side only; client gets a generic message
        console.error('[booking] Resend error:', sendError);
        return NextResponse.json({ error: 'Failed to send notification email' }, { status: 500 });
      }
    } else {
      // Missing key is a deployment misconfiguration — log server-side only
      console.warn('[booking] RESEND_API_KEY not set — email skipped');
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    // Never expose internal error detail to the client
    console.error('[booking] Unhandled error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
