import { NextRequest, NextResponse } from 'next/server';
import { AUTH_COOKIE_NAME, parseSessionToken } from '@/lib/auth';
import { getDatabase } from '@/lib/db';
import { BlogPost } from '@/lib/blogs';

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

export async function GET(request: NextRequest) {
  try {
    // 1. RBAC Authentication (Admin Only)
    const token = request.cookies.get(AUTH_COOKIE_NAME)?.value;
    const session = token ? parseSessionToken(token) : null;

    if (!session || session.role !== 'Admin') {
      return NextResponse.json(
        { success: false, error: 'Unauthorized: Only Admins can access the Database Audit Tool.' },
        { status: 401 }
      );
    }

    // 2. Fetch Database Info
    const db = await getDatabase();
    if (!db) {
      return NextResponse.json(
        { success: false, error: 'MongoDB connection failed or MONGODB_URI is missing.' },
        { status: 500 }
      );
    }

    const collectionName = 'blogs';
    const collection = db.collection<BlogPost>(collectionName);
    
    // 3. Count documents
    const totalBlogs = await collection.countDocuments();

    // 4. Parse URI safely
    const rawUri = process.env.MONGODB_URI || 'MISSING';
    let uriFingerprint = 'NO_URI';
    if (rawUri !== 'MISSING') {
      try {
        const url = new URL(rawUri);
        uriFingerprint = `${url.protocol}//***:***@${url.host}${url.pathname}`;
      } catch (e) {
        // Fallback if URL parsing fails
        uriFingerprint = rawUri.split('@')[1]?.split('/')[0] || 'Unknown Cluster';
      }
    }

    // 5. Construct Audit Response
    const auditData = {
      databaseName: db.databaseName,
      collectionName,
      totalBlogs,
      mongoUriFingerprint: uriFingerprint,
      environment: process.env.NODE_ENV,
      lastQueryTime: new Date().toISOString(),
      timestamp: Date.now(),
    };

    return NextResponse.json({ success: true, audit: auditData });
  } catch (error) {
    console.error('[GET /api/debug/database] Error:', error);
    return NextResponse.json(
      { success: false, error: (error as Error).message },
      { status: 500 }
    );
  }
}
