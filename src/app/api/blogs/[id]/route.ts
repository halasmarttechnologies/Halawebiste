import { NextRequest, NextResponse } from 'next/server';
import { calculateReadTime } from '@/lib/blogs';
import { getSingleBlogData, updateBlogData, deleteBlogData } from '@/lib/data-provider';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// ---------------------------------------------------------------------------
// GET /api/blogs/[id]
// ---------------------------------------------------------------------------
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const rawId = (await params).id;
    const id = decodeURIComponent(rawId);
    const blog = await getSingleBlogData(id);

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
    const rawId = (await params).id;
    const id = decodeURIComponent(rawId);
    const body = await request.json();

    const current = await getSingleBlogData(id);
    if (!current) {
      return NextResponse.json({ success: false, error: 'Blog post not found' }, { status: 404 });
    }

    const updatedFields: any = {
      ...(body.title !== undefined && { title: body.title }),
      ...(body.slug !== undefined && { slug: body.slug }),
      ...(body.category !== undefined && { category: body.category }),
      ...(body.excerpt !== undefined && { excerpt: body.excerpt }),
      ...(body.content !== undefined && { content: body.content }),
      ...(body.image !== undefined && { image: body.image }),
      author: {
        name: body.authorName || current.author.name,
        role: body.authorRole || current.author.role,
        avatar: body.authorAvatar || current.author.avatar || '',
      },
      readTime: body.content ? calculateReadTime(body.content) : current.readTime,
      ...(body.status !== undefined && { status: body.status }),
      ...(typeof body.priority === 'number' && { priority: body.priority }),
      ...(body.showOnHomepage !== undefined && { showOnHomepage: Boolean(body.showOnHomepage) }),
      ...(body.homepageSection && { homepageSection: body.homepageSection }),
      ...(typeof body.homepagePriority === 'number' && { homepagePriority: body.homepagePriority }),
      ...(body.targetSections && { targetSections: body.targetSections }),
      ...(body.targetPage !== undefined && { targetPage: body.targetPage }),
      seo: {
        metaTitle: body.seo?.metaTitle || current.seo?.metaTitle || current.title,
        metaDescription: body.seo?.metaDescription || current.seo?.metaDescription || current.excerpt,
        keywords: Array.isArray(body.seo?.keywords)
          ? body.seo.keywords
          : typeof body.seo?.keywords === 'string'
          ? body.seo.keywords.split(',').map((k: string) => k.trim())
          : current.seo?.keywords || [],
        canonicalUrl: body.seo?.canonicalUrl !== undefined ? body.seo.canonicalUrl : current.seo?.canonicalUrl,
        ogImage: body.seo?.ogImage || body.image || current.seo?.ogImage,
      },
      adsData: {
        campaignTag: body.adsData?.campaignTag !== undefined ? body.adsData.campaignTag : current.adsData?.campaignTag,
        ctaText: body.adsData?.ctaText !== undefined ? body.adsData.ctaText : current.adsData?.ctaText,
        ctaUrl: body.adsData?.ctaUrl !== undefined ? body.adsData.ctaUrl : current.adsData?.ctaUrl,
      },
      updatedAt: new Date().toISOString(),
    };

    const updated = await updateBlogData(id, updatedFields);

    return NextResponse.json({ success: true, blog: updated });
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
    const rawId = (await params).id;
    const id = decodeURIComponent(rawId);
    const deleted = await deleteBlogData(id);

    if (!deleted) {
      return NextResponse.json({ success: false, error: 'Blog post not found or already deleted' }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: 'Blog deleted successfully' });
  } catch (error) {
    console.error('[DELETE /api/blogs/[id]] Error:', error);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
