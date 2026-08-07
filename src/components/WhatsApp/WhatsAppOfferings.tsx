'use client';

import { useState } from 'react';
import { Plus, Minus, ArrowUpRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const offerings = [
  {
    id: 'automated-chatbots',
    title: 'Automated Chatbots',
    description: 'Custom-built WhatsApp bots that answer common questions, collect leads, book appointments, or guide customers — all with a natural, human-like flow.',
  },
  {
    id: 'broadcast-automation',
    title: 'Broadcast Automation',
    description: 'Send out promotional messages, updates, and offers to large audiences with full compliance and zero hassle.',
  },
  {
    id: 'crm-integration',
    title: 'WhatsApp CRM Integration',
    description: 'Seamlessly connect WhatsApp to your CRM or other business tools, ensuring no lead gets missed and every conversation is properly tracked.',
  },
  {
    id: 'trigger-messaging',
    title: 'Trigger-Based Messaging',
    description: 'Set up automated messages based on customer actions — from order confirmations to feedback requests.',
  },
  {
    id: 'multi-agent-inbox',
    title: 'Multi-Agent WhatsApp Inbox',
    description: 'Manage conversations across your team with a shared inbox, ensuring smooth handovers between automation and human support.',
  },
];

export default function WhatsAppOfferings() {
  const [activeOfferingId, setActiveOfferingId] = useState<string | null>(null);

  const toggleOffering = (id: string) => {
    setActiveOfferingId((prev) => (prev === id ? null : id));
  };

  // Split 5 items: Col 1 has 3 items, Col 2 has 2 items
  const col1 = offerings.slice(0, 3);
  const col2 = offerings.slice(3, 5);
  const columns = [col1, col2];

  return (
    <section className="font-jakarta bg-white text-[#111111] w-full px-4 sm:px-6 md:px-8 lg:px-12 py-10 md:py-16 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* Top Section */}
        <div className="flex flex-col items-center justify-center text-center mb-12 md:mb-16">
          <div className="bg-[#007FFF] text-white px-5 py-2 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wider mb-6 shadow-xs">
            Our Solutions
          </div>
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.08] tracking-tight mb-5 text-[#111111]">
            What We <span className="font-jakarta italic font-normal pr-2">Offer.</span>
          </h2>
          <p className="text-[#555555] text-base md:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            Comprehensive WhatsApp Automation solutions engineered to elevate customer engagement and streamline your team's communication.
          </p>
        </div>

        {/* Bottom Section: Accordion Container */}
        <div className="w-full flex flex-col gap-8">
          
          {/* Main White Card with Two Columns */}
          <div className="bg-white rounded-[24px] md:rounded-[32px] p-6 sm:p-10 md:p-12 border border-[#E5E7EB]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              
              {columns.map((column, colIndex) => (
                <div key={colIndex} className="flex flex-col h-full">
                  
                  {/* Category Header Row */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#E5E7EB] mb-2">
                    <h3 className="font-bold text-xl md:text-2xl text-[#111111] tracking-tight">
                      {colIndex === 0 ? "Bots & Integration" : "Messaging & Team Inbox"}
                    </h3>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full border border-[#D5D5D5] flex items-center justify-center bg-white">
                        <ArrowUpRight className="w-4 h-4 text-[#555555]" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#007FFF] flex items-center justify-center">
                        <MessageCircle className="w-4 h-4 text-white stroke-[2.5]" />
                      </div>
                    </div>
                  </div>

                  {/* Accordion Items List */}
                  <div className="flex flex-col h-full">
                    {column.map((offering, index) => {
                      const isActive = activeOfferingId === offering.id;
                      const isLast = index === column.length - 1;

                      return (
                        <div 
                          key={offering.id}
                          className={`flex flex-col py-4 px-4 -mx-4 rounded-xl transition-all duration-300 cursor-pointer ${
                            isActive ? 'bg-[#111111]' : 'hover:bg-[#111111] group'
                          } ${
                            !isActive && !isLast ? 'border-b border-[#E5E7EB] hover:border-transparent' : ''
                          }`}
                          onClick={() => toggleOffering(offering.id)}
                        >
                          {/* Accordion Trigger Header */}
                          <div className="flex items-center justify-between w-full focus:outline-none select-none">
                            <span className={`text-base md:text-lg font-semibold transition-colors duration-300 pr-4 ${
                              isActive ? 'text-white' : 'text-[#111111] group-hover:text-white'
                            }`}>
                              {offering.title}
                            </span>
                            {isActive ? (
                              <Minus className="w-4 h-4 text-white shrink-0" />
                            ) : (
                              <Plus className="w-4 h-4 text-[#111111] group-hover:text-white shrink-0 transition-colors duration-300" />
                            )}
                          </div>

                          {/* Accordion Body */}
                          <AnimatePresence>
                            {isActive && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden"
                              >
                                <div className="pt-3 pb-1 flex flex-col gap-3">
                                  <p className="text-white/80 text-sm md:text-base leading-relaxed font-normal">
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
