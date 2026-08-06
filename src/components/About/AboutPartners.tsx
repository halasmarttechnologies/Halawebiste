'use client';

import React from 'react';
import { ExternalLink, ShieldCheck, Cpu, Globe, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

export default function AboutPartners() {
  return (
    <section className="relative w-full bg-[#0d0d0d] text-white py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden border-t border-b border-[#222222]">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#98702B]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#007FFF]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto w-full relative z-10">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#98702B]/15 border border-[#98702B]/30 text-[#D4AF37] text-xs font-jakarta font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Strategic Partnership
          </div>

          <h2 className="font-jakarta text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl">
            Architecting The Future <em className="eb-garamond font-normal italic text-[#D4AF37]">With Dynamic Leo</em>
          </h2>

          <p className="font-jakarta text-base sm:text-lg text-[#aaaaaa] max-w-2xl font-normal leading-relaxed">
            Hala Technologies collaborates with industry leaders to deliver end-to-end digital excellence. Meet our key technology and AI partner powering next-generation solutions in the UAE.
          </p>
        </div>

        {/* Partner Showcase Card */}
        <div className="bg-[#161616] border border-[#2a2a2a] rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl transition-all duration-300 hover:border-[#98702B]/40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Left Column: Info & Synergy */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full space-y-6">
              <div>
                {/* Status & Badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#222222] border border-[#333333] text-[#D4AF37] text-xs font-jakarta font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified UAE Partner
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-jakarta text-[#888888]">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Active Ecosystem Synergy
                  </span>
                </div>

                {/* Partner Title */}
                <h3 className="font-jakarta text-3xl sm:text-4xl font-bold text-white tracking-tight mb-2">
                  Dynamic Leo
                </h3>
                <p className="font-jakarta text-sm sm:text-base font-semibold text-[#D4AF37] mb-5">
                  Enterprise AI &amp; Scalable Digital Ecosystems — UAE
                </p>

                {/* Description */}
                <p className="font-jakarta text-sm sm:text-base text-[#cccccc] leading-relaxed mb-6 font-normal">
                  Dynamic Leo is a premier technology firm based in the UAE, architecting custom Enterprise AI systems, automated workflows, and high-performance digital infrastructure. Through our strategic synergy, we combine Hala’s creative &amp; digital marketing prowess with Dynamic Leo’s deep AI capabilities to power ambitious GCC enterprises.
                </p>

                {/* Key Capabilities */}
                <div className="space-y-3 mb-6">
                  <h4 className="font-jakarta text-xs uppercase tracking-wider text-[#888888] font-bold">
                    Core Capabilities &amp; Expertise
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      'Enterprise AI Systems',
                      'Custom Software Architecture',
                      'AI Automation & Workflows',
                      'Scalable Digital Infrastructure',
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm font-jakarta text-[#dddddd]">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-4 border-t border-[#262626] flex items-center justify-between flex-wrap gap-4">
                <a
                  href="https://dynamicleo.ae/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#98702B] hover:bg-[#b08334] text-white font-jakarta font-semibold text-sm transition-all duration-200 shadow-lg shadow-[#98702B]/20 cursor-pointer group"
                >
                  <span>Visit Partner Website</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <span className="font-jakarta text-xs text-[#777777] flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-[#98702B]" />
                  www.dynamicleo.ae
                </span>
              </div>
            </div>

            {/* Right Column: Live Website Browser Mockup */}
            <div className="lg:col-span-6 w-full">
              <div className="relative rounded-2xl overflow-hidden bg-[#0A0A0A] border border-[#333333] shadow-2xl group transition-all duration-300 hover:border-[#98702B]/60">

                {/* Browser Header Bar */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#1c1c1c] border-b border-[#2a2a2a] select-none">
                  {/* Traffic lights */}
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <span className="w-3 h-3 rounded-full bg-[#27C93F]" />
                  </div>

                  {/* URL Bar */}
                  <div className="flex items-center gap-2 px-4 py-1 rounded-md bg-[#111111] border border-[#2d2d2d] text-xs text-[#aaaaaa] font-mono max-w-[280px] w-full justify-center">
                    <span className="text-emerald-400 text-[10px]">🔒</span>
                    <span className="truncate">https://dynamicleo.ae</span>
                  </div>

                  {/* Live Status Indicator */}
                  <div className="flex items-center gap-1.5 text-[11px] font-jakarta text-[#888888]">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Live</span>
                  </div>
                </div>

                {/* Website Preview Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#111111]">
                  {/* High Quality Preview Image */}
                  <Image
                    src="https://www.dynamicleo.ae/og-image.jpg"
                    alt="Dynamic Leo Website Preview"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    priority
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 backdrop-blur-[2px]">
                    <a
                      href="https://dynamicleo.ae/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#111111] font-jakarta font-bold text-sm shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 hover:bg-[#D4AF37] hover:text-black cursor-pointer"
                    >
                      <span>Explore dynamicleo.ae</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Bottom Info Bar Overlay */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-4 flex items-center justify-between">
                    <div>
                      <p className="font-jakarta text-xs font-semibold text-white">Dynamic Leo — Architecting Tomorrow</p>
                      <p className="font-jakarta text-[11px] text-[#aaaaaa]">Enterprise AI &amp; Software Solutions</p>
                    </div>
                    <a
                      href="https://dynamicleo.ae/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#D4AF37] font-semibold flex items-center gap-1 hover:underline"
                    >
                      Preview <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
