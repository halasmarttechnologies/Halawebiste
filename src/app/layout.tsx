import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
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
    'Hala Technologies is a digital marketing agency that turns clicks into customers. SEO, PPC, Social Media, Content Marketing & Web Development.',
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
      'Hala Technologies is a digital marketing agency that turns clicks into customers. SEO, PPC, Social Media, Content Marketing & Web Development.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hala Technologies – Scale Your Brand, Dominate the Market',
    description:
      'Hala Technologies is a digital marketing agency that turns clicks into customers. SEO, PPC, Social Media, Content Marketing & Web Development.',
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
      <body>{children}</body>
    </html>
  );
}
