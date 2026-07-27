'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Search, ArrowRight } from 'lucide-react';

export default function SEOHero() {
  return (
    <section className="relative w-full h-[100vh] min-h-[650px] flex flex-col items-center justify-center px-4 sm:px-6 z-10 overflow-hidden pt-20">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-images/SEOPAGEIMAGE.png"
          alt="SEO Services Background"
          fill
          className="object-cover object-center opacity-90 scale-105"
          priority
        />
        {/* Black overlays for contrast */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-[#111111]"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center max-w-5xl flex flex-col items-center justify-center px-4">
        <h1 className="font-jakarta text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold tracking-[-0.03em] leading-[1.08] sm:leading-[1.06] text-white mb-6 sm:mb-8 max-w-6xl text-center">
          <span className="block">SEO Services That Boost</span>
          <span className="eb-garamond italic font-normal text-white block mt-1 sm:mt-2">
            Rankings, Traffic &amp; Sales.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-jakarta text-base sm:text-lg md:text-xl max-w-[720px] mx-auto font-semibold text-white/90 leading-relaxed">
          Drive high-intent organic traffic, dominate Google search results across Dubai &amp; the UAE, and outperform your competitors with data-backed Search Engine Optimization.
        </p>

        {/* CTA Button */}
        <div className="flex items-center gap-4 mt-8">
          <Link
            href="/contact"
            className="font-jakarta flex items-center justify-center gap-2.5 bg-white hover:bg-[#f4f4f4] transition-all duration-300 text-[#111111] font-semibold text-[14px] md:text-[15px] px-8 py-4 rounded-md shadow-lg shadow-black/20 group"
          >
            <Search className="w-5 h-5 text-[#111111]" />
            <span>Audit Your Website</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
