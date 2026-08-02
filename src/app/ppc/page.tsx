import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar/Navbar';
import PPCHero from '@/components/DigitalMarketing/PPC/PPCHero';
import PPCIntro from '@/components/DigitalMarketing/PPC/PPCIntro';
import PPCWhyItMatters from '@/components/DigitalMarketing/PPC/PPCWhyItMatters';
import PPCServices from '@/components/DigitalMarketing/PPC/PPCServices';
import PPCWhyChoose from '@/components/DigitalMarketing/PPC/PPCWhyChoose';
import Footer from '@/components/Home/Footer';

const CustomTestimonials = dynamic(() => import('@/components/Home/Testimonials'));
const PPCFAQ = dynamic(() => import('@/components/DigitalMarketing/PPC/PPCFAQ'));
const LatestBlogsSection = dynamic(() => import('@/components/Blogs/LatestBlogsSection'));
const OutroMessage = dynamic(() => import('@/components/About/OutroMessage'));
const ContactCTA = dynamic(() => import('@/components/Home/ContactCTA/ContactCTA'));

export const metadata: Metadata = {
  title: 'PPC Services in Dubai | Pay Per Click Advertising | Hala Technologies',
  description:
    'Generate high-quality leads and instant visibility with data-driven PPC campaigns tailored for the UAE market.',
  openGraph: {
    title: 'PPC Services in Dubai | Pay Per Click Advertising | Hala Technologies',
    description:
      'Generate high-quality leads and instant visibility with data-driven PPC campaigns tailored for the UAE market.',
    url: 'https://halatechnologies.com/ppc',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PPC Services in Dubai | Pay Per Click Advertising | Hala Technologies',
    description:
      'Generate high-quality leads and instant visibility with data-driven PPC campaigns tailored for the UAE market.',
  },
  alternates: {
    canonical: 'https://halatechnologies.com/ppc',
  },
};

export default function PPCPage() {
  return (
    <div className="font-jakarta bg-white text-[#111111] overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow w-full">
        <PPCHero />
        <PPCIntro />
        <PPCWhyItMatters />
        <PPCServices />
        <PPCWhyChoose />
        <CustomTestimonials />
        <PPCFAQ />
        <ContactCTA contained={true} />
        <LatestBlogsSection />
        <OutroMessage />
      </main>
      <div className="bg-[#111111] w-full relative z-20">
        <Footer />
      </div>
    </div>
  );
}
