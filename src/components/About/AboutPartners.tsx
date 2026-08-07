'use client';

import React from 'react';
import { ArrowUpRight, ExternalLink, Globe } from 'lucide-react';
import Image from 'next/image';

export default function AboutPartners() {
  return (
    <section className="bg-white text-[#111111] w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#e5e5e5]">
      <div className="max-w-[1280px] mx-auto w-full">

        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <span className="font-jakarta text-xs font-bold text-[#007FFF] uppercase tracking-widest mb-3">
            Our Strategic Partners
          </span>
          <h2 className="font-jakarta text-3xl sm:text-4xl md:text-5xl font-bold text-[#111111] leading-tight mb-4">
            Collaborating With <span className="font-jakarta">Industry Leaders</span>
          </h2>
          <p className="font-jakarta text-base md:text-lg text-[#555555] max-w-2xl leading-relaxed">
            We partner with innovative technology companies to build scalable digital ecosystems and deliver high-impact solutions for businesses across the GCC.
          </p>
        </div>

        {/* Partner Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full max-w-4xl">

          {/* Dynamic Leo Card */}
          <div className="bg-[#fafafa] border border-[#e5e5e5] rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:shadow-md transition-all duration-300">
            <div>
              {/* Website Preview Image Container */}
              <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-6 border border-[#e0e0e0] bg-[#f0f0f0] group">
                <Image
                  src="https://www.dynamicleo.ae/og-image.jpg"
                  alt="Dynamic Leo Website Preview"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <a
                  href="https://dynamicleo.ae/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]"
                >
                  <span className="inline-flex items-center gap-2 bg-white text-[#111111] font-jakarta font-semibold text-xs py-2.5 px-4 rounded-full shadow-md">
                    <span>Visit Website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </a>
              </div>

              {/* Partner Details */}
              <div className="flex items-center justify-between gap-2 mb-3 flex-wrap">
                <h3 className="font-jakarta text-2xl font-bold text-[#111111]">
                  Dynamic Leo
                </h3>
                <span className="font-jakarta text-xs font-semibold text-[#007FFF] bg-[#007FFF]/10 px-3 py-1 rounded-full">
                  Enterprise AI &amp; Software
                </span>
              </div>

              <p className="font-jakarta text-sm text-[#555555] leading-relaxed mb-6">
                Architecting Enterprise AI &amp; Scalable Digital Ecosystems for UAE businesses. Custom software, AI automation, and robust digital infrastructure.
              </p>
            </div>

            {/* Card Footer Link */}
            <div className="pt-4 border-t border-[#eaeaea] flex items-center justify-between">
              <span className="font-jakarta text-xs text-[#888888] font-medium flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#007FFF]" />
                dynamicleo.ae
              </span>
              <a
                href="https://dynamicleo.ae/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-jakarta font-semibold text-[#111111] hover:text-[#007FFF] transition-colors cursor-pointer"
              >
                <span>Visit Partner</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
