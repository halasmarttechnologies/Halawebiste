'use client';

import Image from 'next/image';

export default function DigitalMarketingHero() {
  return (
    <section className="relative w-full h-[100vh] min-h-[650px] flex flex-col items-center justify-center px-4 sm:px-6 z-10 overflow-hidden pt-[100px]">
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
      <div className="relative z-20 text-center max-w-4xl flex flex-col items-center -mt-16 md:-mt-24">
        <h1 className="font-poppins text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-semibold leading-[1.1] tracking-tight mb-6 text-white max-w-[900px]">
          Digital Marketing That <em className="eb-garamond font-normal italic">Drives Growth</em>
        </h1>

        {/* Subtitle */}
        <p className="font-poppins text-base md:text-lg lg:text-xl max-w-[680px] mx-auto font-medium text-white/90 leading-relaxed">
          Transform your digital presence with tailored SEO, social media marketing, PPC, and web solutions engineered for maximum ROI in the UAE.
        </p>
      </div>
    </section>
  );
}
