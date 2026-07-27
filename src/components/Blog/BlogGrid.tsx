'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, User } from 'lucide-react';

export interface BlogPost {
  id: string;
  title: string;
  category: 'AI Marketing' | 'Digital Marketing' | 'SEO' | 'Social Media' | 'Visual Editing';
  date: string;
  readTime: string;
  author: string;
  excerpt: string;
  image: string;
  featured?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'ai-agents-b2b-marketing',
    title: 'How AI Agents Are Revolutionizing B2B Marketing Funnels in 2026',
    category: 'AI Marketing',
    date: 'February 12, 2026',
    readTime: '6 min read',
    author: 'Hala Strategy Team',
    excerpt: 'Artificial intelligence is moving from automated content generation to autonomous decision-making agents. Discover how leading Middle East enterprises are deploying AI agents to personalize client touchpoints.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop',
    featured: true
  },
  {
    id: 'local-seo-dubai-guide',
    title: 'How to Dominate Google Search with Local SEO Services in Dubai',
    category: 'SEO',
    date: 'January 28, 2026',
    readTime: '8 min read',
    author: 'SEO Growth Team',
    excerpt: 'If your business is struggling to generate consistent leads online, local SEO is your highest-ROI channel. Learn how to optimize Google Business Profile, local citations, and geo-targeted keywords.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'bilingual-seo-uae-strategies',
    title: 'Bilingual SEO: Optimizing Websites for Arabic & English Search Queries',
    category: 'SEO',
    date: 'January 15, 2026',
    readTime: '7 min read',
    author: 'Hala Technical Team',
    excerpt: 'The UAE market operates seamlessly in two languages. Discover the exact technical hreflang setup and semantic keyword research needed to capture both Arabic and English traffic.',
    image: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'social-media-brand-authority',
    title: 'Building Unshakable Brand Authority Through Short-Form Video SMM',
    category: 'Social Media',
    date: 'December 20, 2025',
    readTime: '5 min read',
    author: 'SMM Creative Lab',
    excerpt: 'Short-form video is no longer optional—it is the primary driver of digital attention. Explore how structured social media management transforms casual viewers into brand advocates.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'visual-editing-corporate-identity',
    title: 'The Psychology of High-Impact Visual Editing in Corporate Aesthetics',
    category: 'Visual Editing',
    date: 'December 05, 2025',
    readTime: '6 min read',
    author: 'Visual Design Studio',
    excerpt: 'Color grading, precise pacing, and clean typography communicate sophistication before a single word is read. Learn how high-end visual editing shapes consumer perception.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'digital-marketing-data-funnels',
    title: 'Data-Driven Digital Marketing Funnels: Converting Clicks to Revenue',
    category: 'Digital Marketing',
    date: 'November 18, 2025',
    readTime: '9 min read',
    author: 'Performance Marketing Team',
    excerpt: 'Stop relying on vanity metrics. Learn how to map high-intent user journeys, eliminate conversion bottlenecks, and scale your digital marketing ROI across PPC and content channels.',
    image: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=800&auto=format&fit=crop'
  }
];

interface BlogGridProps {
  activeCategory: string;
}

export default function BlogGrid({ activeCategory }: BlogGridProps) {
  const filteredPosts = activeCategory === 'All'
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  return (
    <section className="bg-white w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto w-full">
        
        {/* Results Info Bar */}
        <div className="flex items-center justify-between border-b border-[#e5e5e5] pb-4 mb-12">
          <span className="font-jakarta text-xs font-semibold text-[#888888] uppercase tracking-wider">
            Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'Article' : 'Articles'}
          </span>
          <span className="font-jakarta text-xs font-semibold text-[#111111]">
            Topic: <span className="text-[#007FFF]">{activeCategory}</span>
          </span>
        </div>

        {/* Minimal Grid (Zero Shadows, Zero Glows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article 
              key={post.id}
              className="bg-white border border-[#e5e5e5] rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#cccccc] transition-colors"
            >
              {/* Top Content */}
              <div>
                {/* Image */}
                <div className="relative w-full h-[220px] bg-[#f5f5f5] border-b border-[#e5e5e5]">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-[#007FFF] text-white font-jakarta text-xs font-semibold px-3 py-1 rounded-md">
                    {post.category}
                  </span>
                </div>

                {/* Body Text */}
                <div className="p-6 md:p-8">
                  {/* Meta details */}
                  <div className="flex items-center gap-4 text-xs font-jakarta text-[#888888] mb-4">
                    <span className="flex items-center gap-1.5">
                      <User size={13} className="text-[#111111]" />
                      {post.author}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} className="text-[#111111]" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-jakarta text-xl font-semibold text-[#111111] leading-snug mb-3">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="font-jakarta text-sm text-[#555555] leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom Footer Action */}
              <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 border-t border-[#f0f0f0] mt-4">
                <Link
                  href={`/blog#${post.id}`}
                  className="inline-flex items-center gap-2 font-jakarta text-sm font-semibold text-[#111111] hover:text-[#007FFF] transition-colors pt-4"
                >
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-24 border border-dashed border-[#e5e5e5] rounded-2xl">
            <p className="font-jakarta text-base text-[#666666]">
              No publications found in the "{activeCategory}" category.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
