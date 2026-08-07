'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Globe } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Marina Byblos Hotel',
    category: 'Hospitality & Hotel Development',
    image: '/website mockup images/marina.png',
    link: 'https://www.marinabybloshotel.com/',
    displayUrl: 'www.marinabybloshotel.com',
    badge: 'HOTEL',
    featured: true
  },
  {
    id: 2,
    title: 'Green Crystal',
    category: 'Corporate & Industrial Trading',
    image: '/website mockup images/greencrystal.png',
    link: 'https://greencrystal.ae/',
    displayUrl: 'greencrystal.ae',
    badge: 'CORPORATE',
    featured: false
  },
  {
    id: 3,
    title: 'Rodeo Drive Dubai',
    category: 'Entertainment & Nightlife Venue',
    image: '/website mockup images/rodeo .jpeg',
    link: 'https://www.rodeodrivedubai.com/',
    displayUrl: 'www.rodeodrivedubai.com',
    badge: 'ENTERTAINMENT',
    featured: false
  },
  {
    id: 4,
    title: 'Royal Costa Cars',
    category: 'Luxury Car Rental Platform',
    image: '/website mockup images/royalcosta.png',
    link: 'https://royalcostacars.com/',
    displayUrl: 'royalcostacars.com',
    badge: 'LUXURY',
    featured: false
  },
  {
    id: 5,
    title: 'Mado Abu Dhabi',
    category: 'Restaurant & Fine Dining',
    image: '/website mockup images/mado.png',
    link: 'https://www.mado.abudhabi/',
    displayUrl: 'www.mado.abudhabi',
    badge: 'DINING',
    featured: false
  }
];

const clientLogos = [
  { id: 1, src: '/Companies Logos/1.png', alt: 'Client Partner 1' },
  { id: 2, src: '/Companies Logos/2.png', alt: 'Client Partner 2' },
  { id: 3, src: '/Companies Logos/3.png', alt: 'Client Partner 3' },
  { id: 4, src: '/Companies Logos/4.png', alt: 'Client Partner 4' },
  { id: 5, src: '/Companies Logos/5.png', alt: 'Client Partner 5' },
  { id: 6, src: '/Companies Logos/6.png', alt: 'Client Partner 6' },
  { id: 7, src: '/Companies Logos/7.png', alt: 'Client Partner 7' },
  { id: 8, src: '/Companies Logos/8.png', alt: 'Client Partner 8' },
  { id: 9, src: '/Companies Logos/9.png', alt: 'Client Partner 9' },
  { id: 10, src: '/Companies Logos/10.png', alt: 'Client Partner 10' }
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

        {/* Grid of Featured Work Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`relative w-full h-[340px] sm:h-[400px] md:h-[440px] rounded-[24px] sm:rounded-[32px] overflow-hidden group border border-[#E2E8F0] bg-[#0F172A] shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer block ${
                project.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Background Mockup Image (Object-contain so full website fits without cutting off) */}
              <div className="absolute inset-0 p-3 sm:p-5 pb-20 sm:pb-24 flex items-center justify-center">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-contain object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Gradient overlay for readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none" />

              {/* Badge top right */}
              {project.badge && (
                <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 bg-white/90 backdrop-blur-md text-[#111111] text-[10px] sm:text-[11px] font-bold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full uppercase tracking-wider shadow-sm border border-white/50 z-10">
                  {project.badge}
                </div>
              )}

              {/* Compact Floating Bottom Card Overlay */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-3.5 flex items-center justify-between shadow-lg border border-white/60 transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-white z-10">
                <div className="flex flex-col pr-2 min-w-0">
                  <h3 className="font-jakarta font-bold text-sm sm:text-base text-[#111111] tracking-tight group-hover:text-[#007FFF] transition-colors truncate">
                    {project.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-[#666666] font-medium truncate mt-0.5">
                    {project.category}
                  </p>
                  <div className="flex items-center gap-1 mt-1 text-[#007FFF] text-[11px] sm:text-xs font-semibold">
                    <Globe className="w-3 h-3 shrink-0" />
                    <span className="truncate group-hover:underline">{project.displayUrl}</span>
                  </div>
                </div>

                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-[#007FFF] group-hover:bg-[#0066CC] text-white flex items-center justify-center transition-all duration-300 shrink-0 group-hover:scale-110 shadow-md">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Logo Bar: Worked With */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-[#E5E5E5] flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
          <span className="font-jakarta font-bold text-base sm:text-lg text-[#111111] whitespace-nowrap shrink-0">
            Worked With:
          </span>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-6 sm:gap-10 opacity-85 hover:opacity-100 transition-opacity">
            {clientLogos.map((client) => (
              <div key={client.id} className="flex items-center justify-center h-10 sm:h-12 px-2 group cursor-pointer transition-transform duration-300 hover:scale-110">
                <img
                  src={client.src}
                  alt={client.alt}
                  className="h-8 sm:h-10 md:h-12 w-auto object-contain max-w-[120px] filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-75 group-hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

