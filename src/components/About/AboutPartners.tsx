'use client';

import React from 'react';
import { ArrowUpRight, ExternalLink, Globe } from 'lucide-react';
import Image from 'next/image';

export default function AboutPartners() {
  return (
    <section className="bg-white text-[#111111] w-full py-8 md:py-12 px-4 sm:px-6 lg:px-8">
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
          <div className="bg-white border border-[#e5e5e5] rounded-2xl p-6 hover:shadow-sm transition-shadow duration-300">
            {/* Website Preview Image Container */}
            <div className="relative aspect-[16/9] w-full rounded-xl overflow-hidden mb-6 bg-gray-100">
              <Image
                src="https://www.dynamicleo.ae/og-image.jpg"
                alt="Dynamic Leo Website"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            {/* Partner Details */}
            <h3 className="font-jakarta text-2xl font-semibold text-black mb-2">
              Dynamic Leo
            </h3>
            
            <p className="font-jakarta text-sm text-black mb-6 leading-relaxed">
              Architecting Enterprise AI &amp; Scalable Digital Ecosystems for UAE businesses. Custom software and robust digital infrastructure.
            </p>

            {/* Card Footer Link */}
            <a
              href="https://dynamicleo.ae/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-jakarta font-semibold text-black hover:underline"
            >
              Visit Website <ExternalLink className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
