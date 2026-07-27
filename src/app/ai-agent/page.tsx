import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar/Navbar';
import AIAgentHero from '@/components/AIAgent/AIAgentHero';
import AIAgentCatalog from '@/components/AIAgent/AIAgentCatalog';
import AIAgentTransform from '@/components/AIAgent/AIAgentTransform';
import AIAgentFeatures from '@/components/AIAgent/AIAgentFeatures';
import AIAgentDesktopShowcase from '@/components/AIAgent/AIAgentDesktopShowcase';
import AIAgentOfferings from '@/components/AIAgent/AIAgentOfferings';
import AIAgentWhyChoose from '@/components/AIAgent/AIAgentWhyChoose';
import Footer from '@/components/Home/Footer';

const CustomTestimonials = dynamic(() => import('@/components/Home/Testimonials'));
const BrandingBlogs = dynamic(() => import('@/components/branding/BrandingBlogs'));
const ContactCTA = dynamic(() => import('@/components/Home/ContactCTA/ContactCTA'));

export const metadata: Metadata = {
  title: 'AI Agents for Smarter Business Growth | Hala Technologies',
  description:
    'Empower your business with next-generation AI Agents designed to transform marketing. Understand your audience, deliver targeted messages, and turn prospects into loyal customers.',
  openGraph: {
    title: 'AI Agents for Smarter Business Growth | Hala Technologies',
    description:
      'Empower your business with next-generation AI Agents designed to transform marketing. Understand your audience, deliver targeted messages, and turn prospects into loyal customers.',
    url: 'https://halatechnologies.com/ai-agent',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agents for Smarter Business Growth | Hala Technologies',
    description:
      'Empower your business with next-generation AI Agents designed to transform marketing. Understand your audience, deliver targeted messages, and turn prospects into loyal customers.',
  },
  alternates: {
    canonical: 'https://halatechnologies.com/ai-agent',
  },
};

export default function AIAgentPage() {
  const jakartaStyle = { fontFamily: "'Plus Jakarta Sans', var(--font-plus-jakarta), sans-serif" };

  return (
    <div 
      style={jakartaStyle}
      className="font-jakarta bg-[#111111] text-[#111] overflow-x-hidden min-h-screen flex flex-col"
    >
      <Navbar />
      <main className="flex-grow w-full">
        <AIAgentHero />
        <AIAgentCatalog />
        <AIAgentTransform />
        <AIAgentFeatures />
        <AIAgentDesktopShowcase />
        <AIAgentOfferings />
        <AIAgentWhyChoose />
        <CustomTestimonials />
        <ContactCTA contained={true} />
        <BrandingBlogs />
      </main>
      <div className="bg-white w-full relative z-20">
        <Footer />
      </div>
    </div>
  );
}
