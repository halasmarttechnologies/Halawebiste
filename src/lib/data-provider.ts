import { BlogPost, getAllBlogsSync, saveBlogsSync } from './blogs';
import { isMongoConfigured, getBlogsFromMongo, createBlogInMongo, updateBlogInMongo, deleteBlogFromMongo, getBlogFromMongoByIdOrSlug } from './mongo-storage';

// ---------------------------------------------------------------------------
// Unified Blog Reader (MongoDB primary, local file fallback)
// ---------------------------------------------------------------------------
export async function getAllBlogsData(): Promise<{ blogs: BlogPost[]; source: 'mongodb' | 'local' }> {
  if (isMongoConfigured()) {
    try {
      const blogs = await getBlogsFromMongo();
      return { blogs, source: 'mongodb' };
    } catch (err) {
      console.error('[DataProvider] MongoDB read error, falling back to local:', err);
    }
  }

  // Local development fallback
  return { blogs: getAllBlogsSync(), source: 'local' };
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
    }
  }

  const { blogs } = await getAllBlogsData();
  return blogs.find((b) => b.id === identifier || b.slug === identifier) || null;
}

// ---------------------------------------------------------------------------
// Unified Blog Creator
// ---------------------------------------------------------------------------
export async function createBlogData(newBlog: BlogPost): Promise<BlogPost> {
  if (isMongoConfigured()) {
    return await createBlogInMongo(newBlog);
  }

  // Local development
  const blogs = getAllBlogsSync();
  saveBlogsSync([...blogs, newBlog]);
  return newBlog;
}

// ---------------------------------------------------------------------------
// Unified Blog Updater
// ---------------------------------------------------------------------------
export async function updateBlogData(identifier: string, updatedFields: Partial<BlogPost>): Promise<BlogPost | null> {
  if (isMongoConfigured()) {
    return await updateBlogInMongo(identifier, updatedFields);
  }

  // Local development
  const blogs = getAllBlogsSync();
  const idx = blogs.findIndex((b) => b.id === identifier || b.slug === identifier);
  if (idx === -1) return null;

  const updatedBlog = { ...blogs[idx], ...updatedFields, updatedAt: new Date().toISOString() };
  blogs[idx] = updatedBlog;
  saveBlogsSync(blogs);
  return updatedBlog;
}

// ---------------------------------------------------------------------------
// Unified Blog Deleter
// ---------------------------------------------------------------------------
export async function deleteBlogData(identifier: string): Promise<boolean> {
  if (isMongoConfigured()) {
    return await deleteBlogFromMongo(identifier);
  }

  // Local development
  const blogs = getAllBlogsSync();
  const filtered = blogs.filter((b) => b.id !== identifier && b.slug !== identifier);
  if (filtered.length === blogs.length) return false;

  saveBlogsSync(filtered);
  return true;
}
