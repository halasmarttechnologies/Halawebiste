'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function BrandingBlogs() {
  return (
    <section className="w-full bg-white text-[#111111] py-16 md:py-24 px-4 md:px-6 relative overflow-hidden font-jakarta">
      <div className="max-w-[1200px] mx-auto relative z-10 px-0">
        
        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-jakarta text-[#007FFF] font-bold tracking-[0.2em] text-xs md:text-sm uppercase mb-4 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" /> OUR BLOG & INSIGHTS
          </p>
          <h2 className="font-jakarta text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.1] mb-6 text-[#111111]">
            Exciting Updates Coming Soon
          </h2>
          <p className="font-jakarta text-base md:text-lg text-[#666666] max-w-[600px] mx-auto leading-relaxed font-medium">
            We are currently preparing fresh insights, strategies, and case studies to help you scale your brand. Stay tuned!
          </p>
        </div>

      </div>
    </section>
  );
}
