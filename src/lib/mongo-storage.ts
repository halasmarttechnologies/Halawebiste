import { getDatabase, isMongoConfigured } from './db';
import { BlogPost, getAllBlogsSync } from './blogs';

export { isMongoConfigured };

const COLLECTION_NAME = 'blogs';

// Seed initial blogs into MongoDB if collection is empty
export async function seedInitialBlogsIfEmpty(): Promise<void> {
  const db = await getDatabase();
  if (!db) return;

  const collection = db.collection<BlogPost>(COLLECTION_NAME);
  const count = await collection.countDocuments();

  if (count === 0) {
    const initialBlogs = getAllBlogsSync();
    if (initialBlogs.length > 0) {
      await collection.insertMany(initialBlogs);
      console.log(`[MongoDB] Seeded ${initialBlogs.length} initial blogs into database.`);
    }
  }
}

// ---------------------------------------------------------------------------
// READ ALL BLOGS
// ---------------------------------------------------------------------------
export async function getBlogsFromMongo(): Promise<BlogPost[]> {
  const db = await getDatabase();
  if (!db) {
    throw new Error('MongoDB database not connected. Please set MONGODB_URI.');
  }

  await seedInitialBlogsIfEmpty();

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
    throw new Error('MongoDB database not connected.');
  }

  const collection = db.collection<BlogPost>(COLLECTION_NAME);
  const result = await collection.deleteOne({
    $or: [{ id: identifier }, { slug: identifier }],
  });

  return result.deletedCount > 0;
}
