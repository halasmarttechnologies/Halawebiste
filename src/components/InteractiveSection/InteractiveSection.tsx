'use client';

import WaveMarquee from './WaveMarquee';
import PhoneMockup from './PhoneMockup';
import Link from 'next/link';

export default function InteractiveSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden pt-12 pb-[160px] md:pt-16 md:pb-32 flex justify-center rounded-t-[40px] md:rounded-t-[60px]">
      <WaveMarquee />

      <div className="max-w-[1200px] w-full px-6 sm:px-8 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">

        {/* Left Content */}
        <div className="flex flex-col items-start text-left lg:pr-10 -translate-y-4 md:-translate-y-8">
          <h2 className="font-jakarta font-bold text-4xl sm:text-5xl lg:text-6xl text-[#111111] leading-[1.1] mb-6">
            We Are Available on All{' '}
            <span className="font-jakarta font-bold text-[#111111]">Platforms.</span>
          </h2>
          {/* Mobile Description */}
          <p className="block md:hidden text-[#555555] text-lg sm:text-xl font-medium max-w-md leading-relaxed mb-8">
            Grow your business with Hala Technology's digital marketing, SEO, web development, and branding services.
          </p>
          {/* Desktop Description */}
          <p className="hidden md:block text-[#555555] text-lg sm:text-xl font-medium max-w-md leading-relaxed mb-8">
            Connect with Hala Technology wherever you are. Whether you&apos;re looking for digital marketing, SEO, web development, or branding solutions, our team is ready to help you grow your business across every platform.
          </p>
          <Link href="/contact" className="hidden md:inline-block w-fit bg-[#111111] text-white font-bold text-base px-8 py-3.5 rounded-xl shadow-lg hover:scale-105 transition-transform duration-200 text-center">
            Watch in action
          </Link>
        </div>

        {/* Phone Mockup — desktop/tablet only */}
        <div className="hidden md:block min-h-[550px] lg:min-h-[600px] w-full relative">
          <PhoneMockup />
        </div>

      </div>
    </section>
  );
}
