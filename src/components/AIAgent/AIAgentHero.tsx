'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Bot, ArrowRight } from 'lucide-react';

export default function AIAgentHero() {
  const garamondStyle = { fontFamily: "'EB Garamond', serif" };

  return (
    <div className="font-jakarta w-full relative overflow-hidden bg-[#111111] text-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 pt-[130px] pb-20 overflow-hidden select-none">
        {/* Background Image Setup */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-images/AiagentHeroimage.png"
            alt="AI Agents for Smarter Business Growth"
            fill
            className="object-cover object-center opacity-85 scale-105"
            priority
          />
          {/* Dark overlay for high contrast and seamless black design system */}
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#111111]"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          {/* Hero Headline (h1) */}
          <h1 className="font-jakarta text-4xl sm:text-6xl md:text-7xl lg:text-[84px] xl:text-[90px] font-semibold tracking-[-0.03em] leading-[1.08] sm:leading-[1.06] text-white mb-6 sm:mb-8 max-w-5xl text-center">
            AI Agents For Smarter{' '}
            <br className="hidden sm:block" />
            <span style={garamondStyle} className="eb-garamond italic font-normal text-white inline-block">
              Business Growth.
            </span>
          </h1>

          {/* Hero Subheadline */}
          <p className="font-jakarta text-base sm:text-lg md:text-xl font-normal text-white/90 max-w-3xl mx-auto leading-relaxed mb-8 sm:mb-10 text-center">
            At Hala Technologies, we empower businesses to grow smarter with next-generation AI Agents designed to transform marketing.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/contact"
              className="font-jakarta flex items-center justify-center gap-2.5 bg-white hover:bg-[#f4f4f4] transition-all duration-300 text-[#111111] font-semibold text-[14px] md:text-[15px] px-8 py-4 rounded-md shadow-lg shadow-black/20 group"
            >
              <Bot className="w-5 h-5 text-[#111111]" />
              <span>Deploy Your AI Agent</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative bg-[#111111] z-20 pt-8 pb-24 md:pt-12 md:pb-32 px-6 flex flex-col items-center border-b border-[#222222]">
        <div className="max-w-[960px] text-center relative z-30">
          
          {/* Subheading (h2) */}
          <h2 className="font-jakarta text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-[1.3] text-white mb-8 text-center">
            These advanced agents don’t just automate tasks—they{' '}
            <span style={garamondStyle} className="eb-garamond italic font-normal text-white">
              understand your audience
            </span>, deliver the right message at the right time, and build stronger relationships with your customers.
          </h2>

          <p className="font-jakarta text-lg md:text-xl lg:text-2xl leading-[1.7] text-[#E8E6E1]/90 max-w-4xl mx-auto font-normal text-center">
            By attracting high-quality traffic and turning prospects into loyal customers, our AI Agents help your brand grow with speed, precision, and measurable results.
          </p>

        </div>
      </section>
    </div>
  );
}
