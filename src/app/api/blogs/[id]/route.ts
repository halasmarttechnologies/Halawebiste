import { NextRequest, NextResponse } from 'next/server';
import { getAllBlogsSync, saveBlogsSync, calculateReadTime, BlogPost } from '@/lib/blogs';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const blogs = getAllBlogsSync();
    const blog = blogs.find((b) => b.id === id || b.slug === id);

    if (!blog) {
      return NextResponse.json({ success: false, error: 'Blog post not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, blog });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const blogs = getAllBlogsSync();

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
      showOnHomepage: body.showOnHomepage !== undefined ? Boolean(body.showOnHomepage) : current.showOnHomepage,
      homepageSection: body.homepageSection || current.homepageSection,
      homepagePriority: typeof body.homepagePriority === 'number' ? body.homepagePriority : current.homepagePriority,
      targetSections: body.targetSections || current.targetSections,
      targetPage: body.targetPage !== undefined ? body.targetPage : current.targetPage,
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
        ctaText: body.adsData?.ctaText !== undefined ? body.adsData.ctaText : current.adsData?.ctaUrl,
        ctaUrl: body.adsData?.ctaUrl !== undefined ? body.adsData.ctaUrl : current.adsData?.ctaUrl,
      },
      updatedAt: new Date().toISOString(),
    };

    blogs[blogIndex] = updatedBlog;
    saveBlogsSync(blogs);

    return NextResponse.json({ success: true, blog: updatedBlog });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    let blogs = getAllBlogsSync();

    const blogIndex = blogs.findIndex((b) => b.id === id || b.slug === id);
    if (blogIndex === -1) {
      return NextResponse.json({ success: false, error: 'Blog post not found' }, { status: 404 });
    }

    blogs = blogs.filter((b) => b.id !== id && b.slug !== id);
    saveBlogsSync(blogs);

    return NextResponse.json({ success: true, message: 'Blog deleted successfully' });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
