import { BlogPost } from './blogs';
import {
  getBlogsFromMongo,
  createBlogInMongo,
  updateBlogInMongo,
  deleteBlogFromMongo,
  getBlogFromMongoByIdOrSlug,
} from './mongo-storage';

// ---------------------------------------------------------------------------
// Unified Blog Reader (MongoDB Atlas Single Source of Truth)
// ---------------------------------------------------------------------------
export async function getAllBlogsData(): Promise<{ blogs: BlogPost[]; source: 'mongodb' }> {
  try {
    const blogs = await getBlogsFromMongo();
    return { blogs, source: 'mongodb' };
  } catch (err) {
    console.error('[DataProvider] MongoDB Atlas read error:', err);
    return { blogs: [], source: 'mongodb' };
  }
}

// ---------------------------------------------------------------------------
// Unified Blog by Slug / ID Reader
// ---------------------------------------------------------------------------
export async function getSingleBlogData(identifier: string): Promise<BlogPost | null> {
  try {
    return await getBlogFromMongoByIdOrSlug(identifier);
  } catch (err) {
    console.error('[DataProvider] MongoDB single read error:', err);
    return null;
  }
}

// ---------------------------------------------------------------------------
// Unified Blog Creator
// ---------------------------------------------------------------------------
export async function createBlogData(newBlog: BlogPost): Promise<BlogPost> {
  return await createBlogInMongo(newBlog);
}

// ---------------------------------------------------------------------------
// Unified Blog Updater
// ---------------------------------------------------------------------------
export async function updateBlogData(identifier: string, updatedFields: Partial<BlogPost>): Promise<BlogPost | null> {
  return await updateBlogInMongo(identifier, updatedFields);
}

// ---------------------------------------------------------------------------
// Unified Blog Deleter
// ---------------------------------------------------------------------------
export async function deleteBlogData(identifier: string): Promise<boolean> {
  return await deleteBlogFromMongo(identifier);
}
