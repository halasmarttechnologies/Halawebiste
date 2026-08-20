import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({
    status: 'OK',
  }, {
    headers: {
      'Cache-Control': 'no-store, no-cache, must-revalidate',
    },
  });
}

export async function POST()   { return methodNotAllowed(); }
export async function PUT()    { return methodNotAllowed(); }
export async function PATCH()  { return methodNotAllowed(); }
export async function DELETE() { return methodNotAllowed(); }

function methodNotAllowed() {
  return NextResponse.json({ error: 'Method not allowed' }, {
    status: 405,
    headers: { Allow: 'GET' },
  });
}
