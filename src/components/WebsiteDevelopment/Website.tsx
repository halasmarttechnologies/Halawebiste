'use client';

import Image from 'next/image';

export default function Website() {
  return (
    <div className="relative w-full overflow-hidden">
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-[120px] pb-16 overflow-hidden select-none">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-images/webpage.jpg"
          alt="Web Development Background"
          fill
          className="object-cover object-center opacity-90"
          priority
        />
        {/* Black overlays for high contrast and black-and-white design system */}
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-[#111111]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">


        {/* Hero Headline */}
        <h1 className="font-jakarta text-5xl sm:text-6xl md:text-7xl lg:text-[84px] xl:text-[90px] font-bold tracking-[-0.03em] leading-[1.08] sm:leading-[1.06] text-white mb-6 sm:mb-8 max-w-5xl">
          We Build Websites{' '}
          <br className="hidden sm:block" />
          <span className="eb-garamond italic font-normal text-white inline-block">
            That Drive Growth.
          </span>
        </h1>

        {/* Hero Subheadline */}
        <p className="font-jakarta text-base sm:text-lg md:text-xl font-semibold text-white/80 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10">
          Strategy. Design. Performance. Unified for measurable ROI.
        </p>

        <button className="flex items-center justify-center gap-2 bg-white hover:bg-[#f4f4f4] transition-colors duration-300 text-[#1A1523] font-jakarta font-semibold text-[14px] md:text-[15px] px-8 py-3.5 rounded-md shadow-lg shadow-black/20">
          Let's build a website
        </button>
      </div>
    </section>

      {/* Intro Section */}
      <section className="relative bg-[#111111] z-10 pt-10 pb-24 md:pt-16 md:pb-32 px-6 flex flex-col items-center">
        {/* Centered container for perfect alignment */}
        <div className="max-w-[900px] text-center relative z-30">

          <p className="font-jakarta text-xl md:text-2xl lg:text-3xl leading-[1.6] md:leading-[1.7] mb-10 md:mb-14 text-[#E8E6E1]">
            At Hala Smart Technologies, we don’t just build websites; we craft powerful digital experiences that drive real business growth. As Dubai’s trusted web design agency, we fuse cutting-edge technology with bold, purposeful design to create solutions that don’t just compete, they lead.
          </p>

          <p className="font-jakarta text-lg md:text-xl lg:text-2xl leading-[1.6] mb-12 md:mb-16 text-[#E8E6E1]/80">
            From startups to established enterprises, UAE’s most ambitious brands trust us to deliver proven results across every industry. Your website isn’t just a digital business card—it’s your hardest-working salesperson, open 24/7, building trust and closing deals while you sleep.
          </p>

          <button className="bg-[#222222] hover:bg-[#333333] transition-colors duration-300 text-white font-jakarta font-semibold text-[14px] md:text-[15px] px-8 py-4 rounded-md shadow-md border border-[#333333]">
            Start Your Project
          </button>

        </div>
      </section>

    </div>
  );
}

export { Website };
