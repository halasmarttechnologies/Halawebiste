'use client';
import Image from 'next/image';
import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Grid2X2, X } from 'lucide-react';
import GraphicDesignWaveMarquee from './GraphicDesignWaveMarquee';

const ContactCTA = dynamic(() => import('@/components/Home/ContactCTA/ContactCTA'), {
  ssr: false,
});

export default function GraphicDesignHero() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const openModal = useCallback(() => setIsBookingModalOpen(true), []);
  const closeModal = useCallback(() => setIsBookingModalOpen(false), []);

  return (
    <div className="relative w-full bg-[#111111] text-[#F3F0E6] overflow-x-hidden antialiased selection:bg-[#EADCF8] selection:text-[#111] rounded-b-[40px]">

      {/* Hero Section */}
      <section className="relative w-full h-[100vh] flex flex-col items-center justify-center px-4 sm:px-6 z-10 overflow-hidden pt-[75px] sm:pt-[85px]">

        {/* Background Image Setup */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-images/grphics.png"
            alt="Graphic Design Hero Background"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="opacity-90 blur-[2px] scale-105"
            priority
          />
          {/* Black overlays for high contrast and black-and-white design system */}
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-[#111111]"></div>
        </div>

        {/* Wavy Logo Marquee */}
        <GraphicDesignWaveMarquee />

        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-4xl flex flex-col items-center justify-center px-4 -mt-20 sm:-mt-24 md:-mt-24">
          <h1 className="font-jakarta text-5xl sm:text-6xl md:text-7xl lg:text-[85px] font-bold leading-[1.06] tracking-[-0.02em] mb-5 md:mb-6 text-white drop-shadow-xl text-center">
            <span className="block md:inline">Graphic design</span>{' '}
            <span className="block md:inline">that tells</span>{' '}
            <span className="block md:inline">your</span>{' '}
            <span className="eb-garamond font-normal italic text-white block md:inline-block">story.</span>
          </h1>

          <p className="font-jakarta text-sm sm:text-base md:text-lg lg:text-xl mb-8 md:mb-10 max-w-[600px] mx-auto font-semibold text-white/90 leading-relaxed px-2">
            We craft visuals that speak your brand's language with designs built to be strategic not just stylish.
          </p>

          <button 
            onClick={openModal}
            className="flex items-center justify-center gap-2 bg-white hover:bg-[#f4f4f4] transition-colors duration-300 text-[#1A1523] font-jakarta font-semibold text-[14px] md:text-[15px] px-8 py-3.5 rounded-md shadow-lg shadow-black/20 no-underline"
          >
            <Grid2X2 size={18} />
            Let's Talk Design
          </button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative bg-[#111111] z-20 rounded-t-[40px] md:rounded-t-[60px] -mt-8 md:-mt-10 pt-10 pb-24 md:pt-16 md:pb-32 px-6 flex flex-col items-center overflow-hidden">
        {/* Centered container for perfect alignment */}
        <div className="max-w-[900px] text-center relative z-30">

          <p className="font-jakarta text-xl md:text-2xl lg:text-3xl leading-[1.6] md:leading-[1.7] mb-10 md:mb-14 text-[#E8E6E1]">
            At Hala Smart Technologies we believe graphic design is more than just making things look good. It's about turning your brand's identity into visuals that grab attention communicate clearly and drive real engagement.
          </p>

          <p className="font-jakarta text-lg md:text-xl lg:text-2xl leading-[1.6] mb-12 md:mb-16 text-[#E8E6E1]/80">
            From eye-catching marketing materials to complete visual identity systems we create designs that bridge the gap between your brand and the people you're trying to reach.
          </p>

          <Link href="/contact" className="inline-block bg-[#222222] hover:bg-[#333333] transition-colors duration-300 text-white font-jakarta font-semibold text-[14px] md:text-[15px] px-8 py-4 rounded-md shadow-md border border-[#333333]">
            Explore Our Designs
          </Link>

        </div>
      </section>
      {/* Interactive Booking Modal Popup */}
      {isBookingModalOpen && (
        <div 
          className="fixed inset-0 z-[99999] bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200 gpu-layer"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="relative w-full max-w-[480px] max-h-[92vh] overflow-y-auto custom-scrollbar my-auto">
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-3.5 right-3.5 z-50 text-white/70 hover:text-white bg-black/80 hover:bg-black/95 p-2 rounded-full border border-white/20 transition-all cursor-pointer backdrop-blur-md"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <ContactCTA formOnly={true} />
          </div>
        </div>
      )}
    </div>
  );
}
