import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar/Navbar';
import SMMHero from '@/components/DigitalMarketing/SMM/SMMHero';
import SMMIntro from '@/components/DigitalMarketing/SMM/SMMIntro';
import SMMWhyItMatters from '@/components/DigitalMarketing/SMM/SMMWhyItMatters';
import SMMServices from '@/components/DigitalMarketing/SMM/SMMServices';
import SMMWhyChoose from '@/components/DigitalMarketing/SMM/SMMWhyChoose';
import Footer from '@/components/Home/Footer';

const CustomTestimonials = dynamic(() => import('@/components/Home/Testimonials'));
const SMMFAQ = dynamic(() => import('@/components/DigitalMarketing/SMM/SMMFAQ'));
const LatestBlogsSection = dynamic(() => import('@/components/Blogs/LatestBlogsSection'));
const OutroMessage = dynamic(() => import('@/components/About/OutroMessage'));
const ContactCTA = dynamic(() => import('@/components/Home/ContactCTA/ContactCTA'));

export const metadata: Metadata = {
  title: 'Social Media Marketing in Dubai | SMM Services | Hala Technologies',
  description:
    'Drive engagement and measurable growth with professional social media marketing services in Dubai & UAE.',
  openGraph: {
    title: 'Social Media Marketing in Dubai | SMM Services | Hala Technologies',
    description:
      'Drive engagement and measurable growth with professional social media marketing services in Dubai & UAE.',
    url: 'https://halatechnologies.com/smm',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Social Media Marketing in Dubai | SMM Services | Hala Technologies',
    description:
      'Drive engagement and measurable growth with professional social media marketing services in Dubai & UAE.',
  },
  alternates: {
    canonical: 'https://halatechnologies.com/smm',
  },
};

export default function SMMPage() {
  return (
    <div className="font-jakarta bg-white text-[#111] overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow w-full">
        <SMMHero />
        <SMMIntro />
        <SMMWhyItMatters />
        <SMMServices />
        <SMMWhyChoose />
        <CustomTestimonials />
        <SMMFAQ />
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
