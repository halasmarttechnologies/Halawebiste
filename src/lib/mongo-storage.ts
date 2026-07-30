import { getDatabase, isMongoConfigured } from './db';
import { BlogPost } from './blogs';

export { isMongoConfigured };

const COLLECTION_NAME = 'blogs';

// ---------------------------------------------------------------------------
// READ ALL BLOGS DIRECTLY FROM MONGODB ATLAS
// ---------------------------------------------------------------------------
export async function getBlogsFromMongo(): Promise<BlogPost[]> {
  const db = await getDatabase();
  if (!db) {
    throw new Error('MongoDB database not connected. Please set MONGODB_URI.');
  }

  const collection = db.collection<BlogPost>(COLLECTION_NAME);
  const blogs = await collection.find({}).sort({ priority: 1 }).toArray();

  // Strip MongoDB _id to match BlogPost interface clean structure
  return blogs.map(({ _id, ...blog }: any) => blog as BlogPost);
}

// ---------------------------------------------------------------------------
// READ SINGLE BLOG BY SLUG OR ID
// ---------------------------------------------------------------------------
export async function getBlogFromMongoByIdOrSlug(identifier: string): Promise<BlogPost | null> {
  const db = await getDatabase();
  if (!db) {
    return null;
  }

  const collection = db.collection<BlogPost>(COLLECTION_NAME);
  const blog = await collection.findOne({
    $or: [{ id: identifier }, { slug: identifier }],
  });

  if (!blog) return null;

  const { _id, ...cleanBlog } = blog as any;
  return cleanBlog as BlogPost;
}

// ---------------------------------------------------------------------------
// CREATE A NEW BLOG
// ---------------------------------------------------------------------------
export async function createBlogInMongo(newBlog: BlogPost): Promise<BlogPost> {
  const db = await getDatabase();
  if (!db) {
    throw new Error('MongoDB database not connected.');
  }

  const collection = db.collection<BlogPost>(COLLECTION_NAME);
  await collection.insertOne(newBlog as any);
  return newBlog;
}

// ---------------------------------------------------------------------------
// UPDATE AN EXISTING BLOG
// ---------------------------------------------------------------------------
export async function updateBlogInMongo(identifier: string, updatedFields: Partial<BlogPost>): Promise<BlogPost | null> {
  const db = await getDatabase();
  if (!db) {
    throw new Error('MongoDB database not connected.');
  }

  const collection = db.collection<BlogPost>(COLLECTION_NAME);
  
  const existing = await collection.findOne({
    $or: [{ id: identifier }, { slug: identifier }],
  });

  if (!existing) {
    return null;
  }

  const updatedBlog = {
    ...existing,
    ...updatedFields,
    updatedAt: new Date().toISOString(),
  };

  // Do not store _id in the update set
  const { _id, ...updatePayload } = updatedBlog as any;

  await collection.updateOne(
    { _id: existing._id },
    { $set: updatePayload }
  );

  return updatePayload as BlogPost;
}

// ---------------------------------------------------------------------------
// DELETE A BLOG
// ---------------------------------------------------------------------------
export async function deleteBlogFromMongo(identifier: string): Promise<boolean> {
  const db = await getDatabase();
  if (!db) {
    throw new Error('MongoDB database not connected. Please check MONGODB_URI.');
  }

  const collection = db.collection<BlogPost>(COLLECTION_NAME);
  
  // 1. Delete Request
  const result = await collection.deleteOne({
    $or: [{ id: identifier }, { slug: identifier }],
  });

  if (result.deletedCount === 0) {
    return false; // Blog was not found to delete
  }

  // 2. Database Verification
  const verify = await collection.findOne({
    $or: [{ id: identifier }, { slug: identifier }],
  });

  // 3. Agar blog mil gaya = Delete Fail
  if (verify) {
    throw new Error(`CRITICAL ERROR: Delete verification failed. Blog ${identifier} is still present in database.`);
  }

  // 4. Agar blog nahi mila = Success
  return true;
}
