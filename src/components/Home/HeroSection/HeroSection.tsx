'use client';

import Image from 'next/image';
import { Grid2X2 } from 'lucide-react';
import WaveMarquee from './WaveMarquee';

// ─── Shared class constants ───────────────────────────
const ctaBtn =
  'flex items-center justify-center gap-2 py-2.5 px-6 ' +
  'bg-[#007FFF] text-white rounded-xl text-sm sm:text-[15px] ' +
  'font-semibold cursor-pointer transition-transform transition-colors duration-150 ' +
  'mb-5 shadow-md shadow-[#007FFF]/20 hover:bg-[#0066CC] hover:scale-[1.02] active:scale-[0.98]';

export default function HeroSection() {
  return (
    <section className="relative z-0 flex flex-col items-center justify-between text-center w-full h-[100svh] min-h-[600px] overflow-hidden pt-[100px]">
      {/* Background Image Setup */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-images/HomeHeroimage.png"
          alt="Hero Background"
          fill
          className="object-cover object-center opacity-90"
          priority
        />
        {/* Black overlays for high contrast and black-and-white design system */}
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-[#111111]"></div>
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center w-full flex-grow px-4 sm:px-6 -mt-16 md:-mt-24">
        <h1 className="font-jakarta text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-[82px] font-extrabold leading-[1.05] tracking-[-1px] mb-6 max-w-[900px] w-full text-white">
          <span className="text-white font-semibold">
            <em className="eb-garamond">Scale</em>{' '}
            your brand.</span>{' '}

          <span className="text-white font-semibold block sm:inline mt-1 sm:mt-0">Dominate
            {' '}
            <em className="eb-garamond font-semibold">the market.</em>
          </span>
        </h1>

        <p className="text-[13px] sm:text-base md:text-lg text-white leading-relaxed mb-8 max-w-[420px] text-center">
          Digital marketing agency <br />
          that turns clicks into customers.
        </p>

        <button className={ctaBtn}>
          <Grid2X2 size={18} />
          Get a Free Consultation
        </button>
      </div>

      <WaveMarquee />
    </section>
  );
}
