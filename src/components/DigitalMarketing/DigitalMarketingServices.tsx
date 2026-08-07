'use client';

import { useState } from 'react';
import {
  Share2, Search, Target, Plus, Minus, ArrowRight, ArrowUpRight
} from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const SERVICES = [
  {
    id: 'smm',
    title: 'Social Media Marketing (SMM)',
    icon: Share2,
    description: 'We manage your brand across platforms like Facebook, Instagram, LinkedIn & TikTok creating engaging content and ad campaigns that connect with your audience.',
    href: '/contact'
  },
  {
    id: 'seo',
    title: 'SEO (Search Engine Optimization)',
    icon: Search,
    description: 'We improve your search visibility through SEO by optimizing your site, content, and technical structure bringing long-term, organic traffic through better Google rankings.',
    href: '/contact'
  },
  {
    id: 'ppc',
    title: 'Pay-Per-Click Advertising (PPC)',
    icon: Target,
    description: 'Need instant growth? Our Pay-Per-Click Advertising strategies on Google, Meta and YouTube bring you the right traffic and convert it into real customers.',
    href: '/contact'
  }
];

export default function DigitalMarketingServices() {
  const [activeServiceId, setActiveServiceId] = useState<string | null>(SERVICES[0].id);

  const toggleService = (id: string) => {
    setActiveServiceId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="font-jakarta bg-white text-[#111111] w-full px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24 relative overflow-hidden border-b border-[#e5e5e5]">
      
      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* Top Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-20">
          <div className="bg-[#007FFF] text-white px-5 py-2 rounded-full text-xs sm:text-sm font-jakarta font-semibold mb-6">
            Digital Marketing Services
          </div>
          <h2 className="font-jakarta font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.08] tracking-tight mb-6 text-[#111111] max-w-4xl">
            Explore Our Full-Suite, <br className="hidden sm:block" />
            <span className="font-jakarta pr-2">Digital Marketing Services</span>
          </h2>
          <p className="font-jakarta text-base md:text-lg text-[#555555] max-w-2xl leading-relaxed">
            We focus on transparency, performance, and innovation helping businesses in Dubai and across the UAE strengthen their online presence and achieve sustainable success.
          </p>
        </div>

        {/* Main Card with Interactive Accordion Services */}
        <div className="w-full max-w-[1000px] mx-auto">
          <div className="bg-white rounded-[24px] md:rounded-[32px] p-6 sm:p-10 md:p-12 border border-[#eeeeee]">
            
            {/* Header Row */}
            <div className="flex items-center justify-between pb-6 border-b border-[#e5e5e5] mb-4">
              <h3 className="font-jakarta text-xl md:text-2xl font-semibold text-[#111111] tracking-tight">
                Our Core Marketing Pillars
              </h3>
              <div className="w-9 h-9 rounded-full bg-[#007FFF] flex items-center justify-center">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            </div>

            {/* Accordion List Items */}
            <div className="flex flex-col gap-3">
              {SERVICES.map((service, index) => {
                const isActive = activeServiceId === service.id;
                const isLast = index === SERVICES.length - 1;
                const IconComponent = service.icon;

                return (
                  <div
                    key={service.id}
                    className={`flex flex-col py-4 px-4 sm:py-5 sm:px-6 rounded-2xl transition-all duration-300 cursor-pointer shadow-sm ${
                      isActive ? 'bg-[#111111] text-white border-transparent' : 'bg-white hover:bg-[#fafafa] text-[#111111] border border-[#e5e5e5]'
                    }`}
                    onClick={() => toggleService(service.id)}
                  >
                    {/* Accordion Trigger Header */}
                    <div className="flex items-center justify-between w-full focus:outline-none gap-3">
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-xl flex items-center justify-center transition-colors ${
                          isActive ? 'bg-[#007FFF] text-white' : 'bg-[#f0f0f0] text-[#111111]'
                        }`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className={`font-jakarta text-[15px] sm:text-base md:text-lg font-semibold text-left leading-[1.2] ${
                          isActive ? 'text-white' : 'text-[#111111]'
                        }`}>
                          {service.title}
                        </span>
                      </div>

                      {isActive ? (
                        <Minus className="w-5 h-5 text-white shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 text-[#111111] shrink-0" />
                      )}
                    </div>

                    {/* Accordion Body */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pt-4 pb-2 pl-0 sm:pl-16 flex flex-col gap-4">
                            <p className="font-jakarta text-[13.5px] sm:text-sm md:text-base leading-relaxed text-[#CCCCCC] max-w-[750px]">
                              {service.description}
                            </p>

                            <Link 
                              href={service.href} 
                              className="inline-flex items-center gap-2 font-jakarta text-[13px] sm:text-sm font-semibold text-[#007FFF] hover:text-white transition-colors self-start pt-1"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span>Explore More</span>
                              <ArrowRight className="w-4 h-4" />
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
        </div>

      </div>
    </section>
  );
}
