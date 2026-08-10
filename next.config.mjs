/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV !== 'production';

// Content Security Policy — locks down what scripts/styles/fonts can load
const CSP = [
  "default-src 'self'",
  // Scripts: self + Google reCAPTCHA + unsafe-eval for dev
  `script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval'" : ""} https://www.google.com https://www.gstatic.com`,
  // Styles: self + Google Fonts
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  // Fonts: self + Google Fonts CDN
  "font-src 'self' https://fonts.gstatic.com",
  // Images: self + Unsplash + Pravatar + UI-Avatars + data URIs (base64 uploaded images) + Sanity CDN
  "img-src 'self' data: blob: https://images.unsplash.com https://i.pravatar.cc https://ui-avatars.com https://*.unsplash.com https://cdn.sanity.io",
  // Frames: Google reCAPTCHA only
  "frame-src https://www.google.com https://recaptcha.google.com",
  // Connections: self + Google reCAPTCHA + Sanity API & WebSockets
  `connect-src 'self' https://www.google.com https://*.sanity.io wss://*.sanity.io${isDev ? ' https://registry.npmjs.org' : ''}`,
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
  // Disable source maps in production — prevents source code exposure & reduces bundle size
  productionBrowserSourceMaps: false,
  compiler: {
    // Remove console.log in production for maximum execution speed & clean bundle
    removeConsole: isDev ? false : { exclude: ['error', 'warn'] },
  },
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', '@gsap/react', 'gsap'],
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
      {
        protocol: 'https',
        hostname: 'i.pravatar.cc',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async headers() {
    return [
      {
        // Security headers on all application routes
        source: '/:path*',
        headers: [
          ...(isDev ? [] : [{ key: 'Content-Security-Policy', value: CSP }]),
          { key: 'Strict-Transport-Security',  value: 'max-age=31536000; includeSubDomains' },
          { key: 'X-Frame-Options',             value: 'DENY' },
          { key: 'X-Content-Type-Options',      value: 'nosniff' },
          { key: 'Referrer-Policy',             value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy',          value: 'camera=(), microphone=(), geolocation=(), payment=()' },
          { key: 'X-DNS-Prefetch-Control',      value: 'on' },
          { key: 'X-XSS-Protection',            value: '0' },
        ],
      },
      {
        // API routes cache settings
        source: '/api/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
          { key: 'Cache-Control', value: 'no-store, no-cache, must-revalidate' },
          { key: 'Pragma', value: 'no-cache' },
        ],
      },
      {
        // Immutable cache control for static assets & images
        source: '/:path*\\.(png|jpg|jpeg|webp|avif|svg|ico|woff|woff2)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ];
  },
};

export default nextConfig;
