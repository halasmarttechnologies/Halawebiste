import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar/Navbar';
import SEOHero from '@/components/DigitalMarketing/SEO/SEOHero';
import SEOIntro from '@/components/DigitalMarketing/SEO/SEOIntro';
import SEOPerformanceShowcase from '@/components/DigitalMarketing/SEO/SEOPerformanceShowcase';
import SEOServices from '@/components/DigitalMarketing/SEO/SEOServices';
import SEOWhyChoose from '@/components/DigitalMarketing/SEO/SEOWhyChoose';
import Footer from '@/components/Home/Footer';

const CustomTestimonials = dynamic(() => import('@/components/Home/Testimonials'));
const SEOFAQ = dynamic(() => import('@/components/DigitalMarketing/SEO/SEOFAQ'));
const LatestBlogsSection = dynamic(() => import('@/components/Blogs/LatestBlogsSection'));
const OutroMessage = dynamic(() => import('@/components/About/OutroMessage'));
const ContactCTA = dynamic(() => import('@/components/Home/ContactCTA/ContactCTA'));

export const metadata: Metadata = {
  title: 'SEO Services in Dubai | Organic Search Engine Optimization | Hala Technologies',
  description:
    'Boost Google search rankings, traffic, and sales with professional SEO services in Dubai & UAE. On-page, off-page, and technical search engine optimization.',
  openGraph: {
    title: 'SEO Services in Dubai | Organic Search Engine Optimization | Hala Technologies',
    description:
      'Boost Google search rankings, traffic, and sales with professional SEO services in Dubai & UAE. On-page, off-page, and technical search engine optimization.',
    url: 'https://halatechnologies.com/seo',
    images: [
      {
        url: 'https://halatechnologies.com/hero-images/SEOPAGEIMAGE.png',
        width: 1200,
        height: 630,
        alt: 'SEO Services - Hala Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO Services in Dubai | Organic Search Engine Optimization | Hala Technologies',
    description:
      'Boost Google search rankings, traffic, and sales with professional SEO services in Dubai & UAE. On-page, off-page, and technical search engine optimization.',
    images: ['https://halatechnologies.com/hero-images/SEOPAGEIMAGE.png'],
  },
  alternates: {
    canonical: 'https://halatechnologies.com/seo',
  },
};

export default function SEOPage() {
  return (
    <div className="font-jakarta bg-white text-[#111] overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow w-full">
        <SEOHero />
        <SEOIntro />
        <SEOPerformanceShowcase />
        <SEOServices />
        <SEOWhyChoose />
        <CustomTestimonials />
        <SEOFAQ />
        <ContactCTA contained={true} />
        <LatestBlogsSection />
        <OutroMessage />
      </main>
      <div className="bg-white w-full relative z-20">
        <Footer />
      </div>
    </div>
  );
}
