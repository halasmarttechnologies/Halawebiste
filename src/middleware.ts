import { NextRequest, NextResponse } from 'next/server';

const AUTH_COOKIE_NAME = 'hala_admin_session';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Protect ONLY /admin routes
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
  matcher: ['/admin', '/admin/:path*'],
};
