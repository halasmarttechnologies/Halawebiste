'use client';

import { useState, useCallback, useRef, memo } from 'react';
import Image from 'next/image';
import { X, ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';

const ContactCTA = dynamic(() => import('@/components/Home/ContactCTA'), {
  ssr: false,
});

// First 10 client logos — two rows of 5
const clientLogos = [
  '/Companies Logos/1.png',
  '/Companies Logos/2.png',
  '/Companies Logos/3.png',
  '/Companies Logos/4.png',
  '/Companies Logos/5.png',
  '/Companies Logos/6.png',
  '/Companies Logos/7.png',
  '/Companies Logos/8.png',
  '/Companies Logos/9.png',
  '/Companies Logos/10.png',
];

function HeroSectionComponent() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [email, setEmail] = useState('');

  const openModal  = useCallback(() => setIsBookingModalOpen(true),  []);
  const closeModal = useCallback(() => setIsBookingModalOpen(false), []);

  const handleEmailSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    openModal();
  }, [openModal]);

  return (
    <>
      {/* ─────────────────── HERO SECTION ─────────────────── */}
      <section className="relative z-0 flex flex-col items-center justify-center text-center w-full h-[100svh] min-h-[580px] max-h-[900px] overflow-hidden gpu-layer">

        {/* ── Background image (the 123.png screenshot design) ── */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-images/hero-bg.png"
            alt="Hero Background"
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          {/* Light dark gradient overlay so text is crisp */}
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/50" />
        </div>

        {/* ── All content centred, compact ── */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full h-full px-4 sm:px-6 pt-[80px] pb-6 gap-0">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white/85 text-[10px] sm:text-[11px] font-semibold px-3.5 py-1.5 rounded-full mb-4 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#007FFF] animate-pulse" />
            Dubai&apos;s #1 Digital Agency
          </div>

          {/* Headline — tighter sizing */}
          <h1 className="font-jakarta font-bold text-white leading-[1.1] tracking-tight mb-3 w-full text-[32px] sm:text-[48px] md:text-[60px] lg:text-[68px]">
            <span className="block whitespace-nowrap">Grow your brand.</span>
            <span className="block whitespace-nowrap">Dominate the market.</span>
          </h1>

          {/* Subheadline */}
          <p className="font-jakarta text-[13px] sm:text-[15px] text-white/65 leading-relaxed mb-6 max-w-[400px] text-center font-medium">
            Fast-growing businesses across the UAE trust us with
            web design, SEO &amp; digital growth. Will you?
          </p>

          {/* Email + CTA */}
          <form
            onSubmit={handleEmailSubmit}
            className="flex flex-col sm:flex-row items-center gap-2.5 w-full max-w-[440px] mb-8"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email"
              className="flex-1 w-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/45 text-sm font-medium px-4 py-3 rounded-xl outline-none focus:border-[#007FFF]/70 transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto flex items-center justify-center gap-1.5 bg-[#007FFF] hover:bg-[#0066CC] active:scale-[0.97] text-white font-bold text-sm px-5 py-3 rounded-xl transition-all duration-200 whitespace-nowrap shadow-lg shadow-[#007FFF]/30"
            >
              Request a Call
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </form>

          {/* ── Logo Grid ── */}
          <div className="w-full max-w-[680px]">
            <p className="font-jakarta text-[10px] font-semibold uppercase tracking-[0.15em] text-white/35 mb-4">
              Trusted by leading brands
            </p>
            <div className="grid grid-cols-5 gap-x-4 gap-y-3 place-items-center">
              {clientLogos.map((src, i) => (
                <div key={i} className="flex items-center justify-center h-7 sm:h-8 w-full">
                  <img
                    src={src}
                    alt={`Client ${i + 1}`}
                    className="h-5 sm:h-7 w-auto max-w-[90px] object-contain filter brightness-0 invert opacity-50 hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Booking Modal ── */}
      {isBookingModalOpen && (
        <div
          className="fixed inset-0 z-[99999] bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200 gpu-layer"
          onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
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
    </>
  );
}

export default memo(HeroSectionComponent);
