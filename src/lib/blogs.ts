export interface SEOData {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  canonicalUrl?: string;
  ogImage?: string;
}

export interface AdsData {
  campaignTag?: string;
  ctaText?: string;
  ctaUrl?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: 'AI Marketing' | 'Digital Marketing' | 'SEO' | 'Social Media' | 'Visual Editing' | string;
  excerpt: string;
  content: string;
  image: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  date: string;
  readTime: string;
  status: 'draft' | 'published';
  priority: number;
  showOnHomepage: boolean;
  homepageSection?: 'hero_featured' | 'grid_featured' | 'seo_spotlight';
  homepagePriority?: number;
  targetSections?: string[];
  targetPage?: 'all' | 'homepage' | 'website-development' | 'branding' | 'digital-marketing' | 'seo' | 'ppc' | string;
  seo?: SEOData;
  adsData?: AdsData;
  createdAt: string;
  updatedAt: string;
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function calculateReadTime(content: string): string {
  const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}

