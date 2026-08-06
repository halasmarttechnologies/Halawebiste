import { Metadata } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import Website from '@/components/WebsiteDevelopment/Website';
import WebDesignShowcase from '@/components/WebsiteDevelopment/WebDesignShowcase';
import TrustedSection from '@/components/WebsiteDevelopment/TrustedSection';
import WebsiteServices from '@/components/WebsiteDevelopment/WebsiteServices';
import FeaturedWork from '@/components/WebsiteDevelopment/FeaturedWork';
import WebDesignGrowth from '@/components/WebsiteDevelopment/WebDesignGrowth';
import ProcessSection from '@/components/WebsiteDevelopment/ProcessSection';
import Testimonials from '@/components/Home/Testimonials/Testimonials';
import WebDevFAQ from '@/components/WebsiteDevelopment/WebDevFAQ';
import Footer from '@/components/Home/Footer';
import dynamic from 'next/dynamic';

const ContactCTA = dynamic(() => import('@/components/Home/ContactCTA/ContactCTA'));
const LatestBlogsSection = dynamic(() => import('@/components/Blogs/LatestBlogsSection'));

export const metadata: Metadata = {
  title: 'Website Development | Hala Technology',
  description:
    'We build B2B websites that drive growth. Strategy, design, and performance unified for measurable ROI.',
  openGraph: {
    title: 'Website Development | Hala Technology',
    description:
      'We build B2B websites that drive growth. Strategy, design, and performance unified for measurable ROI.',
    url: 'https://halatechnologies.com/website-development',
    images: [
      {
        url: 'https://halatechnologies.com/hero-images/HomeHeroimage.png',
        width: 1200,
        height: 630,
        alt: 'Website Development - Hala Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Website Development | Hala Technology',
    description:
      'We build B2B websites that drive growth. Strategy, design, and performance unified for measurable ROI.',
    images: ['https://halatechnologies.com/hero-images/HomeHeroimage.png'],
  },
  alternates: {
    canonical: 'https://halatechnologies.com/website-development',
  },
};

export default function WebsiteDevelopmentPage() {
  return (
    <div className="font-jakarta bg-[#111111] text-[#111] overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow w-full">
        <Website />
        <TrustedSection />
        <WebsiteServices />
        <FeaturedWork />
        <WebDesignGrowth />
        <ProcessSection />
        <WebDesignShowcase />
        <Testimonials />
        <WebDevFAQ />
        <ContactCTA contained={true} />
        <LatestBlogsSection />
      </main>
      <div className="bg-white w-full relative z-20">
        <Footer />
      </div>
    </div>
  );
}
