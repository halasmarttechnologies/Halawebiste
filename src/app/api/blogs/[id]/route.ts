import { NextRequest, NextResponse } from 'next/server';
import { calculateReadTime, BlogPost, getAllBlogsSync, saveBlogsSync } from '@/lib/blogs';
import { readBlogsFromGitHub, writeBlogsToGitHub, isGitHubConfigured } from '@/lib/github-storage';

// Force dynamic — never cache these responses
export const dynamic = 'force-dynamic';
export const revalidate = 0;

// ---------------------------------------------------------------------------
// Unified blog reader/writer
// ---------------------------------------------------------------------------
async function getBlogs(): Promise<{ blogs: BlogPost[]; sha: string | null }> {
  if (isGitHubConfigured()) {
    try {
      return await readBlogsFromGitHub();
    } catch (err) {
      console.error('[CMS] GitHub read failed, falling back to local:', err);
      return { blogs: getAllBlogsSync(), sha: null };
    }
  }
  return { blogs: getAllBlogsSync(), sha: null };
}

async function saveBlogs(blogs: BlogPost[], sha: string | null): Promise<void> {
  if (isGitHubConfigured()) {
    if (!sha) {
      throw new Error('GitHub SHA missing — cannot write without a valid file SHA');
    }
    await writeBlogsToGitHub(blogs, sha);
    return;
  }
  saveBlogsSync(blogs);
}

// ---------------------------------------------------------------------------
// GET /api/blogs/[id]
// ---------------------------------------------------------------------------
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { blogs } = await getBlogs();
    const blog = blogs.find((b) => b.id === id || b.slug === id);

    if (!blog) {
      return NextResponse.json({ success: false, error: 'Blog post not found' }, { status: 404 });
    }

    return NextResponse.json(
      { success: true, blog },
      {
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate',
          Pragma: 'no-cache',
        },
      }
    );
  } catch (error) {
    console.error('[GET /api/blogs/[id]] Error:', error);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}

// ---------------------------------------------------------------------------
// PUT /api/blogs/[id]
// ---------------------------------------------------------------------------
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { blogs, sha } = await getBlogs();

    const blogIndex = blogs.findIndex((b) => b.id === id || b.slug === id);
    if (blogIndex === -1) {
      return NextResponse.json({ success: false, error: 'Blog post not found' }, { status: 404 });
    }

    const current = blogs[blogIndex];

    const updatedBlog: BlogPost = {
      ...current,
      title: body.title !== undefined ? body.title : current.title,
      slug: body.slug !== undefined ? body.slug : current.slug,
      category: body.category !== undefined ? body.category : current.category,
      excerpt: body.excerpt !== undefined ? body.excerpt : current.excerpt,
      content: body.content !== undefined ? body.content : current.content,
      image: body.image !== undefined ? body.image : current.image,
      author: {
        name: body.authorName || current.author.name,
        role: body.authorRole || current.author.role,
        avatar: body.authorAvatar || current.author.avatar || '',
      },
      readTime: body.content ? calculateReadTime(body.content) : current.readTime,
      status: body.status !== undefined ? body.status : current.status,
      priority: typeof body.priority === 'number' ? body.priority : current.priority,
      showOnHomepage:
        body.showOnHomepage !== undefined
          ? Boolean(body.showOnHomepage)
          : current.showOnHomepage,
      homepageSection: body.homepageSection || current.homepageSection,
      homepagePriority:
        typeof body.homepagePriority === 'number'
          ? body.homepagePriority
          : current.homepagePriority,
      targetSections: body.targetSections || current.targetSections,
      targetPage: body.targetPage !== undefined ? body.targetPage : current.targetPage,
      seo: {
        metaTitle: body.seo?.metaTitle || current.seo?.metaTitle || current.title,
        metaDescription:
          body.seo?.metaDescription || current.seo?.metaDescription || current.excerpt,
        keywords: Array.isArray(body.seo?.keywords)
          ? body.seo.keywords
          : typeof body.seo?.keywords === 'string'
          ? body.seo.keywords.split(',').map((k: string) => k.trim())
          : current.seo?.keywords || [],
        canonicalUrl:
          body.seo?.canonicalUrl !== undefined
            ? body.seo.canonicalUrl
            : current.seo?.canonicalUrl,
        ogImage: body.seo?.ogImage || body.image || current.seo?.ogImage,
      },
      adsData: {
        campaignTag:
          body.adsData?.campaignTag !== undefined
            ? body.adsData.campaignTag
            : current.adsData?.campaignTag,
        ctaText:
          body.adsData?.ctaText !== undefined
            ? body.adsData.ctaText
            : current.adsData?.ctaText,
        ctaUrl:
          body.adsData?.ctaUrl !== undefined
            ? body.adsData.ctaUrl
            : current.adsData?.ctaUrl,
      },
      updatedAt: new Date().toISOString(),
    };

    blogs[blogIndex] = updatedBlog;
    await saveBlogs(blogs, sha);

    return NextResponse.json({ success: true, blog: updatedBlog });
  } catch (error) {
    console.error('[PUT /api/blogs/[id]] Error:', error);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}

// ---------------------------------------------------------------------------
// DELETE /api/blogs/[id]
// ---------------------------------------------------------------------------
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const { blogs, sha } = await getBlogs();

    const blogIndex = blogs.findIndex((b) => b.id === id || b.slug === id);
    if (blogIndex === -1) {
      return NextResponse.json({ success: false, error: 'Blog post not found' }, { status: 404 });
    }

    const filteredBlogs = blogs.filter((b) => b.id !== id && b.slug !== id);
    await saveBlogs(filteredBlogs, sha);

    return NextResponse.json({ success: true, message: 'Blog deleted successfully' });
  } catch (error) {
    console.error('[DELETE /api/blogs/[id]] Error:', error);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
