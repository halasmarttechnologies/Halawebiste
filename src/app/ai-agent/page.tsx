import { Metadata } from 'next';
import Navbar from '@/components/Navbar/Navbar';
import AIAgentHero from '@/components/AIAgent/AIAgentHero';
import AIAgentCatalog from '@/components/AIAgent/AIAgentCatalog';
import AIAgentTransform from '@/components/AIAgent/AIAgentTransform';
import AIAgentFeatures from '@/components/AIAgent/AIAgentFeatures';
import AIAgentDesktopShowcase from '@/components/AIAgent/AIAgentDesktopShowcase';
import AIAgentOfferings from '@/components/AIAgent/AIAgentOfferings';
import AIAgentWhyChoose from '@/components/AIAgent/AIAgentWhyChoose';
import CustomTestimonials from '@/components/Home/Testimonials';
import LatestBlogsSection from '@/components/Blogs/LatestBlogsSection';
import ContactCTA from '@/components/Home/ContactCTA/ContactCTA';
import Footer from '@/components/Home/Footer';

export const metadata: Metadata = {
  title: 'AI Agents for Smarter Business Growth | Hala Technologies',
  description:
    'Empower your business with next-generation AI Agents designed to transform marketing. Understand your audience, deliver targeted messages, and turn prospects into loyal customers.',
  openGraph: {
    title: 'AI Agents for Smarter Business Growth | Hala Technologies',
    description:
      'Empower your business with next-generation AI Agents designed to transform marketing. Understand your audience, deliver targeted messages, and turn prospects into loyal customers.',
    url: 'https://halatechnologies.com/ai-agent',
    images: [
      {
        url: 'https://halatechnologies.com/hero-images/AiagentHeroimage.png',
        width: 1200,
        height: 630,
        alt: 'AI Agents - Hala Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agents for Smarter Business Growth | Hala Technologies',
    description:
      'Empower your business with next-generation AI Agents designed to transform marketing. Understand your audience, deliver targeted messages, and turn prospects into loyal customers.',
    images: ['https://halatechnologies.com/hero-images/AiagentHeroimage.png'],
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
        <LatestBlogsSection />
      </main>
      <div className="bg-white w-full relative z-20">
        <Footer />
      </div>
    </div>
  );
}
