import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Navbar from '@/components/Navbar/Navbar';
import BlogClientWrapper from '@/components/Blog/BlogClientWrapper';
import OutroMessage from '@/components/About/OutroMessage';
import Footer from '@/components/Home/Footer';

export const metadata: Metadata = {
  title: 'Blog & Marketing Insights | Hala Technologies',
  description:
    'Explore expert insights on AI marketing, digital strategies, SEO optimization, social media management, and visual editing tailored for Dubai & UAE businesses.',
  openGraph: {
    title: 'Blog & Marketing Insights | Hala Technologies',
    description:
      'Explore expert insights on AI marketing, digital strategies, SEO optimization, social media management, and visual editing tailored for Dubai & UAE businesses.',
    url: 'https://halatechnologies.com/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog & Marketing Insights | Hala Technologies',
    description:
      'Explore expert insights on AI marketing, digital strategies, SEO optimization, social media management, and visual editing tailored for Dubai & UAE businesses.',
  },
  alternates: {
    canonical: 'https://halatechnologies.com/blog',
  },
};

export default function BlogPage() {
  return (
    <div className="font-sans bg-white text-[#111] overflow-x-hidden min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow w-full">
        <BlogClientWrapper />
        <OutroMessage />
      </main>
      <div className="bg-white w-full relative z-20">
        <Footer />
      </div>
    </div>
  );
}
