'use client';

import { CheckCheck, Wifi, Signal, Battery, Bot, Zap, Target, Cpu } from 'lucide-react';

export default function AIAgentMobileShowcase() {
  return (
    <section className="font-jakarta bg-white text-[#111111] py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 border-b border-[#E5E7EB]">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.1] text-[#111111] tracking-tight mb-4 max-w-3xl">
            Experience AI Agent Intelligence.
          </h2>
          <p className="text-[#555555] text-base md:text-lg font-medium max-w-2xl leading-relaxed">
            See how your business automates complex marketing tasks, campaign creation, and CRM routing inside a live iPhone 15 Pro interface.
          </p>
        </div>

        {/* Showcase Grid: iPhone Frame Left + Side Highlights Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* ─── LEFT COLUMN: iPhone 15 Pro Frame Mockup (5 cols on lg) ─── */}
          <div className="lg:col-span-5 flex justify-center w-full">
            
            {/* Outer iPhone Frame (Flat Bezel, No Shadows) */}
            <div className="w-[300px] sm:w-[340px] md:w-[360px] bg-white rounded-[44px] sm:rounded-[48px] border-[7px] sm:border-[9px] border-gray-300 p-3 sm:p-4 border-solid select-none relative">
              
              {/* iPhone Inner Screen */}
              <div className="w-full bg-[#F4F5F7] rounded-[32px] sm:rounded-[36px] overflow-hidden border border-gray-200 flex flex-col justify-between min-h-[560px] sm:min-h-[620px]">
                
                {/* 1. iPhone Status Bar & Dynamic Island */}
                <div className="bg-[#111111] pt-2 px-6 pb-2.5 flex flex-col items-center text-white">
                  
                  {/* Dynamic Island Notch */}
                  <div className="w-24 sm:w-28 h-4 bg-black rounded-full mb-2 flex items-center justify-end px-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#222] border border-gray-800" />
                  </div>

                  {/* Status Bar Icons (Time, Signal, Wifi, Battery) */}
                  <div className="w-full flex items-center justify-between text-[11px] font-bold opacity-90 px-1 mb-1">
                    <span>10:14</span>
                    <div className="flex items-center gap-1.5">
                      <Signal className="w-3 h-3 fill-white" />
                      <Wifi className="w-3 h-3" />
                      <Battery className="w-3.5 h-3.5 fill-white" />
                    </div>
                  </div>

                  {/* AI Agent Interface Header */}
                  <div className="w-full flex items-center justify-between pt-1 pb-1">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#007FFF] flex items-center justify-center text-white shrink-0">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-left">
                        <span className="text-xs font-bold text-white block leading-tight">Hala AI Executive</span>
                        <span className="text-[10px] text-blue-300 font-medium block">Active & Processing</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. AI Agent Chat Screen Body */}
                <div className="p-3 sm:p-4 flex flex-col space-y-3 text-left flex-grow overflow-y-auto">
                  
                  {/* Date Stamp */}
                  <div className="text-center my-1">
                    <span className="text-[10px] bg-white text-gray-500 font-semibold px-2.5 py-0.5 rounded-full border border-gray-200">
                      Live AI Session
                    </span>
                  </div>

                  {/* Message 1: User Request */}
                  <div className="self-end bg-[#111111] text-white p-2.5 sm:p-3 rounded-2xl rounded-tr-xs max-w-[85%] text-xs border border-gray-800">
                    Hi! Can you analyze competitor data and draft a PPC campaign for our Q3 launch?
                    <div className="text-[9px] text-gray-400 text-right mt-1 flex items-center justify-end gap-1">
                      10:14 AM <CheckCheck className="w-3 h-3 text-[#007FFF]" />
                    </div>
                  </div>

                  {/* Message 2: AI Agent Instant Execution */}
                  <div className="self-start bg-white text-[#111111] p-2.5 sm:p-3 rounded-2xl rounded-tl-xs max-w-[92%] text-xs border border-gray-200">
                    Analyzing competitor data... Found 4 key growth opportunities. I've generated 3 ad variants and configured automated bid optimization.
                    <div className="text-[9px] text-gray-400 mt-1">10:14 AM</div>
                  </div>

                  {/* Message 3: User Follow-up */}
                  <div className="self-end bg-[#111111] text-white p-2.5 sm:p-3 rounded-2xl rounded-tr-xs max-w-[80%] text-xs border border-gray-800">
                    Awesome! Sync new leads to our CRM and alert our sales team.
                    <div className="text-[9px] text-gray-400 text-right mt-1 flex items-center justify-end gap-1">
                      10:15 AM <CheckCheck className="w-3 h-3 text-[#007FFF]" />
                    </div>
                  </div>

                  {/* Message 4: AI Agent Confirmation & Quick Buttons */}
                  <div className="self-start bg-white text-[#111111] p-2.5 sm:p-3 rounded-2xl rounded-tl-xs max-w-[92%] text-xs border border-gray-200 space-y-2">
                    <p>
                      Completed. CRM webhooks synced. High-intent prospects are automatically tagged and routed to your sales reps.
                    </p>
                    <div className="flex flex-col gap-1.5 pt-1">
                      <div className="w-full bg-[#111111] text-white font-bold text-center text-[11px] p-2 rounded-lg">
                        Deploy Campaign
                      </div>
                      <div className="w-full bg-gray-50 border border-gray-200 text-[#111111] font-semibold text-center text-[11px] p-2 rounded-lg">
                        View ROI Analytics
                      </div>
                    </div>
                    <div className="text-[9px] text-gray-400 mt-1">10:15 AM</div>
                  </div>

                </div>

                {/* 3. iPhone Bottom Home Indicator Bar */}
                <div className="bg-white py-2 flex items-center justify-center border-t border-gray-200">
                  <div className="w-28 h-1 bg-gray-300 rounded-full" />
                </div>

              </div>
            </div>

          </div>

          {/* ─── RIGHT COLUMN: 3 Sleek AI Feature Highlights (7 cols on lg) ─── */}
          <div className="lg:col-span-7 flex flex-col space-y-5 text-left">
            
            {/* Highlight 1 */}
            <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6 sm:p-7 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-[#111111] shrink-0">
                <Cpu className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#007FFF] uppercase tracking-wider block mb-1">
                  Capability 01
                </span>
                <h3 className="font-bold text-lg sm:text-xl text-[#111111] tracking-tight mb-1">
                  Autonomous Task Execution
                </h3>
                <p className="text-sm text-[#555555] font-normal leading-relaxed">
                  Executes marketing campaigns, ad copy generation, and data analysis 24/7 without manual intervention.
                </p>
              </div>
            </div>

            {/* Highlight 2 */}
            <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6 sm:p-7 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-[#111111] shrink-0">
                <Target className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#007FFF] uppercase tracking-wider block mb-1">
                  Capability 02
                </span>
                <h3 className="font-bold text-lg sm:text-xl text-[#111111] tracking-tight mb-1">
                  Multi-Channel Intelligence
                </h3>
                <p className="text-sm text-[#555555] font-normal leading-relaxed">
                  Connects seamlessly across your website, ad platforms, CRM, and customer databases for unified automation.
                </p>
              </div>
            </div>

            {/* Highlight 3 */}
            <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6 sm:p-7 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-[#111111] shrink-0">
                <Zap className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#007FFF] uppercase tracking-wider block mb-1">
                  Capability 03
                </span>
                <h3 className="font-bold text-lg sm:text-xl text-[#111111] tracking-tight mb-1">
                  Real-Time Conversion Optimization
                </h3>
                <p className="text-sm text-[#555555] font-normal leading-relaxed">
                  Continuously analyzes campaign performance to adjust bidding, copy variations, and audience targeting for maximum ROI.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
