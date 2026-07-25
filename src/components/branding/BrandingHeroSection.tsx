'use client';
import { useState, useEffect } from 'react';

import Image from 'next/image';
import { Grid2X2 } from 'lucide-react';

export default function BrandingHeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative w-full bg-[#111111] text-[#F3F0E6] overflow-x-hidden antialiased selection:bg-[#EADCF8] selection:text-[#111] rounded-b-[40px]">

      {/* Hero Section */}
      <section className="relative w-full h-[100vh] flex flex-col items-center justify-center px-6 z-10 overflow-hidden pt-[100px]">

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
        {mounted && (
          <>
            {/* Mobile Marquee (Tighter curve for small screens) */}
            <div className="absolute md:hidden w-full min-w-[800px] left-1/2 -translate-x-1/2 h-[220px] z-10 pointer-events-none select-none overflow-hidden bottom-0">
              <svg
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
                <text className="font-poppins text-[13px] font-semibold tracking-[0.2em] uppercase fill-white opacity-40">
                  <textPath href="#wavyTextPathMobile" startOffset="0%">
                    <animate
                      attributeName="startOffset"
                      from="0%"
                      to="-100%"
                      dur="30s"
                      repeatCount="indefinite"
                    />
                    {Array(10).fill("STAND OUT FROM THE CROWD — BOLD BRANDING — UNIQUE IDENTITY — ").join(' ')}
                  </textPath>
                </text>
              </svg>
            </div>

            {/* Desktop Marquee (Wider curve for large screens) */}
            <div className="hidden md:block absolute w-full min-w-[1440px] left-1/2 -translate-x-1/2 h-[300px] z-10 pointer-events-none select-none overflow-hidden -bottom-4">
              <svg
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
                <text className="font-poppins text-[11px] font-semibold tracking-[0.2em] uppercase fill-white opacity-40">
                  <textPath href="#wavyTextPathDesktop" startOffset="0%">
                    <animate
                      attributeName="startOffset"
                      from="0%"
                      to="-100%"
                      dur="40s"
                      repeatCount="indefinite"
                    />
                    {Array(10).fill("STAND OUT FROM THE CROWD — BOLD BRANDING — UNIQUE IDENTITY — DOMINATE THE MARKET — ").join(' ')}
                  </textPath>
                </text>
              </svg>
            </div>
          </>
        )}

        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-4xl flex flex-col items-center">
          <h1 className="font-poppins text-5xl md:text-7xl lg:text-[85px] font-extrabold leading-[1.05] tracking-tight mb-6 text-white drop-shadow-xl">
            Branding that makes you
            <em className="eb-garamond font-semibold italic"> stand out.</em>
          </h1>

          <p className="font-poppins text-base md:text-lg lg:text-xl mb-10 max-w-[600px] mx-auto font-medium text-white/90 leading-relaxed">
            Build a memorable brand with custom logos,<br className="hidden sm:block" /> brand identity, and strategy that helps you grow.
          </p>

          <button className="flex items-center justify-center gap-2 bg-white hover:bg-[#f4f4f4] transition-colors duration-300 text-[#1A1523] font-poppins font-semibold text-[14px] md:text-[15px] px-8 py-3.5 rounded-md shadow-lg shadow-black/20">
            <Grid2X2 size={18} />
            Let's Talk Branding
          </button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative bg-[#111111] z-20 rounded-t-[40px] md:rounded-t-[60px] -mt-8 md:-mt-10 pt-10 pb-24 md:pt-16 md:pb-32 px-6 flex flex-col items-center overflow-hidden">
        {/* Centered container for perfect alignment */}
        <div className="max-w-[900px] text-center relative z-30">

          <p className="font-poppins text-xl md:text-2xl lg:text-3xl leading-[1.6] md:leading-[1.7] mb-10 md:mb-14 text-[#E8E6E1]">
            At Hala Technologies, we're rethinking the fundamental layer of branding: how your business connects with its audience. We believe a brand should be the most natural, powerful way to communicate your vision — and we're building the identities to make that a reality.
          </p>

          <p className="font-poppins text-lg md:text-xl lg:text-2xl leading-[1.6] mb-12 md:mb-16 text-[#E8E6E1]/80">
            Our branding strategies are already helping businesses ditch generic looks and express themselves faster, clearer, and more effortlessly. But we're just getting started.
          </p>

          <button className="bg-[#222222] hover:bg-[#333333] transition-colors duration-300 text-white font-poppins font-semibold text-[14px] md:text-[15px] px-8 py-4 rounded-md shadow-md border border-[#333333]">
            Learn about our Process
          </button>

        </div>
      </section>

    </div>
  );
}
