'use client';

import Image from 'next/image';
import { BarChart2 } from 'lucide-react';

export default function SEOPerformanceShowcase() {
  const showcases = [
    {
      id: 'showcase-1',
      tag: 'Search Console Analytics',
      badgeBg: 'bg-[#007FFF] text-white',
      title: 'Google Search Console & Organic Rankings',
      subtitle: 'Showcasing impressions, organic click-through rates, and top keyword positioning in UAE search results.',
      image: '/seo.jpg',
      alt: 'SEO Performance Showcase 1'
    },
    {
      id: 'showcase-2',
      tag: 'Traffic & Conversion Growth',
      badgeBg: 'bg-[#111111] text-white',
      title: 'High-Intent Traffic & ROI Campaign Analytics',
      subtitle: 'Demonstrating high-intent user traffic, lead conversion rates, and ROI growth metrics.',
      image: '/hero-images/HomeHeroimage.png',
      alt: 'SEO Performance Showcase 2'
    }
  ];

  return (
    <section className="bg-white text-[#111111] w-full py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#e5e5e5] rounded-t-[40px] md:rounded-t-[60px] relative z-30 -mt-8 md:-mt-10 overflow-hidden">
      <div className="max-w-[1280px] mx-auto w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="font-jakarta font-bold text-2xl sm:text-4xl md:text-5xl lg:text-[52px] text-[#111111] leading-tight mb-4 sm:mb-6 max-w-4xl tracking-tight">
            Effective SEO Growth, Traffic, and Visibility
          </h2>

          <p className="font-jakarta text-sm sm:text-base md:text-lg text-[#555555] font-normal max-w-3xl leading-relaxed px-2">
            At Hala Technology, we are your trusted partner for sustainable SEO growth, driving targeted organic traffic and maximizing search visibility across the UAE. From in-depth keyword research and technical site architecture to high-authority link building, we engineer strategies that outrank competitors and turn search intent into revenue.
          </p>
        </div>

        {/* 2 Showcase Cards Grid (Fully Responsive Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 w-full">
          {showcases.map((item) => (
            <div
              key={item.id}
              className="bg-[#f9f9f9] border border-[#e5e5e5] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 flex flex-col justify-between hover:border-[#cccccc] transition-colors"
            >
              {/* Card Header Info */}
              <div className="flex items-center justify-between mb-3 sm:mb-4 gap-2 flex-wrap">
                <span className={`font-jakarta text-[11px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md ${item.badgeBg}`}>
                  {item.tag}
                </span>
                <span className="font-jakarta text-[11px] sm:text-xs text-[#888888] font-semibold flex items-center gap-1.5">
                  <BarChart2 className="w-3.5 h-3.5 text-[#111111]" />
                  Verified Performance
                </span>
              </div>

              {/* Card Title & Subtitle */}
              <h3 className="font-jakarta text-lg sm:text-xl md:text-2xl font-bold text-[#111111] mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="font-jakarta text-xs sm:text-sm text-[#666666] font-normal leading-relaxed mb-4 sm:mb-6">
                {item.subtitle}
              </p>

              {/* Responsive Image Container */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl sm:rounded-2xl overflow-hidden border border-[#e5e5e5] bg-white group">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-102"
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
