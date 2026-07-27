'use client';

import { Zap, ShieldCheck, Rocket, Globe } from 'lucide-react';

const PERKS = [
  {
    icon: Rocket,
    title: 'Fast-Track Growth',
    description: 'Work directly on high-impact projects for top UAE brands, with clear career advancement paths.'
  },
  {
    icon: Zap,
    title: 'Modern Stack & AI Tools',
    description: 'We equip our team with industry-leading software, hardware, AI automation tools, and learning budgets.'
  },
  {
    icon: ShieldCheck,
    title: 'Dubai Tax-Free Benefits',
    description: 'Competitive salary packages in Dubai, resident visa sponsorship, comprehensive health insurance, and paid leaves.'
  },
  {
    icon: Globe,
    title: 'Hybrid & Flexible Work',
    description: 'Enjoy a modern collaborative environment at our Dubai office with flexible working models.'
  }
];

export default function CareersCulture() {
  return (
    <section className="bg-white w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto w-full">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-jakarta text-xs font-bold text-[#007FFF] uppercase tracking-widest block mb-3">
            Life At Hala
          </span>
          <h2 className="font-jakarta font-bold text-3xl sm:text-4xl md:text-5xl text-[#111111] leading-tight mb-6 max-w-3xl">
            Why Build Your Career <em className="eb-garamond font-normal italic text-[#111111]">With Us?</em>
          </h2>
          <p className="font-jakarta text-base md:text-lg text-[#555555] max-w-2xl font-normal leading-relaxed">
            We foster a culture of creative freedom, technical excellence, and constant learning. Here is what you can expect when you join our Dubai team.
          </p>
        </div>

        {/* Perks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PERKS.map((perk, idx) => {
            const Icon = perk.icon;

            return (
              <div
                key={idx}
                className="bg-white border border-[#E5E5E5] rounded-3xl p-6 sm:p-8 flex flex-col"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#F5F5F5] flex items-center justify-center text-[#111111] mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-jakarta font-bold text-lg text-[#111111] mb-3 leading-snug">
                    {perk.title}
                  </h3>
                  <p className="font-jakarta text-xs sm:text-sm text-[#666666] leading-relaxed font-normal">
                    {perk.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
