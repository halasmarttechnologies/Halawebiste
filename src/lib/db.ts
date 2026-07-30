import { MongoClient, Db } from 'mongodb';

const uri = process.env.MONGODB_URI;

if (!uri && process.env.NODE_ENV === 'production') {
  console.warn('[MongoDB] MONGODB_URI environment variable is missing.');
}

let client: MongoClient | null = null;
let clientPromise: Promise<MongoClient> | null = null;

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (uri) {
  const options = { serverSelectionTimeoutMS: 2500, connectTimeoutMS: 2500 };
  if (process.env.NODE_ENV === 'development') {
    // In development mode, use a global variable to preserve connection across module reloads
    if (!global._mongoClientPromise) {
      client = new MongoClient(uri, options);
      global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
  } else {
    // In production, instantiate a new client per serverless function instance
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
  }
}

export async function getDatabase(): Promise<Db | null> {
  if (!uri) {
    throw new Error('CRITICAL: MONGODB_URI environment variable is missing. The application requires MongoDB to function.');
  }
  if (!clientPromise) {
    throw new Error('CRITICAL: MongoDB client promise failed to initialize.');
  }
  const connectedClient = await clientPromise;
  return connectedClient.db('hala_cms_db');
}

export function isMongoConfigured(): boolean {
  return Boolean(uri);
}
