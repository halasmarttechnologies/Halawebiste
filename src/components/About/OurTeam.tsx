'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'Taimoor Ali Warraich',
    role: 'Co-Founder & CEO',
    category: 'Management',
    image: '/team-pics/taimooe ali warcih.png',
  },
  {
    id: 2,
    name: 'Saif Ali',
    role: 'UI/UX & Web Developer',
    category: 'Development',
    image: '/team-pics/saif ali.png',
  },
  {
    id: 3,
    name: 'Rimza Habib',
    role: 'SEO Manager',
    category: 'Marketing',
    image: '/team-pics/rimza habib.png',
  },
  {
    id: 4,
    name: 'Hasnain Akbar',
    role: 'SEO Expert',
    category: 'Marketing',
    image: '/team-pics/husnaain.png',
  },
  {
    id: 5,
    name: 'Abdur Rafay',
    role: 'Video Editor',
    category: 'Creative',
    image: '/team-pics/rafay.png',
  },
  {
    id: 6,
    name: 'Chaman Shafique',
    role: 'Content Writer',
    category: 'Creative',
    image: '/team-pics/chaman shafiq.png',
  },
  {
    id: 7,
    name: 'Syeda Masoom Zahra',
    role: 'Graphic Design Intern',
    category: 'Creative',
    image: '/team-pics/syeda masoom zahra.png',
  },
];

export default function OurTeam() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.75;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section className="bg-white w-full py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-14 relative overflow-hidden select-none">
      <div className="max-w-[1400px] w-full mx-auto flex flex-col items-center relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 w-full max-w-3xl">
          <span className="font-jakarta text-black uppercase tracking-widest text-xs font-semibold mb-3 inline-block">
            Our World-Class Team
          </span>
          <h2 className="font-jakarta text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.1] tracking-tight text-black mb-5">
            Meet the minds behind the vision
          </h2>
          <p className="font-jakarta text-gray-600 text-base md:text-lg font-normal px-4 max-w-2xl mx-auto">
            A collective of innovative thinkers, creators, and builders pushing the boundaries of digital technology.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full flex items-center group">
          
          {/* Navigation Arrow Left */}
          <button
            onClick={() => handleScroll('left')}
            aria-label="Scroll left"
            className="absolute -left-3 sm:-left-5 lg:-left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full border border-gray-200 bg-white hover:bg-gray-100 text-gray-800 hover:text-black flex items-center justify-center transition-all duration-300 shadow-none cursor-pointer hover:scale-105 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Navigation Arrow Right */}
          <button
            onClick={() => handleScroll('right')}
            aria-label="Scroll right"
            className="absolute -right-3 sm:-right-5 lg:-right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full border border-gray-200 bg-white hover:bg-gray-100 text-gray-800 hover:text-black flex items-center justify-center transition-all duration-300 shadow-none cursor-pointer hover:scale-105 active:scale-95"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Cards Track */}
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory w-full py-4 px-1"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="shrink-0 snap-start w-[260px] sm:w-[290px] md:w-[310px] lg:w-[calc(25%-18px)] h-[400px] sm:h-[450px] md:h-[480px] rounded-[24px] sm:rounded-[28px] overflow-hidden relative group/card border border-gray-200 transition-all duration-500 hover:scale-[1.02] bg-gradient-to-b from-[#1c2459] via-[#0f1437] to-[#07091f] shadow-none"
              >
                {/* Inner radial blue glow behind headshot */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(99,102,241,0.25),transparent_70%)] pointer-events-none" />

                {/* Portrait Image */}
                <div className="absolute inset-0 w-full h-full">
                  {!imageErrors[member.id] ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 260px, (max-width: 1024px) 310px, 360px"
                      quality={90}
                      onError={() => handleImageError(member.id)}
                      className="object-cover object-top transition-transform duration-700 group-hover/card:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#0f1437]">
                      <div className="w-20 h-20 rounded-full bg-[#1c2459] flex items-center justify-center text-white text-2xl font-bold mb-3 border border-white/10">
                        {member.name.charAt(0)}
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom dark gradient overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07091f] via-[#07091f]/55 to-transparent z-10 pointer-events-none" />

                {/* Info Text Box (Bottom-Left) */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 md:p-7 z-20 flex flex-col justify-end text-left">
                  <h3 className="font-jakarta font-bold text-white text-xl sm:text-[22px] tracking-tight leading-snug mb-1 drop-shadow-md">
                    {member.name}
                  </h3>
                  <p className="font-jakarta font-medium text-[#5c7ceb] text-xs sm:text-[13.5px] tracking-wide drop-shadow-sm">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}