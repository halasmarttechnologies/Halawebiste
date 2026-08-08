'use client';
import Image from 'next/image';
import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Grid2X2, X, ArrowRight, Instagram, Facebook, Linkedin } from 'lucide-react';

const ContactCTA = dynamic(() => import('@/components/Home/ContactCTA/ContactCTA'), {
  ssr: false,
});

export default function BrandingHeroSection() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const openModal = useCallback(() => setIsBookingModalOpen(true), []);
  const closeModal = useCallback(() => setIsBookingModalOpen(false), []);

  return (
    <div className="relative w-full bg-[#111111] text-[#F3F0E6] overflow-x-hidden antialiased selection:bg-[#EADCF8] selection:text-[#111] rounded-b-[40px]">

      {/* ─────────────────── HERO SECTION ─────────────────── */}
      <section className="relative z-0 flex flex-col items-center justify-start w-full min-h-[100svh] overflow-hidden gpu-layer">

        {/* ── Background image ── */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-images/Brandingheropage.png"
            alt="Branding Hero Background"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
        </div>

        {/* Social Icons (Right side, lower corner) */}
        <div className="absolute bottom-6 sm:bottom-10 right-5 sm:right-8 lg:right-16 z-20 flex gap-4 sm:gap-5 text-white/30">
          <Link href="https://instagram.com" target="_blank" className="hover:text-white/70 transition-colors"><Instagram className="w-5 h-5 sm:w-6 sm:h-6" /></Link>
          <Link href="https://facebook.com" target="_blank" className="hover:text-white/70 transition-colors"><Facebook className="w-5 h-5 sm:w-6 sm:h-6" /></Link>
          <Link href="https://linkedin.com" target="_blank" className="hover:text-white/70 transition-colors"><Linkedin className="w-5 h-5 sm:w-6 sm:h-6" /></Link>
        </div>

        {/* ── Main Content ── */}
        <div className="relative z-20 flex flex-col items-start justify-center w-full max-w-[1400px] mx-auto min-h-[100svh] px-5 sm:px-8 lg:px-16 pt-24 pb-16 sm:pb-10 text-left">

          {/* Headline */}
          <h1 className="font-jakarta font-bold text-white leading-[1.1] tracking-tight mb-4 sm:mb-5 w-full max-w-[800px]
            text-[34px] xs:text-[40px] sm:text-[54px] md:text-[64px] lg:text-[72px]">
            <span className="block">Building brands that</span>
            <span className="block">make a lasting impact.</span>
          </h1>

          <p className="font-jakarta text-[15px] xs:text-base md:text-lg mb-8 max-w-[600px] font-medium text-white/80 leading-relaxed pr-4 sm:pr-0">
            We craft custom logos, brand identity, and strategy that turn your business into a name people trust.
          </p>

          {/* Email + CTA — stacked on mobile, side-by-side on sm+ */}
          <form
            onSubmit={(e) => { e.preventDefault(); openModal(); }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full max-w-[460px] mb-8 sm:mb-12"
          >
            <input
              type="email"
              placeholder="Enter your work email"
              className="flex-1 w-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/45 text-[14px] sm:text-[15px] font-medium px-4 py-3.5 sm:py-4 rounded-xl outline-none focus:border-[#007FFF]/70 transition-colors text-left"
            />
            <button
              type="submit"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#007FFF] hover:bg-[#0066CC] active:scale-[0.97] text-white font-bold text-[14px] sm:text-[15px] px-6 py-3.5 sm:py-4 rounded-xl transition-all duration-200 whitespace-nowrap shadow-lg shadow-[#007FFF]/30"
            >
              Let's Talk Branding
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </form>

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

          <Link href="/contact" className="inline-block bg-[#222222] hover:bg-[#333333] transition-colors duration-300 text-white font-jakarta font-semibold text-[14px] md:text-[15px] px-8 py-4 rounded-md shadow-md border border-[#333333]">
            Learn about our Process
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
