'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Code2, 
  Target, 
  TrendingUp, 
  Palette, 
  CheckCircle2, 
  Layers 
} from 'lucide-react';

const companyLogos = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  src: `/Companies Logos/${i + 1}.png`,
  alt: `Company Logo ${i + 1}`,
}));

const interactiveCapabilities = [
  {
    id: 'web',
    icon: Code2,
    title: 'Next-Gen Web & App Architecture',
    subtitle: 'Lightning-Fast Next.js & React Solutions',
    metric: '99.8%',
    metricLabel: 'Performance & Speed Index',
    points: ['Server-Side Rendered (SSR)', 'Scalable Cloud Infrastructure', 'Fluid Micro-Interactions'],
  },
  {
    id: 'seo',
    icon: TrendingUp,
    title: 'High-Authority Organic SEO',
    subtitle: 'Dominate Search Engine Rankings',
    metric: '+450%',
    metricLabel: 'Average Traffic Multiplier',
    points: ['Technical SEO Audits', 'Keyword Dominance Strategy', 'High-Domain Backlink Building'],
  },
  {
    id: 'branding',
    icon: Palette,
    title: 'Luxury Brand Identity & Media',
    subtitle: 'Visuals That Command Attention',
    metric: '100%',
    metricLabel: 'Custom Bespoke Aesthetic',
    points: ['Vector Design Systems', 'High-Converting Video Assets', 'UI/UX Interactive Mockups'],
  },
  {
    id: 'growth',
    icon: Target,
    title: 'Data-Driven Performance Ads',
    subtitle: 'Maximize Conversion & Customer LTV',
    metric: '10x',
    metricLabel: 'Average Campaign ROI',
    points: ['Multi-Channel Ad Campaigns', 'Precision Audience Targeting', 'Real-Time Analytics Dashboard'],
  },
];

const stats = [
  { value: '150+', label: 'Digital Projects Delivered', detail: 'Executed for high-growth brands' },
  { value: '99.4%', label: 'Client Retention Rate', detail: 'Long-term strategic partners' },
  { value: '15+', label: 'Global Markets Served', detail: 'Dubai, USA, Europe & Asia' },
  { value: '24/7', label: 'Continuous Execution', detail: 'Dedicated innovation team' },
];

export default function AboutHero() {
  const [activeTab, setActiveTab] = useState(0);
  const currentCapability = interactiveCapabilities[activeTab];

  return (
    <section className="bg-white text-black w-full pt-[130px] sm:pt-[150px] pb-20 md:pb-28 px-4 sm:px-6 md:px-10 lg:px-14 relative overflow-hidden select-none border-b border-gray-100">
      <div className="max-w-[1340px] w-full mx-auto flex flex-col items-center relative z-10">
        
        {/* Top Agency Status Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-3 px-4 py-2 rounded-full bg-black text-white text-xs sm:text-sm font-jakarta font-medium tracking-wide mb-8 shadow-lg shadow-black/10"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>HALA TECH STUDIO</span>
          <span className="text-gray-500">•</span>
          <span className="text-gray-300">DUBAI, UAE</span>
          <span className="text-gray-500">•</span>
          <span className="text-gray-300 font-normal">ENGINEERING DIGITAL EXCELLENCE</span>
        </motion.div>

        {/* Hero Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center max-w-5xl mb-12"
        >
          <h1 className="font-jakarta font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[1.04] tracking-tight text-black mb-6">
            Engineering The Future Of <br className="hidden sm:block" />
            <span className="relative inline-block underline decoration-black/20 decoration-wavy decoration-2">
              Digital Growth & Innovation
            </span>
          </h1>
          <p className="font-jakarta text-gray-600 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-3xl mx-auto">
            We build high-performance web apps, dominate search engines, and craft luxury brand identities for ambitious companies globally.
          </p>
        </motion.div>

        {/* Interactive Capability Showcase Studio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-5xl rounded-3xl bg-gray-50 border border-gray-200 p-4 sm:p-6 md:p-8 mb-20 shadow-[0_20px_50px_rgba(0,0,0,0.06)] relative overflow-hidden"
        >
          {/* Studio Header Selector */}
          <div className="flex items-center justify-between border-b border-gray-200/80 pb-4 mb-6 flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-black" />
              <span className="font-jakarta font-bold text-xs sm:text-sm uppercase tracking-widest text-black">
                OUR CORE CAPABILITIES
              </span>
            </div>
            
            {/* Interactive Selector Pills */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
              {interactiveCapabilities.map((cap, idx) => {
                const Icon = cap.icon;
                const isActive = activeTab === idx;
                return (
                  <button
                    key={cap.id}
                    onClick={() => setActiveTab(idx)}
                    className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-jakarta text-xs sm:text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? 'bg-black text-white shadow-md shadow-black/10 scale-[1.02]'
                        : 'bg-white text-gray-700 hover:bg-gray-200/70 border border-gray-200'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-gray-700'}`} />
                    <span className="hidden sm:inline">{cap.title.split(' ')[0]}</span>
                    <span className="sm:hidden">{cap.title.slice(0, 8)}...</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Card Body */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm"
            >
              {/* Left Column Info */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gray-100 text-black font-jakarta text-xs font-bold uppercase tracking-wider mb-3">
                  <span>FOCUS AREA 0{activeTab + 1}</span>
                </div>
                <h3 className="font-jakarta font-extrabold text-2xl sm:text-3xl text-black tracking-tight mb-2">
                  {currentCapability.title}
                </h3>
                <p className="font-jakarta text-gray-600 text-sm sm:text-base mb-6 font-medium">
                  {currentCapability.subtitle}
                </p>

                {/* Feature Points */}
                <div className="flex flex-col gap-2.5 w-full">
                  {currentCapability.points.map((point, ptIdx) => (
                    <div key={ptIdx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                      <span className="font-jakarta text-xs sm:text-sm font-semibold text-gray-800">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column Metric Box */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-xl bg-black text-white text-center h-full relative overflow-hidden group">
                <div className="absolute top-3 right-3 text-gray-500">
                  <ArrowUpRight className="w-5 h-5 group-hover:text-white transition-colors" />
                </div>
                <span className="font-jakarta text-5xl sm:text-6xl font-extrabold tracking-tight text-white mb-2">
                  {currentCapability.metric}
                </span>
                <span className="font-jakarta text-xs sm:text-sm font-medium text-gray-300 uppercase tracking-widest">
                  {currentCapability.metricLabel}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Stats Counter Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-5xl mb-20"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-6 rounded-2xl bg-white border border-gray-200 hover:border-black hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-all duration-300 text-center group cursor-pointer"
            >
              <span className="font-jakarta text-3xl sm:text-4xl md:text-5xl font-black text-black tracking-tight mb-2 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </span>
              <span className="font-jakarta text-xs sm:text-sm font-bold text-black mb-1">
                {stat.label}
              </span>
              <span className="font-jakarta text-[11px] sm:text-xs text-gray-500">
                {stat.detail}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Companies We Work With Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full flex flex-col items-center"
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="w-12 h-[1px] bg-black/20" />
            <p className="font-jakarta text-xs sm:text-sm uppercase tracking-widest text-black font-bold">
              Companies We Work With
            </p>
            <span className="w-12 h-[1px] bg-black/20" />
          </div>

          <div className="w-full relative flex items-center overflow-hidden py-3 rounded-2xl bg-gray-50/70 border border-gray-200/80">
            {/* Fade Edges */}
            <div className="absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-gray-50 to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-gray-50 to-transparent z-20 pointer-events-none" />

            {/* Track 1 */}
            <div className="flex items-center gap-12 md:gap-20 px-6 animate-marquee whitespace-nowrap min-w-max shrink-0">
              {companyLogos.map((logo) => (
                <div key={`first-${logo.id}`} className="flex items-center justify-center px-4 shrink-0">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-9 sm:max-h-11 md:max-h-12 w-auto object-contain opacity-80 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>

            {/* Track 2 */}
            <div className="flex items-center gap-12 md:gap-20 px-6 animate-marquee whitespace-nowrap min-w-max shrink-0" aria-hidden="true">
              {companyLogos.map((logo) => (
                <div key={`second-${logo.id}`} className="flex items-center justify-center px-4 shrink-0">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-9 sm:max-h-11 md:max-h-12 w-auto object-contain opacity-80 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
