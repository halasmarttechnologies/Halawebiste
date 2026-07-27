'use client';

import { 
  Hexagon, Triangle, Box, Command, 
  Aperture, Activity, Globe, Layers,
  Cloud, Zap, Shield, Compass
} from 'lucide-react';

const row1Logos = [
  { name: 'MIDAD', industry: 'Holding Group', icon: Hexagon },
  { name: 'ALHAMRANI', industry: 'Universal Company', icon: Triangle },
  { name: 'Allianz', industry: 'Insurance', icon: Shield },
  { name: 'al-daawa', industry: 'Pharmacy', icon: Box },
  { name: 'alkhorayef', industry: 'Petroleum Services', icon: Activity },
  { name: 'tamimi', industry: 'Markets', icon: Layers },
];

const row2Logos = [
  { name: 'FMCD', industry: 'Supply Chain', icon: Command },
  { name: 'dmg events', industry: 'Global Events', icon: Aperture },
  { name: 'zimmo', industry: 'Real Estate', icon: Globe },
  { name: 'al-kifah', industry: 'Holding', icon: Cloud },
  { name: 'petro min', industry: 'Energy', icon: Zap },
  { name: 'sahara', industry: 'Logistics', icon: Compass },
];

export default function OurJourney() {


  const renderMarqueeTrack = (items: typeof row1Logos, direction: 'forward' | 'reverse') => {
    const animationClass = direction === 'forward' ? 'animate-marquee' : 'animate-marquee-reverse';
    
    return (
      <div className="flex w-full overflow-hidden relative group">
        <div className={`flex items-center ${animationClass} whitespace-nowrap min-w-max shrink-0 group-hover:[animation-play-state:paused]`}>
          {items.map((logo, index) => {
            const Icon = logo.icon;
            return (
              <div
                key={`track1-${index}`}
                className="flex flex-col items-center justify-center px-10 md:px-14 py-4 transition-all duration-300 group/item cursor-pointer"
              >
                <div className="flex items-center gap-3 text-[#111111]/60 group-hover/item:text-[#007FFF] transition-colors duration-300">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 stroke-[1.8]" />
                  <span className="font-jakarta text-xl md:text-2xl font-bold tracking-tight uppercase">
                    {logo.name}
                  </span>
                </div>
                <span className="text-[10px] md:text-[11px] font-semibold text-[#888888] tracking-widest uppercase mt-1">
                  {logo.industry}
                </span>
              </div>
            );
          })}
        </div>

        {/* Duplicate Track for Smooth Infinity Loop */}
        <div className={`flex items-center ${animationClass} whitespace-nowrap min-w-max shrink-0 group-hover:[animation-play-state:paused]`} aria-hidden="true">
          {items.map((logo, index) => {
            const Icon = logo.icon;
            return (
              <div
                key={`track2-${index}`}
                className="flex flex-col items-center justify-center px-10 md:px-14 py-4 transition-all duration-300 group/item cursor-pointer"
              >
                <div className="flex items-center gap-3 text-[#111111]/60 group-hover/item:text-[#007FFF] transition-colors duration-300">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 stroke-[1.8]" />
                  <span className="font-jakarta text-xl md:text-2xl font-bold tracking-tight uppercase">
                    {logo.name}
                  </span>
                </div>
                <span className="text-[10px] md:text-[11px] font-semibold text-[#888888] tracking-widest uppercase mt-1">
                  {logo.industry}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section className="bg-white text-[#111111] w-full px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-[1400px] w-full mx-auto flex flex-col items-center">

        {/* Title */}
        <div className="text-center mb-16 md:mb-20 px-4">
          <h2 className="font-jakarta font-bold text-[28px] sm:text-3xl md:text-[36px] leading-[1.3] tracking-tight text-[#171a22]">
            Our Journey of Innovation & Impact
          </h2>
        </div>

        {/* 2-Row Marquee Container */}
        <div className="w-full relative overflow-hidden flex flex-col py-4">

          {/* Row 1 */}
          <div className="mb-6 md:mb-8">
            {renderMarqueeTrack(row1Logos, 'reverse')}
          </div>

          {/* Row 2 */}
          <div>
            {renderMarqueeTrack(row2Logos, 'forward')}
          </div>

        </div>

      </div>
    </section>
  );
}
