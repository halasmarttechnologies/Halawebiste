import crypto from 'crypto';

export interface UserAccount {
  id: string;
  email: string;
  name: string;
  role: 'SEO Specialist' | 'Google Ads Manager' | 'Admin';
  passwordHash?: string;
  salt?: string;
  plainPassword?: string;
}

export const AUTH_COOKIE_NAME = 'hala_admin_session';
const JWT_SECRET = process.env.JWT_SECRET || process.env.SESSION_SECRET || 'hala_secure_production_secret_key_2026';

// Rate Limiting Storage for Brute-Force Prevention
interface RateLimitRecord {
  attempts: number;
  lockoutUntil: number;
}
const loginAttempts = new Map<string, RateLimitRecord>();

// ---------------------------------------------------------------------------
// Cryptographic Password Hashing & Verification (PBKDF2 + timingSafeEqual)
// ---------------------------------------------------------------------------
export function hashPassword(password: string, salt: string): string {
  return crypto.pbkdf2Sync(password, salt, 100000, 64, 'sha512').toString('hex');
}

export function generateSalt(): string {
  return crypto.randomBytes(16).toString('hex');
}

export function verifyPassword(inputPass: string, storedHash: string, salt: string): boolean {
  if (!inputPass || !storedHash || !salt) return false;
  const computedHash = hashPassword(inputPass, salt);
  const bufA = Buffer.from(computedHash, 'hex');
  const bufB = Buffer.from(storedHash, 'hex');
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

// ---------------------------------------------------------------------------
// Load User Accounts dynamically from Environment Variables ONLY
// ---------------------------------------------------------------------------
export function getUsersFromEnv(): UserAccount[] {
  const users: UserAccount[] = [];

  if (process.env.ADMIN_USER_EMAIL) {
    users.push({
      id: 'user-admin',
      email: process.env.ADMIN_USER_EMAIL,
      name: 'Master Admin',
      role: 'Admin',
      passwordHash: process.env.ADMIN_USER_PASSWORD_HASH,
      salt: process.env.ADMIN_USER_SALT,
      plainPassword: process.env.ADMIN_USER_PASSWORD,
    });
  }

  if (process.env.SEO_USER_EMAIL) {
    users.push({
      id: 'user-seo',
      email: process.env.SEO_USER_EMAIL,
      name: 'SEO Specialist',
      role: 'SEO Specialist',
      passwordHash: process.env.SEO_USER_PASSWORD_HASH,
      salt: process.env.SEO_USER_SALT,
      plainPassword: process.env.SEO_USER_PASSWORD,
    });
  }

  if (process.env.ADS_USER_EMAIL) {
    users.push({
      id: 'user-ads',
      email: process.env.ADS_USER_EMAIL,
      name: 'Google Ads Lead',
      role: 'Google Ads Manager',
      passwordHash: process.env.ADS_USER_PASSWORD_HASH,
      salt: process.env.ADS_USER_SALT,
      plainPassword: process.env.ADS_USER_PASSWORD,
    });
  }

  return users;
}

// ---------------------------------------------------------------------------
// Rate Limiting & Account Lockout
// ---------------------------------------------------------------------------
export function checkRateLimit(key: string): { allowed: boolean; retryAfterSeconds?: number } {
  const record = loginAttempts.get(key);
  if (!record) return { allowed: true };

  if (Date.now() < record.lockoutUntil) {
    const retryAfter = Math.ceil((record.lockoutUntil - Date.now()) / 1000);
    return { allowed: false, retryAfterSeconds: retryAfter };
  }

  if (Date.now() >= record.lockoutUntil && record.attempts >= 5) {
    loginAttempts.delete(key);
  }

  return { allowed: true };
}

export function recordFailedLogin(key: string): { isLocked: boolean; attemptsLeft: number } {
  const record = loginAttempts.get(key) || { attempts: 0, lockoutUntil: 0 };
  record.attempts += 1;

  if (record.attempts >= 5) {
    record.lockoutUntil = Date.now() + 15 * 60 * 1000; // 15-minute lockout
    loginAttempts.set(key, record);
    return { isLocked: true, attemptsLeft: 0 };
  }

  loginAttempts.set(key, record);
  return { isLocked: false, attemptsLeft: 5 - record.attempts };
}

export function recordSuccessfulLogin(key: string): void {
  loginAttempts.delete(key);
}

// ---------------------------------------------------------------------------
// Verify Credentials against Environment Variables
// ---------------------------------------------------------------------------
export function verifyCredentials(email: string, pass: string): UserAccount | null {
  const users = getUsersFromEnv();
  const normalizedEmail = email.toLowerCase().trim();
  const user = users.find((u) => u.email.toLowerCase().trim() === normalizedEmail);

  if (!user) return null;

  // 1. Verify against PBKDF2 salt + hash if available
  if (user.passwordHash && user.salt) {
    if (verifyPassword(pass, user.passwordHash, user.salt)) {
      return user;
    }
  }

  // 2. Verify against env password string if hash is not set
  if (user.plainPassword) {
    const passBuf = Buffer.from(pass);
    const envPassBuf = Buffer.from(user.plainPassword);
    if (passBuf.length === envPassBuf.length && crypto.timingSafeEqual(passBuf, envPassBuf)) {
      return user;
    }
  }

  return null;
}

// ---------------------------------------------------------------------------
// Cryptographic HMAC Signed Session Tokens
// ---------------------------------------------------------------------------
export function createSessionToken(user: UserAccount): string {
  const expiresAt = Date.now() + 7 * 24 * 60 * 60 * 1000; // 7 days
  const payload = JSON.stringify({
    id: user.id,
    email: user.email,
    role: user.role,
    name: user.name,
    exp: expiresAt,
  });

  const encodedPayload = Buffer.from(payload).toString('base64url');
  const signature = crypto
    .createHmac('sha256', JWT_SECRET)
    .update(encodedPayload)
    .digest('base64url');

  return `${encodedPayload}.${signature}`;
}

export function parseSessionToken(token: string): { id: string; email: string; role: string; name: string } | null {
  try {
    if (!token || !token.includes('.')) return null;
    const [encodedPayload, signature] = token.split('.');

    const expectedSignature = crypto
      .createHmac('sha256', JWT_SECRET)
      .update(encodedPayload)
      .digest('base64url');

    const sigBuf = Buffer.from(signature);
    const expSigBuf = Buffer.from(expectedSignature);

    if (sigBuf.length !== expSigBuf.length || !crypto.timingSafeEqual(sigBuf, expSigBuf)) {
      console.warn('[Security] Session token signature verification failed.');
      return null;
    }

    const payloadStr = Buffer.from(encodedPayload, 'base64url').toString('utf-8');
    const data = JSON.parse(payloadStr);

    if (data.exp && Date.now() > data.exp) {
      console.warn('[Security] Session token expired.');
      return null;
    }

    return { id: data.id, email: data.email, role: data.role, name: data.name };
  } catch (err) {
    return null;
  }
}
