import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Home/HeroSection';
import MarketingSolutions from '@/components/Home/MarketingSolutions';

const OurServices = dynamic(() => import('@/components/Home/Services'), { ssr: true });
const IndustriesWeCover = dynamic(() => import('@/components/Home/IndustriesWeCover'), { ssr: true });
const CaseStudies = dynamic(() => import('@/components/Home/CaseStudies'), { ssr: true });
const WhyChooseHala = dynamic(() => import('@/components/Home/WhyChooseUs'), { ssr: true });
const OurJourney = dynamic(() => import('@/components/Home/OurJourney'), { ssr: true });
const HomeWorkflow = dynamic(() => import('@/components/Home/HomeWorkflow'), { ssr: true });
const CustomTestimonials = dynamic(() => import('@/components/Home/Testimonials'), { ssr: true });
const ContactConsultation = dynamic(() => import('@/components/Home/ContactCTA'), { ssr: true });
const BrandingBlogs = dynamic(() => import('@/components/Home/Blogs'), { ssr: true });
const Footer = dynamic(() => import('@/components/Home/Footer'), { ssr: true });

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
