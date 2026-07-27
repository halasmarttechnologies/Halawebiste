'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { User, MessageCircle } from 'lucide-react';
import Link from 'next/link';

const blogs = [
  {
    date: "January 31, 2023",
    category: "Best SEO Company in UAE",
    title: "Best SEO Company in UAE | Across All Emirates",
    author: "Hala Team",
    comments: "1 Comments",
    excerpt: "In a marketplace as competitive as the UAE, where over 5.5 million people are active internet users, and Dubai alone hosts tens of thousands of...",
    image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=800&auto=format&fit=crop"
  },
  {
    date: "January 31, 2023",
    category: "Local SEO Services in Dubai",
    title: "How to Get More Leads from Local SEO Services in Dubai?",
    author: "Hala Team",
    comments: "1 Comments",
    excerpt: "If your business is struggling to generate consistent leads online, Local SEO can become one of the most powerful marketing channels available...",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  },
  {
    date: "January 31, 2023",
    category: "Bilingual SEO Dubai",
    title: "How Can a Dubai-Based Company Optimize Its Website for Both Arabic and English Search Queries?",
    author: "Hala Team",
    comments: "1 Comments",
    excerpt: "Dubai runs on two languages. Arabic defines the cultural identity of the UAE, and English drives international business across every major sector...",
    image: "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=80&w=800&auto=format&fit=crop"
  }
];

export default function BrandingBlogs() {
  return (
    <section className="w-full bg-white text-[#111111] py-12 md:py-20 px-4 md:px-6 relative overflow-hidden">
      
      <div className="max-w-[1200px] mx-auto relative z-10 px-0">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-jakarta text-[#007FFF] font-bold tracking-[0.2em] text-xs md:text-sm uppercase mb-4">
            OUR BLOG
          </p>
          <h2 className="font-jakarta text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.1] mb-6 text-[#111111]">
            Latest Publications
          </h2>
          <p className="font-jakarta text-base md:text-lg text-[#666666] max-w-[600px] mx-auto leading-relaxed font-medium">
            Stay informed with the latest marketing trends, expert tips, and proven strategies. We provide the knowledge you need to drive smarter and more effective business growth.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-start">
          {blogs.map((blog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group relative w-full flex flex-col"
              style={{ paddingTop: '220px' }}
            >
              {/* Image Container (Background) */}
              <div className="absolute top-0 left-0 right-0 h-[300px] sm:h-[340px] rounded-[32px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Text Card (Foreground) */}
              <div className="relative z-10 bg-white rounded-[24px] p-6 sm:p-8 mx-3 sm:mx-5 shadow-[0_15px_40px_rgba(0,0,0,0.08)] flex flex-col flex-grow transition-transform duration-500 group-hover:-translate-y-2">
                
                <span className="font-jakarta text-sm font-semibold text-[#007FFF] mb-3 inline-block">
                  {blog.date}
                </span>

                <h3 className="font-jakarta text-xl font-bold leading-[1.3] text-[#111111] mb-4 group-hover:text-[#007FFF] transition-colors duration-300">
                  {blog.title}
                </h3>

                <div className="flex items-center gap-4 mb-4 text-[13px] text-[#777777] font-medium font-jakarta">
                  <div className="flex items-center gap-1.5">
                    <User size={14} className="stroke-[2.5] text-[#999]" />
                    <span>By {blog.author}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <MessageCircle size={14} className="stroke-[2.5] text-[#999]" />
                    <span>{blog.comments}</span>
                  </div>
                </div>

                <p className="font-jakarta text-[15px] text-[#666666] leading-relaxed mb-6 line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="mt-auto pt-2">
                  <Link href="#" className="inline-block font-jakarta text-[14px] font-bold text-[#111111] underline underline-offset-4 decoration-2 decoration-[#111111]/30 group-hover:decoration-[#007FFF] group-hover:text-[#007FFF] transition-colors duration-300">
                    Read More
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
