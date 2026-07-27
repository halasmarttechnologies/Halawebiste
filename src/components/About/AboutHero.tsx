'use client';
import { Command, Grid, ShieldCheck } from 'lucide-react';
import type { ElementType } from 'react';

type TextLogo = {
  type: 'text';
  name: string;
  style: string;
};

type IconLogo = {
  type: 'icon';
  name: string;
  icon: ElementType;
  text: string;
};

type StackedLogo = {
  type: 'stacked';
  name: string;
  text1: string;
  text2: string;
};

type LogoItem = TextLogo | IconLogo | StackedLogo;

const logos: LogoItem[] = [
  { name: 'clay', type: 'text', style: 'font-bold text-2xl tracking-tighter lowercase' },
  { name: 'substack', type: 'text', style: 'font-serif font-bold text-2xl tracking-tight lowercase' },
  { name: 'warp', type: 'icon', icon: Command, text: 'warp' },
  { name: 'GROUPON', type: 'text', style: 'font-black text-xl tracking-widest uppercase' },
  { name: 'MERCURY', type: 'icon', icon: ShieldCheck, text: 'MERCURY' },
  { name: 'MENLO', type: 'stacked', text1: 'MENLO', text2: 'VENTURES' },
  { name: 'replit', type: 'icon', icon: Grid, text: 'replit' },
  { name: 'nuuly', type: 'text', style: 'font-bold text-2xl tracking-tighter lowercase' },
];

function renderLogo(logo: LogoItem) {
  if (logo.type === 'text') {
    return <span className={logo.style}>{logo.name}</span>;
  }
  if (logo.type === 'icon') {
    const Icon = logo.icon;
    return (
      <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
        <Icon className="w-6 h-6 stroke-[2.5]" />
        <span>{logo.text}</span>
      </div>
    );
  }
  if (logo.type === 'stacked') {
    return (
      <div className="flex flex-col items-start leading-none uppercase font-black tracking-widest">
        <span className="text-xl">{logo.text1}</span>
        <span className="text-[10px] text-[#888]">{logo.text2}</span>
      </div>
    );
  }
  return null;
}

export default function AboutHero() {
  return (
    <section className="bg-white text-[#111111] w-full h-[100vh] relative overflow-hidden flex flex-col items-center justify-center pt-[100px]">

      {/* Main Content */}
      <div className="text-center px-4 max-w-4xl mx-auto z-10 mb-12 md:mb-16">
        <h1 className="font-jakarta font-semibold text-5xl sm:text-6xl md:text-7xl lg:text-[84px] leading-[1.05] tracking-tight mb-6 md:mb-8">
          <span className="font-jakarta font-bold text-[#111111]">Your Trusted</span><br />
          <span>Digital Partner</span>
        </h1>
        <p className="font-jakarta font-medium text-[#555555] text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          Hala Technology helps businesses grow through SEO, web development, branding, and digital marketing. We combine creativity and technology to deliver innovative solutions that boost visibility, engagement, and long-term growth.
        </p>
      </div>

      {/* Logo Marquee */}
      <div className="w-full relative flex flex-col items-center justify-center">
        <p className="font-jakarta text-sm md:text-base text-[#555555] mb-10">
          Trusted by teams who put security first:
        </p>

        <div className="w-full relative flex items-center overflow-hidden">

          {/* Fade edges */}
          <div className="absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

          {/* Track 1 */}
          <div className="flex items-center gap-12 md:gap-20 px-6 animate-marquee whitespace-nowrap min-w-max shrink-0">
            {logos.map((logo, idx) => (
              <div key={`first-${logo.name}-${idx}`} className="flex items-center justify-center text-[#111111] opacity-70 hover:opacity-100 transition-opacity">
                {renderLogo(logo)}
              </div>
            ))}
          </div>

          {/* Track 2 (duplicate for seamless loop) */}
          <div className="flex items-center gap-12 md:gap-20 px-6 animate-marquee whitespace-nowrap min-w-max shrink-0" aria-hidden="true">
            {logos.map((logo, idx) => (
              <div key={`second-${logo.name}-${idx}`} className="flex items-center justify-center text-[#111111] opacity-70 hover:opacity-100 transition-opacity">
                {renderLogo(logo)}
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
