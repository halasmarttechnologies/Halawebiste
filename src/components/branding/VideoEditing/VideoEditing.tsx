'use client';
import Image from 'next/image';
import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { PlayCircle, X } from 'lucide-react';

const ContactCTA = dynamic(() => import('@/components/Home/ContactCTA/ContactCTA'), {
  ssr: false,
});

export default function VideoEditing() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const openModal = useCallback(() => setIsBookingModalOpen(true), []);
  const closeModal = useCallback(() => setIsBookingModalOpen(false), []);

  return (
    <div className="relative w-full bg-[#111111] text-[#F3F0E6] overflow-x-hidden antialiased selection:bg-[#EADCF8] selection:text-[#111]">

      {/* Hero Section */}
      <section className="relative w-full h-[100vh] flex flex-col items-center justify-center px-4 sm:px-6 z-10 overflow-hidden pt-[75px] sm:pt-[85px]">

        {/* Background Image Setup */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-images/Dell.jpg"
            alt="Video Editing Hero Background"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="opacity-90 blur-[2px] scale-105"
            priority
          />
          {/* Black overlays for high contrast */}
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-[#111111]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-4xl flex flex-col items-center justify-center px-4 mt-6 sm:mt-10 md:mt-12">
          <h1 className="font-jakarta text-5xl sm:text-6xl md:text-7xl lg:text-[85px] font-bold leading-[1.08] tracking-[-0.02em] mb-5 md:mb-6 text-white drop-shadow-xl text-center">
            <span className="block md:inline">Videos That</span>{' '}
            <span className="font-jakarta font-normal text-white block md:inline-block">Demand Attention.</span>
          </h1>

          <p className="font-jakarta text-sm sm:text-base md:text-lg lg:text-xl mb-8 md:mb-10 max-w-[600px] mx-auto font-semibold text-white/90 leading-relaxed px-2">
            Professional editing and eye catching thumbnails that turn casual viewers into loyal subscribers.
          </p>

          <button 
            onClick={openModal}
            className="flex items-center justify-center gap-2 bg-white hover:bg-[#f4f4f4] transition-colors duration-300 text-[#1A1523] font-jakarta font-semibold text-[14px] md:text-[15px] px-8 py-3.5 rounded-md shadow-lg shadow-black/20"
          >
            <PlayCircle size={18} />
            Let's Make It Happen
          </button>
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
