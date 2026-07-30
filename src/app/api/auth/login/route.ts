import { NextRequest, NextResponse } from 'next/server';
import {
  verifyCredentials,
  createSessionToken,
  AUTH_COOKIE_NAME,
  checkRateLimit,
  recordFailedLogin,
  recordSuccessfulLogin,
} from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'client_ip';
    const body = await request.json();
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const password = typeof body.password === 'string' ? body.password : '';

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: 'Email and password are required.' },
        { status: 400 }
      );
    }

    // 1. Check Rate Limit / Account Lockout
    const rateLimitKey = `${ip}_${email.toLowerCase()}`;
    const rateLimitCheck = checkRateLimit(rateLimitKey);
    if (!rateLimitCheck.allowed) {
      return NextResponse.json(
        {
          success: false,
          error: `Account temporarily locked due to repeated failed attempts. Please try again in ${rateLimitCheck.retryAfterSeconds} seconds.`,
        },
        { status: 429 }
      );
    }

    // 2. Verify Credentials
    const user = verifyCredentials(email, password);

    if (!user) {
      const lockStatus = recordFailedLogin(rateLimitKey);
      const msg = lockStatus.isLocked
        ? 'Account locked for 15 minutes due to 5 consecutive failed login attempts.'
        : `Invalid email or password. ${lockStatus.attemptsLeft} attempt(s) remaining.`;

      return NextResponse.json({ success: false, error: msg }, { status: 401 });
    }

    // 3. Clear failed attempts on successful login
    recordSuccessfulLogin(rateLimitKey);

    const token = createSessionToken(user);

    const response = NextResponse.json({
      success: true,
      token,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role,
      },
    });

    // Set HTTP-Only, Secure, SameSite Cookie
    response.cookies.set({
      name: AUTH_COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Authentication failed due to a server error.' },
      { status: 500 }
    );
  }
}
