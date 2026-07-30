import { NextRequest, NextResponse } from 'next/server';
import { parseSessionToken, AUTH_COOKIE_NAME } from '@/lib/auth';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const host = request.headers.get('host') || '';

  // Detect if domain is the CMS Portal (e.g., hala-cms-portal.vercel.app or IS_CMS_PORTAL env variable)
  const isCmsPortalDomain =
    host.includes('cms-portal') ||
    host.includes('cms') ||
    process.env.IS_CMS_PORTAL === 'true' ||
    process.env.NEXT_PUBLIC_IS_CMS === 'true';

  const sessionCookie = request.cookies.get(AUTH_COOKIE_NAME)?.value;
  const isValidSession = sessionCookie ? Boolean(parseSessionToken(sessionCookie)) : false;

  // If opening root URL '/' on the CMS Portal Vercel domain -> redirect directly to CMS Login/Admin
  if (pathname === '/' && isCmsPortalDomain) {
    const targetUrl = new URL(isValidSession ? '/admin' : '/admin/login', request.url);
    return NextResponse.redirect(targetUrl);
  }

  // Protect /admin routes
  if (pathname.startsWith('/admin')) {
    const isLoginPage = pathname === '/admin/login';

    // If user has NO valid session and trying to access protected /admin route (except /admin/login)
    if (!isValidSession && !isLoginPage) {
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }

    // If user HAS valid session and trying to visit /admin/login, redirect to /admin dashboard
    if (isValidSession && isLoginPage) {
      const dashboardUrl = new URL('/admin', request.url);
      return NextResponse.redirect(dashboardUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/admin', '/admin/:path*'],
};
