'use client';

import { useState, useCallback, useRef, memo } from 'react';
import Image from 'next/image';
import { X, ArrowRight } from 'lucide-react';
import dynamic from 'next/dynamic';
import WaveMarquee from './WaveMarquee';

const ContactCTA = dynamic(() => import('@/components/Home/ContactCTA'), {
  ssr: false,
});

// Use first 10 logos for two rows of 5
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
  const emailRef = useRef<HTMLInputElement>(null);

  const openModal  = useCallback(() => setIsBookingModalOpen(true),  []);
  const closeModal = useCallback(() => setIsBookingModalOpen(false), []);

  const handleEmailSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    openModal();
  }, [openModal]);

  return (
    <>
      {/* ─────────────────── HERO SECTION ─────────────────── */}
      <section className="relative z-0 flex flex-col items-center justify-center text-center w-full min-h-[100svh] overflow-hidden gpu-layer bg-[#0a0a0a]">

        {/* ── Ambient Colour Glows (matching the screenshot) ── */}
        {/* Orange / red blob — bottom-left */}
        <div className="pointer-events-none absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#FF4500]/40 blur-[120px] z-0" />
        {/* Blue blob — top-right */}
        <div className="pointer-events-none absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full bg-[#007FFF]/35 blur-[110px] z-0" />
        {/* Subtle purple mid-blend */}
        <div className="pointer-events-none absolute bottom-1/3 right-1/3 w-[300px] h-[300px] rounded-full bg-[#7B2FFF]/15 blur-[90px] z-0" />

        {/* ── Background Image (kept, dark overlay on top) ── */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-images/HomeHeroimage.png"
            alt="Hero Background"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/60" />
        </div>

        {/* ── Main Content ── */}
        <div className="relative z-20 flex flex-col items-center justify-center w-full flex-grow px-4 sm:px-6 pt-[100px] pb-10">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 text-white/80 text-[11px] font-semibold px-4 py-1.5 rounded-full mb-8 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#007FFF] animate-pulse" />
            Dubai's #1 Digital Agency
          </div>

          {/* Headline */}
          <h1 className="font-jakarta font-bold text-white leading-[1.07] tracking-tight mb-6 max-w-[780px] w-full text-[44px] sm:text-[64px] md:text-[76px] lg:text-[88px]">
            Grow your brand.<br />
            <span className="text-white">Dominate the&nbsp;market.</span>
          </h1>

          {/* Sub-headline */}
          <p className="font-jakarta text-[15px] sm:text-[17px] text-white/65 leading-relaxed mb-10 max-w-[430px] text-center font-medium">
            Fast-growing businesses across the UAE trust us with<br className="hidden sm:block" />
            web design, SEO &amp; digital growth. Will you?
          </p>

          {/* Email + CTA Row */}
          <form
            onSubmit={handleEmailSubmit}
            className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-[480px] mb-16"
          >
            <input
              ref={emailRef}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your work email"
              className="flex-1 w-full sm:w-auto bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/45 text-sm font-medium px-5 py-3.5 rounded-xl outline-none focus:border-[#007FFF]/60 transition-colors"
            />
            <button
              type="submit"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#007FFF] hover:bg-[#0066CC] active:scale-[0.97] text-white font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 whitespace-nowrap shadow-lg shadow-[#007FFF]/30"
            >
              Request a Call
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </form>

          {/* ── Logo Grid ── */}
          <div className="w-full max-w-[780px]">
            <p className="font-jakarta text-[11px] font-semibold uppercase tracking-[0.16em] text-white/35 mb-6">
              Trusted by leading brands
            </p>
            <div className="grid grid-cols-5 gap-x-6 gap-y-5 place-items-center">
              {clientLogos.map((src, i) => (
                <div key={i} className="flex items-center justify-center h-8 sm:h-10 w-full">
                  <img
                    src={src}
                    alt={`Client ${i + 1}`}
                    className="h-6 sm:h-8 w-auto max-w-[100px] object-contain filter brightness-0 invert opacity-50 hover:opacity-80 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave Marquee */}
        <WaveMarquee />
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
