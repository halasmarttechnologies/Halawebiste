'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function SEOIntro() {
  return (
    <div id="intro" className="w-full">
      {/* Dark Intro Section */}
      <section className="relative bg-[#111111] z-20 pt-16 pb-20 md:pt-24 md:pb-28 px-4 sm:px-6 lg:px-8 flex flex-col items-center border-b border-[#222222] overflow-hidden">
        <div className="max-w-[900px] text-center relative z-20">
          
          <span className="font-jakarta text-xs md:text-sm font-semibold text-[#007FFF] uppercase tracking-widest block mb-4">
            Search Dominance
          </span>

          <h2 className="font-jakarta font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-white leading-tight mb-8">
            Maximize Visibility with <em className="eb-garamond font-normal italic">Strategic SEO</em>
          </h2>

          <p className="font-jakarta text-base sm:text-lg md:text-xl lg:text-2xl leading-[1.7] mb-10 text-[#E8E6E1] font-normal max-w-[860px] mx-auto">
            If your website offers the best products or services but doesn’t appear in top Google search results, your competitors outperform you. In today’s digital world, visibility is everything. Search Engine Optimization (SEO) improves your online presence by optimizing content, technical structure, and authority across on-page, off-page, and technical SEO. Connect with active, high-intent customers in Dubai and turn search queries into sales.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#007FFF] hover:bg-[#0066CC] transition-colors duration-300 text-white font-jakarta font-semibold text-sm md:text-base px-8 py-3.5 rounded-xl"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
