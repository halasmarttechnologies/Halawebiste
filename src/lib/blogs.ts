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
  seo?: SEOData;
  adsData?: AdsData;
  createdAt: string;
  updatedAt: string;
}

const BLOGS_FILE_PATH = path.join(process.cwd(), 'src', 'data', 'blogs.json');

// Helper to read blogs from JSON file
export function getAllBlogsSync(): BlogPost[] {
  try {
    if (!fs.existsSync(BLOGS_FILE_PATH)) {
      return [];
    }
    const data = fs.readFileSync(BLOGS_FILE_PATH, 'utf-8');
    const blogs: BlogPost[] = JSON.parse(data);
    return blogs.sort((a, b) => a.priority - b.priority);
  } catch (error) {
    console.error('Error reading blogs.json:', error);
    return [];
  }
}

// Helper to write blogs to JSON file
export function saveBlogsSync(blogs: BlogPost[]): boolean {
  try {
    const sorted = blogs.sort((a, b) => a.priority - b.priority);
    fs.writeFileSync(BLOGS_FILE_PATH, JSON.stringify(sorted, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error('Error writing blogs.json:', error);
    return false;
  }
}

// Helper to get published blogs sorted by priority
export function getPublishedBlogs(): BlogPost[] {
  const blogs = getAllBlogsSync();
  return blogs.filter((b) => b.status === 'published');
}

// Helper to get homepage blogs sorted by homepagePriority
export function getHomepageBlogs(): BlogPost[] {
  const blogs = getPublishedBlogs();
  return blogs
    .filter((b) => b.showOnHomepage)
    .sort((a, b) => (a.homepagePriority || a.priority) - (b.homepagePriority || b.priority));
}

// Get single blog by slug or ID
export function getBlogBySlugOrId(identifier: string): BlogPost | null {
  const blogs = getAllBlogsSync();
  return (
    blogs.find((b) => b.slug === identifier || b.id === identifier) || null
  );
}

// Generate URL slug from title
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Calculate read time from content string
export function calculateReadTime(content: string): string {
  const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
  const minutes = Math.ceil(words / 200);
  return `${minutes} min read`;
}
