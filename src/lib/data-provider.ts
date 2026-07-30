import { BlogPost, getAllBlogsSync, saveBlogsSync } from './blogs';
import { isMongoConfigured, getBlogsFromMongo, createBlogInMongo, updateBlogInMongo, deleteBlogFromMongo, getBlogFromMongoByIdOrSlug } from './mongo-storage';
import { isGitHubConfigured, readBlogsFromGitHub, writeBlogsToGitHub } from './github-storage';

// ---------------------------------------------------------------------------
// Unified Blog Reader
// ---------------------------------------------------------------------------
export async function getAllBlogsData(): Promise<{ blogs: BlogPost[]; source: 'mongodb' | 'github' | 'local' }> {
  // 1. Primary: MongoDB (if MONGODB_URI is provided)
  if (isMongoConfigured()) {
    try {
      const blogs = await getBlogsFromMongo();
      return { blogs, source: 'mongodb' };
    } catch (err) {
      console.error('[DataProvider] MongoDB read failed, attempting GitHub/Local fallback:', err);
    }
  }

  // 2. Secondary: GitHub API
  if (isGitHubConfigured()) {
    try {
      const { blogs } = await readBlogsFromGitHub();
      return { blogs, source: 'github' };
    } catch (err) {
      console.error('[DataProvider] GitHub read failed, falling back to local:', err);
    }
  }

  // 3. Fallback: Local JSON
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
  // 1. MongoDB
  if (isMongoConfigured()) {
    return await createBlogInMongo(newBlog);
  }

  // 2. GitHub
  if (isGitHubConfigured()) {
    const { blogs, sha } = await readBlogsFromGitHub();
    const updated = [...blogs, newBlog];
    await writeBlogsToGitHub(updated, sha);
    return newBlog;
  }

  // 3. Local
  const blogs = getAllBlogsSync();
  saveBlogsSync([...blogs, newBlog]);
  return newBlog;
}

// ---------------------------------------------------------------------------
// Unified Blog Updater
// ---------------------------------------------------------------------------
export async function updateBlogData(identifier: string, updatedFields: Partial<BlogPost>): Promise<BlogPost | null> {
  // 1. MongoDB
  if (isMongoConfigured()) {
    return await updateBlogInMongo(identifier, updatedFields);
  }

  // 2. GitHub
  if (isGitHubConfigured()) {
    const { blogs, sha } = await readBlogsFromGitHub();
    const idx = blogs.findIndex((b) => b.id === identifier || b.slug === identifier);
    if (idx === -1) return null;

    const updatedBlog = { ...blogs[idx], ...updatedFields, updatedAt: new Date().toISOString() };
    blogs[idx] = updatedBlog;
    await writeBlogsToGitHub(blogs, sha);
    return updatedBlog;
  }

  // 3. Local
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
  // 1. MongoDB
  if (isMongoConfigured()) {
    return await deleteBlogFromMongo(identifier);
  }

  // 2. GitHub
  if (isGitHubConfigured()) {
    const { blogs, sha } = await readBlogsFromGitHub();
    const filtered = blogs.filter((b) => b.id !== identifier && b.slug !== identifier);
    if (filtered.length === blogs.length) return false;

    await writeBlogsToGitHub(filtered, sha);
    return true;
  }

  // 3. Local
  const blogs = getAllBlogsSync();
  const filtered = blogs.filter((b) => b.id !== identifier && b.slug !== identifier);
  if (filtered.length === blogs.length) return false;

  saveBlogsSync(filtered);
  return true;
}
