'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';

const thumbnailProjects = [
  { id: 6, title: 'Travel Vlog', category: 'YouTube', image: '/hero-images/HomeHeroimage.png' },
  { id: 7, title: 'Fitness Promo', category: 'Social Media', image: '/brand3.png' },
  { id: 8, title: 'Tech Review', category: 'YouTube', image: '/featureimage.jpg' },
  { id: 9, title: 'Real Estate Tour', category: 'Corporate', image: '/hero-images/HomeHeroimage.png' },
  { id: 10, title: 'Restaurant Ad', category: 'Commercial', image: '/brand3.png' },
  { id: 11, title: 'Music Video', category: 'Entertainment', image: '/featureimage.jpg' },
  { id: 12, title: 'Documentary', category: 'YouTube', image: '/hero-images/HomeHeroimage.png' },
];

export default function VideoEditingShowcase() {
  return (

    <section className="w-full bg-white text-[#111] py-16 md:py-20 overflow-hidden relative">
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#fcfcfc] to-transparent z-10 pointer-events-none opacity-[0.03]"></div>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 mb-12 md:mb-16 text-center relative z-20">
        <h2 className="font-jakarta text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#111] mb-4">
          Our Best <span className="font-jakarta text-[#007FFF]">Video Work</span>
        </h2>
        <p className="text-[#555] font-jakarta text-sm md:text-base max-w-2xl mx-auto">
          Explore our portfolio of premium video editing work from high impact commercial campaigns to engaging social media content.
        </p>
      </div>

      {/* Single Large Video Placeholder */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 mx-auto max-w-[1600px] mb-16 md:mb-24">
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-2xl md:rounded-[2.5rem] overflow-hidden shadow-2xl group cursor-pointer border border-black/5">
          <Image 
            src="/website mockup images/123.png" 
            alt="Featured Video Placeholder" 
            fill 
            className="object-cover transition-transform duration-700 group-hover:scale-105" 
            priority
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-20 h-20 md:w-28 md:h-28 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
              <PlayCircle className="w-10 h-10 md:w-14 md:h-14 text-white drop-shadow-md ml-1" />
            </div>
            <span className="text-white font-jakarta font-bold mt-6 tracking-widest uppercase text-sm md:text-base drop-shadow-md">Play Full Video</span>
          </div>
        </div>
      </div>

      {/* Bottom Marquee Strip */}
      <div className="w-full overflow-hidden relative">
        {/* Gradient fades for the edges of the marquee */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

        <motion.div 
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
        >
          {[0, 1].map((setIndex) => (
            <div key={setIndex} className="flex gap-4 md:gap-6 pr-4 md:pr-6">
              {thumbnailProjects.map((project, index) => (
                <div 
                  key={`${setIndex}-${project.id}`}
                  className="relative w-[240px] md:w-[320px] h-[135px] md:h-[180px] rounded-xl overflow-hidden group border border-black/5 shadow-md shrink-0 cursor-pointer"
                >
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    sizes="(max-width: 768px) 240px, 320px"
                    className="object-cover group-hover:scale-110 transition-transform duration-700 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                  
                  <div className="absolute bottom-0 left-0 p-4 w-full z-10">
                    <span className="text-[10px] text-gray-300 font-semibold uppercase tracking-wider block mb-1">
                      {project.category}
                    </span>
                    <h4 className="text-white font-jakarta text-sm md:text-base font-bold truncate">
                      {project.title}
                    </h4>
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
                    <PlayCircle className="w-10 h-10 text-white drop-shadow-md" />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
      
    </section>
  );
}
