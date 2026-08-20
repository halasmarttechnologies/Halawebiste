import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',       // Block all API routes from indexing
          '/studio/',    // Block Sanity CMS studio from crawling
          '/studio',
        ],
      },
    ],
    sitemap: 'https://halatechnologies.com/sitemap.xml',
  };
}
