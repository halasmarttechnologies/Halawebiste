'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const teamMembers = [
  {
    id: 1,
    name: 'Taimoor Ali Warraich',
    role: 'Co-Founder & CEO',
    category: 'Management',
    image: '/team-pics/ceo taimoor.jpg',
  },
  {
    id: 2,
    name: 'Saif Ali',
    role: 'UI/UX & Web Developer',
    category: 'Development',
    image: '/team-pics/saif ali.jpg',
  },
  {
    id: 3,
    name: 'Rimza Habib',
    role: 'SEO Manager',
    category: 'Marketing',
    image: '/team-pics/rimza.jpg',
  },
  {
    id: 4,
    name: 'Hasnain Akbar',
    role: 'SEO Expert',
    category: 'Marketing',
    image: '/team-pics/hasnain.jpg',
  },
  {
    id: 5,
    name: 'Abdur Rafay',
    role: 'Video Editor',
    category: 'Creative',
    image: '/team-pics/rafayy.jpg',
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

function TeamMemberCard({ member, index }: { member: (typeof teamMembers)[0]; index: number }) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      className="w-full h-[420px] sm:h-[460px] md:h-[480px] rounded-[24px] sm:rounded-[28px] overflow-hidden relative group/card border border-gray-200 transition-all duration-500 hover:scale-[1.02] bg-gradient-to-b from-[#1c2459] via-[#0f1437] to-[#07091f] shadow-sm hover:shadow-xl"
    >
      {/* Inner radial blue glow behind headshot */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(99,102,241,0.25),transparent_70%)] pointer-events-none" />

      {/* Portrait Image */}
      <div className="absolute inset-0 w-full h-full">
        {!imageError ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={90}
            onError={() => setImageError(true)}
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
  );
}

export default function OurTeam() {
  const row1 = teamMembers.slice(0, 3);
  const row2 = teamMembers.slice(3, 5);
  const row3 = teamMembers.slice(5, 7);

  return (
    <section className="bg-white w-full py-16 md:py-24 px-4 sm:px-6 md:px-10 lg:px-14 relative overflow-hidden select-none border-b border-[#e5e5e5]">
      <div className="max-w-[1280px] w-full mx-auto flex flex-col items-center relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 w-full max-w-3xl">
          <span className="font-jakarta text-[#007FFF] uppercase tracking-widest text-xs font-semibold mb-3 inline-block">
            Our World-Class Team
          </span>
          <h2 className="font-jakarta text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold leading-[1.1] tracking-tight text-[#111111] mb-5">
            Meet the minds behind the vision
          </h2>
          <p className="font-jakarta text-gray-600 text-base md:text-lg px-4 max-w-2xl mx-auto">
            A collective of innovative thinkers, creators, and builders pushing the boundaries of digital technology.
          </p>
        </div>

        {/* Structured Rows Layout */}
        <div className="w-full space-y-8 md:space-y-12">

          {/* Row 1: First 3 Teammates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 w-full">
            {row1.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index} />
            ))}
          </div>

          {/* Row 2: 2 Teammates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full max-w-[840px] mx-auto">
            {row2.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index + 3} />
            ))}
          </div>

          {/* Row 3: Last 2 Teammates */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full max-w-[840px] mx-auto">
            {row3.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index + 5} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}