import GraphicDesignHero from '@/components/branding/GraphicDesign/GraphicDesignHero';
import GraphicDesignServices from '@/components/branding/GraphicDesign/GraphicDesignServices';
import BrandingShowcase from '@/components/branding/BrandingShowcase';
import HomeWorkflow from '@/components/Home/HomeWorkflow';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

const CustomTestimonials = dynamic(() => import('@/components/Home/Testimonials'));
const GraphicDesignFAQ = dynamic(() => import('@/components/branding/GraphicDesignFAQ'));
const LatestBlogsSection = dynamic(() => import('@/components/Blogs/LatestBlogsSection'));
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

export default function GraphicDesignPage() {
  return (
    <div className="w-full">
      <GraphicDesignHero />
      <BrandingShowcase 
        mainImageDesktop="/Graphisc desgin images/mainimage.png"
        mainImageMobile="/Graphisc desgin images/mainimage.png"
        desktopObjectFit="contain"
      />
      <GraphicDesignServices />
      <HomeWorkflow forceMobileView={true} images={BRANDING_IMAGES} />
      <CustomTestimonials />
      <GraphicDesignFAQ />
      <ContactCTA contained={true} />
      <LatestBlogsSection />
      <OutroMessage />
    </div>
  );
}
