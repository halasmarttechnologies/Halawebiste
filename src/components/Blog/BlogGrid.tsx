'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, User, Sparkles } from 'lucide-react';
import { BlogPost } from '@/lib/blogs';

interface BlogGridProps {
  activeCategory: string;
}

export default function BlogGrid({ activeCategory }: BlogGridProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLiveBlogs = async () => {
      try {
        const res = await fetch(`/api/blogs?status=published&t=${Date.now()}`, { cache: 'no-store' });
        const data = await res.json();
        if (data.success && data.blogs.length > 0) {
          setPosts(data.blogs);
        } else {
          setPosts([]);
        }
      } catch (err) {
        console.error('Error loading live blogs:', err);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchLiveBlogs();
  }, []);

  const filteredPosts = activeCategory === 'All'
    ? posts
    : posts.filter(post => post.category === activeCategory);

  return (
    <section className="bg-white w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 font-jakarta">
      <div className="max-w-[1280px] mx-auto w-full">
        
        {/* Results Info Bar */}
        <div className="flex items-center justify-between border-b border-[#e5e5e5] pb-4 mb-12">
          <span className="text-xs font-semibold text-[#888888] uppercase tracking-wider">
            Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'Article' : 'Articles'}
          </span>
          <span className="text-xs font-semibold text-[#111111]">
            Topic: <span className="text-[#007FFF]">{activeCategory}</span>
          </span>
        </div>

        {/* Minimal Grid */}
        {loading ? (
          <div className="text-center py-20 text-slate-400 text-sm font-semibold">
            Loading articles...
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white border border-[#e5e5e5] rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#cccccc] transition-colors group"
              >
                {/* Top Content */}
                <div>
                  {/* Image */}
                  <div className="relative w-full h-[220px] bg-[#f5f5f5] border-b border-[#e5e5e5] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-4 left-4 bg-[#007FFF] text-white text-xs font-semibold px-3 py-1 rounded-md shadow-sm">
                      {post.category}
                    </span>
                    {post.showOnHomepage && (
                      <span className="absolute top-4 right-4 bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
                        ★ Featured
                      </span>
                    )}
                  </div>

                  {/* Body Text */}
                  <div className="p-6 md:p-8">
                    {/* Meta details */}
                    <div className="flex items-center gap-4 text-xs text-[#888888] mb-4">
                      <span className="flex items-center gap-1.5 font-medium">
                        <User size={13} className="text-[#111111]" />
                        {post.author?.name || 'Hala Team'}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1.5 font-medium">
                        <Clock size={13} className="text-[#111111]" />
                        {post.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-[#111111] leading-snug mb-3 group-hover:text-[#007FFF] transition-colors">
                      <Link href={`/blog/${post.slug || post.id}`}>
                        {post.title}
                      </Link>
                    </h3>

                    {/* Excerpt */}
                    <p className="text-sm text-[#555555] leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Bottom Footer Action */}
                <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 border-t border-[#f0f0f0] mt-4">
                  <Link
                    href={`/blog/${post.slug || post.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#111111] hover:text-[#007FFF] transition-colors pt-4"
                  >
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredPosts.length === 0 && (
          <div className="text-center py-24 border border-dashed border-[#e5e5e5] rounded-2xl">
            <p className="text-base text-[#666666]">
              No publications found in the "{activeCategory}" category.
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
