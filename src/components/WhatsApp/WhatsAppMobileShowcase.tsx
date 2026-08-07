'use client';

import { CheckCheck, Wifi, Signal, Battery, MessageSquare, Zap, Target, ArrowRight } from 'lucide-react';

export default function WhatsAppMobileShowcase() {
  return (
    <section className="font-jakarta bg-white text-[#111111] py-10 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.1] text-[#111111] tracking-tight mb-4 max-w-3xl">
            Experience Live Automation.
          </h2>
          <p className="text-[#555555] text-base md:text-lg font-medium max-w-2xl leading-relaxed">
            See how your business engages customers in real-time inside an authentic iPhone 15 Pro WhatsApp conversation.
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
                <div className="bg-[#075E54] pt-2 px-6 pb-2 flex flex-col items-center">
                  
                  {/* Dynamic Island Notch */}
                  <div className="w-24 sm:w-28 h-4 bg-black rounded-full mb-2 flex items-center justify-end px-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#111111] border border-gray-800" />
                  </div>

                  {/* Status Bar Icons (Time, Signal, Wifi, Battery) */}
                  <div className="w-full flex items-center justify-between text-[11px] font-bold text-white opacity-90 px-1 mb-1">
                    <span>10:14</span>
                    <div className="flex items-center gap-1.5">
                      <Signal className="w-3 h-3 fill-white" />
                      <Wifi className="w-3 h-3" />
                      <Battery className="w-3.5 h-3.5 fill-white" />
                    </div>
                  </div>

                  {/* WhatsApp App Header inside Phone */}
                  <div className="w-full flex items-center justify-between pt-1 pb-1">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0">
                        <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.147 4.191 4.29-1.124zm11.233-6.387c-.298-.149-1.761-.868-2.033-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.645.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
                        </svg>
                      </div>
                      <div className="text-left">
                        <span className="text-xs font-bold text-white block leading-tight">Hala AI Agent</span>
                        <span className="text-[10px] text-green-200 font-medium block">Online 24/7</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. WhatsApp Conversation Screen Body */}
                <div className="p-3 sm:p-4 flex flex-col space-y-3 text-left flex-grow overflow-y-auto">
                  
                  {/* Date Stamp */}
                  <div className="text-center my-1">
                    <span className="text-[10px] bg-white text-gray-500 font-semibold px-2.5 py-0.5 rounded-full border border-gray-200">
                      Today
                    </span>
                  </div>

                  {/* Message 1: Customer */}
                  <div className="self-end bg-[#DCF8C6] text-[#111111] p-2.5 sm:p-3 rounded-xl rounded-tr-xs max-w-[85%] text-xs border border-green-200">
                    Hi! I need an automated WhatsApp workflow for my business.
                    <div className="text-[9px] text-gray-500 text-right mt-1 flex items-center justify-end gap-1">
                      10:14 AM <CheckCheck className="w-3 h-3 text-[#25D366]" />
                    </div>
                  </div>

                  {/* Message 2: Agent Instant Reply */}
                  <div className="self-start bg-white text-[#111111] p-2.5 sm:p-3 rounded-xl rounded-tl-xs max-w-[90%] text-xs border border-gray-200">
                    Hello! Welcome to Hala Technology. We create 24/7 automated WhatsApp systems. What is your estimated daily inquiry volume?
                    <div className="text-[9px] text-gray-400 mt-1">10:14 AM</div>
                  </div>

                  {/* Message 3: Customer Reply */}
                  <div className="self-end bg-[#DCF8C6] text-[#111111] p-2.5 sm:p-3 rounded-xl rounded-tr-xs max-w-[80%] text-xs border border-green-200">
                    Around 200+ leads daily.
                    <div className="text-[9px] text-gray-500 text-right mt-1 flex items-center justify-end gap-1">
                      10:15 AM <CheckCheck className="w-3 h-3 text-[#25D366]" />
                    </div>
                  </div>

                  {/* Message 4: Agent Qualification & Interactive Buttons */}
                  <div className="self-start bg-white text-[#111111] p-2.5 sm:p-3 rounded-xl rounded-tl-xs max-w-[92%] text-xs border border-gray-200 space-y-2">
                    <p>
                      Perfect! Our workflow can qualify all 200+ leads automatically and route high-intent buyers straight to your sales team.
                    </p>
                    <div className="flex flex-col gap-1.5 pt-1">
                      <div className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2 text-[#007FFF] font-bold text-center text-[11px]">
                        Book Strategy Call
                      </div>
                      <div className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2 text-[#111111] font-semibold text-center text-[11px]">
                        View 2-Min Demo Video
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

          {/* ─── RIGHT COLUMN: 3 Sleek Feature Highlights (7 cols on lg) ─── */}
          <div className="lg:col-span-7 flex flex-col space-y-5 text-left">
            
            {/* Highlight 1 */}
            <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6 sm:p-7 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-[#111111] shrink-0">
                <Zap className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#007FFF] uppercase tracking-wider block mb-1">
                  Feature 01
                </span>
                <h3 className="font-bold text-lg sm:text-xl text-[#111111] tracking-tight mb-1">
                  Zero-Delay Instant Response
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  Engage every single incoming lead under 60 seconds, eliminating drop-off rates and outperforming delayed manual competitors.
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
                  Feature 02
                </span>
                <h3 className="font-bold text-lg sm:text-xl text-[#111111] tracking-tight mb-1">
                  One-Tap Interactive Buttons
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  Provide custom interactive menus and quick reply choices so customers can select services or book calls with a single tap.
                </p>
              </div>
            </div>

            {/* Highlight 3 */}
            <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6 sm:p-7 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center text-[#111111] shrink-0">
                <MessageSquare className="w-6 h-6 stroke-[2]" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#007FFF] uppercase tracking-wider block mb-1">
                  Feature 03
                </span>
                <h3 className="font-bold text-lg sm:text-xl text-[#111111] tracking-tight mb-1">
                  Qualified CRM Lead Handoff
                </h3>
                <p className="text-sm text-[#555555] leading-relaxed">
                  Collect prospect data, budget, and business needs automatically before transferring hot prospects to your live sales team.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
