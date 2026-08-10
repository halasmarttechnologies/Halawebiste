# Security Policy

## Supported Versions

| Version | Supported |
|---------|-----------|
| Latest  | ✅        |

## Reporting a Vulnerability

If you discover a security vulnerability in this project, please report it
**privately** by emailing: **Contact@halatechnology.ae**

Please include:
- A clear description of the issue
- Steps to reproduce
- Potential impact
- Any suggested mitigations

We will respond within **48 hours** and aim to release a fix within **7 days**
for critical issues.

**Do NOT open a public GitHub issue for security vulnerabilities.**

## Security Measures in Place

- All secrets are stored as environment variables — never in source code.
- Content Security Policy (CSP) is enforced in production.
- Security headers: HSTS, X-Frame-Options, X-Content-Type-Options, Referrer-Policy,
  Permissions-Policy, COOP, CORP are set on all responses.
- Input validation and sanitization on all API endpoints.
- Rate limiting on the booking API.
- reCAPTCHA v2 verification on the contact/booking form.
- Source maps are disabled in production builds.
- `console.log` is stripped in production builds.

## Known Secrets — Rotation Required

> **⚠️ IMPORTANT**: If you find any secret or credential committed to this
> repository's git history, treat it as **compromised** and rotate/revoke it
> immediately — do not simply delete it from the codebase.

The following were previously exposed in git history and **must be rotated** on
first deploy:

| Secret                          | Action Required                              |
|---------------------------------|----------------------------------------------|
| `RECAPTCHA_SECRET_KEY`          | Regenerate on Google reCAPTCHA Admin console |
| `RESEND_API_KEY`                | Revoke and generate a new key in Resend      |
| `SANITY_API_WRITE_TOKEN`        | Revoke in Sanity dashboard > API > Tokens    |
| `SANITY_REVALIDATE_SECRET`      | Generate a new strong random secret          |
| `DATABASE_URI` (Neon Postgres)  | Rotate connection credentials in Neon        |
| `CLOUDINARY_API_SECRET`         | Regenerate in Cloudinary dashboard           |
| `PAYLOAD_SECRET`                | Generate a new strong random string          |
| `JWT_SECRET`                    | Generate a new strong random string          |
| Admin/SEO/Ads passwords         | Change all user passwords immediately        |
