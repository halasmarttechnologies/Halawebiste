'use client';

import Image from 'next/image';
import { BarChart2, Layers } from 'lucide-react';

export default function SEOPerformanceShowcase() {
  const placeholders = [
    {
      id: 'placeholder-1',
      tag: 'Metrics Placeholder 01',
      badgeBg: 'bg-[#007FFF] text-white',
      title: 'Google Search Console & Organic Rankings',
      subtitle: 'Showcasing impressions, organic click-through rates, and top keyword positioning in UAE search results.',
      image: '/seo.jpg',
      alt: 'SEO Performance Screenshot 1'
    },
    {
      id: 'placeholder-2',
      tag: 'Metrics Placeholder 02',
      badgeBg: 'bg-[#007FFF] text-white',
      title: 'Google Ads & Traffic Campaign Analytics',
      subtitle: 'Demonstrating high-intent user traffic, lead conversion rates, and ROI growth metrics.',
      image: '/mainpic.png',
      alt: 'SEO Performance Screenshot 2'
    }
  ];

  return (
    <section className="bg-white text-[#111111] w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#e5e5e5] rounded-t-[40px] md:rounded-t-[60px] relative z-30 -mt-8 md:-mt-10 overflow-hidden">
      <div className="max-w-[1280px] mx-auto w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-12 md:mb-16">
          <h2 className="font-poppins font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-[#111111] leading-tight mb-6 max-w-4xl">
            Effective SEO Growth, Traffic, and Visibility
          </h2>

          <p className="font-poppins text-base md:text-lg text-[#555555] font-normal max-w-3xl leading-relaxed">
            At Hala Technology, we are your trusted partner for sustainable SEO growth, driving targeted organic traffic and maximizing search visibility across the UAE. From in-depth keyword research and technical site architecture to high-authority link building, we engineer strategies that outrank competitors and turn search intent into revenue.
          </p>
        </div>

        {/* 2 Screenshot Image Placeholders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 w-full">
          {placeholders.map((item) => (
            <div
              key={item.id}
              className="bg-[#f9f9f9] border border-[#e5e5e5] rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-[#cccccc] transition-colors"
            >
              {/* Card Header Info */}
              <div className="flex items-center justify-between mb-4">
                <span className={`font-poppins text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-md ${item.badgeBg}`}>
                  {item.tag}
                </span>
                <span className="font-poppins text-xs text-[#888888] font-medium flex items-center gap-1.5">
                  <BarChart2 className="w-3.5 h-3.5 text-[#111111]" />
                  Verified Performance
                </span>
              </div>

              {/* Card Title & Subtitle */}
              <h3 className="font-poppins text-xl md:text-2xl font-semibold text-[#111111] mb-2">
                {item.title}
              </h3>
              <p className="font-poppins text-xs md:text-sm text-[#666666] font-normal leading-relaxed mb-6">
                {item.subtitle}
              </p>

              {/* Creative Screenshot Container */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-[#e5e5e5] bg-white group">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-102"
                />
                
                {/* Clean Light Floating Label */}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md text-[#111111] px-3.5 py-1.5 rounded-lg text-xs font-poppins font-medium border border-[#e5e5e5] flex items-center gap-2">
                  <Layers className="w-3.5 h-3.5 text-[#007FFF]" />
                  <span>Replace With Your Screenshot</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
