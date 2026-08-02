import type { MetadataRoute } from 'next';

import { client } from '@/sanity/lib/client';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://halatechnologies.com';
  const now = new Date();

  // 1. Static Routes
  const staticRoutes = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/branding', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/branding/graphic-design', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/branding/video-editing', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/branding/content-creation', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/website-development', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/digital-marketing', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/seo', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/smm', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/ppc', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/ai-agent', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/whatsapp-automation', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/case-studies', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/careers', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/blogs', priority: 0.9, changeFrequency: 'weekly' as const },
  ];

  const staticSitemap = staticRoutes.map((r) => ({
    url: `${baseUrl}${r.url}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  // 2. Dynamic Blog Routes from Sanity
  let blogSitemap: MetadataRoute.Sitemap = [];
  try {
    const posts = await client.fetch(`*[_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))]{ "slug": slug.current, _updatedAt }`);
    blogSitemap = posts.map((post: any) => ({
      url: `${baseUrl}/blogs/${encodeURIComponent(post.slug)}`,
      lastModified: new Date(post._updatedAt || now),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));
  } catch (error) {
    console.error("Failed to fetch Sanity posts for sitemap", error);
  }

  return [...staticSitemap, ...blogSitemap];
}
