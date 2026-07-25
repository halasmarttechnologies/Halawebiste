import GraphicDesignHero from '@/components/branding/GraphicDesign/GraphicDesignHero';
import GraphicDesignServices from '@/components/branding/GraphicDesign/GraphicDesignServices';
import SocialMediaShowcase from '@/components/branding/GraphicDesign/SocialMediaShowcase';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

const CustomTestimonials = dynamic(() => import('@/components/Home/Testimonials'));
const GraphicDesignFAQ = dynamic(() => import('@/components/branding/GraphicDesignFAQ'));
const BrandingBlogs = dynamic(() => import('@/components/branding/BrandingBlogs'));
const OutroMessage = dynamic(() => import('@/components/About/OutroMessage'));
const ContactCTA = dynamic(() => import('@/components/Home/ContactCTA/ContactCTA'));

export const metadata: Metadata = {
  title: 'Graphic Design Services | Branding | Hala Technologies',
  description:
    'Professional graphic design services in Dubai. Custom logos, brand identity, social media graphics, packaging design, and more. Stand out with Hala Technologies.',
  openGraph: {
    title: 'Graphic Design Services | Hala Technologies',
    description:
      'Professional graphic design services in Dubai. Custom logos, brand identity, social media graphics, packaging design, and more.',
    url: 'https://halatechnologies.com/branding/graphic-design',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Graphic Design Services | Hala Technologies',
    description:
      'Professional graphic design services in Dubai. Custom logos, brand identity, social media graphics, packaging design, and more.',
  },
  alternates: {
    canonical: 'https://halatechnologies.com/branding/graphic-design',
  },
};

export default function GraphicDesignPage() {
  return (
    <div className="w-full">
      <GraphicDesignHero />
      <SocialMediaShowcase />
      <GraphicDesignServices />
      <CustomTestimonials />
      <GraphicDesignFAQ />
      <ContactCTA contained={true} />
      <BrandingBlogs />
      <OutroMessage />
    </div>
  );
}
