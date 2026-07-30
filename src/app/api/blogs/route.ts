import { NextRequest, NextResponse } from 'next/server';
import { generateSlug, calculateReadTime, BlogPost } from '@/lib/blogs';
import { readBlogsFromGitHub, writeBlogsToGitHub, isGitHubConfigured } from '@/lib/github-storage';
import { getAllBlogsSync, saveBlogsSync } from '@/lib/blogs';

// Force dynamic — NEVER cache blog API responses
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

// ---------------------------------------------------------------------------
// Unified blog reader: GitHub in production, local file in dev
// ---------------------------------------------------------------------------
async function getBlogs(): Promise<{ blogs: BlogPost[]; sha: string | null }> {
  if (isGitHubConfigured()) {
    try {
      const result = await readBlogsFromGitHub();
      return result;
    } catch (err) {
      console.error('[CMS] GitHub read failed, falling back to local:', err);
      // Fallback to local if GitHub fails
      return { blogs: getAllBlogsSync(), sha: null };
    }
  }
  // Local development: use file system
  return { blogs: getAllBlogsSync(), sha: null };
}

// ---------------------------------------------------------------------------
// Unified blog writer: GitHub in production, local file in dev
// ---------------------------------------------------------------------------
async function saveBlogs(blogs: BlogPost[], sha: string | null): Promise<void> {
  if (isGitHubConfigured()) {
    if (!sha) {
      throw new Error('GitHub SHA missing — cannot write without a valid file SHA');
    }
    // Throw on failure so the caller returns a real error to the CMS
    await writeBlogsToGitHub(blogs, sha);
    return;
  }
  // Local development only
  saveBlogsSync(blogs);
}

// ---------------------------------------------------------------------------
// GET /api/blogs
// ---------------------------------------------------------------------------
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const homepage = searchParams.get('homepage');
    const category = searchParams.get('category');
    const targetPage = searchParams.get('targetPage');
    const search = searchParams.get('search');

    const { blogs: allBlogs } = await getBlogs();
    let blogs = allBlogs;

    if (status) {
      blogs = blogs.filter((b) => b.status === status);
    }

    if (homepage === 'true') {
      blogs = blogs.filter((b) => b.showOnHomepage);
    }

    if (category && category !== 'All') {
      blogs = blogs.filter((b) => b.category === category);
    }

    if (targetPage && targetPage !== 'all') {
      blogs = blogs.filter(
        (b) => b.targetPage === targetPage || b.targetPage === 'all' || !b.targetPage
      );
    }

    if (search) {
      const q = search.toLowerCase();
      blogs = blogs.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.excerpt.toLowerCase().includes(q) ||
          (b.seo?.keywords && b.seo.keywords.some((k) => k.toLowerCase().includes(q)))
      );
    }

    return NextResponse.json(
      { success: true, count: blogs.length, blogs },
      {
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate',
          Pragma: 'no-cache',
        },
      }
    );
  } catch (error) {
    console.error('[GET /api/blogs] Error:', error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}

// ---------------------------------------------------------------------------
// POST /api/blogs
// ---------------------------------------------------------------------------
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { blogs: existingBlogs, sha } = await getBlogs();

    const title = body.title || 'Untitled Blog Post';
    const slug = body.slug || generateSlug(title);

    // Ensure unique slug
    const slugExists = existingBlogs.some((b) => b.slug === slug);
    const finalSlug = slugExists ? `${slug}-${Date.now().toString().slice(-4)}` : slug;

    const now = new Date().toISOString();
    const formattedDate = new Date().toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });

    const newBlog: BlogPost = {
      id: body.id || `blog-${Date.now()}`,
      slug: finalSlug,
      title,
      category: body.category || 'AI Marketing',
      excerpt: body.excerpt || '',
      content: body.content || '',
      image:
        body.image ||
        'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
      author: {
        name: body.authorName || 'Hala Marketing Team',
        role: body.authorRole || 'Content Specialist',
        avatar: body.authorAvatar || '',
      },
      date: formattedDate,
      readTime: body.readTime || calculateReadTime(body.content || ''),
      status: body.status || 'published',
      priority: typeof body.priority === 'number' ? body.priority : existingBlogs.length + 1,
      showOnHomepage: Boolean(body.showOnHomepage),
      homepageSection: body.homepageSection || 'grid_featured',
      homepagePriority: typeof body.homepagePriority === 'number' ? body.homepagePriority : 1,
      targetSections: body.targetSections || ['homepage'],
      targetPage: body.targetPage || 'all',
      seo: {
        metaTitle: body.seo?.metaTitle || title,
        metaDescription: body.seo?.metaDescription || body.excerpt || '',
        keywords: Array.isArray(body.seo?.keywords)
          ? body.seo.keywords
          : typeof body.seo?.keywords === 'string'
          ? body.seo.keywords.split(',').map((k: string) => k.trim())
          : [],
        canonicalUrl: body.seo?.canonicalUrl || '',
        ogImage: body.seo?.ogImage || body.image || '',
      },
      adsData: {
        campaignTag: body.adsData?.campaignTag || '',
        ctaText: body.adsData?.ctaText || 'Get Started',
        ctaUrl: body.adsData?.ctaUrl || '/contact',
      },
      createdAt: now,
      updatedAt: now,
    };

    const updatedBlogs = [...existingBlogs, newBlog];
    await saveBlogs(updatedBlogs, sha);

    return NextResponse.json({ success: true, blog: newBlog }, { status: 201 });
  } catch (error) {
    console.error('[POST /api/blogs] Error:', error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
