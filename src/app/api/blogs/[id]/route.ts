import { NextRequest, NextResponse } from 'next/server';
import { calculateReadTime } from '@/lib/blogs';
import { getSingleBlogData, updateBlogData, deleteBlogData } from '@/lib/data-provider';
import { AUTH_COOKIE_NAME, parseSessionToken } from '@/lib/auth';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

function sanitizeInput(str: string): string {
  if (typeof str !== 'string') return '';
  return str.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '').trim();
}

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
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          Pragma: 'no-cache',
          Expires: '0',
        },
      }
    );
  } catch (error) {
    console.error('[GET /api/blogs/[id]] Error:', error);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}

// ---------------------------------------------------------------------------
// PUT /api/blogs/[id] (Protected by RBAC)
// ---------------------------------------------------------------------------
export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const token = request.cookies.get(AUTH_COOKIE_NAME)?.value;
    const session = token ? parseSessionToken(token) : null;

    if (!session) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized: Authentication required to edit blogs.' },
        { status: 401 }
      );
    }

    const rawId = (await params).id;
    const id = decodeURIComponent(rawId);
    const body = await request.json();

    const current = await getSingleBlogData(id);
    if (!current) {
      return NextResponse.json({ success: false, error: 'Blog post not found' }, { status: 404 });
    }

    const updatedFields: any = {
      ...(body.title !== undefined && { title: sanitizeInput(body.title) }),
      ...(body.slug !== undefined && { slug: sanitizeInput(body.slug) }),
      ...(body.category !== undefined && { category: sanitizeInput(body.category) }),
      ...(body.excerpt !== undefined && { excerpt: sanitizeInput(body.excerpt) }),
      ...(body.content !== undefined && { content: sanitizeInput(body.content) }),
      ...(body.image !== undefined && { image: sanitizeInput(body.image) }),
      author: {
        name: body.authorName ? sanitizeInput(body.authorName) : current.author.name,
        role: body.authorRole ? sanitizeInput(body.authorRole) : current.author.role,
        avatar: body.authorAvatar ? sanitizeInput(body.authorAvatar) : current.author.avatar || '',
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
        metaTitle: body.seo?.metaTitle ? sanitizeInput(body.seo.metaTitle) : current.seo?.metaTitle || current.title,
        metaDescription: body.seo?.metaDescription ? sanitizeInput(body.seo.metaDescription) : current.seo?.metaDescription || current.excerpt,
        keywords: Array.isArray(body.seo?.keywords)
          ? body.seo.keywords.map((k: string) => sanitizeInput(k))
          : typeof body.seo?.keywords === 'string'
          ? body.seo.keywords.split(',').map((k: string) => sanitizeInput(k.trim()))
          : current.seo?.keywords || [],
        canonicalUrl: body.seo?.canonicalUrl !== undefined ? sanitizeInput(body.seo.canonicalUrl) : current.seo?.canonicalUrl,
        ogImage: body.seo?.ogImage ? sanitizeInput(body.seo.ogImage) : current.seo?.ogImage,
      },
      adsData: {
        campaignTag: body.adsData?.campaignTag !== undefined ? sanitizeInput(body.adsData.campaignTag) : current.adsData?.campaignTag,
        ctaText: body.adsData?.ctaText !== undefined ? sanitizeInput(body.adsData.ctaText) : current.adsData?.ctaText,
        ctaUrl: body.adsData?.ctaUrl !== undefined ? sanitizeInput(body.adsData.ctaUrl) : current.adsData?.ctaUrl,
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
// DELETE /api/blogs/[id] (Protected by RBAC)
// ---------------------------------------------------------------------------
export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const token = request.cookies.get(AUTH_COOKIE_NAME)?.value;
    const session = token ? parseSessionToken(token) : null;

    if (!session) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized: Authentication required to delete blogs.' },
        { status: 401 }
      );
    }

    const rawId = (await params).id;
    const id = decodeURIComponent(rawId);

    const mongoUri = process.env.MONGODB_URI || 'MISSING';
    const uriFingerprint = mongoUri !== 'MISSING' ? mongoUri.split('@')[1]?.split('/')[0] || 'Unknown Cluster' : 'NO_URI';

    console.log(`\n[API LOG] DELETE /api/blogs/${id}`);
    console.log(`Environment: ${process.env.NODE_ENV}`);
    console.log(`Database: hala_cms_db`);
    console.log(`Collection: blogs`);
    console.log(`Mongo URI Fingerprint: ${uriFingerprint}`);

    const deleted = await deleteBlogData(id);

    if (!deleted) {
      console.log(`Verified: Failed (Blog not found)\n`);
      return NextResponse.json({ success: false, error: 'Blog post not found or already deleted' }, { status: 404 });
    }

    console.log(`Deleted Count: 1`);
    console.log(`Verified: Success\n`);

    return NextResponse.json({ success: true, message: 'Blog deleted successfully' });
  } catch (error) {
    console.error('[DELETE /api/blogs/[id]] Error:', error);
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
