import { NextResponse } from 'next/server';
import { isMongoConfigured, getBlogsFromMongo } from '@/lib/mongo-storage';

export const dynamic = 'force-dynamic';

export async function GET() {
  if (isMongoConfigured()) {
    try {
      const blogs = await getBlogsFromMongo();
      return NextResponse.json({
        success: true,
        provider: 'MongoDB Atlas',
        status: 'MongoDB Connected (Production Real-Time Database)',
        blogCount: blogs.length,
        message: 'Blog CRUD operations are executing directly against MongoDB Atlas with 0 cache delay and instant persistence.',
      });
    } catch (err) {
      return NextResponse.json({
        success: false,
        provider: 'MongoDB Atlas',
        status: 'MongoDB Connection Error',
        error: (err as Error).message,
        message: 'Check that MONGODB_URI is correct and Network Access in MongoDB Atlas allows 0.0.0.0/0.',
      }, { status: 500 });
    }
  }

  return NextResponse.json({
    success: false,
    status: 'MongoDB Atlas Not Configured',
    message: 'Add MONGODB_URI environment variable in Vercel settings to connect your MongoDB Atlas database.',
  }, { status: 500 });
}
