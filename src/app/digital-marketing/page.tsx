import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar/Navbar';
import DigitalMarketingHero from '@/components/DigitalMarketing/DigitalMarketingHero';
import DigitalMarketingIntro from '@/components/DigitalMarketing/DigitalMarketingIntro';
import DigitalMarketingServices from '@/components/DigitalMarketing/DigitalMarketingServices';
import DigitalMarketingWhyChoose from '@/components/DigitalMarketing/DigitalMarketingWhyChoose';
import Footer from '@/components/Home/Footer';

const CustomTestimonials = dynamic(() => import('@/components/Home/Testimonials'));
const DigitalMarketingFAQ = dynamic(() => import('@/components/DigitalMarketing/DigitalMarketingFAQ'));
const ContactCTA = dynamic(() => import('@/components/Home/ContactCTA/ContactCTA'));
const LatestBlogsSection = dynamic(() => import('@/components/Blogs/LatestBlogsSection'));

export const metadata: Metadata = {
  title: 'Digital Marketing Company in Dubai | SEO, SMM & PPC Services | Hala Technologies',
  description:
    'Hala Technology is a results-driven digital marketing company in Dubai specializing in SEO, social media marketing, PPC, and web design. Grow your online visibility & leads.',
  openGraph: {
    title: 'Digital Marketing Company in Dubai | SEO, SMM & PPC Services | Hala Technologies',
    description:
      'Hala Technology is a results-driven digital marketing company in Dubai specializing in SEO, social media marketing, PPC, and web design. Grow your online visibility & leads.',
    url: 'https://halatechnologies.com/digital-marketing',
    images: [
      {
        url: 'https://halatechnologies.com/hero-images/HomeHeroimage.png',
        width: 1200,
        height: 630,
        alt: 'Digital Marketing Services - Hala Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digital Marketing Company in Dubai | SEO, SMM & PPC Services | Hala Technologies',
    description:
      'Hala Technology is a results-driven digital marketing company in Dubai specializing in SEO, social media marketing, PPC, and web design. Grow your online visibility & leads.',
    images: ['https://halatechnologies.com/hero-images/HomeHeroimage.png'],
  },
  alternates: {
    canonical: 'https://halatechnologies.com/digital-marketing',
  },
};

export default function DigitalMarketingPage() {
  return (
    <div className="font-jakarta bg-white text-[#111] overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow w-full">
        <DigitalMarketingHero />
        <DigitalMarketingIntro />
        <DigitalMarketingServices />
        <DigitalMarketingWhyChoose />
        <CustomTestimonials />
        <DigitalMarketingFAQ />
        <ContactCTA contained={true} />
        <LatestBlogsSection />
      </main>
      <div className="bg-white w-full relative z-20">
        <Footer />
      </div>
    </div>
  );
}
