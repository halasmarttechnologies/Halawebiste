/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV !== 'production';

// Content Security Policy — locks down what scripts/styles/fonts can load
// In development: uses 'unsafe-eval' (required by Next.js HMR) and is set as
// Content-Security-Policy-Report-Only so it never blocks dev workflow.
// In production: strict CSP is enforced with no unsafe-eval.
const CSP = [
  "default-src 'self'",
  // Scripts: self + inline (GTM/reCAPTCHA inject inline scripts) + Google services + LeadConnector / GoHighLevel
  `script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval'" : ''} https://www.google.com https://www.gstatic.com https://www.googletagmanager.com https://widgets.leadconnectorhq.com https://*.leadconnectorhq.com https://*.msgsndr.com`,
  // Styles: self + Google Fonts (inline styles needed for styled-jsx / framer-motion) + LeadConnector / GoHighLevel
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://widgets.leadconnectorhq.com https://*.leadconnectorhq.com https://*.msgsndr.com",
  // Fonts: self + Google Fonts CDN + LeadConnector / GoHighLevel
  "font-src 'self' data: https://fonts.gstatic.com https://widgets.leadconnectorhq.com https://*.leadconnectorhq.com https://*.msgsndr.com",
  // Images: self + Sanity CDN + Unsplash + Pravatar + data/blob URIs + LeadConnector / GoHighLevel
  "img-src 'self' data: blob: https://images.unsplash.com https://i.pravatar.cc https://ui-avatars.com https://*.unsplash.com https://cdn.sanity.io https://www.googletagmanager.com https://widgets.leadconnectorhq.com https://*.leadconnectorhq.com https://*.msgsndr.com",
  // Frames: Google reCAPTCHA + LeadConnector / GoHighLevel
  "frame-src 'self' https://www.google.com https://recaptcha.google.com https://widgets.leadconnectorhq.com https://*.leadconnectorhq.com https://*.msgsndr.com",
  // Connections: self + Google services + Sanity API & WebSockets + GTM + LeadConnector / GoHighLevel
  `connect-src 'self' https://www.google.com https://www.googleapis.com https://*.sanity.io wss://*.sanity.io https://www.googletagmanager.com https://analytics.google.com https://widgets.leadconnectorhq.com https://*.leadconnectorhq.com https://services.leadconnectorhq.com wss://*.leadconnectorhq.com https://*.msgsndr.com wss://*.msgsndr.com${isDev ? ' https://registry.npmjs.org' : ''}`,
  // Block object/embed/base hijacking
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
          // In dev: report-only so CSP issues surface in the console without blocking.
          // In prod: fully enforced.
          isDev
            ? { key: 'Content-Security-Policy-Report-Only', value: CSP }
            : { key: 'Content-Security-Policy', value: CSP },
          // HSTS: tell browsers to always use HTTPS (includeSubDomains + preload for HSTS preload list)
          { key: 'Strict-Transport-Security',        value: 'max-age=63072000; includeSubDomains; preload' },
          // Prevent clickjacking
          { key: 'X-Frame-Options',                  value: 'DENY' },
          // Prevent MIME-type sniffing
          { key: 'X-Content-Type-Options',            value: 'nosniff' },
          // Control referrer information
          { key: 'Referrer-Policy',                   value: 'strict-origin-when-cross-origin' },
          // Restrict browser feature access
          { key: 'Permissions-Policy',                value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), serial=()' },
          // DNS prefetching
          { key: 'X-DNS-Prefetch-Control',            value: 'on' },
          // Disable legacy XSS auditor (modern browsers ignore it; CSP is the right tool)
          { key: 'X-XSS-Protection',                  value: '0' },
          // Isolate browsing context from other origins (protects against Spectre)
          { key: 'Cross-Origin-Opener-Policy',        value: 'same-origin-allow-popups' },
          // Prevent cross-origin resource embedding
          { key: 'Cross-Origin-Resource-Policy',      value: 'same-site' },
          // Opt out of FLoC / Topics API tracking
          { key: 'Permissions-Policy',                value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), serial=(), interest-cohort=()' },
        ],
      },
      {
        // API routes: no caching, no indexing
        source: '/api/:path*',
        headers: [
          { key: 'X-Robots-Tag',   value: 'noindex, nofollow' },
          { key: 'Cache-Control',  value: 'no-store, no-cache, must-revalidate, private' },
          { key: 'Pragma',         value: 'no-cache' },
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

