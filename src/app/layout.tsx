import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import Script from 'next/script';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const BASE_URL = 'https://halatechnologies.com';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Hala Technologies – Scale Your Brand, Dominate the Market',
    template: '%s | Hala Technologies',
  },
  description:
    'Digital marketing that delivers. Real clicks. Real customers. Grow your brand. Dominate the market.',
  keywords: ['digital marketing', 'SEO', 'web development', 'branding', 'Dubai', 'UAE'],
  authors: [{ name: 'Hala Technologies' }],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: BASE_URL,
    siteName: 'Hala Technologies',
    title: 'Hala Technologies – Scale Your Brand, Dominate the Market',
    description:
      'Digital marketing that delivers. Real clicks. Real customers. Grow your brand. Dominate the market.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Hala Technologies - Grow your brand. Dominate the market.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hala Technologies – Scale Your Brand, Dominate the Market',
    description:
      'Digital marketing that delivers. Real clicks. Real customers. Grow your brand. Dominate the market.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/icon.png', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png' },
    ],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://www.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
