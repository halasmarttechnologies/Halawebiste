'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, User, Sparkles } from 'lucide-react';
import { BlogPost } from '@/lib/blogs';

interface ServiceBlogSectionProps {
  targetPage: string;
  title?: string;
  subtitle?: string;
}

export default function ServiceBlogSection({
  targetPage,
  title = 'Insights & Industry Guides',
  subtitle = 'Expert resources and strategies tailored to scale your brand.',
}: ServiceBlogSectionProps) {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTargetBlogs = async () => {
      try {
        const res = await fetch(`/api/blogs?status=published&targetPage=${targetPage}&t=${Date.now()}`, { cache: 'no-store' });
        const data = await res.json();
        if (data.success && data.blogs.length > 0) {
          setBlogs(data.blogs);
        } else {
          // Fallback to all published blogs if none assigned specifically
          const fallbackRes = await fetch(`/api/blogs?status=published&t=${Date.now()}`, { cache: 'no-store' });
          const fallbackData = await fallbackRes.json();
          if (fallbackData.success) {
            setBlogs(fallbackData.blogs.slice(0, 3));
          }
        }
      } catch (err) {
        console.error('Failed to load service blogs:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTargetBlogs();
  }, [targetPage]);

  if (!loading && blogs.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-white text-[#111111] py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-[#e5e5e5] font-jakarta">
      <div className="max-w-[1280px] mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#007FFF] font-bold tracking-[0.2em] text-xs uppercase mb-3 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> RELEVANT ARTICLES
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#111111] mb-4">
            {title}
          </h2>
          <p className="text-base text-[#666666] max-w-xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((post) => (
            <article
              key={post.id}
              className="bg-white border border-[#e5e5e5] rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#cccccc] transition-all duration-300 group"
            >
              <div>
                {/* Image */}
                <div className="relative w-full h-[200px] bg-[#f5f5f5] border-b border-[#e5e5e5] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <span className="absolute top-4 left-4 bg-[#007FFF] text-white text-xs font-semibold px-3 py-1 rounded-md shadow-sm">
                    {post.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs text-[#888888] mb-3">
                    <span className="flex items-center gap-1">
                      <User size={13} className="text-[#111111]" />
                      {post.author?.name || 'Hala Team'}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock size={13} className="text-[#111111]" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold text-[#111111] leading-snug mb-2 group-hover:text-[#007FFF] transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug || post.id}`}>{post.title}</Link>
                  </h3>

                  <p className="text-xs text-[#555555] leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Read Action */}
              <div className="px-6 pb-6 pt-0 border-t border-[#f0f0f0] mt-3">
                <Link
                  href={`/blog/${post.slug || post.id}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#111111] hover:text-[#007FFF] transition-colors pt-3"
                >
                  <span>Read Publication</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
