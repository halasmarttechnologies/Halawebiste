'use client';

import Link from 'next/link';
import { Bot, Mail, PenTool, BarChart3, Zap } from 'lucide-react';

export default function AIAgentTransform() {
  const garamondStyle = { fontFamily: "'EB Garamond', serif" };

  return (
    <section className="font-jakarta relative bg-white text-[#1A1A1A] z-30 rounded-t-[40px] md:rounded-t-[60px] -mt-8 md:-mt-10 py-10 sm:py-14 md:py-18 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Custom Agent Diagram Graphic (Website colors: Blue, Black, White) */}
        <div className="lg:col-span-6 flex items-center justify-center p-4 sm:p-8">
          <div className="relative w-full max-w-[480px] aspect-square flex flex-col items-center justify-center select-none">
            
            {/* SVG Connecting Flow Lines */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Top to Middle Branching Lines */}
              <path
                d="M 200 65 L 200 120 M 200 120 L 90 180 M 200 120 L 200 180 M 200 120 L 310 180"
                stroke="#E5E7EB"
                strokeWidth="1.5"
              />
              {/* Middle to Bottom Merging Lines */}
              <path
                d="M 90 230 L 200 320 M 200 230 L 200 320 M 310 230 L 200 320 M 200 320 L 200 350"
                stroke="#E5E7EB"
                strokeWidth="1.5"
              />
            </svg>

            {/* Top Root Agent Avatar Node (Black Theme) */}
            <div className="relative z-10 flex flex-col items-center mb-12">
              <div className="w-12 h-12 rounded-full bg-[#111111] flex items-center justify-center text-white border-2 border-white shadow-none">
                <Bot className="w-6 h-6" />
              </div>
            </div>

            {/* Middle Branching Nodes Layer */}
            <div className="relative z-10 w-full grid grid-cols-3 gap-2 sm:gap-4 my-4">
              
              {/* Node 1: Copywriting (Hala Blue) */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#007FFF] to-[#0052D4] flex items-center justify-center text-white border-2 border-white">
                  <PenTool className="w-5 h-5" />
                </div>
                <div className="font-jakarta flex items-center gap-1.5 bg-white border border-[#E5E7EB] px-3 py-1.5 rounded-full text-xs font-medium text-[#333333]">
                  <span className="w-2 h-2 rounded-full bg-[#007FFF]"></span>
                  <span>Copywriting</span>
                </div>
              </div>

              {/* Node 2: Email Design (Black Theme) */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#111111] flex items-center justify-center text-white border-2 border-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="font-jakarta flex items-center gap-1.5 bg-white border border-[#E5E7EB] px-3 py-1.5 rounded-full text-xs font-medium text-[#333333]">
                  <span className="w-2 h-2 rounded-full bg-[#111111]"></span>
                  <span>Email Design</span>
                </div>
              </div>

              {/* Node 3: Campaign Lifecycle (Hala Royal Blue) */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#0052D4] to-[#4364F7] flex items-center justify-center text-white border-2 border-white">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div className="font-jakarta flex items-center gap-1.5 bg-white border border-[#E5E7EB] px-3 py-1.5 rounded-full text-xs font-medium text-[#333333]">
                  <span className="w-2 h-2 rounded-full bg-[#007FFF]"></span>
                  <span className="truncate">Campaign lifecycle</span>
                </div>
              </div>

            </div>

            {/* Bottom Merged Output Node (Hala Blue) */}
            <div className="relative z-10 flex flex-col items-center mt-12">
              <div className="w-7 h-7 rounded-full bg-[#007FFF] flex items-center justify-center text-white shadow-none">
                <Zap className="w-4 h-4" />
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Content & Divider */}
        <div className="lg:col-span-6 lg:border-l lg:border-[#E5E7EB] lg:pl-12 flex flex-col items-start text-left">
          
          {/* Category Tag (Hala Blue) */}
          <span className="font-jakarta text-xs sm:text-sm font-semibold tracking-[0.05em] text-[#007FFF] uppercase mb-4 block">
            AGENTS IN MINUTES
          </span>

          {/* Section Heading */}
          <h2 className="font-jakarta text-[34px] sm:text-[44px] lg:text-[56px] font-bold tracking-[-2px] text-[#1A1A1A] leading-[1.08] lg:leading-[57.4px] mb-6">
            AI Agents to Transform Your Marketing
          </h2>

          {/* Description */}
          <p className="font-jakarta text-base sm:text-lg text-[#555555] leading-relaxed mb-8 font-normal">
            The era of manual campaigns and slow responses is over. Our AI Agents are built to{' '}
            <span style={garamondStyle} className="font-jakarta font-normal text-[#1A1A1A]">
              understand your audience
            </span>
            , personalize communication and handle repetitive tasks while providing real-time, data-driven insights. With advanced automation working 24/7, your business can scale faster and compete more effectively, whether you’re a growing startup or an established brand.
          </p>

          {/* Action Button */}
          <Link
            href="/contact"
            className="font-jakarta inline-flex items-center justify-center bg-[#111111] hover:bg-[#222222] transition-colors duration-200 text-white font-semibold text-sm md:text-base px-7 py-3.5 rounded-xl border-none shadow-none"
          >
            <span>Explore all agents</span>
          </Link>

        </div>

      </div>
    </section>
  );
}
