'use client';
import Image from 'next/image';
import { Grid2X2 } from 'lucide-react';

export default function BrandingHeroSection() {
  return (
    <div className="relative w-full bg-[#111111] text-[#F3F0E6] overflow-x-hidden antialiased selection:bg-[#EADCF8] selection:text-[#111] rounded-b-[40px]">

      {/* Hero Section */}
      <section className="relative w-full h-[100vh] flex flex-col items-center justify-center px-4 sm:px-6 z-10 overflow-hidden pt-[75px] sm:pt-[85px]">

        {/* Background Image Setup */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/3.png"
            alt="Branding Hero Background"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="opacity-90 blur-[2px] scale-105"
            priority
          />
          {/* Black overlays for high contrast and black-and-white design system */}
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-[#111111]"></div>
        </div>

        {/* 
          This SVG spans the hero section. 
          It uses a cubic bezier curve (C) to create the flowing 'S' shape.
        */}
        <>
            {/* Mobile Marquee (Tighter curve for small screens) */}
            <div className="absolute md:hidden w-full min-w-[800px] left-1/2 -translate-x-1/2 h-[220px] z-10 pointer-events-none select-none overflow-hidden bottom-10 sm:bottom-12">
              <svg
                suppressHydrationWarning
                className="w-full h-full"
                viewBox="0 0 800 220"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="wavyTextPathMobile"
                  d="M -100 30 Q 400 280 900 30"
                  fill="none"
                  stroke="transparent"
                />
                <text className="font-jakarta text-[13px] font-semibold tracking-[0.2em] uppercase fill-white opacity-40">
                  <textPath href="#wavyTextPathMobile" startOffset="0%">
                    <animate
                      attributeName="startOffset"
                      from="0%"
                      to="-100%"
                      dur="30s"
                      repeatCount="indefinite"
                    />
                    {Array(10).fill("STAND OUT FROM THE CROWD • BOLD BRANDING • UNIQUE IDENTITY • ").join(' ')}
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Desktop Marquee (Wider curve for large screens) */}
            <div className="hidden md:block absolute w-full min-w-[1440px] left-1/2 -translate-x-1/2 h-[300px] z-10 pointer-events-none select-none overflow-hidden -bottom-4">
              <svg
                suppressHydrationWarning
                className="w-full h-full"
                viewBox="0 0 1440 300"
                preserveAspectRatio="xMidYMid slice"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="wavyTextPathDesktop"
                  d="M -200 50 Q 720 400 1640 50"
                  fill="none"
                  stroke="transparent"
                />
                <text className="font-jakarta text-[11px] font-semibold tracking-[0.2em] uppercase fill-white opacity-40">
                  <textPath href="#wavyTextPathDesktop" startOffset="0%">
                    <animate
                      attributeName="startOffset"
                      from="0%"
                      to="-100%"
                      dur="40s"
                      repeatCount="indefinite"
                    />
                    {Array(10).fill("STAND OUT FROM THE CROWD • BOLD BRANDING • UNIQUE IDENTITY • DOMINATE THE MARKET • ").join(' ')}
                  </textPath>
                </text>
              </svg>
            </div>
          </>


        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-4xl flex flex-col items-center justify-center px-4 -mt-20 sm:-mt-24 md:-mt-24">
          <h1 className="font-jakarta text-5xl sm:text-6xl md:text-7xl lg:text-[85px] font-bold leading-[1.06] tracking-[-0.02em] mb-5 md:mb-6 text-white drop-shadow-xl text-center">
            <span className="block md:inline">Building</span>{' '}
            <span className="block md:inline">brands that</span>{' '}
            <span className="block md:inline">make a lasting</span>{' '}
            <span className="eb-garamond font-normal italic text-white block md:inline-block">impact.</span>
          </h1>

          <p className="font-jakarta text-sm sm:text-base md:text-lg lg:text-xl mb-8 md:mb-10 max-w-[600px] mx-auto font-semibold text-white/90 leading-relaxed px-2">
            We craft custom logos brand identity and strategy that turn your business into a name people trust.
          </p>

          <button className="flex items-center justify-center gap-2 bg-white hover:bg-[#f4f4f4] transition-colors duration-300 text-[#1A1523] font-jakarta font-semibold text-[14px] md:text-[15px] px-8 py-3.5 rounded-md shadow-lg shadow-black/20">
            <Grid2X2 size={18} />
            Let's Talk Branding
          </button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative bg-[#111111] z-20 rounded-t-[40px] md:rounded-t-[60px] -mt-8 md:-mt-10 pt-10 pb-24 md:pt-16 md:pb-32 px-6 flex flex-col items-center overflow-hidden">
        {/* Centered container for perfect alignment */}
        <div className="max-w-[900px] text-center relative z-30">

          <p className="font-jakarta text-xl md:text-2xl lg:text-3xl leading-[1.6] md:leading-[1.7] mb-10 md:mb-14 text-[#E8E6E1]">
            At Hala Smart Technologies we're rethinking what branding really means how your business connects with the people it's trying to reach. We believe a strong brand isn't just a logo it's the clearest most natural way to communicate who you are and we build the identities that make that possible.
          </p>

          <p className="font-jakarta text-lg md:text-xl lg:text-2xl leading-[1.6] mb-12 md:mb-16 text-[#E8E6E1]/80">
            Our branding strategies are already helping businesses move away from generic forgettable looks toward identities that feel authentic and instantly recognizable. And this is only the beginning.
          </p>

          <button className="bg-[#222222] hover:bg-[#333333] transition-colors duration-300 text-white font-jakarta font-semibold text-[14px] md:text-[15px] px-8 py-4 rounded-md shadow-md border border-[#333333]">
            Learn about our Process
          </button>

        </div>
      </section>

    </div>
  );
}
