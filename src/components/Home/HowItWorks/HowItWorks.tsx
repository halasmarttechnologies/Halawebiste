'use client';

import { PhoneCall, Search, Compass, Zap, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Discovery Call',
    description: 'We begin with a strategic consultation to understand your goals, challenges, and vision to craft a tailored action plan.',
    icon: PhoneCall,
    gradient: 'bg-gradient-to-tr from-[#0052D4] via-[#007FFF] to-[#3B82F6]',
    meshPattern: 'radial-gradient(at 80% 20%, #00C6FF 0px, transparent 50%), radial-gradient(at 20% 80%, #0052D4 0px, transparent 50%)'
  },
  {
    id: '02',
    title: 'Market Research',
    description: 'We study your industry, competitors, audience behavior, and market trends to uncover data-driven insights.',
    icon: Search,
    gradient: 'bg-gradient-to-br from-[#111111] via-[#1E293B] to-[#007FFF]',
    meshPattern: 'radial-gradient(at 10% 10%, #007FFF 0px, transparent 50%), radial-gradient(at 90% 90%, #111111 0px, transparent 50%)'
  },
  {
    id: '03',
    title: 'Strategizing',
    description: 'We build a clear, comprehensive roadmap outlining every step toward achieving your growth and ROI targets.',
    icon: Compass,
    gradient: 'bg-gradient-to-bl from-[#00C6FF] via-[#007FFF] to-[#0052D4]',
    meshPattern: 'radial-gradient(at 80% 10%, #60A5FA 0px, transparent 50%), radial-gradient(at 20% 90%, #007FFF 0px, transparent 50%)'
  },
  {
    id: '04',
    title: 'Implementation',
    description: 'Our team executes the strategy with precision, launching custom campaigns and monitoring results continuously.',
    icon: Zap,
    gradient: 'bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#2563EB]',
    meshPattern: 'radial-gradient(at 20% 20%, #3B82F6 0px, transparent 50%), radial-gradient(at 80% 80%, #111111 0px, transparent 50%)'
  },
  {
    id: '05',
    title: 'Reporting & Optimization',
    description: 'We monitor user behavior and performance metrics to optimize campaigns continuously for lasting, sustainable growth.',
    icon: CheckCircle2,
    gradient: 'bg-gradient-to-tr from-[#007FFF] via-[#2563EB] to-[#60A5FA]',
    meshPattern: 'radial-gradient(at 70% 30%, #0052D4 0px, transparent 50%), radial-gradient(at 30% 70%, #00C6FF 0px, transparent 50%)'
  }
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-white text-[#111111] py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 relative overflow-hidden border-b border-[#e5e5e5]">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center">
        
        {/* Top Eyebrow Badge */}
        <span className="font-jakarta text-xs font-semibold text-[#007FFF] uppercase tracking-widest block mb-4">
          OUR PROCESS
        </span>

        {/* Main Headline */}
        <h2 className="font-jakarta font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-[#111111] text-center tracking-tight leading-[1.12] mb-6 max-w-4xl">
          How Our Process <em className="eb-garamond font-normal italic">Drives Growth</em>
        </h2>

        {/* Subtitle / Description */}
        <p className="font-jakarta text-base md:text-lg text-[#555555] font-normal text-center max-w-2xl leading-relaxed mb-14 sm:mb-16">
          A proven 5-step methodology designed to elevate your brand, optimize performance, and deliver measurable ROI.
        </p>

        {/* 5-Column Gradient Box Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="flex flex-col items-start text-left group">
                
                {/* Visual Box with Black, White & Brand Blue Fluid Mesh Paint Pattern */}
                <div
                  className={`w-full aspect-square rounded-[24px] sm:rounded-[28px] ${step.gradient} p-6 flex flex-col items-center justify-center relative overflow-hidden shadow-sm mb-5 transition-transform duration-500 group-hover:-translate-y-1.5`}
                >
                  {/* Organic Mesh Gradient Blended Paint Pattern Overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-90 transition-opacity duration-500 group-hover:opacity-100 mix-blend-overlay"
                    style={{ backgroundImage: step.meshPattern }}
                  />

                  {/* Organic Fluid Liquid Wavy Curves SVG Path */}
                  <svg className="absolute inset-0 w-full h-full opacity-35 mix-blend-soft-light pointer-events-none" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-20 100 C40 160, 100 40, 160 100 C220 160, 240 80, 260 140 L260 220 L-20 220 Z" fill="white" />
                  </svg>

                  {/* Step Number Tag */}
                  <span className="absolute top-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 text-white font-jakarta text-xs font-semibold px-2.5 py-0.5 rounded-full z-10">
                    {step.id}
                  </span>

                  {/* Frosted Glass Icon Badge */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white shadow-inner transition-transform duration-500 group-hover:scale-110 relative z-20">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.2]" />
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="font-jakarta font-semibold text-lg sm:text-xl text-[#111111] tracking-tight mb-2">
                  {step.title}
                </h3>

                {/* Card Description */}
                <p className="font-jakarta text-xs sm:text-sm text-[#666666] font-normal leading-relaxed">
                  {step.description}
                </p>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
