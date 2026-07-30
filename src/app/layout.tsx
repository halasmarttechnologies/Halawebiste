import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, EB_Garamond } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta',
  display: 'swap',
});

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-eb-garamond',
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
    <html lang="en" className={`${plusJakarta.variable} ${ebGaramond.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.google.com" />
        <link rel="preconnect" href="https://www.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png?v=3" />
        <link rel="icon" type="image/png" sizes="512x512" href="/icon.png?v=3" />
        <link rel="shortcut icon" href="/icon.png?v=3" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon.png?v=3" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
