'use client';

import { MessageSquare, Target, Send, Bot } from 'lucide-react';

export default function WhatsAppSecurity() {
  return (
    <section className="font-jakarta bg-white text-[#111111] py-10 md:py-16 px-4 sm:px-6 lg:px-8 rounded-t-[24px] md:rounded-t-[32px] -mt-8 relative z-30">
      <div className="max-w-[1280px] mx-auto relative z-10 flex flex-col items-center">
        
        {/* Main Title */}
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.1] text-[#111111] text-center tracking-tight mb-4 max-w-3xl">
          Automated messaging that <span className="font-jakarta pr-2">converts leads.</span>
        </h2>

        {/* Subtitle */}
        <p className="text-[#555555] text-base md:text-lg font-medium text-center max-w-2xl leading-relaxed mb-10 md:mb-16">
          Streamline customer inquiries, schedule appointment reminders, and deploy high-converting broadcast campaigns with WhatsApp Automation.
        </p>

        {/* ─── DESKTOP GRAPHIC: Overlapping Badge Circle Row (Hidden on mobile) ─── */}
        <div className="hidden md:flex w-full max-w-4xl items-center justify-center my-8 px-2 select-none">
          <div className="flex items-center justify-center -space-x-5 md:-space-x-7">
            
            {/* Badge 1: 24/7 Auto-Reply */}
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-white border border-[#E5E7EB] shadow-md flex flex-col items-center justify-center text-center p-2 z-10 transition-transform hover:scale-105">
              <span className="text-sm font-extrabold text-[#111111] tracking-tight">24/7</span>
              <span className="text-[10px] text-[#666666] font-medium mt-0.5">Auto-Reply</span>
            </div>

            {/* Badge 2: Lead Qualification */}
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-white border border-[#E5E7EB] shadow-lg flex flex-col items-center justify-center text-center p-2 z-20 transition-transform hover:scale-105">
              <span className="text-sm md:text-base font-extrabold text-[#111111] tracking-tight">Smart Lead</span>
              <span className="text-[10px] md:text-[11px] text-[#666666] font-medium mt-0.5">Qualification</span>
            </div>

            {/* CENTER ORB: Authentic Green WhatsApp Logo */}
            <div className="w-44 h-44 md:w-56 md:h-56 rounded-full bg-white border-2 border-[#25D366] flex items-center justify-center relative z-30 shadow-md transition-transform hover:scale-105 p-3">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-[#25D366] flex items-center justify-center shadow-sm relative">
                <svg className="w-14 h-14 md:w-18 md:h-18 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.147 4.191 4.29-1.124zm11.233-6.387c-.298-.149-1.761-.868-2.033-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.645.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
                </svg>
              </div>
            </div>

            {/* Badge 4: Broadcast Messaging */}
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-white border border-[#E5E7EB] shadow-lg flex flex-col items-center justify-center text-center p-2 z-20 transition-transform hover:scale-105">
              <span className="text-sm md:text-base font-extrabold text-[#111111] tracking-tight">Broadcast</span>
              <span className="text-[10px] md:text-[11px] text-[#666666] font-medium mt-0.5">Campaigns</span>
            </div>

            {/* Badge 5: CRM Integration */}
            <div className="w-32 h-32 md:w-36 md:h-36 rounded-full bg-white border border-[#E5E7EB] shadow-md flex flex-col items-center justify-center text-center p-2 z-10 transition-transform hover:scale-105">
              <span className="text-sm font-extrabold text-[#111111] tracking-tight">CRM</span>
              <span className="text-[10px] text-[#666666] font-medium mt-0.5">Integration</span>
            </div>

          </div>
        </div>

        {/* ─── MOBILE GRAPHIC: Vertical Stack Layout (Mobile Optimized) ─── */}
        <div className="md:hidden flex flex-col items-center w-full my-6 space-y-6">
          
          {/* Main WhatsApp Orb Top Center */}
          <div className="w-28 h-28 rounded-full bg-white border-2 border-[#25D366] flex items-center justify-center shadow-md p-2">
            <div className="w-20 h-20 rounded-full bg-[#25D366] flex items-center justify-center shadow-sm">
              <svg className="w-10 h-10 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.147 4.191 4.29-1.124zm11.233-6.387c-.298-.149-1.761-.868-2.033-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.645.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
              </svg>
            </div>
          </div>

          {/* 2x2 Grid of Clean Badges for Mobile */}
          <div className="grid grid-cols-2 gap-3 w-full px-2">
            
            <div className="bg-white border border-[#E5E7EB] rounded-xl p-3 flex flex-col items-center justify-center text-center shadow-xs">
              <span className="text-xs font-bold text-[#111111]">24/7 Auto-Reply</span>
              <span className="text-[10px] text-[#666666]">Instant Support</span>
            </div>

            <div className="bg-white border border-[#E5E7EB] rounded-xl p-3 flex flex-col items-center justify-center text-center shadow-xs">
              <span className="text-xs font-bold text-[#111111]">Smart Lead</span>
              <span className="text-[10px] text-[#666666]">Qualification</span>
            </div>

            <div className="bg-white border border-[#E5E7EB] rounded-xl p-3 flex flex-col items-center justify-center text-center shadow-xs">
              <span className="text-xs font-bold text-[#111111]">Broadcast</span>
              <span className="text-[10px] text-[#666666]">Campaigns</span>
            </div>

            <div className="bg-white border border-[#E5E7EB] rounded-xl p-3 flex flex-col items-center justify-center text-center shadow-xs">
              <span className="text-xs font-bold text-[#111111]">CRM Integration</span>
              <span className="text-[10px] text-[#666666]">Automated Sync</span>
            </div>

          </div>
        </div>

        {/* Bottom 3 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-10 md:mt-16">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6 sm:p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#007FFF]/10 flex items-center justify-center mb-4 text-[#007FFF]">
              <MessageSquare className="w-6 h-6 stroke-[2.2]" />
            </div>
            <h3 className="font-bold text-lg sm:text-xl text-[#111111] mb-2 tracking-tight">
              Instant Automated Replies
            </h3>
            <p className="text-sm text-[#666666] leading-relaxed">
              Respond to customer inquiries within seconds with customized chat flows, FAQs, and interactive menu options.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6 sm:p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#007FFF]/10 flex items-center justify-center mb-4 text-[#007FFF]">
              <Target className="w-6 h-6 stroke-[2.2]" />
            </div>
            <h3 className="font-bold text-lg sm:text-xl text-[#111111] mb-2 tracking-tight">
              Smart Lead Qualification
            </h3>
            <p className="text-sm text-[#666666] leading-relaxed">
              Automatically collect prospect details, ask qualifying questions, and seamlessly route high-intent leads to your sales team.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl border border-[#E5E7EB] p-6 sm:p-8 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#007FFF]/10 flex items-center justify-center mb-4 text-[#007FFF]">
              <Send className="w-6 h-6 stroke-[2.2]" />
            </div>
            <h3 className="font-bold text-lg sm:text-xl text-[#111111] mb-2 tracking-tight">
              Broadcasting & Nurturing
            </h3>
            <p className="text-sm text-[#666666] leading-relaxed">
              Send targeted promotional broadcasts, order updates, and automated re-engagement campaigns directly on WhatsApp.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
