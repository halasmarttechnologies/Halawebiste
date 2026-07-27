'use client';

import Image from 'next/image';
import { TrendingUp, BarChart3 } from 'lucide-react';

export default function DigitalMarketingShowcase() {
  const showcaseItems = [
    {
      id: 'result-1',
      badge: 'Proof of Growth 01',
      title: 'Organic Traffic & SEO Performance',
      subtitle: 'Verified search rank increases and lead conversion metrics across UAE search queries.',
      image: '/seo.jpg', // Placeholder image path - can be replaced easily
      alt: 'Marketing Result Screenshot 1'
    },
    {
      id: 'result-2',
      badge: 'Proof of Growth 02',
      title: 'High-ROI Campaign Analytics',
      subtitle: 'Targeted ad spend performance and conversion rate optimizations delivering measurable growth.',
      image: '/hero-images/HomeHeroimage.png', // Placeholder image path - can be replaced easily
      alt: 'Marketing Result Screenshot 2'
    }
  ];

  return (
    <section className="bg-white w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#e5e5e5]">
      <div className="max-w-[1280px] mx-auto w-full">
        
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-12 md:mb-16">
          <div className="flex items-center gap-2 bg-[#007FFF]/10 border border-[#007FFF]/20 px-4 py-1.5 rounded-full mb-4">
            <TrendingUp className="w-4 h-4 text-[#007FFF]" />
            <span className="font-jakarta text-xs md:text-sm font-semibold text-[#007FFF] uppercase tracking-wider">
              Proof of Performance
            </span>
          </div>

          <h2 className="font-jakarta font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-[#111111] leading-tight mb-4 max-w-4xl">
            Real Marketing Results &amp; <em className="eb-garamond font-normal italic">Proven Numbers</em>
          </h2>

          <p className="font-jakarta text-base md:text-lg text-[#555555] font-normal max-w-2xl leading-relaxed">
            A transparent view of our data-backed marketing campaigns and growth metrics driving tangible ROI for businesses across Dubai &amp; the UAE.
          </p>
        </div>

        {/* 2 Screenshot Image Placeholders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {showcaseItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#f9f9f9] border border-[#e5e5e5] rounded-3xl p-6 md:p-8 flex flex-col justify-between hover:border-[#cccccc] transition-colors"
            >
              {/* Card Top Information */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-jakarta text-xs font-semibold text-[#007FFF] uppercase tracking-wider bg-[#007FFF]/10 px-3 py-1 rounded-md">
                  {item.badge}
                </span>
                <span className="font-jakarta text-xs text-[#888888] font-medium flex items-center gap-1.5">
                  <BarChart3 className="w-3.5 h-3.5 text-[#111111]" />
                  Verified Analytics
                </span>
              </div>

              {/* Card Title & Description */}
              <h3 className="font-jakarta text-xl md:text-2xl font-semibold text-[#111111] mb-2">
                {item.title}
              </h3>
              <p className="font-jakarta text-xs md:text-sm text-[#666666] font-normal leading-relaxed mb-6">
                {item.subtitle}
              </p>

              {/* Screenshot Image Container Placeholder */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-[#e5e5e5] bg-white group">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-102"
                />
                
                {/* Subtle Overlay Badge indicating editable placeholder */}
                <div className="absolute bottom-4 right-4 bg-[#111111]/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-jakarta font-medium border border-white/20">
                  Screenshot Placeholder
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
