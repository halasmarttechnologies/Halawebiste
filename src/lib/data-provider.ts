import { BlogPost } from './blogs';
import {
  isMongoConfigured,
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
  if (isMongoConfigured()) {
    try {
      const blogs = await getBlogsFromMongo();
      return { blogs, source: 'mongodb' };
    } catch (err) {
      console.error('[DataProvider] MongoDB Atlas read error:', err);
      return { blogs: [], source: 'mongodb' };
    }
  }
  
  throw new Error('CRITICAL: MONGODB_URI is not set. Local fallback has been disabled to prevent ghost data.');
}

// ---------------------------------------------------------------------------
// Unified Single Blog Reader
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

  throw new Error('CRITICAL: MONGODB_URI is not set. Local fallback has been disabled.');
}

// ---------------------------------------------------------------------------
// Unified Blog Creator
// ---------------------------------------------------------------------------
export async function createBlogData(newBlog: BlogPost): Promise<BlogPost> {
  if (isMongoConfigured()) {
    return await createBlogInMongo(newBlog);
  }
  
  throw new Error('CRITICAL: MONGODB_URI is not set. Local fallback has been disabled.');
}

// ---------------------------------------------------------------------------
// Unified Blog Updater
// ---------------------------------------------------------------------------
export async function updateBlogData(identifier: string, updatedFields: Partial<BlogPost>): Promise<BlogPost | null> {
  if (isMongoConfigured()) {
    return await updateBlogInMongo(identifier, updatedFields);
  }

  throw new Error('CRITICAL: MONGODB_URI is not set. Local fallback has been disabled.');
}

// ---------------------------------------------------------------------------
// Unified Blog Deleter
// ---------------------------------------------------------------------------
export async function deleteBlogData(identifier: string): Promise<boolean> {
  if (isMongoConfigured()) {
    return await deleteBlogFromMongo(identifier);
  }

  throw new Error('CRITICAL: MONGODB_URI is not set. Local fallback has been disabled.');
}
