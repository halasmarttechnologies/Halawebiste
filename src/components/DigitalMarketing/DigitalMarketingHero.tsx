'use client';

import Image from 'next/image';
import { TrendingUp } from 'lucide-react';

export default function DigitalMarketingHero() {
  return (
    <section className="relative w-full h-[100vh] min-h-[650px] flex flex-col items-center justify-center px-4 sm:px-6 z-10 overflow-hidden pt-[75px] sm:pt-[85px]">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/mainpic.png"
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
      <div className="relative z-20 text-center max-w-4xl flex flex-col items-center justify-center px-4 -mt-20 sm:-mt-24 md:-mt-24">
        <h1 className="font-poppins text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-semibold leading-[1.06] tracking-[-0.02em] mb-6 md:mb-8 text-white max-w-[900px]">
          <span className="block md:inline">Digital</span>{' '}
          <span className="block md:inline">Marketing</span>{' '}
          <span className="block md:inline">That Drives</span>{' '}
          <span className="eb-garamond font-normal italic text-white block md:inline-block">Growth.</span>
        </h1>

        {/* Subtitle */}
        <p className="font-poppins text-lg sm:text-xl md:text-xl lg:text-2xl max-w-[680px] mx-auto font-medium text-white/90 leading-relaxed px-2">
          Transform your digital presence with tailored SEO, social media marketing, PPC, and web solutions engineered for maximum ROI in the UAE.
        </p>

        <button className="flex items-center justify-center gap-2 bg-white hover:bg-[#f4f4f4] transition-colors duration-300 text-[#1A1523] font-poppins font-semibold text-[14px] md:text-[15px] px-8 py-3.5 rounded-md shadow-lg shadow-black/20 mt-8 md:mt-10">
          <TrendingUp size={18} />
          Market Your Brand
        </button>
      </div>
    </section>
  );
}
