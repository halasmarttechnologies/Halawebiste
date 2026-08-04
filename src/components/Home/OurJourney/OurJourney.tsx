'use client';

import Image from 'next/image';

const row1Logos = [
  { id: 1, src: '/Companies Logos/1.png', alt: 'Company Logo 1' },
  { id: 2, src: '/Companies Logos/2.png', alt: 'Company Logo 2' },
  { id: 3, src: '/Companies Logos/3.png', alt: 'Company Logo 3' },
  { id: 4, src: '/Companies Logos/4.png', alt: 'Company Logo 4' },
  { id: 5, src: '/Companies Logos/5.png', alt: 'Company Logo 5' },
  { id: 6, src: '/Companies Logos/6.png', alt: 'Company Logo 6' },
  { id: 7, src: '/Companies Logos/7.png', alt: 'Company Logo 7' },
  { id: 8, src: '/Companies Logos/8.png', alt: 'Company Logo 8' },
  { id: 9, src: '/Companies Logos/9.png', alt: 'Company Logo 9' },
];

const row2Logos = [
  { id: 10, src: '/Companies Logos/10.png', alt: 'Company Logo 10' },
  { id: 11, src: '/Companies Logos/11.png', alt: 'Company Logo 11' },
  { id: 12, src: '/Companies Logos/12.png', alt: 'Company Logo 12' },
  { id: 13, src: '/Companies Logos/13.png', alt: 'Company Logo 13' },
  { id: 14, src: '/Companies Logos/14.png', alt: 'Company Logo 14' },
  { id: 15, src: '/Companies Logos/15.png', alt: 'Company Logo 15' },
  { id: 16, src: '/Companies Logos/16.png', alt: 'Company Logo 16' },
  { id: 17, src: '/Companies Logos/17.png', alt: 'Company Logo 17' },
  { id: 18, src: '/Companies Logos/18.png', alt: 'Company Logo 18' },
];

export default function OurJourney() {
  const renderMarqueeTrack = (items: typeof row1Logos, direction: 'forward' | 'reverse') => {
    const animationClass = direction === 'forward' ? 'animate-marquee' : 'animate-marquee-reverse';

    return (
      <div className="flex w-full overflow-hidden relative group">
        <div className={`flex items-center ${animationClass} [animation-duration:18s] whitespace-nowrap min-w-max shrink-0 group-hover:[animation-play-state:paused]`}>
          {items.map((logo, index) => (
            <div
              key={`track1-${index}`}
              className="flex items-center justify-center px-8 md:px-14 py-2 transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={180}
                height={80}
                className="max-h-12 sm:max-h-16 md:max-h-20 w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Duplicate Track for Smooth Infinity Loop */}
        <div className={`flex items-center ${animationClass} [animation-duration:18s] whitespace-nowrap min-w-max shrink-0 group-hover:[animation-play-state:paused]`} aria-hidden="true">
          {items.map((logo, index) => (
            <div
              key={`track2-${index}`}
              className="flex items-center justify-center px-8 md:px-14 py-2 transition-transform duration-300 hover:scale-105 cursor-pointer"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={180}
                height={80}
                className="max-h-12 sm:max-h-16 md:max-h-20 w-auto object-contain"
              />
            </div>
          ))}
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
          <div className="mb-8 md:mb-12">
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
