'use client';

import Image from 'next/image';
import { TrendingUp } from 'lucide-react';

export default function DigitalMarketingHero() {
  return (
    <section className="relative w-full h-[100vh] min-h-[650px] flex flex-col items-center justify-center px-4 sm:px-6 z-10 overflow-hidden pt-20">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-images/HomeHeroimage.png"
          alt="Digital Marketing Background"
          fill
          className="object-cover object-center opacity-90 scale-105"
          priority
        />
        {/* Black overlays for contrast */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-[#111111]"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center max-w-4xl flex flex-col items-center justify-center px-4">
        <h1 className="font-jakarta text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-bold tracking-[-0.03em] leading-[1.08] sm:leading-[1.06] text-white mb-6 sm:mb-8 max-w-6xl text-center">
          <span className="block">Digital Marketing That Drives</span>
          <span className="eb-garamond font-normal italic text-white block mt-1 sm:mt-2">Growth.</span>
        </h1>

        {/* Subtitle */}
        <p className="font-jakarta text-lg sm:text-xl md:text-xl lg:text-2xl max-w-[680px] mx-auto font-semibold text-white/90 leading-relaxed px-2">
          Transform your digital presence with tailored SEO, social media marketing, PPC, and web solutions engineered for maximum ROI in the UAE.
        </p>

        <button className="flex items-center justify-center gap-2 bg-white hover:bg-[#f4f4f4] transition-colors duration-300 text-[#1A1523] font-jakarta font-semibold text-[14px] md:text-[15px] px-8 py-3.5 rounded-md shadow-lg shadow-black/20 mt-8 md:mt-10">
          <TrendingUp size={18} />
          Market Your Brand
        </button>
      </div>
    </section>
  );
}
