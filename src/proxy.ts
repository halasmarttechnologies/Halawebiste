import { NextRequest, NextResponse } from 'next/server';

const AUTH_COOKIE_NAME = 'hala_admin_session';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const host = request.headers.get('host') || '';

  // Detect if domain is the CMS Portal (e.g., hala-cms-portal.vercel.app or IS_CMS_PORTAL env variable)
  const isCmsPortalDomain =
    host.includes('cms-portal') ||
    host.includes('cms') ||
    process.env.IS_CMS_PORTAL === 'true' ||
    process.env.NEXT_PUBLIC_IS_CMS === 'true';

  // If opening root URL '/' on the CMS Portal Vercel domain -> redirect directly to CMS Login/Admin
  if (pathname === '/' && isCmsPortalDomain) {
    const sessionCookie = request.cookies.get(AUTH_COOKIE_NAME)?.value;
    const targetUrl = new URL(sessionCookie ? '/admin' : '/admin/login', request.url);
    return NextResponse.redirect(targetUrl);
  }

  // Protect /admin routes
  if (pathname.startsWith('/admin')) {
    const isLoginPage = pathname === '/admin/login';
    const sessionCookie = request.cookies.get(AUTH_COOKIE_NAME)?.value;

    // If user is NOT logged in and trying to access /admin (except /admin/login)
    if (!sessionCookie && !isLoginPage) {
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }

    // If user IS logged in and trying to visit /admin/login, redirect to /admin
    if (sessionCookie && isLoginPage) {
      const dashboardUrl = new URL('/admin', request.url);
      return NextResponse.redirect(dashboardUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/admin', '/admin/:path*'],
};
