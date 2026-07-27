'use client';

import { useState } from 'react';
import { Plus, Minus, ArrowUpRight, Bot } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const offerings = [
  {
    id: 'customer-service',
    title: 'AI Customer Service Representatives',
    description: 'Provide prompts, human-like customer support around-the-clock. Our voice assistants and AI chatbots handle complicated questions with a smooth conversation flow, speed up response times, and increase user satisfaction.',
  },
  {
    id: 'sales',
    title: 'AI Sales Representatives',
    description: 'Use smart, behavior-driven follow-ups to increase lead conversion. Without missing a lead, our AI sales agents interact with potential clients, respond to their inquiries, and lead them through the sales funnel.',
  },
  {
    id: 'social-media',
    title: 'AI Social Media Coordinators',
    description: 'Stay active and responsive across every platform. Our AI Agents manage your social media presence by tracking trends, generating content, and automating responses, connect and engage with the right audience.',
  },
  {
    id: 'ad-optimization',
    title: 'Ad optimization powered by AI',
    description: 'Allow AI to evaluate the effectiveness of your campaigns and make real-time adjustments to your bidding, targeting, and creatives. Make informed decisions based on actual data to optimize ROI.',
  }
];

export default function AIAgentOfferings() {
  const [activeOfferingId, setActiveOfferingId] = useState<string | null>(null);

  const toggleOffering = (id: string) => {
    setActiveOfferingId((prev) => (prev === id ? null : id));
  };

  // Split offerings into two columns
  const col1 = offerings.slice(0, 2);
  const col2 = offerings.slice(2, 4);
  const columns = [col1, col2];

  return (
    <section className="font-jakarta bg-white text-[#111111] w-full px-4 sm:px-6 md:px-8 lg:px-12 py-10 md:py-16 relative overflow-hidden">
      
      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* Top Section */}
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-20">
          <div className="bg-[#007FFF] text-white px-5 py-2 rounded-full text-sm font-semibold mb-8 shadow-sm">
            AI Capabilities
          </div>
          <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.05] tracking-tight mb-6 text-[#111111]">
            Our Main <span className="eb-garamond italic pr-2 font-normal">Offerings.</span>
          </h2>
          <p className="text-lg md:text-xl text-[#555555] font-medium max-w-2xl mx-auto">
            Next-generation AI agents that integrate seamlessly into your business, transforming operations and driving scalable growth.
          </p>
        </div>

        {/* Bottom Section: Accordion */}
        <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-8">
          
          {/* Main White Card with Two Columns */}
          <div className="bg-white rounded-[24px] md:rounded-[32px] p-6 sm:p-12 md:p-14 shadow-[0_15px_50px_rgba(0,0,0,0.06)] border border-[#eeeeee]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
              
              {columns.map((column, colIndex) => (
                <div key={colIndex} className="flex flex-col h-full">
                  {/* Header Row (Optional styling similar to category headers) */}
                  <div className="flex items-center justify-between pb-5 border-b border-[#e5e5e5] mb-2">
                    <h3 className="font-jakarta text-[22px] md:text-[24px] font-medium text-[#111111] tracking-tight">
                      {colIndex === 0 ? "Engagement & Sales" : "Marketing & Ads"}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full border border-[#d5d5d5] flex items-center justify-center bg-white transition-colors hover:border-[#007FFF] group cursor-pointer">
                        <ArrowUpRight className="w-[14px] h-[14px] text-[#555555] group-hover:text-[#007FFF]" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#007FFF] flex items-center justify-center shadow-sm">
                        <Bot className="w-4 h-4 text-white stroke-[2.5]" />
                      </div>
                    </div>
                  </div>

                  {/* Accordion List Items */}
                  <div className="flex flex-col h-full">
                    {column.map((offering, index) => {
                      const isActive = activeOfferingId === offering.id;
                      const isLast = index === column.length - 1;

                      return (
                        <div 
                          key={offering.id}
                          className={`flex flex-col py-5 px-4 -mx-4 rounded-xl group transition-colors duration-500 cursor-pointer ${
                            isActive ? 'bg-[#111111]' : 'hover:bg-[#111111]'
                          } ${
                            !isActive && !isLast ? 'border-b border-[#e5e5e5] hover:border-transparent' : ''
                          }`}
                          onClick={() => toggleOffering(offering.id)}
                        >
                          {/* Accordion Trigger Header */}
                          <div className="flex items-center justify-between w-full focus:outline-none">
                            <span className={`text-[15px] md:text-base font-semibold transition-colors duration-500 pr-4 ${
                              isActive ? 'text-white' : 'text-[#111111] group-hover:text-white'
                            }`}>
                              {offering.title}
                            </span>
                            {isActive ? (
                              <Minus className="w-[16px] h-[16px] text-white transition-all duration-500 shrink-0" />
                            ) : (
                              <Plus className="w-[16px] h-[16px] text-[#111111] group-hover:text-white transition-all duration-500 shrink-0" />
                            )}
                          </div>

                          {/* Accordion Body */}
                          <AnimatePresence>
                            {isActive && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden"
                              >
                                <div className="pt-4 pb-2 flex flex-col gap-4">
                                  <p className="text-white/80 text-[14px] md:text-[15px] leading-relaxed font-medium">
                                    {offering.description}
                                  </p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
