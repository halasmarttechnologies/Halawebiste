'use client';

import Link from 'next/link';
import { TrendingUp, Target, PenTool, MessageSquare, Plus } from 'lucide-react';

interface AgentCardItem {
  id: string;
  badge: string;
  icon: any;
  title: string;
  description: string;
  gradient: string;
}

const CARDS: AgentCardItem[] = [
  {
    id: 'marketing',
    badge: 'Marketing Agents',
    icon: TrendingUp,
    title: 'Growth & Marketing',
    description: 'Automate campaign strategy, ad performance, and multi-channel growth ops.',
    gradient: 'from-[#007FFF] via-[#0052D4] to-[#4364F7]',
  },
  {
    id: 'sales',
    badge: 'Sales Agents',
    icon: Target,
    title: 'Lead Gen & Sales',
    description: 'Engage website visitors 24/7, qualify leads, and close deals automatically.',
    gradient: 'from-[#111111] via-[#1E293B] to-[#007FFF]',
  },
  {
    id: 'content',
    badge: 'Content & SEO',
    icon: PenTool,
    title: 'Copy & Content AI',
    description: 'Produce rank-boosting SEO articles, social content, and targeted copy.',
    gradient: 'from-[#007FFF] via-[#00C6FF] to-[#0072FF]',
  },
  {
    id: 'whatsapp',
    badge: 'WhatsApp Agents',
    icon: MessageSquare,
    title: 'Automated Support',
    description: 'Deliver instant personalized customer communication across messaging channels.',
    gradient: 'from-[#2563EB] via-[#3B82F6] to-[#60A5FA]',
  },
];

export default function AIAgentCatalog() {
  const garamondStyle = { fontFamily: "'EB Garamond', serif" };

  return (
    <section className="font-jakarta relative bg-white text-[#111111] z-30 rounded-t-[40px] md:rounded-t-[60px] -mt-8 md:-mt-10 py-10 sm:py-14 md:py-18 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto">

        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="font-jakarta text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold tracking-[-2px] text-[#111111] leading-[1.08]">
              AI Agents for Everything{' '}

            </h2>
          </div>

          <p className="font-jakarta text-sm sm:text-base text-[#555555] max-w-[420px] leading-relaxed font-normal">
            Tailored AI agents engineered to handle marketing, customer acquisition, content creation, and business growth.
          </p>
        </div>

        {/* Clean 4-Column Grid (Static Clean Cards, Gradient Icon Containers) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CARDS.map((card) => {
            const IconComponent = card.icon;

            return (
              <div
                key={card.id}
                className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-[28px] p-6 sm:p-7 flex flex-col justify-between h-[380px] sm:h-[400px] select-none shadow-none"
              >
                {/* Card Top: Gradient Icon Box & Black Outline Badge */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    {/* Gradient Icon Container matching Website Development section */}
                    <div className={`w-14 h-14 rounded-[20px] bg-gradient-to-br ${card.gradient} flex items-center justify-center border border-white/20 select-none shadow-none`}>
                      <div className="w-8 h-8 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white">
                        <IconComponent className="w-4 h-4 text-white stroke-[2]" />
                      </div>
                    </div>

                    {/* Pill badge: Black font & Black outline */}
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white text-[#111111] border border-[#111111]">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="font-jakarta text-xl sm:text-2xl font-bold text-[#111111] mb-3">
                    {card.title}
                  </h3>

                  <p className="font-jakarta text-xs sm:text-sm text-[#555555] leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                {/* Card Bottom: Simple CTA Link (No Hover Effect) */}
                <div className="flex items-center justify-between pt-4 border-t border-[#E2E8F0]">
                  <span className="text-xs font-semibold text-[#888888]">Hala AI Agent</span>
                  <Link
                    href="/contact"
                    className="w-9 h-9 rounded-full bg-[#111111] text-white flex items-center justify-center shadow-none"
                    aria-label={`Get ${card.title}`}
                  >
                    <Plus className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
