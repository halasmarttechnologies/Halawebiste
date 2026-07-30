import { NextRequest, NextResponse } from 'next/server';
import { AUTH_COOKIE_NAME, parseSessionToken } from '@/lib/auth';

export async function GET(request: NextRequest) {
  const token = request.cookies.get(AUTH_COOKIE_NAME)?.value;

  if (!token) {
    return NextResponse.json({ success: false, user: null }, { status: 401 });
  }

  const parsed = parseSessionToken(token);

  if (!parsed) {
    return NextResponse.json({ success: false, user: null }, { status: 401 });
  }

  return NextResponse.json({
    success: true,
    user: {
      id: parsed.id,
      email: parsed.email,
      role: parsed.role,
    },
  });
}
