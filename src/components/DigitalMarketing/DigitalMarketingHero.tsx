'use client';

import Image from 'next/image';
import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { TrendingUp, X } from 'lucide-react';

const ContactCTA = dynamic(() => import('@/components/Home/ContactCTA/ContactCTA'), {
  ssr: false,
});

export default function DigitalMarketingHero() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const openModal = useCallback(() => setIsBookingModalOpen(true), []);
  const closeModal = useCallback(() => setIsBookingModalOpen(false), []);

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
          <span className="font-jakarta font-normal text-white block mt-1 sm:mt-2">Growth.</span>
        </h1>

        {/* Subtitle */}
        <p className="font-jakarta text-lg sm:text-xl md:text-xl lg:text-2xl max-w-[680px] mx-auto font-semibold text-white/90 leading-relaxed px-2">
          Transform your digital presence with tailored SEO, social media marketing, PPC, and web solutions engineered for maximum ROI in the UAE.
        </p>

        <button 
          onClick={openModal}
          className="flex items-center justify-center gap-2 bg-white hover:bg-[#f4f4f4] transition-colors duration-300 text-[#1A1523] font-jakarta font-semibold text-[14px] md:text-[15px] px-8 py-3.5 rounded-md shadow-lg shadow-black/20 mt-8 md:mt-10"
        >
          <TrendingUp size={18} />
          Market Your Brand
        </button>
      </div>
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
    </section>
  );
}
