import { BlogPost, getAllBlogsSync } from './blogs';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GITHUB_OWNER = 'halasmarttechnologies';
const GITHUB_REPO = 'Halawebiste';
const GITHUB_FILE_PATH = 'src/data/blogs.json';
const GITHUB_BRANCH = 'main';

interface GitHubFileResponse {
  content: string;
  sha: string;
  encoding: string;
}

// ---------------------------------------------------------------------------
// Read blogs.json from GitHub (source of truth in production)
// ---------------------------------------------------------------------------
export async function readBlogsFromGitHub(): Promise<{ blogs: BlogPost[]; sha: string }> {
  if (!GITHUB_TOKEN) {
    throw new Error('GITHUB_TOKEN environment variable is not set in Vercel settings');
  }

  const apiUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${GITHUB_FILE_PATH}?ref=${GITHUB_BRANCH}`;

  const res = await fetch(apiUrl, {
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: 'application/vnd.github.v3+json',
      'User-Agent': 'HalaCMS/1.0',
    },
    // Always fetch fresh — never use cached
    cache: 'no-store',
  });

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GitHub API read failed (${res.status}): ${body}`);
  }

  const file: GitHubFileResponse = await res.json();

  // GitHub returns base64-encoded content
  const decoded = Buffer.from(file.content, 'base64').toString('utf-8');
  const blogs: BlogPost[] = JSON.parse(decoded);

  return { blogs, sha: file.sha };
}

// ---------------------------------------------------------------------------
// Write updated blogs.json back to GitHub (auto-commits, triggers redeploy)
// ---------------------------------------------------------------------------
export async function writeBlogsToGitHub(blogs: BlogPost[], sha?: string | null): Promise<boolean> {
  if (!GITHUB_TOKEN) {
    throw new Error('GITHUB_TOKEN environment variable is not set in Vercel settings');
  }

  // If SHA is missing, fetch the current SHA from GitHub automatically
  let targetSha = sha;
  if (!targetSha) {
    try {
      const currentFile = await readBlogsFromGitHub();
      targetSha = currentFile.sha;
    } catch (err) {
      throw new Error(`Could not retrieve latest GitHub file SHA: ${(err as Error).message}`);
    }
  }

  const sorted = [...blogs].sort((a, b) => a.priority - b.priority);
  const content = JSON.stringify(sorted, null, 2);

  // GitHub requires base64 encoded content
  const encodedContent = Buffer.from(content, 'utf-8').toString('base64');

  const apiUrl = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${GITHUB_FILE_PATH}`;

  const res = await fetch(apiUrl, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: 'application/vnd.github.v3+json',
      'Content-Type': 'application/json',
      'User-Agent': 'HalaCMS/1.0',
    },
    body: JSON.stringify({
      message: `[CMS] Update blogs.json — ${new Date().toISOString()}`,
      content: encodedContent,
      sha: targetSha,
      branch: GITHUB_BRANCH,
    }),
  });

  // If status is 409 or 422 (SHA mismatch conflict), retry once with freshly fetched SHA
  if (!res.ok && (res.status === 409 || res.status === 422)) {
    console.log('[github-storage] SHA mismatch detected. Refetching latest SHA and retrying...');
    const freshFile = await readBlogsFromGitHub();
    const retryRes = await fetch(apiUrl, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
        'User-Agent': 'HalaCMS/1.0',
      },
      body: JSON.stringify({
        message: `[CMS] Update blogs.json — ${new Date().toISOString()}`,
        content: encodedContent,
        sha: freshFile.sha,
        branch: GITHUB_BRANCH,
      }),
    });

    if (!retryRes.ok) {
      const retryBody = await retryRes.text();
      throw new Error(`GitHub API write retry failed (${retryRes.status}): ${retryBody}`);
    }

    return true;
  }

  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GitHub API write failed (${res.status}): ${body}`);
  }

  return true;
}

// ---------------------------------------------------------------------------
// Check if GitHub token is configured (for health checks)
// ---------------------------------------------------------------------------
export function isGitHubConfigured(): boolean {
  return Boolean(GITHUB_TOKEN);
}

// ---------------------------------------------------------------------------
// Helper: Get all blogs asynchronously (GitHub primary, local fallback)
// ---------------------------------------------------------------------------
export async function getLiveBlogsAsync(): Promise<BlogPost[]> {
  if (isGitHubConfigured()) {
    try {
      const { blogs } = await readBlogsFromGitHub();
      return blogs;
    } catch (err) {
      console.error('[github-storage] GitHub read error:', err);
    }
  }
  return getAllBlogsSync();
}

// ---------------------------------------------------------------------------
// Helper: Get a single blog by slug or ID
// ---------------------------------------------------------------------------
export async function getLiveBlogBySlugOrIdAsync(identifier: string): Promise<BlogPost | null> {
  const blogs = await getLiveBlogsAsync();
  return blogs.find((b) => b.slug === identifier || b.id === identifier) || null;
}
