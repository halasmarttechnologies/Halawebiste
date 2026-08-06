'use client';

import { ArrowRight, Sparkles, MapPin, Briefcase } from 'lucide-react';

export default function CareersHero() {
  return (
    <section className="relative w-full pt-[140px] pb-16 md:pt-[180px] md:pb-24 bg-white border-b border-[#e5e5e5]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start">
        
        {/* Editorial Top Metadata */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className="inline-flex items-center gap-1.5 bg-[#007FFF]/10 border border-[#007FFF]/20 text-[#007FFF] px-3 py-1 rounded-full font-jakarta text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            We Are Hiring
          </span>
          <span className="text-[#cccccc]">•</span>
          <span className="font-jakarta text-xs md:text-sm text-[#666666] font-medium tracking-wide flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-[#111111]" />
            Dubai, UAE &amp; Remote Options
          </span>
        </div>

        {/* Main Heading with Classic Typography */}
        <h1 className="font-jakarta text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-bold text-[#111111] leading-[1.05] tracking-tight mb-8 max-w-[1050px]">
          Shape The Future With <em className="eb-garamond font-normal italic text-[#111111]">Hala Technologies.</em>
        </h1>

        {/* Subtitle / Overview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 w-full pt-6 border-t border-[#f0f0f0]">
          <div className="md:col-span-8">
            <p className="font-jakarta text-lg sm:text-xl md:text-2xl text-[#555555] leading-relaxed font-normal">
              We are a team of visionary engineers, digital marketers, designers, and creative strategists building state-of-the-art digital solutions across the GCC and global markets.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col justify-end items-start md:items-end">
            <span className="font-jakarta text-xs uppercase tracking-wider text-[#888888] font-semibold mb-1">
              Active Talent Openings
            </span>
            <span className="font-jakarta text-sm font-semibold text-[#111111] flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-[#007FFF]" />
              1 Open Position Available
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
