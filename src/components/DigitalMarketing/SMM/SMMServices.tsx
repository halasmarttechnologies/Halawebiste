'use client';

import { useState } from 'react';
import {
  FileText, MessageCircle, Users, Image as ImageIcon, Target, BarChart3, Plus, Minus, Layers, TrendingUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CATEGORIES = [
  {
    title: 'Content & Engagement',
    icon: Layers,
    services: [
      {
        id: 'content-planning',
        title: 'Strategic Content Planning',
        icon: FileText,
        description: 'We build monthly content calendars aligned with your brand, goals, and audience. Furthermore, from static posts to reels and stories, we ensure every piece of content has purpose and personality. Additionally, our strategic approach keeps your social media consistent, engaging, and result-driven.'
      },
      {
        id: 'community-engagement',
        title: 'Community Engagement',
        icon: MessageCircle,
        description: 'We engage your audience in real time responding to messages, comments, and mentions so you can build stronger relationships and deeper brand loyalty.'
      },
      {
        id: 'influencer-ugc',
        title: 'Influencer & UGC Collaboration',
        icon: Users,
        description: 'We help you connect with influencers or collect user-generated content (UGC) from your happy customers. This builds trust and extends your reach naturally.'
      }
    ]
  },
  {
    title: 'Design, Paid & Analytics',
    icon: TrendingUp,
    services: [
      {
        id: 'visual-design',
        title: 'Strong Visual Design',
        icon: ImageIcon,
        description: 'Our designers craft high-quality visuals that match your brand identity. Moreover, from scroll-stopping images to polished carousels and reels, we help your content stand out. Additionally, every design is created to enhance engagement and strengthen your overall brand presence.'
      },
      {
        id: 'paid-social',
        title: 'Paid Social Campaigns',
        icon: Target,
        description: 'Want results fast? Moreover, our paid ad specialists run highly targeted campaigns designed to bring traffic, leads, or sales. In addition, we manage everything from audience targeting to continuous optimization, ensuring you get the best return on your investment.'
      },
      {
        id: 'analytics',
        title: 'Analytics & Performance Tracking',
        icon: BarChart3,
        description: 'We don’t guess what we measure. Get clear reports on reach, engagement, followers, and conversions so you know what’s working and how to improve.'
      }
    ]
  }
];

export default function SMMServices() {
  const [activeServiceId, setActiveServiceId] = useState<string | null>('content-planning');

  const toggleService = (id: string) => {
    setActiveServiceId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="font-jakarta bg-white text-[#111111] w-full px-4 sm:px-6 md:px-8 lg:px-12 py-16 md:py-24 relative overflow-hidden border-b border-[#e5e5e5]">

      <div className="max-w-[1280px] mx-auto relative z-10">

        {/* Top Section Header */}
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-20">
          <div className="bg-[#007FFF] text-white px-5 py-2 rounded-full text-xs sm:text-sm font-jakarta font-semibold mb-6">
            Social Media Services
          </div>
          <h2 className="font-jakarta font-semibold text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] leading-[1.08] tracking-tight mb-6 text-[#111111] max-w-4xl">
            Explore Our <span className="font-jakarta pr-2">all-in-One Services</span>
          </h2>
          <p className="font-jakarta text-base md:text-lg text-[#555555] max-w-3xl leading-relaxed">
            Grow your brand presence and engage your audience across popular social media platforms. Moreover, we create impactful strategies to boost your reach, drive traffic, and increase conversions. Additionally, our tailored approach ensures your brand stays consistent, relevant, and highly competitive.
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
                          className={`flex flex-col py-4 px-5 rounded-2xl transition-colors duration-300 cursor-pointer ${isActive ? 'bg-[#111111] text-white' : 'bg-white hover:bg-[#f9f9f9] text-[#111111] border border-[#e5e5e5]'
                            }`}
                          onClick={() => toggleService(service.id)}
                        >
                          {/* Accordion Trigger Header */}
                          <div className="flex items-center justify-between w-full focus:outline-none">
                            <div className="flex items-center gap-3.5">
                              <div className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${isActive ? 'bg-[#007FFF] text-white' : 'bg-[#f5f5f5] text-[#111111]'
                                }`}>
                                <IconComponent className="w-4 h-4" />
                              </div>
                              <span className={`font-jakarta text-base font-semibold ${isActive ? 'text-white' : 'text-[#111111]'
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
                                  <p className="font-jakarta text-xs md:text-sm leading-relaxed text-[#CCCCCC]">
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
