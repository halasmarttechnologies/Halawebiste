'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Layers, ArrowRight } from 'lucide-react';

export default function PPCWhyItMatters() {
  return (
    <section className="bg-white text-[#111111] w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#e5e5e5] rounded-t-[40px] md:rounded-t-[60px] relative z-30 -mt-8 md:-mt-10 overflow-hidden">
      <div className="max-w-[1280px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="font-poppins font-semibold text-3xl sm:text-4xl md:text-[44px] text-[#111111] leading-tight mb-6">
              What is PPC Advertising and Why It&apos;s Matter?
            </h2>
            <p className="font-poppins text-base md:text-lg text-[#555555] font-normal leading-relaxed mb-8">
              PPC stands for Pay-Per-Click, a digital advertising model where you only pay when someone clicks your ad. That means no wasted budget, only real, measurable results. Whether you’re launching a new product, running a special offer, or simply boosting web traffic, PPC gives you fast visibility, focused reach, and clear returns.
              <br /><br />
              At Hala Technology, we manage every part of your PPC campaign, from keywords to ads and daily tracking. You focus on your business while we bring the right audience and deliver measurable results.
            </p>
            
            <div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#007FFF] hover:bg-[#0066CC] transition-colors duration-300 text-white font-poppins font-semibold text-sm md:text-base px-8 py-3.5 rounded-xl"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-[#e5e5e5] bg-[#f9f9f9] group shadow-sm">
            <Image
              src="/mainpic.png" 
              alt="PPC Advertising Importance"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Clean Light Floating Label */}
            <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md text-[#111111] px-4 py-2 rounded-xl text-sm font-poppins font-semibold border border-[#e5e5e5] flex items-center gap-2 shadow-sm z-10">
              <Layers className="w-4 h-4 text-[#007FFF]" />
              <span>PPC Placeholder</span>
            </div>
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
