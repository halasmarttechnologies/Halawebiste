import { NextRequest, NextResponse } from 'next/server';
import { getAllBlogsSync, saveBlogsSync, generateSlug, calculateReadTime, BlogPost } from '@/lib/blogs';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const homepage = searchParams.get('homepage');
    const category = searchParams.get('category');
    const targetPage = searchParams.get('targetPage');
    const search = searchParams.get('search');

    let blogs = getAllBlogsSync();

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
      blogs = blogs.filter((b) => b.targetPage === targetPage || b.targetPage === 'all' || !b.targetPage);
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

    return NextResponse.json({ success: true, count: blogs.length, blogs });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const blogs = getAllBlogsSync();

    const title = body.title || 'Untitled Blog Post';
    const slug = body.slug || generateSlug(title);
    
    // Check slug duplication
    const existingIndex = blogs.findIndex((b) => b.slug === slug);
    const finalSlug = existingIndex >= 0 ? `${slug}-${Date.now().toString().slice(-4)}` : slug;
    
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
      image: body.image || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
      author: {
        name: body.authorName || 'Hala Marketing Team',
        role: body.authorRole || 'Content Specialist',
        avatar: body.authorAvatar || '',
      },
      date: formattedDate,
      readTime: body.readTime || calculateReadTime(body.content || ''),
      status: body.status || 'published',
      priority: typeof body.priority === 'number' ? body.priority : blogs.length + 1,
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

    blogs.push(newBlog);
    saveBlogsSync(blogs);

    return NextResponse.json({ success: true, blog: newBlog }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
