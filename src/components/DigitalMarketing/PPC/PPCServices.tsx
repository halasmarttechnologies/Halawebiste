'use client';

import { useState } from 'react';
import {
  Search, Edit3, Target, Activity, BarChart3, Plus, Minus, Layers, TrendingUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = [
  {
    title: 'Strategy & Creation',
    icon: Layers,
    services: [
      {
        id: 'keyword-research',
        title: 'Targeted Keyword Research',
        icon: Search,
        description: 'We identify high-value keywords that your ideal customers are actively searching for, ensuring your business gets discovered at the right time. This ensures your ads appear at the right time, in the right place, boosting both visibility and clicks.'
      },
      {
        id: 'ad-creation',
        title: 'Engaging Ad Creation',
        icon: Edit3,
        description: 'Our creative team crafts ads that stop people in their tracks and drive results. Whether through text, images, or calls-to-action, we ensure your message is clear, compelling, and crafted to convert clicks into customers.'
      },
      {
        id: 'audience-targeting',
        title: 'Precise Audience Targeting',
        icon: Target,
        description: 'Your ads are only shown to the people who matter based on location, age, interests, behaviours, and more. Every click comes from someone more likely to buy.'
      }
    ]
  },
  {
    title: 'Optimization & Analytics',
    icon: TrendingUp,
    services: [
      {
        id: 'continuous-optimization',
        title: 'Continuous Optimization',
        icon: Activity,
        description: 'We monitor and improve your campaigns daily adjusting bids, refining targeting, and testing performance to maximize your ROI.'
      },
      {
        id: 'performance-reporting',
        title: 'Transparent Performance Reporting',
        icon: BarChart3,
        description: 'We give you clear, actionable reports that show what’s working, what needs tweaking, and where your budget is going so you’re always in control.'
      }
    ]
  }
];

export default function PPCServices() {
  const [activeServiceId, setActiveServiceId] = useState<string | null>('keyword-research');

  const toggleService = (id: string) => {
    setActiveServiceId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="font-jakarta bg-white text-[#111111] w-full px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24 relative overflow-hidden border-b border-[#e5e5e5]">
      
      <div className="max-w-[1280px] mx-auto relative z-10">

        {/* Top Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-20">
          <div className="bg-[#007FFF] text-white px-5 py-2 rounded-full text-xs sm:text-sm font-jakarta font-semibold mb-6">
            PPC Services
          </div>
          <h2 className="font-jakarta font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.08] tracking-tight mb-6 text-[#111111] max-w-4xl">
            Discover Our <em className="font-jakarta font-normal pr-2">Advertising Services</em>
          </h2>
          <p className="font-jakarta text-base md:text-lg text-[#555555] font-normal max-w-3xl leading-relaxed">
            Appear exactly where your audience is searching for. Our PPC specialists run targeted campaigns that deliver instant visibility, qualified leads, and measurable ROI.
          </p>
        </div>

        {/* Main White Card with 2 Side-by-Side Columns */}
        <div className="w-full max-w-[1200px] mx-auto bg-white rounded-[24px] md:rounded-[32px] p-6 sm:p-10 md:p-12 border border-[#eeeeee]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14">
            
            {CATEGORIES.map((category, catIndex) => {
              const CategoryIcon = category.icon;
              return (
                <div key={catIndex} className="flex flex-col h-full">
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-5 border-b border-[#e5e5e5] mb-4">
                    <h3 className="font-jakarta text-xl md:text-2xl font-semibold text-[#111111] tracking-tight">
                      {category.title}
                    </h3>
                    <div className="w-9 h-9 rounded-full bg-[#007FFF] flex items-center justify-center">
                      <CategoryIcon className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  {/* Accordion List Items */}
                  <div className="flex flex-col gap-3">
                    {category.services.map((service) => {
                      const isActive = activeServiceId === service.id;
                      const IconComponent = service.icon;

                      return (
                        <div
                          key={service.id}
                          className={`flex flex-col py-4 px-5 rounded-2xl transition-colors duration-300 cursor-pointer ${
                            isActive ? 'bg-[#111111] text-white' : 'bg-white hover:bg-[#f9f9f9] text-[#111111] border border-[#e5e5e5]'
                          }`}
                          onClick={() => toggleService(service.id)}
                        >
                          {/* Accordion Trigger Header */}
                          <div className="flex items-center justify-between w-full focus:outline-none">
                            <div className="flex items-center gap-3.5">
                              <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                                isActive ? 'bg-[#007FFF] text-white' : 'bg-[#f5f5f5] text-[#111111]'
                              }`}>
                                <IconComponent className="w-4 h-4" />
                              </div>
                              <span className={`font-jakarta text-base font-semibold ${
                                isActive ? 'text-white' : 'text-[#111111]'
                              }`}>
                                {service.title}
                              </span>
                            </div>

                            {isActive ? (
                              <Minus className="w-4 h-4 text-white" />
                            ) : (
                              <Plus className="w-4 h-4 text-[#111111]" />
                            )}
                          </div>

                          {/* Accordion Body */}
                          <AnimatePresence>
                            {isActive && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                                className="overflow-hidden"
                              >
                                <div className="pt-4 pb-2 pl-12">
                                  <p className="font-jakarta text-xs md:text-sm leading-relaxed text-[#CCCCCC] font-normal">
                                    {service.description}
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
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}
