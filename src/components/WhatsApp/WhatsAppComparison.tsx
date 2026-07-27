'use client';

import { Check, X, ArrowUpRight } from 'lucide-react';

const COMPARISON_ITEMS = [
  {
    metric: 'Message Open Rate',
    whatsapp: '98% Open Rate',
    whatsappDesc: 'Messages are delivered instantly and read within 3 minutes.',
    traditional: '20% Open Rate',
    traditionalDesc: 'Emails are easily lost in spam folders or inbox noise.',
  },
  {
    metric: 'Average Response Speed',
    whatsapp: 'Under 60 Seconds',
    whatsappDesc: 'Instant 24/7 automated resolution and menu guidance.',
    traditional: '24+ Hours',
    traditionalDesc: 'Slow manual email replies lead to cold, dropped prospects.',
  },
  {
    metric: 'User Engagement Model',
    whatsapp: 'Interactive Buttons & Menus',
    whatsappDesc: 'One-tap options, quick replies, and rich media catalogs.',
    traditional: 'Static Text & Hyperlinks',
    traditionalDesc: 'High-friction plain text links with low click-through rates.',
  },
  {
    metric: 'Lead-to-Customer Conversion',
    whatsapp: '3.5x Higher Conversion',
    whatsappDesc: 'Personal, direct conversational funnel built on trust.',
    traditional: 'Standard Baseline',
    traditionalDesc: 'Low engagement rates and high customer drop-off.',
  },
  {
    metric: 'Delivery Guarantee',
    whatsapp: 'Direct Meta API Integration',
    whatsappDesc: 'Official business channel with zero spam filter blocking.',
    traditional: 'Spam Filters & Bounces',
    traditionalDesc: 'Carrier restrictions, promotions tabs, and bounced emails.',
  },
];

export default function WhatsAppComparison() {
  return (
    <section className="font-jakarta bg-white text-[#111111] py-10 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.1] text-[#111111] tracking-tight mb-4 max-w-3xl">
            WhatsApp vs. Traditional Channels.
          </h2>
          <p className="text-[#555555] text-base md:text-lg font-medium max-w-2xl leading-relaxed">
            See how WhatsApp Automation outperforms traditional Email and SMS across every key performance metric.
          </p>
        </div>

        {/* ─── DESKTOP VIEW: Side-by-Side Comparison Table Matrix ─── */}
        <div className="hidden md:block w-full bg-white rounded-[24px] border border-[#E5E7EB] overflow-hidden">
          
          {/* Table Header Row */}
          <div className="grid grid-cols-12 bg-gray-50 border-b border-[#E5E7EB] p-6 text-left items-center font-bold text-sm text-[#111111] uppercase tracking-wider">
            <div className="col-span-4 text-[#555555]">Performance Metric</div>
            <div className="col-span-4 text-[#25D366] flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#25D366]" />
              WhatsApp Automation
            </div>
            <div className="col-span-4 text-[#666666] flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-gray-400" />
              Traditional Channels (Email / SMS)
            </div>
          </div>

          {/* Table Body Rows */}
          <div className="divide-y divide-[#E5E7EB]">
            {COMPARISON_ITEMS.map((item, idx) => (
              <div key={idx} className="grid grid-cols-12 p-6 items-center text-left hover:bg-gray-50/50 transition-colors">
                
                {/* Metric Title */}
                <div className="col-span-4 font-bold text-base text-[#111111] pr-4">
                  {item.metric}
                </div>

                {/* WhatsApp Column */}
                <div className="col-span-4 pr-6 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-50 border border-green-200 flex items-center justify-center shrink-0 mt-0.5 text-[#25D366]">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <div>
                    <span className="font-bold text-[#111111] text-base block mb-0.5">
                      {item.whatsapp}
                    </span>
                    <span className="text-xs text-[#555555] leading-relaxed block">
                      {item.whatsappDesc}
                    </span>
                  </div>
                </div>

                {/* Traditional Column */}
                <div className="col-span-4 pr-4 flex items-start gap-3 opacity-80">
                  <div className="w-6 h-6 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0 mt-0.5 text-gray-400">
                    <X className="w-3.5 h-3.5 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="font-bold text-[#666666] text-base block mb-0.5">
                      {item.traditional}
                    </span>
                    <span className="text-xs text-gray-500 leading-relaxed block">
                      {item.traditionalDesc}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* ─── MOBILE VIEW: Stacked Responsive Comparison Cards ─── */}
        <div className="md:hidden flex flex-col space-y-4">
          {COMPARISON_ITEMS.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl border border-[#E5E7EB] p-5 flex flex-col space-y-4">
              
              {/* Metric Title */}
              <div className="border-b border-gray-100 pb-2">
                <span className="text-xs font-bold text-[#666666] uppercase tracking-wider block mb-0.5">
                  Metric #{idx + 1}
                </span>
                <h3 className="font-bold text-lg text-[#111111] tracking-tight">
                  {item.metric}
                </h3>
              </div>

              {/* WhatsApp Winner Card */}
              <div className="bg-green-50/40 border border-green-200/80 rounded-xl p-4 flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#25D366] uppercase tracking-wider block">
                    WhatsApp Automation
                  </span>
                  <span className="font-bold text-[#111111] text-base block mb-1">
                    {item.whatsapp}
                  </span>
                  <p className="text-xs text-[#555555] leading-relaxed">
                    {item.whatsappDesc}
                  </p>
                </div>
              </div>

              {/* Traditional Baseline Card */}
              <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center shrink-0 mt-0.5">
                  <X className="w-3.5 h-3.5 stroke-[2.5]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider block">
                    Traditional (Email / SMS)
                  </span>
                  <span className="font-bold text-[#666666] text-base block mb-1">
                    {item.traditional}
                  </span>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {item.traditionalDesc}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
