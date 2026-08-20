import BrandingHeroSection from '@/components/branding/BrandingHeroSection';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

const BrandingShowcase = dynamic(() => import('@/components/branding/BrandingShowcase'));
const BrandingServices = dynamic(() => import('@/components/branding/BrandingServices'));
const BrandingExpertise = dynamic(() => import('@/components/branding/BrandingExpertise'));
const CustomTestimonials = dynamic(() => import('@/components/Home/Testimonials'));
const BrandingFAQ = dynamic(() => import('@/components/branding/BrandingFAQ'));
const OutroMessage = dynamic(() => import('@/components/About/OutroMessage'));
const ContactCTA = dynamic(() => import('@/components/Home/ContactCTA/ContactCTA'));
const LatestBlogsSection = dynamic(() => import('@/components/Blogs/LatestBlogsSection'));
const HomeWorkflow = dynamic(() => import('@/components/Home/HomeWorkflow'));

export const metadata: Metadata = {
  title: 'Branding | Hala Technologies',
  description:
    'Build a memorable brand with custom logos, brand identity, and strategy that help your business stand out and grow.',
  openGraph: {
    title: 'Branding | Hala Technologies',
    description:
      'Build a memorable brand with custom logos, brand identity, and strategy that help your business stand out and grow.',
    url: 'https://halatechnologies.com/branding',
    images: [
      {
        url: 'https://halatechnologies.com/hero-images/HomeHeroimage.png',
        width: 1200,
        height: 630,
        alt: 'Branding - Hala Technologies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Branding | Hala Technologies',
    description:
      'Build a memorable brand with custom logos, brand identity, and strategy that help your business stand out and grow.',
    images: ['https://halatechnologies.com/hero-images/HomeHeroimage.png'],
  },
  alternates: {
    canonical: 'https://halatechnologies.com/branding',
  },
};

const BRANDING_IMAGES = [
  '/Branding Section Images/3.png',
  '/Branding Section Images/4.png',
  '/Branding Section Images/7.png',
  '/Branding Section Images/11.png',
  '/Branding Section Images/10.png',
  '/Branding Section Images/13.png',
  '/Branding Section Images/16.png',
  '/Branding Section Images/18.png',
  '/Branding Section Images/17.png',
  '/Branding Section Images/1.png',
  '/Branding Section Images/9.png',
  '/Branding Section Images/12.png',
  '/Branding Section Images/15.png'
];

export default function BrandingPage() {
  return (
    <div className="w-full">
      <BrandingHeroSection />
      
      {/* Branding Showcase Section */}
      <BrandingShowcase />
      
      {/* Branding Services Section */}
      <BrandingServices />
      
      {/* Workflow Section */}
      <HomeWorkflow forceMobileView={true} images={BRANDING_IMAGES} />
      
      {/* Branding Expertise Section */}
      <BrandingExpertise />
      
      {/* Testimonials Section */}
      <CustomTestimonials />

      {/* FAQ Section */}
      <BrandingFAQ />
      <ContactCTA contained={true} />

      {/* Dynamic Target Page Blogs Section */}
      <LatestBlogsSection />

      {/* Outro Message */}
      <OutroMessage />
    </div>
  );
}
