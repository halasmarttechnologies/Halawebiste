'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const teamMembers = [
  {
    id: 5,
    name: 'Taimoor Ali Warraich',
    role: 'Co-Founder',
    category: 'Management',
    image: '/team-pics/Ceo.jpg',
  },
  {
    id: 1,
    name: 'Saif Ali',
    role: 'UI/UX & Web Developer',
    category: 'Development',
    image: '/team-pics/Ui Ux & Web devloepr.jpg',
  },
  {
    id: 2,
    name: 'Rimza Habib',
    role: 'SEO Manager',
    category: 'Marketing',
    image: '/team-pics/Seo manager.jpg',
  },
  {
    id: 6,
    name: 'Hasnain Akbar',
    role: 'SEO Expert',
    category: 'Marketing',
    image: '/team-pics/seo expert.jpg',
  },
  {
    id: 3,
    name: 'Chaman shafique',
    role: 'Content Writer',
    category: 'Creative',
    image: '/team-pics/Contetn writer.jpg',
  },
  {
    id: 4,
    name: 'Abdur Rafay',
    role: 'Video Editor',
    category: 'Creative',
    image: '/team-pics/videoeditor.jpg',
  },
];

const categories = ['View all', 'Management', 'Development', 'Marketing', 'Creative'];

export default function OurTeam() {
  const [activeCategory, setActiveCategory] = useState('View all');

  const filteredTeam = teamMembers.filter(member => 
    activeCategory === 'View all' ? true : member.category === activeCategory
  );

  return (
    <section className="bg-white w-full pt-8 md:pt-12 pb-20 px-4 sm:px-6 md:px-8 lg:px-12 flex justify-center overflow-hidden">
      <div className="max-w-[1000px] w-full flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-10 w-full max-w-3xl">
          <h2 className="font-jakarta text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-medium leading-[1.05] tracking-tight text-[#111111] mb-6">
            Meet the team that makes<br />
            the <span className="font-jakarta font-bold text-[#111111]">magic</span> happen
          </h2>
          <p className="font-jakarta text-[#666666] text-base md:text-lg font-medium px-4">
            Meet our diverse team of world-class creators, developers, and problem solvers.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12 md:mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 md:px-6 py-2 rounded-full text-[13px] md:text-[14px] font-semibold transition-all duration-300 border ${
                activeCategory === category
                  ? 'bg-white border-[#E5E5E5] text-[#111111] shadow-[0_4px_12px_rgba(0,0,0,0.05)]'
                  : 'bg-transparent border-transparent text-[#777777] hover:text-[#111111] hover:bg-[#F9FAFB]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Cards Container */}
        <motion.div 
          layout
          className="flex flex-wrap justify-center gap-6 w-full"
        >
          <AnimatePresence mode="popLayout">
            {filteredTeam.map((member) => (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] relative aspect-square rounded-[24px] overflow-hidden group cursor-pointer border border-[#E5E5E5] bg-[#F9FAFB] shadow-[0_8px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-500"
              >
                {/* Image */}
                <div className="absolute inset-0 w-full h-full">
                  {member.image.includes('placeholder') ? (
                    <div className="w-full h-full flex items-center justify-center text-[#999] font-jakarta text-xs tracking-widest uppercase">
                      Image {member.id}
                    </div>
                  ) : (
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill 
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  )}
                </div>

                {/* Info Panel */}
                <div className="absolute bottom-4 left-0 right-0 w-[85%] mx-auto">
                  <div className="bg-white/95 backdrop-blur-md rounded-[16px] py-3 px-4 flex flex-col items-center justify-center text-center shadow-sm border border-white/50">
                    <h3 className="font-jakarta font-bold text-[#111111] text-[14px] md:text-[15px] leading-tight mb-0.5">
                      {member.name}
                    </h3>
                    <p className="font-jakarta text-[#666666] text-[11px] md:text-[12px] font-medium">
                      {member.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}