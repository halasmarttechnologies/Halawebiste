import { NextResponse } from 'next/server';
import { isMongoConfigured, getBlogsFromMongo } from '@/lib/mongo-storage';
import { isGitHubConfigured, readBlogsFromGitHub } from '@/lib/github-storage';

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

  if (isGitHubConfigured()) {
    try {
      const { blogs, sha } = await readBlogsFromGitHub();
      return NextResponse.json({
        success: true,
        provider: 'GitHub API (Fallback Storage)',
        status: 'GitHub storage connected',
        blogCount: blogs.length,
        fileSha: sha,
        message: 'Blog data is being read and written directly from GitHub. Add MONGODB_URI for instant MongoDB performance.',
      });
    } catch (err) {
      return NextResponse.json({
        success: false,
        provider: 'GitHub API',
        status: 'GitHub connection failed',
        error: (err as Error).message,
      }, { status: 500 });
    }
  }

  return NextResponse.json({
    success: false,
    status: 'No database or GitHub token configured',
    message: 'Add MONGODB_URI environment variable in Vercel settings to connect your MongoDB Atlas database.',
  });
}
