import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar/Navbar';
import WhatsAppHero from '@/components/WhatsApp/WhatsAppHero';
import WhatsAppSecurity from '@/components/WhatsApp/WhatsAppSecurity';
import WhatsAppWorkflow from '@/components/WhatsApp/WhatsAppWorkflow';
import WhatsAppMobileShowcase from '@/components/WhatsApp/WhatsAppMobileShowcase';
import WhatsAppComparison from '@/components/WhatsApp/WhatsAppComparison';
import WhatsAppOfferings from '@/components/WhatsApp/WhatsAppOfferings';
import WhatsAppWhyChoose from '@/components/WhatsApp/WhatsAppWhyChoose';

const CustomTestimonials = dynamic(() => import('@/components/Home/Testimonials'));
const ContactCTA = dynamic(() => import('@/components/Home/ContactCTA'));
const LatestBlogsSection = dynamic(() => import('@/components/Blogs/LatestBlogsSection'));
const Footer = dynamic(() => import('@/components/Home/Footer'));

export const metadata: Metadata = {
  title: 'WhatsApp Automation Solutions | Hala Technology',
  description:
    'Automate customer communication, boost response times, and nurture leads 24/7 with custom WhatsApp Automation by Hala Technology.',
  openGraph: {
    title: 'WhatsApp Automation Solutions | Hala Technology',
    description:
      'Automate customer communication, boost response times, and nurture leads 24/7 with custom WhatsApp Automation by Hala Technology.',
    url: 'https://halatechnologies.com/whatsapp-automation',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhatsApp Automation Solutions | Hala Technology',
    description:
      'Automate customer communication, boost response times, and nurture leads 24/7 with custom WhatsApp Automation by Hala Technology.',
  },
  alternates: {
    canonical: 'https://halatechnologies.com/whatsapp-automation',
  },
};

export default function WhatsAppAutomationPage() {
  return (
    <div className="font-jakarta bg-[#111111] text-[#111111] overflow-x-hidden min-h-screen">
      <Navbar />
      <main className="bg-[#111111]">
        <WhatsAppHero />
        <WhatsAppSecurity />
        <WhatsAppWorkflow />
        <WhatsAppMobileShowcase />
        <WhatsAppComparison />
        <WhatsAppOfferings />
        <WhatsAppWhyChoose />
        <CustomTestimonials />
        <ContactCTA contained={true} />
        <LatestBlogsSection />
      </main>
      <div className="bg-white w-full relative z-20">
        <Footer />
      </div>
    </div>
  );
}
