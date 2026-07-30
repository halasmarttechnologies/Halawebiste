import BrandingHeroSection from '@/components/branding/BrandingHeroSection';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';
import ServiceBlogSection from '@/components/Shared/ServiceBlogSection';

const BrandingShowcase = dynamic(() => import('@/components/branding/BrandingShowcase'));
const BrandingServices = dynamic(() => import('@/components/branding/BrandingServices'));
const BrandingExpertise = dynamic(() => import('@/components/branding/BrandingExpertise'));
const CustomTestimonials = dynamic(() => import('@/components/Home/Testimonials'));
const BrandingFAQ = dynamic(() => import('@/components/branding/BrandingFAQ'));
const OutroMessage = dynamic(() => import('@/components/About/OutroMessage'));
const ContactCTA = dynamic(() => import('@/components/Home/ContactCTA/ContactCTA'));

export const metadata: Metadata = {
  title: 'Branding | Hala Technologies',
  description:
    'Build a memorable brand with custom logos, brand identity, and strategy that help your business stand out and grow.',
  openGraph: {
    title: 'Branding | Hala Technologies',
    description:
      'Build a memorable brand with custom logos, brand identity, and strategy that help your business stand out and grow.',
    url: 'https://halatechnologies.com/branding',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Branding | Hala Technologies',
    description:
      'Build a memorable brand with custom logos, brand identity, and strategy that help your business stand out and grow.',
  },
  alternates: {
    canonical: 'https://halatechnologies.com/branding',
  },
};

export default function BrandingPage() {
  return (
    <div className="w-full">
      <BrandingHeroSection />
      
      {/* Branding Showcase Section */}
      <BrandingShowcase />
      
      {/* Branding Services Section */}
      <BrandingServices />
      
      {/* Branding Expertise Section */}
      <BrandingExpertise />
      
      {/* Testimonials Section */}
      <CustomTestimonials />

      {/* FAQ Section */}
      <BrandingFAQ />
      <ContactCTA contained={true} />

      {/* Dynamic Target Page Blogs Section */}
      <ServiceBlogSection targetPage="branding" title="Branding & Design Insights" />

      {/* Outro Message */}
      <OutroMessage />
    </div>
  );
}
