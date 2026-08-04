'use client';

import { useState, useCallback, memo } from 'react';
import Image from 'next/image';
import { Calendar, X } from 'lucide-react';
import dynamic from 'next/dynamic';
import WaveMarquee from './WaveMarquee';

const ContactCTA = dynamic(() => import('@/components/Home/ContactCTA'), {
  ssr: false,
});

const ctaBtn =
  'group flex items-center justify-center gap-2.5 py-3 px-7 ' +
  'bg-[#007FFF] text-white rounded-xl text-sm sm:text-[15px] ' +
  'font-semibold cursor-pointer transition-all duration-200 ' +
  'mb-5 shadow-lg shadow-[#007FFF]/25 hover:bg-[#0066CC] hover:scale-[1.03] active:scale-[0.98] border-none outline-none';

function HeroSectionComponent() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const openModal = useCallback(() => setIsBookingModalOpen(true), []);
  const closeModal = useCallback(() => setIsBookingModalOpen(false), []);

  return (
    <>
      <section className="relative z-0 flex flex-col items-center justify-between text-center w-full h-[100svh] min-h-[600px] overflow-hidden pt-[100px] gpu-layer">
        {/* Background Image Setup */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-images/HomeHeroimage.png"
            alt="Hero Background"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-90"
            priority
          />
          {/* Black overlays for high contrast */}
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-[#111111]" />
        </div>

        <div className="relative z-20 flex flex-col items-center justify-center w-full flex-grow px-4 sm:px-6 -mt-16 md:-mt-24">
          <h1 className="font-jakarta text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-[82px] font-extrabold leading-[1.05] tracking-[-1px] mb-6 max-w-[900px] w-full text-white">
            <span className="text-white font-semibold">
              <em className="eb-garamond">Grow</em>{' '}
              your brand.</span>{' '}

            <span className="text-white font-semibold block sm:inline mt-1 sm:mt-0">
              Dominate
              {' '}
              <em className="eb-garamond font-semibold">the market.</em>
            </span>
          </h1>

          <p className="text-[13px] sm:text-base md:text-lg text-white leading-relaxed mb-8 max-w-[420px] text-center">
            Digital marketing that delivers. <br />
            Real clicks. Real customers.
          </p>

          <button
            type="button"
            onClick={openModal}
            className={ctaBtn}
          >
            <Calendar className="w-4.5 h-4.5 text-white transition-transform group-hover:scale-110" />
            <span>Get a Free Consultation</span>
          </button>
        </div>

        <WaveMarquee />
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
    </>
  );
}

export default memo(HeroSectionComponent);
