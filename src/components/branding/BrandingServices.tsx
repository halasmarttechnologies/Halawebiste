'use client';

import { useState } from 'react';
import {
  Compass, PenTool, Plus, Minus, ArrowRight, ArrowUpRight
} from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import type { ElementType } from 'react';

// ─── Types ────────────────────────────────────────────
interface ServiceItem {
  id: string;
  title: string;
  description: string;
  href?: string;
}

interface ServiceCategory {
  title: string;
  icon: ElementType;
  services: ServiceItem[];
}

const categories: ServiceCategory[] = [
  {
    title: 'Strategy & Positioning',
    icon: Compass,
    services: [
      {
        id: 'brand-strategy-expansion',
        title: 'Brand Strategy Expansion',
        description: 'Evolve your brand identity to reach new markets and capture broader demographics seamlessly.',
        href: '#'
      },
      {
        id: 'brand-strategy',
        title: 'Brand Strategy',
        description: 'Build the foundational roadmap and positioning to secure long-term market dominance.',
        href: '#'
      },
      {
        id: 'corporate-rebranding',
        title: 'Corporate Rebranding',
        description: 'Revitalize legacy brands and modernize corporate identities for the digital landscape.',
        href: '#'
      }
    ]
  },
  {
    title: 'Identity & Expression',
    icon: PenTool,
    services: [
      {
        id: 'observable-profile-design',
        title: 'Observable Profile Design',
        description: 'Craft striking visual profiles and assets that instantly communicate your core values.',
        href: '#'
      },
      {
        id: 'brand-tone',
        title: 'Brand Tone',
        description: 'Develop a unique, consistent voice that resonates authentically with your target audience.',
        href: '#'
      }
    ]
  }
];

export default function BrandingServices() {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(null);

  const toggleService = (id: string) => {
    setActiveServiceId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="font-jakarta bg-white text-[#111111] w-full px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-20 relative overflow-hidden rounded-t-[40px] md:rounded-t-[60px]">
      
      {/* Background ambient glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#007FFF]/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#007FFF]/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* Top Section */}
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-20">
          <div className="bg-[#007FFF] text-white px-5 py-2 rounded-full text-sm font-semibold mb-8 shadow-sm">
            Branding Services
          </div>
          <h2 className="font-jakarta font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] tracking-tight mb-6 text-[#111111]">
            End-to-End<br className="hidden sm:block" />
            Branding <span className="font-jakarta italic pr-2">Solutions.</span>
          </h2>
          <p className="text-lg md:text-xl text-[#555555] font-medium max-w-xl">
            Comprehensive solutions to build, elevate, and transform your brand at every touchpoint.
          </p>
        </div>

        {/* Bottom Section: Accordion */}
        <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-8">
          
          {/* Main White Card with Two Columns */}
          <div className="bg-white rounded-[24px] md:rounded-[32px] p-6 sm:p-12 md:p-14 shadow-[0_15px_50px_rgba(0,0,0,0.06)] border border-[#eeeeee]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
              
              {categories.map((category, catIndex) => (
                <div key={catIndex} className="flex flex-col h-full">
                  {/* Header Row */}
                  <div className="flex items-center justify-between pb-5 border-b border-[#e5e5e5] mb-2">
                    <h3 className="font-jakarta text-[22px] md:text-[24px] font-medium text-[#111111] tracking-tight">
                      {category.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full border border-[#d5d5d5] flex items-center justify-center bg-white transition-colors hover:border-[#007FFF] group cursor-pointer">
                        <ArrowUpRight className="w-[14px] h-[14px] text-[#555555] group-hover:text-[#007FFF]" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#007FFF] flex items-center justify-center shadow-sm">
                        <category.icon className="w-4 h-4 text-white stroke-[2.5]" />
                      </div>
                    </div>
                  </div>

                  {/* Accordion List Items */}
                  <div className="flex flex-col h-full">
                    {category.services.map((service, srvIndex) => {
                      const isActive = activeServiceId === service.id;
                      const isLast = srvIndex === category.services.length - 1;

                      return (
                        <div 
                          key={service.id}
                          className={`flex flex-col py-4 px-4 -mx-4 rounded-xl group transition-colors duration-500 cursor-pointer ${
                            isActive ? 'bg-[#111111]' : 'hover:bg-[#111111]'
                          } ${
                            !isActive && !isLast ? 'border-b border-[#e5e5e5] hover:border-transparent' : ''
                          }`}
                          onClick={() => toggleService(service.id)}
                        >
                          {/* Accordion Trigger Header */}
                          <div className="flex items-center justify-between w-full focus:outline-none">
                            <span className={`text-[14px] md:text-[15px] font-medium transition-colors duration-500 ${
                              isActive ? 'text-white' : 'text-[#111111] group-hover:text-white'
                            }`}>
                              {service.title}
                            </span>
                            {isActive ? (
                              <Minus className="w-[16px] h-[16px] text-white transition-all duration-500" />
                            ) : (
                              <Plus className="w-[16px] h-[16px] text-[#111111] group-hover:text-white transition-all duration-500" />
                            )}
                          </div>

                          {/* Accordion Body */}
                          <AnimatePresence>
                            {isActive && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden"
                              >
                                <div className="pt-3 pb-1 flex flex-col gap-4">
                                  <p className="text-white/80 text-[13px] md:text-[14px] leading-relaxed font-medium">
                                    {service.description}
                                  </p>
                                  <Link 
                                    href={service.href || "#"} 
                                    className="inline-flex items-center gap-2 text-[12px] font-bold text-[#007FFF] hover:text-white transition-colors self-start"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    Explore More <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                                  </Link>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Banner */}
          <div className="w-full bg-[#111111] rounded-[20px] p-5 md:py-5 md:px-8 flex flex-col md:flex-row items-center justify-between border-2 border-[#222222] shadow-[8px_8px_0px_0px_#000000]">
            <div className="flex items-center gap-4 w-full md:w-auto mb-4 md:mb-0">
              <div className="w-10 h-10 rounded-full bg-[#222222] border border-[#333333] flex flex-shrink-0 items-center justify-center">
                <svg className="w-5 h-5 text-[#007FFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                </svg>
              </div>
              <p className="text-white text-[14px] md:text-[15px] font-medium">
                Need a striking visual profile or complete rebranding? Let's build your identity.
              </p>
            </div>
            
            <Link href="/contact" className="inline-flex items-center justify-center bg-[#007FFF] text-white font-bold text-[11px] md:text-[12px] tracking-wide px-6 py-3 rounded-full hover:scale-105 transition-transform whitespace-nowrap w-full md:w-auto shadow-md shadow-[#007FFF]/20">
              CONTACT US
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
