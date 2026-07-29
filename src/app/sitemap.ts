import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://halatechnologies.com';
  const now = new Date();

  const routes = [
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
    { url: '/blog', priority: 0.8, changeFrequency: 'weekly' as const },
  ];

  return routes.map((r) => ({
    url: `${baseUrl}${r.url}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
