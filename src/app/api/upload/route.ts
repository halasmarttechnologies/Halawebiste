import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json({ success: false, error: 'No file provided' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const mimeType = file.type || 'image/jpeg';
    const base64 = buffer.toString('base64');
    
    // Construct base64 Data URL (Production ready on Vercel without disk dependencies)
    const dataUrl = `data:${mimeType};base64,${base64}`;

    return NextResponse.json({ success: true, url: dataUrl });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
