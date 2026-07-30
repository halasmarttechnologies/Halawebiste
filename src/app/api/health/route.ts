import { NextResponse } from 'next/server';
import { isGitHubConfigured, readBlogsFromGitHub } from '@/lib/github-storage';

export const dynamic = 'force-dynamic';

export async function GET() {
  const configured = isGitHubConfigured();

  if (!configured) {
    return NextResponse.json({
      success: false,
      status: 'GITHUB_TOKEN not set',
      message: 'Add GITHUB_TOKEN environment variable in Vercel dashboard to enable persistent blog storage.',
      docs: 'https://vercel.com/docs/environment-variables',
    });
  }

  try {
    const { blogs, sha } = await readBlogsFromGitHub();
    return NextResponse.json({
      success: true,
      status: 'GitHub storage connected',
      blogCount: blogs.length,
      fileSha: sha,
      message: 'Blog data is being read and written directly from GitHub. Changes persist immediately.',
    });
  } catch (err) {
    return NextResponse.json({
      success: false,
      status: 'GitHub connection failed',
      error: (err as Error).message,
      message: 'Check that GITHUB_TOKEN has repo read/write permissions for halasmarttechnologies/Halawebiste.',
    }, { status: 500 });
  }
}
