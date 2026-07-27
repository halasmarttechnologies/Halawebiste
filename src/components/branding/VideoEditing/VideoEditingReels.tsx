'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const socialDesigns = [
  { id: 1, title: 'Match Promo', image: '/featureimage.jpg' },
  { id: 2, title: 'Real Estate Campaign', image: '/hero-images/HomeHeroimage.png' },
  { id: 3, title: 'Restaurant Discount', image: '/brand3.png' },
];

// Desktop card config — computed once at module level
const DESKTOP_CONFIGS = [
  { xOffset: '-65%', yOffset: '-5%', scale: 0.85, zIndex: 10 },
  { xOffset: '0%',   yOffset: '5%',  scale: 1,    zIndex: 20 },
  { xOffset: '65%',  yOffset: '-5%', scale: 0.85, zIndex: 10 },
];

export default function VideoEditingReels() {
  return (
    <section className="w-full bg-white text-[#111] py-16 md:py-20 overflow-hidden relative">

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-center relative z-20 mb-12 md:mb-20">
        <h2 className="font-jakarta text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 text-[#111]">
          Instagram <span className="eb-garamond italic text-[#007FFF]">Reels &amp; Stories</span>
        </h2>
        <p className="text-[#555] font-jakarta text-sm md:text-base max-w-2xl mx-auto">
          Elevate your brand presence with premium, highly engaging short-form videos designed to capture attention and drive conversions.
        </p>
      </div>

      <div className="relative w-full max-w-[1200px] mx-auto h-[600px] md:h-[700px] flex justify-center items-center z-10">
        {/* Mobile Native Scroll Carousel */}
        <div className="md:hidden w-full h-full flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-12 pt-4 items-center [&::-webkit-scrollbar]:hidden" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {socialDesigns.map((design) => (
            <div key={design.id} className="shrink-0 w-[75vw] max-w-[320px] snap-center flex flex-col items-center">
              <div className="relative w-full aspect-[9/16] rounded-3xl overflow-hidden border border-black/5">
                <Image src={design.image} alt={design.title} fill className="object-cover" />
              </div>
              <button className="mt-6 px-8 py-3 bg-[#111] text-white font-jakarta font-semibold text-sm rounded-full shadow-lg hover:scale-105 transition-transform duration-300">
                Swipe Up
              </button>
            </div>
          ))}
        </div>

        {/* Desktop Overlapping Layout */}
        <div className="hidden md:flex relative w-full h-full justify-center items-center">
          {socialDesigns.map((design, index) => {
            const cfg = DESKTOP_CONFIGS[index];
            const isCenter = index === 1;
            return (
              <motion.div
                key={design.id}
                className="absolute top-1/2 left-1/2 flex flex-col items-center group"
                initial={false}
                animate={{
                  x: `calc(-50% + ${cfg.xOffset})`,
                  y: `calc(-50% + ${cfg.yOffset})`,
                  scale: cfg.scale,
                  zIndex: cfg.zIndex,
                }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <div className={`relative w-[320px] lg:w-[360px] aspect-[9/16] rounded-[2rem] overflow-hidden border transition-all duration-500 ${isCenter ? 'border-black/5' : 'border-black/5 opacity-70 group-hover:opacity-100 group-hover:scale-[1.02]'}`}>
                  <Image src={design.image} alt={design.title} fill className="object-cover" />
                </div>
                <button className={`absolute -bottom-6 px-8 py-3 bg-[#111] text-white font-jakarta font-semibold text-sm rounded-full shadow-lg hover:scale-105 transition-all duration-300 ${isCenter ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 group-hover:-translate-y-4'}`}>
                  Swipe Up
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
