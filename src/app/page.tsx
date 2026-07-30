import { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import Navbar from '@/components/Navbar/Navbar';
import Hero from '@/components/Home/HeroSection';
import MarketingSolutions from '@/components/Home/MarketingSolutions';

const OurServices = nextDynamic(() => import('@/components/Home/Services'), { ssr: true });
const IndustriesWeCover = nextDynamic(() => import('@/components/Home/IndustriesWeCover'), { ssr: true });
const CaseStudies = nextDynamic(() => import('@/components/Home/CaseStudies'), { ssr: true });
const WhyChooseHala = nextDynamic(() => import('@/components/Home/WhyChooseUs'), { ssr: true });
const OurJourney = nextDynamic(() => import('@/components/Home/OurJourney'), { ssr: true });
const HomeWorkflow = nextDynamic(() => import('@/components/Home/HomeWorkflow'), { ssr: true });
const CustomTestimonials = nextDynamic(() => import('@/components/Home/Testimonials'), { ssr: true });
const ContactConsultation = nextDynamic(() => import('@/components/Home/ContactCTA'), { ssr: true });
const Footer = nextDynamic(() => import('@/components/Home/Footer'), { ssr: true });

export const dynamic = 'force-dynamic';
export const revalidate = 0;
export const fetchCache = 'force-no-store';

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
      </main>
      <div className="bg-white w-full relative z-20">
        <Footer />
      </div>
    </div>
  );
}
