'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const caseStudies = [
  {
    id: 1,
    industry: 'E-COMMERCE',
    flag: '🇦🇪',
    title: 'From traffic spikes to seamless sales at 10M+ scale',
    description: 'We delivered a fast reliable ecommerce platform engineered to handle peak season demand without downtime giving customers a smooth experience every time they visit.',
    tags: ['Web Development', 'Next.js'],
    image: '/web.jpg'
  },
  {
    id: 2,
    industry: 'LIFESTYLE',
    flag: '🇦🇪',
    title: 'A complete visual identity overhaul for a premium brand',
    description: 'Our creative team reimagined the brand\'s entire visual language—from a bespoke logo design to premium packaging and social media graphics—capturing their high-end essence perfectly.',
    tags: ['Graphic Design', 'Branding'],
    image: '/design.jpg'
  },
  {
    id: 3,
    industry: 'REAL ESTATE',
    flag: '🇦🇪',
    title: 'Dominating search rankings for top property developers',
    description: 'Through a rigorous, data-driven technical SEO strategy, we drove a 300% increase in qualified organic traffic and consistently secured #1 rankings for highly competitive keywords.',
    tags: ['SEO', 'Content Strategy'],
    image: '/seo.jpg'
  }
];

export default function CaseStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  return (
    <section className="bg-white w-full pt-16 md:pt-20 pb-8 md:pb-10 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col items-center overflow-hidden">
      <div className="max-w-[1200px] w-full flex flex-col">
        
        {/* Heading Area */}
        <div className="text-center mb-12 md:mb-16 relative z-10 flex flex-col items-center">
          <h2 className="font-jakarta font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[64px] leading-[1.05] tracking-tight text-[#111111]">
            Where great ideas<br />
            <span className="eb-garamond italic pr-2">became real results.</span>
          </h2>
        </div>

        {/* Featured Slider */}
        <div className="w-full relative min-h-[500px] md:min-h-[480px] mb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="w-full h-full bg-[#FAFAFA] border border-[#EBEBEB] rounded-[32px] md:rounded-[40px] shadow-[0_20px_60px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col md:flex-row"
            >
              {/* Left Side: Content */}
              <div className="w-full md:w-1/2 p-8 sm:p-10 md:p-14 flex flex-col justify-center">
                
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-[11px] md:text-[12px] font-bold tracking-widest text-[#111111] uppercase">
                    {caseStudies[currentIndex].industry}
                  </span>
                  <span className="text-[#CCC]">|</span>
                  <span className="text-base">{caseStudies[currentIndex].flag}</span>
                </div>

                <h3 className="font-jakarta text-2xl sm:text-3xl md:text-[32px] lg:text-[36px] font-bold text-[#111111] leading-[1.15] tracking-tight mb-6">
                  {caseStudies[currentIndex].title}
                </h3>

                <p className="text-[#555] text-sm md:text-[15px] leading-relaxed mb-10 font-medium max-w-md">
                  {caseStudies[currentIndex].description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {caseStudies[currentIndex].tags.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="px-4 py-1.5 rounded-full border-[1.5px] border-[#E5E5E5] text-[11px] md:text-[12px] font-bold tracking-wide text-[#111111] uppercase bg-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Side: Mockup Card */}
              <div className="w-full md:w-1/2 h-[300px] sm:h-[350px] md:h-auto p-2 md:p-4 flex items-stretch justify-center relative">
                {/* Image container with fully rounded corners */}
                <div className="w-full h-full min-h-[250px] bg-[#111111] flex items-center justify-center relative overflow-hidden group rounded-[24px] md:rounded-[32px]">
                  <Image 
                    src={caseStudies[currentIndex].image}
                    alt={caseStudies[currentIndex].title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls: Pagination & Arrows */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-6 sm:gap-0">
          
          {/* Segmented Line Pagination */}
          <div className="flex items-center gap-2 max-w-[400px] w-full">
            {caseStudies.map((_, idx) => (
              <div 
                key={idx}
                className={`h-[3px] rounded-full transition-all duration-300 flex-1 ${
                  idx === currentIndex ? 'bg-[#007FFF]' : 'bg-[#E5E5E5]'
                }`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center gap-3">
            <button 
              onClick={handlePrev}
              className="w-10 h-10 md:w-11 md:h-11 bg-white border border-[#E5E5E5] text-[#111111] rounded-full flex items-center justify-center hover:bg-[#007FFF] hover:text-white hover:border-[#007FFF] transition-all duration-300 shadow-sm"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNext}
              className="w-10 h-10 md:w-11 md:h-11 bg-white border border-[#E5E5E5] text-[#111111] rounded-full flex items-center justify-center hover:bg-[#007FFF] hover:text-white hover:border-[#007FFF] transition-all duration-300 shadow-sm"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
