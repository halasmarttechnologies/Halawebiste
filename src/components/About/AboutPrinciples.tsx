import React from 'react';
import { Scan, RefreshCw, Sparkles } from 'lucide-react';

export default function AboutPrinciples() {
  return (
    <section className="bg-white w-full px-4 sm:px-6 md:px-8 pt-16 sm:pt-24 md:pt-24 pb-0 flex justify-center">
      <div className="max-w-[1300px] w-full flex flex-col items-start">
        
        {/* Tag */}
        <div className="bg-gray-100 text-black text-[13px] font-semibold px-3 py-1.5 rounded-md mb-8 inline-block">
          Principles
        </div>

        {/* Headline */}
        <h2 className="font-jakarta font-medium text-3xl sm:text-4xl md:text-[44px] lg:text-[52px] leading-[1.1] tracking-tight text-black max-w-[1000px] mb-16">
          Hala is built on a simple idea: <span className="text-black">digital growth should feel clear,</span> not overwhelming.
          <br className="hidden md:block" /> We focus on how real businesses scale.
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {/* Card 1 */}
          <div className="bg-white rounded-[1.5rem] p-8 shadow-[0_2px_20px_rgba(0,0,0,0.02)] flex flex-col border border-gray-100 transition-all duration-300 hover:-translate-y-1">
            <div className="bg-[#1a1a1a] w-[52px] h-[52px] rounded-2xl flex items-center justify-center mb-16 shadow-md">
              <Scan className="w-[22px] h-[22px] text-white" />
            </div>
            <h3 className="font-jakarta font-semibold text-[22px] text-black mb-3">Clarity</h3>
            <p className="font-jakarta text-black text-[15px] leading-relaxed">
              Strategies are organized so you always clearly know what matters now.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-[1.5rem] p-8 shadow-[0_2px_20px_rgba(0,0,0,0.02)] flex flex-col border border-gray-100 transition-all duration-300 hover:-translate-y-1">
            <div className="bg-[#1a1a1a] w-[52px] h-[52px] rounded-2xl flex items-center justify-center mb-16 shadow-md">
              <RefreshCw className="w-[22px] h-[22px] text-white" />
            </div>
            <h3 className="font-jakarta font-semibold text-[22px] text-black mb-3">Adaptability</h3>
            <p className="font-jakarta text-black text-[15px] leading-relaxed">
              The market changes — your plan should adjust with it, not work against you.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-[1.5rem] p-8 shadow-[0_2px_20px_rgba(0,0,0,0.02)] flex flex-col border border-gray-100 transition-all duration-300 hover:-translate-y-1">
            <div className="bg-[#1a1a1a] w-[52px] h-[52px] rounded-2xl flex items-center justify-center mb-16 shadow-md">
              <Sparkles className="w-[22px] h-[22px] text-white" />
            </div>
            <h3 className="font-jakarta font-semibold text-[22px] text-black mb-3">Focus</h3>
            <p className="font-jakarta text-black text-[15px] leading-relaxed">
              Everything works together, so you move through your digital journey without friction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
