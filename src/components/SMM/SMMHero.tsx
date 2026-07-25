'use client';

import Image from 'next/image';

export default function SMMHero() {
  return (
    <section className="relative w-full h-[100vh] min-h-[650px] flex flex-col items-center justify-center px-4 sm:px-6 z-10 overflow-hidden pt-[100px]">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/contentcreation.jpg"
          alt="Social Media Marketing Services Background"
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
        <h1 className="font-poppins text-3xl sm:text-5xl md:text-6xl lg:text-[76px] font-semibold leading-[1.1] tracking-tight mb-6 text-white max-w-[900px]">
          Social Media Marketing <br className="hidden sm:inline" />
          <em className="eb-garamond font-normal italic"> That Drives Growth</em>
        </h1>

        {/* Compact Subtitle */}
        <p className="font-poppins text-base md:text-lg lg:text-xl max-w-[720px] mx-auto font-medium text-white/90 leading-relaxed">
          Engage your audience, build brand loyalty, and drive measurable growth with data-driven Social Media Marketing across all major platforms.
        </p>
      </div>
    </section>
  );
}
