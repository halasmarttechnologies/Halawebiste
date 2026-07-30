import fs from 'fs';
import path from 'path';

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

const BLOGS_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'blogs.json');

// Global in-memory cache for Vercel Serverless environment
let inMemoryBlogs: BlogPost[] | null = null;

export function getAllBlogsSync(): BlogPost[] {
  if (inMemoryBlogs && inMemoryBlogs.length > 0) {
    return inMemoryBlogs.sort((a, b) => a.priority - b.priority);
  }

  try {
    if (fs.existsSync(BLOGS_FILE_PATH)) {
      const data = fs.readFileSync(BLOGS_FILE_PATH, 'utf-8');
      inMemoryBlogs = JSON.parse(data);
      return (inMemoryBlogs || []).sort((a, b) => a.priority - b.priority);
    }
  } catch (error) {
    console.error('Error reading blogs.json:', error);
  }

  return inMemoryBlogs || [];
}

export function saveBlogsSync(blogs: BlogPost[]): boolean {
  const sorted = blogs.sort((a, b) => a.priority - b.priority);
  inMemoryBlogs = sorted;

  try {
    fs.writeFileSync(BLOGS_FILE_PATH, JSON.stringify(sorted, null, 2), 'utf-8');
    return true;
  } catch (error) {
    // Fail gracefully on read-only serverless disk (e.g. Vercel)
    console.log('In-memory cache updated (read-only filesystem environment)');
    return true;
  }
}

export function getPublishedBlogs(): BlogPost[] {
  const blogs = getAllBlogsSync();
  return blogs.filter((b) => b.status === 'published');
}

export function getHomepageBlogs(): BlogPost[] {
  const blogs = getPublishedBlogs();
  return blogs
    .filter((b) => b.showOnHomepage)
    .sort((a, b) => (a.homepagePriority || a.priority) - (b.homepagePriority || b.priority));
}

export function getBlogsByTargetPage(pageKey: string): BlogPost[] {
  const blogs = getPublishedBlogs();
  if (pageKey === 'all') return blogs;
  return blogs.filter((b) => b.targetPage === pageKey || b.targetPage === 'all' || !b.targetPage);
}

export function getBlogBySlugOrId(identifier: string): BlogPost | null {
  const blogs = getAllBlogsSync();
  return blogs.find((b) => b.slug === identifier || b.id === identifier) || null;
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
