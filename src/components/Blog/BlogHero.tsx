'use client';

import { ArrowRight } from 'lucide-react';

interface BlogHeroProps {
  categories: string[];
  activeCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function BlogHero({ categories, activeCategory, onSelectCategory }: BlogHeroProps) {
  return (
    <section className="relative w-full pt-[140px] pb-12 md:pt-[180px] md:pb-16 bg-white border-b border-[#e5e5e5]">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start">
        
        {/* Editorial Top Tag */}
        <div className="flex items-center gap-3 mb-6">
          <ArrowRight className="w-3.5 h-3.5 text-[#111111]" />
          <span className="font-poppins text-xs md:text-sm text-[#666666] font-medium tracking-wide">
            Hala Smart Technologies • Insights &amp; Articles
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-poppins text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-semibold text-[#111111] leading-[1.05] tracking-tight mb-8 max-w-[1000px]">
          Marketing <em className="eb-garamond font-normal italic">Insights</em> &amp; Growth Strategies
        </h1>

        {/* Overview */}
        <p className="font-poppins text-lg sm:text-xl md:text-2xl text-[#555555] leading-relaxed font-normal max-w-[850px] mb-12">
          Explore expert publications on AI marketing, digital strategies, SEO optimization, social media expansion, and high-impact visual editing tailored for modern business growth.
        </p>

        {/* Category Filter Navigation */}
        <div className="w-full pt-6 border-t border-[#f0f0f0] flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto no-scrollbar pb-2 sm:pb-0">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => onSelectCategory(cat)}
                  className={`whitespace-nowrap px-4 py-2 rounded-lg font-poppins text-xs md:text-sm font-semibold transition-colors cursor-pointer border ${
                    isActive
                      ? 'bg-[#007FFF] text-white border-[#007FFF]'
                      : 'bg-white text-[#555555] border-[#e5e5e5] hover:border-[#cccccc] hover:text-[#111111]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <span className="hidden lg:inline-block font-poppins text-xs text-[#888888] font-semibold uppercase tracking-wider whitespace-nowrap">
            Filter by Topic
          </span>
        </div>

      </div>
    </section>
  );
}
