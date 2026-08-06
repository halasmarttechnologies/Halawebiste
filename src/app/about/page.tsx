import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar/Navbar';
import AboutHero from '@/components/About/AboutHero';
import AboutSolutions from '@/components/About/AboutSolutions';

const InteractiveSection = dynamic(() => import('@/components/InteractiveSection/InteractiveSection'));
const AboutValues = dynamic(() => import('@/components/About/AboutValues'));
const AboutPartners = dynamic(() => import('@/components/About/AboutPartners'));
const OurTeam = dynamic(() => import('@/components/About/OurTeam'));
const CustomTestimonials = dynamic(() => import('@/components/Home/Testimonials'));
const LatestBlogsSection = dynamic(() => import('@/components/Blogs/LatestBlogsSection'));
const OutroMessage = dynamic(() => import('@/components/About/OutroMessage'));
const Footer = dynamic(() => import('@/components/Home/Footer'));

export const metadata: Metadata = {
  title: 'About Us | Hala Technology',
  description:
    'Learn about Hala Technology – a Dubai-based digital marketing agency helping businesses grow through SEO, web development, branding, and digital marketing.',
  openGraph: {
    title: 'About Us | Hala Technology',
    description:
      'Learn about Hala Technology – a Dubai-based digital marketing agency helping businesses grow through SEO, web development, branding, and digital marketing.',
    url: 'https://halatechnologies.com/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us | Hala Technology',
    description:
      'Learn about Hala Technology – a Dubai-based digital marketing agency helping businesses grow through SEO, web development, branding, and digital marketing.',
  },
  alternates: {
    canonical: 'https://halatechnologies.com/about',
  },
};

export default function AboutPage() {
  return (
    <div className="font-jakarta bg-[#111111] text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex flex-col">
        <AboutHero />
        <AboutSolutions />
        <div className="bg-white w-full">
          <InteractiveSection />
        </div>
        <AboutValues />
        <AboutPartners />
        <OurTeam />
        <CustomTestimonials />
        <LatestBlogsSection />
        <OutroMessage />
      </main>
      <div className="bg-white w-full relative z-20">
        <Footer />
      </div>
    </div>
  );
}
