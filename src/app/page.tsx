import { Metadata } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Home/HeroSection';
import MarketingSolutions from '@/components/Home/MarketingSolutions';
import OurServices from '@/components/Home/Services';
import HomeWorkflow from '@/components/Home/HomeWorkflow';
import IndustriesWeCover from '@/components/Home/IndustriesWeCover';
import CaseStudies from '@/components/Home/CaseStudies';
import WhyChooseHala from '@/components/Home/WhyChooseUs';
import OurJourney from '@/components/Home/OurJourney';
import CustomTestimonials from '@/components/Home/Testimonials';
import BrandingBlogs from '@/components/Home/Blogs';
import ContactConsultation from '@/components/Home/ContactCTA';
import Footer from '@/components/Home/Footer';

export const metadata: Metadata = {
  title: 'Hala Technology | Digital Marketing & Web Development',
  description:
    'Scale your brand and dominate the market with Hala Technology. The digital marketing agency that turns clicks into customers with SEO, PPC, and Web Development.',
  openGraph: {
    title: 'Hala Technology | Digital Marketing & Web Development',
    description:
      'Scale your brand and dominate the market with Hala Technology. The digital marketing agency that turns clicks into customers with SEO, PPC, and Web Development.',
    url: 'https://halatechnologies.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hala Technology | Digital Marketing & Web Development',
    description:
      'Scale your brand and dominate the market with Hala Technology. The digital marketing agency that turns clicks into customers with SEO, PPC, and Web Development.',
  },
  alternates: {
    canonical: 'https://halatechnologies.com',
  },
};

export default function Home() {
  return (
    <div className="font-jakarta bg-[#111111] text-white overflow-x-hidden">
      <Navbar />
      <main className="bg-[#111111]">
        <Hero />
        <MarketingSolutions />
        <OurServices />
        <IndustriesWeCover />
        <CaseStudies />
        <WhyChooseHala />
        <OurJourney />
        <HomeWorkflow />
        <CustomTestimonials />
        <ContactConsultation contained={true} />
        <BrandingBlogs />
      </main>
      <div className="bg-white w-full relative z-20">
        <Footer />
      </div>
    </div>
  );
}
