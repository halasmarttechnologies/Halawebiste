import VideoEditing from '@/components/branding/VideoEditing/VideoEditing';
import VideoEditingShowcase from '@/components/branding/VideoEditing/VideoEditingShowcase';
import VideoEditingReels from '@/components/branding/VideoEditing/VideoEditingReels';
import VideoEditingDetails from '@/components/branding/VideoEditing/VideoEditingDetails';
import VideoEditingServices from '@/components/branding/VideoEditing/VideoEditingServices';
import VideoEditingStandOut from '@/components/branding/VideoEditing/VideoEditingStandOut';
import dynamic from 'next/dynamic';
import { Metadata } from 'next';

const CustomTestimonials = dynamic(() => import('@/components/Home/Testimonials'));
const VideoEditingFAQ = dynamic(() => import('@/components/branding/VideoEditingFAQ'));
const ContactCTA = dynamic(() => import('@/components/Home/ContactCTA/ContactCTA'));
const BrandingBlogs = dynamic(() => import('@/components/branding/BrandingBlogs'));

export const metadata: Metadata = {
  title: 'Video Editing | Branding | Hala Technologies',
  description: 'High-quality video editing services.',
};

export default function VideoEditingPage() {
  return (
    <div className="w-full">
      <VideoEditing />
      <VideoEditingShowcase />
      <VideoEditingReels />
      <VideoEditingDetails />
      <VideoEditingServices />
      <VideoEditingStandOut />
      <CustomTestimonials />
      <VideoEditingFAQ />
      <ContactCTA contained={true} />
      <BrandingBlogs />
    </div>
  );
}
