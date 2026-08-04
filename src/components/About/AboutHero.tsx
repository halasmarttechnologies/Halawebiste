'use client';

import { motion } from 'framer-motion';
import { Sparkles, Award, Users, Globe, Zap } from 'lucide-react';

const companyLogos = Array.from({ length: 18 }, (_, i) => ({
  id: i + 1,
  src: `/Companies Logos/${i + 1}.png`,
  alt: `Company Logo ${i + 1}`,
}));

const stats = [
  { icon: Award, value: '150+', label: 'Projects Delivered', desc: 'Crafted with precision & care' },
  { icon: Users, value: '99.4%', label: 'Client Satisfaction', desc: 'Long-term trusted partnerships' },
  { icon: Globe, value: '15+', label: 'Global Markets', desc: 'Serving clients worldwide' },
  { icon: Zap, value: '10x', label: 'Average ROI Growth', desc: 'Driven by data & innovation' },
];

const pillars = [
  '⚡ Next-Gen Web Development',
  '🎯 Data-Driven Performance Ads',
  '📈 High-Rank Organic SEO',
  '🎨 Premium Brand Identity',
];

export default function AboutHero() {
  return (
    <section className="bg-white text-[#111111] w-full pt-[120px] sm:pt-[140px] pb-16 md:pb-24 px-4 sm:px-6 md:px-10 lg:px-14 relative overflow-hidden select-none">
      {/* Background Ambient Soft Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[350px] bg-gradient-to-r from-blue-100/60 via-indigo-100/50 to-purple-100/60 rounded-full blur-[100px] pointer-events-none -z-0" />

      <div className="max-w-[1300px] w-full mx-auto flex flex-col items-center relative z-10">
        
        {/* Animated Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200/80 text-blue-600 font-jakarta text-xs sm:text-sm font-semibold tracking-wide mb-6 shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
          <span>TRANSFORMING DIGITAL LANDSCAPES</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-jakarta text-center font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[74px] leading-[1.1] tracking-tight text-[#111111] max-w-5xl mb-6"
        >
          We Build Bold Digital Experiences That{' '}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Propel Brands Forward
          </span>
        </motion.h1>

        {/* Subtitle Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-jakarta text-center text-gray-600 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-3xl mb-10"
        >
          At Hala Technology, we combine cutting-edge tech, creative storytelling, and data-backed strategies to help ambitious businesses scale faster and stand out globally.
        </motion.p>

        {/* Core Pillars / Feature Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-14 md:mb-16"
        >
          {pillars.map((pillar, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-xl bg-gray-50 border border-gray-200/80 text-gray-700 font-jakarta text-xs sm:text-sm font-medium hover:border-blue-300 hover:bg-blue-50/60 hover:text-blue-700 transition-all duration-300 cursor-default"
            >
              {pillar}
            </span>
          ))}
        </motion.div>

        {/* Interactive Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full max-w-5xl mb-20"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center p-6 sm:p-7 rounded-2xl bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_35px_rgb(37,99,235,0.12)] hover:border-blue-200 transition-all duration-300 text-center group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="font-jakarta text-3xl sm:text-4xl font-extrabold text-[#111111] tracking-tight mb-1">
                  {stat.value}
                </span>
                <span className="font-jakarta text-sm font-semibold text-gray-800 mb-1">
                  {stat.label}
                </span>
                <span className="font-jakarta text-xs text-gray-500">
                  {stat.desc}
                </span>
              </div>
            );
          })}
        </motion.div>

        {/* Company Logos Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="w-full flex flex-col items-center"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[1px] bg-gray-300" />
            <p className="font-jakarta text-xs sm:text-sm uppercase tracking-widest text-gray-500 font-semibold">
              Companies We Work With
            </p>
            <span className="w-8 h-[1px] bg-gray-300" />
          </div>

          <div className="w-full relative flex items-center overflow-hidden py-2">
            {/* Gradient Fade Edges */}
            <div className="absolute inset-y-0 left-0 w-[15%] bg-gradient-to-r from-white to-transparent z-20 pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-[15%] bg-gradient-to-l from-white to-transparent z-20 pointer-events-none" />

            {/* Marquee Track 1 */}
            <div className="flex items-center gap-10 md:gap-16 px-6 animate-marquee whitespace-nowrap min-w-max shrink-0">
              {companyLogos.map((logo) => (
                <div key={`first-${logo.id}`} className="flex items-center justify-center px-4 shrink-0">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-9 sm:max-h-11 md:max-h-12 w-auto object-contain opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>

            {/* Marquee Track 2 (duplicate for seamless loop) */}
            <div className="flex items-center gap-10 md:gap-16 px-6 animate-marquee whitespace-nowrap min-w-max shrink-0" aria-hidden="true">
              {companyLogos.map((logo) => (
                <div key={`second-${logo.id}`} className="flex items-center justify-center px-4 shrink-0">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="max-h-9 sm:max-h-11 md:max-h-12 w-auto object-contain opacity-70 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110"
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
