'use client';

import { LayoutDashboard, TrendingUp, Target, Eye, Award } from 'lucide-react';

const marketingPillars = [
  {
    id: 1,
    title: 'Custom Strategy',
    description: 'Custom-tailored marketing funnels built uniquely around your audience and business goals.',
    icon: LayoutDashboard,
    gradient: 'bg-gradient-to-tr from-[#0052D4] via-[#007FFF] to-[#3B82F6]',
    meshPattern: 'radial-gradient(at 80% 20%, #00C6FF 0px, transparent 50%), radial-gradient(at 20% 80%, #0052D4 0px, transparent 50%)'
  },
  {
    id: 2,
    title: 'Data-Driven Insights',
    description: 'Advanced consumer analytics and campaign tracking driving real, measurable ROI.',
    icon: TrendingUp,
    gradient: 'bg-gradient-to-br from-[#111111] via-[#1E293B] to-[#007FFF]',
    meshPattern: 'radial-gradient(at 10% 10%, #007FFF 0px, transparent 50%), radial-gradient(at 90% 90%, #111111 0px, transparent 50%)'
  },
  {
    id: 3,
    title: 'Multi-Channel Growth',
    description: 'Seamless integration across SEO, SMM, PPC, and web touchpoints for total market dominance.',
    icon: Target,
    gradient: 'bg-gradient-to-bl from-[#00C6FF] via-[#007FFF] to-[#0052D4]',
    meshPattern: 'radial-gradient(at 80% 10%, #60A5FA 0px, transparent 50%), radial-gradient(at 20% 90%, #007FFF 0px, transparent 50%)'
  },
  {
    id: 4,
    title: 'Transparent Reporting',
    description: 'Real-time campaign tracking and honest performance reporting with zero hidden metrics.',
    icon: Eye,
    gradient: 'bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#2563EB]',
    meshPattern: 'radial-gradient(at 20% 20%, #3B82F6 0px, transparent 50%), radial-gradient(at 80% 80%, #111111 0px, transparent 50%)'
  },
  {
    id: 5,
    title: 'Dedicated UAE Experts',
    description: 'Regional marketing specialists treating your brand expansion and long-term success as our own.',
    icon: Award,
    gradient: 'bg-gradient-to-tr from-[#007FFF] via-[#2563EB] to-[#60A5FA]',
    meshPattern: 'radial-gradient(at 70% 30%, #0052D4 0px, transparent 50%), radial-gradient(at 30% 70%, #00C6FF 0px, transparent 50%)'
  }
];

export default function DigitalMarketingWhyChoose() {
  return (
    <section className="w-full bg-white text-[#111111] py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 relative overflow-hidden border-b border-[#e5e5e5]">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center">
        
        {/* Top Eyebrow Badge */}
        <span className="font-jakarta text-xs font-semibold text-[#007FFF] uppercase tracking-widest block mb-4">
          THE HALA DIFFERENCE
        </span>

        {/* Main Headline */}
        <h2 className="font-jakarta font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-[#111111] text-center tracking-tight leading-[1.12] mb-14 sm:mb-16 max-w-4xl">
          Why Choosing Hala Technology for{' '}
          <span className="font-jakarta font-normal text-[#111111] inline-block">
            Digital Marketing?
          </span>
        </h2>

        {/* 5-Column Gradient Box Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
          {marketingPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.id} className="flex flex-col items-start text-left group">
                
                {/* Visual Box with Black, White & Brand Blue Fluid Mesh Paint Pattern */}
                <div
                  className={`w-full aspect-square rounded-[24px] sm:rounded-[28px] ${pillar.gradient} p-6 flex items-center justify-center relative overflow-hidden shadow-sm mb-5 transition-transform duration-500 group-hover:-translate-y-1.5`}
                >
                  {/* Organic Mesh Gradient Blended Paint Pattern Overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-90 transition-opacity duration-500 group-hover:opacity-100 mix-blend-overlay"
                    style={{ backgroundImage: pillar.meshPattern }}
                  />

                  {/* Organic Fluid Liquid Wavy Curves SVG Path */}
                  <svg className="absolute inset-0 w-full h-full opacity-35 mix-blend-soft-light pointer-events-none" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-20 100 C40 160, 100 40, 160 100 C220 160, 240 80, 260 140 L260 220 L-20 220 Z" fill="white" />
                  </svg>

                  {/* Frosted Glass Icon Badge */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-inner transition-transform duration-500 group-hover:scale-110 relative z-20">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]" />
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="font-jakarta font-semibold text-lg sm:text-xl text-[#111111] tracking-tight mb-2">
                  {pillar.title}
                </h3>

                {/* Card Description */}
                <p className="font-jakarta text-xs sm:text-sm text-[#666666] font-normal leading-relaxed">
                  {pillar.description}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
