'use client';

import Image from 'next/image';
import { Layers } from 'lucide-react';

export default function SMMWhyItMatters() {
  return (
    <section className="bg-white text-[#111111] w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#e5e5e5] rounded-t-[40px] md:rounded-t-[60px] relative z-30 -mt-8 md:-mt-10 overflow-hidden">
      <div className="max-w-[1280px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="font-jakarta font-semibold text-3xl sm:text-4xl md:text-[44px] text-[#111111] leading-tight mb-6">
              Social Media Marketing and Why It Matters
            </h2>
            <p className="font-jakarta text-base md:text-lg text-[#555555] leading-relaxed">
              Today’s customers discover, compare, and purchase directly on platforms like Facebook, Instagram, LinkedIn, TikTok, and YouTube. That’s why your brand must appear strategically, communicate clearly, and respond quickly.
              <br /><br />
              At Hala Technology, we manage everything from content planning to paid ad campaigns, ensuring your brand connects, engages, and grows. Whether you're a startup or a multinational company, our strategies put you in front of the right audience for measurable growth.
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-[#e5e5e5] bg-[#f9f9f9] group shadow-sm">
            <Image
              src="/design.jpg" 
              alt="Social Media Marketing Importance"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Clean Light Floating Label */}
            <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md text-[#111111] px-4 py-2 rounded-xl text-sm font-jakarta font-semibold border border-[#e5e5e5] flex items-center gap-2 shadow-sm z-10">
              <Layers className="w-4 h-4 text-[#007FFF]" />
              <span>SMM Placeholder</span>
            </div>
            {/* Subtle Overlay */}
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
