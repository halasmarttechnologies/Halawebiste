/** @type {import('next').NextConfig} */

// Content Security Policy — locks down what scripts/styles/fonts can load
const CSP = [
  "default-src 'self'",
  // Scripts: self + Google reCAPTCHA
  "script-src 'self' 'unsafe-inline' https://www.google.com https://www.gstatic.com",
  // Styles: self + Google Fonts
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  // Fonts: self + Google Fonts CDN
  "font-src 'self' https://fonts.gstatic.com",
  // Images: self + Unsplash (remote images) + data URIs (inline images)
  "img-src 'self' data: https://images.unsplash.com",
  // Frames: Google reCAPTCHA only
  "frame-src https://www.google.com https://recaptcha.google.com",
  // Connections: self + Google reCAPTCHA verify endpoint
  "connect-src 'self' https://www.google.com",
  // Block everything else
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join('; ');

const nextConfig = {
  compress: true,
  poweredByHeader: false,
  // Disable source maps in production — prevents source code exposure
  productionBrowserSourceMaps: false,
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', '@gsap/react'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async headers() {
    return [
      {
        // Security headers on all routes
        source: '/(.*)',
        headers: [
          { key: 'Content-Security-Policy',    value: CSP },
          { key: 'X-Frame-Options',             value: 'DENY' },
          { key: 'X-Content-Type-Options',      value: 'nosniff' },
          { key: 'Referrer-Policy',             value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy',          value: 'camera=(), microphone=(), geolocation=(), payment=()' },
          { key: 'X-DNS-Prefetch-Control',      value: 'on' },
          { key: 'X-XSS-Protection',            value: '0' }, // Disable legacy XSS auditor (CSP is the correct mitigation)
        ],
      },
      {
        // Disallow crawlers on API routes
        source: '/api/(.*)',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
          { key: 'Cache-Control', value: 'no-store, no-cache, must-revalidate' },
        ],
      },
      {
        source: '/(.*)\\.(png|jpg|jpeg|webp|avif|svg|ico|woff|woff2)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;

