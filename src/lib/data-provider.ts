import { BlogPost } from './blogs';
import {
  isMongoConfigured,
  getBlogsFromMongo,
  createBlogInMongo,
  updateBlogInMongo,
  deleteBlogFromMongo,
  getBlogFromMongoByIdOrSlug,
} from './mongo-storage';

// In-memory fallback array for local dev if MONGODB_URI is not set
let localInMemoryBlogs: BlogPost[] = [];

// ---------------------------------------------------------------------------
// Unified Blog Reader (MongoDB Atlas Single Source of Truth)
// ---------------------------------------------------------------------------
export async function getAllBlogsData(): Promise<{ blogs: BlogPost[]; source: 'mongodb' | 'local' }> {
  if (isMongoConfigured()) {
    try {
      const blogs = await getBlogsFromMongo();
      return { blogs, source: 'mongodb' };
    } catch (err) {
      console.error('[DataProvider] MongoDB Atlas read error:', err);
      return { blogs: [], source: 'mongodb' };
    }
  }

  return { blogs: localInMemoryBlogs.sort((a, b) => a.priority - b.priority), source: 'local' };
}

// ---------------------------------------------------------------------------
// Unified Blog by Slug / ID Reader
// ---------------------------------------------------------------------------
export async function getSingleBlogData(identifier: string): Promise<BlogPost | null> {
  if (isMongoConfigured()) {
    try {
      return await getBlogFromMongoByIdOrSlug(identifier);
    } catch (err) {
      console.error('[DataProvider] MongoDB single read error:', err);
      return null;
    }
  }

  return localInMemoryBlogs.find((b) => b.id === identifier || b.slug === identifier) || null;
}

// ---------------------------------------------------------------------------
// Unified Blog Creator
// ---------------------------------------------------------------------------
export async function createBlogData(newBlog: BlogPost): Promise<BlogPost> {
  if (isMongoConfigured()) {
    return await createBlogInMongo(newBlog);
  }

  localInMemoryBlogs.push(newBlog);
  return newBlog;
}

// ---------------------------------------------------------------------------
// Unified Blog Updater
// ---------------------------------------------------------------------------
export async function updateBlogData(identifier: string, updatedFields: Partial<BlogPost>): Promise<BlogPost | null> {
  if (isMongoConfigured()) {
    return await updateBlogInMongo(identifier, updatedFields);
  }

  const idx = localInMemoryBlogs.findIndex((b) => b.id === identifier || b.slug === identifier);
  if (idx === -1) return null;

  const updatedBlog = { ...localInMemoryBlogs[idx], ...updatedFields, updatedAt: new Date().toISOString() };
  localInMemoryBlogs[idx] = updatedBlog;
  return updatedBlog;
}

// ---------------------------------------------------------------------------
// Unified Blog Deleter
// ---------------------------------------------------------------------------
export async function deleteBlogData(identifier: string): Promise<boolean> {
  if (isMongoConfigured()) {
    return await deleteBlogFromMongo(identifier);
  }

  const initialLen = localInMemoryBlogs.length;
  localInMemoryBlogs = localInMemoryBlogs.filter((b) => b.id !== identifier && b.slug !== identifier);
  return localInMemoryBlogs.length < initialLen;
}
