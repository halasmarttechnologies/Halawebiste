'use client';

import { motion, useTime, useTransform } from 'framer-motion';
import Image from 'next/image';

// Inline SVG for Affinity Designer (replaces react-icons/si SiAffinitydesigner)
function AffinityDesignerIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="24,4 44,38 4,38" fill="none" stroke="white" strokeWidth="3" strokeLinejoin="round"/>
      <circle cx="24" cy="28" r="7" fill="white" fillOpacity="0.9"/>
    </svg>
  );
}

// Inline SVG for Affinity Photo (replaces react-icons/si SiAffinityphoto)
function AffinityPhotoIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="6" width="36" height="36" rx="8" fill="none" stroke="white" strokeWidth="3"/>
      <circle cx="24" cy="24" r="9" fill="white" fillOpacity="0.9"/>
      <circle cx="24" cy="24" r="4" fill="#8A2B87"/>
    </svg>
  );
}


const icons = [
  { type: 'image', src: '/photoshop.png', alt: 'Photoshop' },
  { type: 'image', src: '/illustrator.png', alt: 'Illustrator' },
  { type: 'figma' },
  { type: 'image', src: '/indesign.png', alt: 'InDesign' },
  { type: 'affinity-designer' },
  { type: 'affinity-photo' },
];

function RenderRealIcon({ iconDef, isDesktop }: { iconDef: any; isDesktop: boolean }) {
  const sizeMultiplier = isDesktop ? 1 : 0.6;

  if (iconDef.type === 'image') {
    return (
      <div className="w-full h-full flex items-center justify-center bg-transparent drop-shadow-2xl">
        <Image 
          src={iconDef.src} 
          alt={iconDef.alt} 
          width={80} 
          height={80} 
          className="w-full h-full object-contain drop-shadow-xl hover:scale-110 transition-transform duration-300"
        />
      </div>
    );
  }

  if (iconDef.type === 'figma') {
    return (
      <div className="w-full h-full flex items-center justify-center drop-shadow-2xl hover:scale-110 transition-transform duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 256 256" id="figma">
          <rect width="224" height="224" x="16" y="16" fill="#EEE" rx="70"></rect>
          <path fill="#1ABCFE" fillRule="evenodd" d="M128 127.999C128 115.726 137.949 105.776 150.222 105.776C162.495 105.776 172.444 115.726 172.444 127.999C172.444 140.272 162.495 150.221 150.222 150.221C137.949 150.221 128 140.272 128 127.999Z" clipRule="evenodd"></path>
          <path fill="#0ACF83" fillRule="evenodd" d="M83.5547 172.446C83.5547 160.173 93.5039 150.224 105.777 150.224H127.999V172.446C127.999 184.719 118.05 194.668 105.777 194.668C93.5039 194.668 83.5547 184.719 83.5547 172.446Z" clipRule="evenodd"></path>
          <path fill="#FF7262" fillRule="evenodd" d="M128 61.333V105.777H150.222C162.495 105.777 172.444 95.8282 172.444 83.5552C172.444 71.2822 162.495 61.333 150.222 61.333H128Z" clipRule="evenodd"></path>
          <path fill="#F24E1E" fillRule="evenodd" d="M83.5547 83.5552C83.5547 95.8282 93.5039 105.777 105.777 105.777H127.999V61.333H105.777C93.5039 61.333 83.5547 71.2822 83.5547 83.5552Z" clipRule="evenodd"></path>
          <path fill="#A259FF" fillRule="evenodd" d="M83.5547 127.999C83.5547 140.272 93.5039 150.221 105.777 150.221H127.999V105.776H105.777C93.5039 105.776 83.5547 115.726 83.5547 127.999Z" clipRule="evenodd"></path>
        </svg>
      </div>
    );
  }

  if (iconDef.type === 'affinity-designer') {
    return (
      <div 
        className="w-full h-full flex items-center justify-center rounded-[20%] shadow-xl shadow-black/50 border border-white/10 hover:scale-110 transition-transform duration-300" 
        style={{ background: 'linear-gradient(135deg, #174B8F 0%, #0D2B52 100%)' }}
      >
        <AffinityDesignerIcon size={38 * sizeMultiplier} />
      </div>
    );
  }
  
  if (iconDef.type === 'affinity-photo') {
    return (
      <div 
        className="w-full h-full flex items-center justify-center rounded-[20%] shadow-xl shadow-black/50 border border-white/10 hover:scale-110 transition-transform duration-300" 
        style={{ background: 'linear-gradient(135deg, #8A2B87 0%, #4A1249 100%)' }}
      >
        <AffinityPhotoIcon size={38 * sizeMultiplier} />
      </div>
    );
  }
  
  return null;
}

function IconItemMobile({ index, initialOffset }: { index: number; initialOffset: number }) {
  const time = useTime();
  const iconDef = icons[index % icons.length];
  
  const TOTAL_WIDTH = 1000;
  const MIN_X = -100;

  const x = useTransform(time, (t) => {
    const currentX = initialOffset - (t / 1000) * 80;
    return ((currentX - MIN_X) % TOTAL_WIDTH + TOTAL_WIDTH) % TOTAL_WIDTH + MIN_X;
  });

  const y = useTransform(x, (cx) => -0.0005 * Math.pow(cx - 400, 2) + 155);
  const rotation = useTransform(x, (cx) => Math.atan(-0.001 * (cx - 400)) * (180 / Math.PI));

  return (
    <motion.div
      className="absolute top-0 left-0 w-10 h-10 flex items-center justify-center [will-change:transform]"
      style={{
        x,
        y: useTransform(y, (yVal) => `calc(${yVal}px - 50%)`),
        rotate: rotation,
      }}
    >
      <RenderRealIcon iconDef={iconDef} isDesktop={false} />
    </motion.div>
  );
}

function IconItemDesktop({ index, initialOffset }: { index: number; initialOffset: number }) {
  const time = useTime();
  const iconDef = icons[index % icons.length];
  
  const TOTAL_WIDTH = 1840;
  const MIN_X = -200;

  const x = useTransform(time, (t) => {
    const currentX = initialOffset - (t / 1000) * 100;
    return ((currentX - MIN_X) % TOTAL_WIDTH + TOTAL_WIDTH) % TOTAL_WIDTH + MIN_X;
  });

  const y = useTransform(x, (cx) => -0.000206758 * Math.pow(cx - 720, 2) + 225);
  const rotation = useTransform(x, (cx) => Math.atan(-0.000413516 * (cx - 720)) * (180 / Math.PI));

  return (
    <motion.div
      className="absolute top-0 left-0 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center [will-change:transform]"
      style={{
        x,
        y: useTransform(y, (yVal) => `calc(${yVal}px - 50%)`),
        rotate: rotation,
      }}
    >
      <RenderRealIcon iconDef={iconDef} isDesktop={true} />
    </motion.div>
  );
}

export default function GraphicDesignWaveMarquee() {
  const NUM_MOBILE_ITEMS = 10;
  const NUM_DESKTOP_ITEMS = 16;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      
      {/* Mobile Marquee */}
      <div className="absolute md:hidden w-full min-w-[800px] left-1/2 -translate-x-1/2 h-[220px] bottom-4">
        {Array.from({ length: NUM_MOBILE_ITEMS }, (_, i) => (
          <IconItemMobile key={`mobile-${i}`} index={i} initialOffset={i * (1000 / NUM_MOBILE_ITEMS)} />
        ))}
      </div>

      {/* Desktop Marquee */}
      <div className="hidden md:block absolute w-full min-w-[1440px] left-1/2 -translate-x-1/2 h-[300px] bottom-2">
        {Array.from({ length: NUM_DESKTOP_ITEMS }, (_, i) => (
          <IconItemDesktop key={`desktop-${i}`} index={i} initialOffset={i * (1840 / NUM_DESKTOP_ITEMS)} />
        ))}
      </div>

    </div>
  );
}
