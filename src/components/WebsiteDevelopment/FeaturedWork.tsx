'use client';

import Link from 'next/link';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Annex Website',
    category: 'UI/UX & Development',
    image: '/hero-images/webpage.jpg',
    badge: 'NEW'
  },
  {
    id: 2,
    title: 'IP16 Pro Showcase',
    category: '3D Visuals & Mobile Design',
    image: '/hero-images/HomeHeroimage.png',
    badge: 'FEATURED'
  },
  {
    id: 3,
    title: 'iPhone 15 Experience',
    category: 'Interactive Web & App',
    image: '/seo.jpg',
    badge: 'POPULAR'
  },
  {
    id: 4,
    title: 'MacBook Pro Platform',
    category: 'Full-Stack Web Development',
    image: '/web.jpg',
    badge: 'ENTERPRISE'
  }
];

const clientLogos = [
  {
    name: 'Boltshift',
    icon: (
      <svg className="w-6 h-6 text-[#007FFF]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    )
  },
  {
    name: 'FeatherDev',
    icon: (
      <svg className="w-6 h-6 text-[#007FFF]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5l6.74-6.76zM13 17.5H7v-6l6.5-6.5a4 4 0 0 1 5.66 5.66L13 17.5z" />
      </svg>
    )
  },
  {
    name: 'Spherule',
    icon: (
      <svg className="w-6 h-6 text-[#007FFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3a9 9 0 0 0 0 18M3 12a9 9 0 0 0 18 0" />
      </svg>
    )
  },
  {
    name: 'GlobalBank',
    icon: (
      <svg className="w-6 h-6 text-[#007FFF]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <path d="M12 7v10M7 12h10" />
      </svg>
    )
  },
  {
    name: 'Nietzsche',
    icon: (
      <svg className="w-6 h-6 text-[#007FFF]" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  }
];

export default function FeaturedWork() {
  return (
    <section className="w-full bg-white text-[#111111] py-16 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 relative">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          {/* Left Title Area */}
          <div className="flex flex-col items-start">
            <div className="inline-flex items-center gap-2 bg-[#F4F4F5] text-[#111111] px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4 border border-[#E4E4E7]">
              <span className="w-2 h-2 rounded-full bg-[#007FFF] animate-pulse"></span>
              Work
            </div>
            <h2 className="font-jakarta font-bold text-4xl sm:text-5xl md:text-6xl text-[#111111] tracking-tight leading-tight">
              A Look at Our Best Work
            </h2>
          </div>

          {/* Right Text & Button Area */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 md:gap-6">
            <p className="text-[#555555] text-sm sm:text-base font-medium max-w-xs leading-relaxed">
              Interactive high performing websites built with modern frameworks precise design and smooth responsiveness across every device.
            </p>
            <Link href="/contact" className="inline-block bg-[#007FFF] hover:bg-[#0066CC] text-white px-7 py-3 rounded-full font-bold text-sm transition-all duration-300 whitespace-nowrap self-start sm:self-auto hover:scale-105 active:scale-95 text-center">
              See All
            </Link>
          </div>
        </div>

        {/* 2x2 Grid of Featured Work Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative w-full h-[360px] sm:h-[440px] md:h-[480px] rounded-[24px] sm:rounded-[32px] overflow-hidden group border border-[#E5E5E5] bg-[#F5F5F7] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer"
            >
              {/* Background Mockup Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Light overlay on image for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

              {/* Floating Bottom Card / Pill Overlay */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 flex items-center justify-between shadow-lg border border-white/60 transition-transform duration-500 group-hover:-translate-y-1">
                <div className="flex flex-col pr-2">
                  <h3 className="font-jakarta font-bold text-base sm:text-lg md:text-xl text-[#111111] tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#666666] font-medium mt-0.5">
                    {project.category}
                  </p>
                </div>

                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl bg-[#007FFF] group-hover:bg-[#0066CC] text-white flex items-center justify-center transition-all duration-300 shrink-0 group-hover:scale-110">
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Logo Bar: Worked With */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-[#E5E5E5] flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-jakarta font-bold text-base sm:text-lg text-[#111111] whitespace-nowrap">
            Worked With:
          </span>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-8 sm:gap-12 opacity-80 hover:opacity-100 transition-opacity">
            {clientLogos.map((client, index) => (
              <div key={index} className="flex items-center gap-2.5 group cursor-pointer">
                {client.icon}
                <span className="font-jakarta font-bold text-base sm:text-lg text-[#333333] group-hover:text-[#007FFF] transition-colors tracking-tight">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
