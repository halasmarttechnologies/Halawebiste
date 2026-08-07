'use client';

import Image from 'next/image';
import { useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { MessageCircle, ArrowRight, X } from 'lucide-react';

const ContactCTA = dynamic(() => import('@/components/Home/ContactCTA/ContactCTA'), {
  ssr: false,
});

export default function WhatsAppHero() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const openModal = useCallback(() => setIsBookingModalOpen(true), []);
  const closeModal = useCallback(() => setIsBookingModalOpen(false), []);

  return (
    <div className="font-jakarta w-full relative overflow-hidden bg-[#111111] text-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-[130px] pb-20 overflow-hidden select-none">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-images/WhatsappHeroImage.png"
            alt="WhatsApp Automation background"
            fill
            className="object-cover object-center opacity-75 scale-105"
            priority
          />
          <div className="absolute inset-0 bg-black/65"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#111111]"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">

          {/* Hero Headline (h1) */}
          <h1 className="font-jakarta text-4xl sm:text-6xl md:text-7xl lg:text-[82px] font-semibold tracking-[-0.03em] leading-[1.08] sm:leading-[1.06] text-white mb-6 sm:mb-8 max-w-5xl text-center">
            WhatsApp Automation For{' '}
            <br className="hidden sm:block" />
            <span className="font-jakarta text-white inline-block">
              Customer Engagement.
            </span>
          </h1>

          {/* Hero Subheadline */}
          <p className="font-jakarta text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10 text-center">
            At Hala Technologies, we help businesses transform WhatsApp from a simple chat tool into a powerful automated communication channel. Engage leads, boost response times, and drive conversions 24/7.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              onClick={openModal}
              className="font-jakarta flex items-center justify-center gap-2.5 bg-[#007FFF] hover:bg-[#0066CC] transition-all duration-300 text-white font-semibold text-[14px] md:text-[15px] px-8 py-4 rounded-xl shadow-lg shadow-[#007FFF]/30 group"
            >
              <MessageCircle className="w-5 h-5 text-white" />
              <span>Deploy WhatsApp Bot</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative bg-[#111111] z-20 pt-8 pb-24 md:pt-12 md:pb-32 px-6 flex flex-col items-center border-b border-[#222222]">
        <div className="max-w-[960px] text-center relative z-30">
          
          {/* Subheading (h2) */}
          <h2 className="font-jakarta text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.3] text-white mb-8 text-center">
            Streamline customer interactions, speed up sales, and{' '}
            <span className="font-jakarta text-white">
              engage your audience around-the-clock
            </span> without constant manual effort.
          </h2>

          <p className="font-jakarta text-lg md:text-xl lg:text-2xl leading-[1.7] text-[#E8E6E1]/90 max-w-4xl mx-auto text-center">
            From automated instant replies and interactive chat menus to bulk notifications and CRM integration, our WhatsApp Automation turns every chat into a high-converting customer relationship.
          </p>

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
