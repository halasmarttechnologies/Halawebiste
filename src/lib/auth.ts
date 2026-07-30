import { cookies } from 'next/headers';

export interface UserAccount {
  id: string;
  email: string;
  name: string;
  role: 'SEO Specialist' | 'Google Ads Manager' | 'Admin';
  password: string; // Plain password check for local env
}

// Configured Team Credentials (Can be overridden via .env.local)
export const TEAM_USERS: UserAccount[] = [
  {
    id: 'user-seo',
    email: process.env.SEO_USER_EMAIL || 'seo@halatechnologies.com',
    name: 'SEO Specialist',
    role: 'SEO Specialist',
    password: process.env.SEO_USER_PASSWORD || 'SEOpass2026!',
  },
  {
    id: 'user-ads',
    email: process.env.ADS_USER_EMAIL || 'ads@halatechnologies.com',
    name: 'Google Ads Lead',
    role: 'Google Ads Manager',
    password: process.env.ADS_USER_PASSWORD || 'AdsPass2026!',
  },
  {
    id: 'user-admin',
    email: process.env.ADMIN_USER_EMAIL || 'admin@halatechnologies.com',
    name: 'Master Admin',
    role: 'Admin',
    password: process.env.ADMIN_USER_PASSWORD || 'HalaAdmin2026!',
  },
];

export const AUTH_COOKIE_NAME = 'hala_admin_session';

export function verifyCredentials(email: string, pass: string): UserAccount | null {
  const user = TEAM_USERS.find(
    (u) => u.email.toLowerCase().trim() === email.toLowerCase().trim() && u.password === pass
  );
  return user || null;
}

export function createSessionToken(user: UserAccount): string {
  // Safe base64 token format: id:email:role:timestamp
  const payload = `${user.id}:${user.email}:${user.role}:${Date.now()}`;
  return Buffer.from(payload).toString('base64');
}

export function parseSessionToken(token: string): { id: string; email: string; role: string } | null {
  try {
    const decoded = Buffer.from(token, 'base64').toString('utf-8');
    const parts = decoded.split(':');
    if (parts.length >= 3) {
      return { id: parts[0], email: parts[1], role: parts[2] };
    }
    return null;
  } catch (err) {
    return null;
  }
}
