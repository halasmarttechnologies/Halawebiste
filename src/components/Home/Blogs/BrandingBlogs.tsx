'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { User, MessageCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { BlogPost } from '@/lib/blogs';

export default function BrandingBlogs() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomeBlogs = async () => {
      try {
        const res = await fetch(`/api/blogs?homepage=true&status=published&t=${Date.now()}`, { cache: 'no-store' });
        const data = await res.json();
        if (data.success && data.blogs.length > 0) {
          setBlogs(data.blogs);
        } else {
          // Fallback query to published blogs if no specific homepage-pinned blogs exist
          const fallbackRes = await fetch(`/api/blogs?status=published&t=${Date.now()}`, { cache: 'no-store' });
          const fallbackData = await fallbackRes.json();
          if (fallbackData.success && fallbackData.blogs.length > 0) {
            setBlogs(fallbackData.blogs.slice(0, 3));
          } else {
            setBlogs([]);
          }
        }
      } catch (err) {
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };
    fetchHomeBlogs();
  }, []);

  return (
    <section className="w-full bg-white text-[#111111] py-12 md:py-20 px-4 md:px-6 relative overflow-hidden font-jakarta">
      
      <div className="max-w-[1200px] mx-auto relative z-10 px-0">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-jakarta text-[#007FFF] font-bold tracking-[0.2em] text-xs md:text-sm uppercase mb-4">
            OUR BLOG & INSIGHTS
          </p>
          <h2 className="font-jakarta text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.1] mb-6 text-[#111111]">
            Latest Publications
          </h2>
          <p className="font-jakarta text-base md:text-lg text-[#666666] max-w-[600px] mx-auto leading-relaxed font-medium">
            Stay informed with the latest marketing trends, expert tips, and proven strategies curated by our SEO and digital growth specialists.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-start">
          {blogs.map((blog, idx) => (
            <motion.div
              key={blog.id || idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative w-full flex flex-col"
              style={{ paddingTop: '220px' }}
            >
              {/* Image Container (Background) */}
              <div className="absolute top-0 left-0 right-0 h-[300px] sm:h-[340px] rounded-[32px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)] bg-slate-100">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Text Card (Foreground) */}
              <div className="relative z-10 bg-white rounded-[24px] p-6 sm:p-8 mx-3 sm:mx-5 shadow-[0_15px_40px_rgba(0,0,0,0.08)] flex flex-col flex-grow transition-transform duration-500 group-hover:-translate-y-2 border border-slate-100">
                
                <span className="font-jakarta text-xs font-bold text-[#007FFF] mb-3 inline-block uppercase tracking-wider">
                  {blog.category || blog.date}
                </span>

                <h3 className="font-jakarta text-xl font-bold leading-[1.3] text-[#111111] mb-4 group-hover:text-[#007FFF] transition-colors duration-300 line-clamp-2">
                  <Link href={`/blog/${blog.slug || blog.id}`}>
                    {blog.title}
                  </Link>
                </h3>

                <div className="flex items-center gap-4 mb-4 text-[13px] text-[#777777] font-medium font-jakarta">
                  <div className="flex items-center gap-1.5">
                    <User size={14} className="stroke-[2.5] text-[#999]" />
                    <span>By {blog.author?.name || blog.author || 'Hala Team'}</span>
                  </div>
                </div>

                <p className="font-jakarta text-[14px] text-[#666666] leading-relaxed mb-6 line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="mt-auto pt-2">
                  <Link 
                    href={`/blog/${blog.slug || blog.id}`} 
                    className="inline-flex items-center gap-2 font-jakarta text-[14px] font-bold text-[#111111] group-hover:text-[#007FFF] transition-colors duration-300"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
