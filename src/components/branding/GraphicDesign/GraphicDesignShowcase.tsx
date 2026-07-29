'use client';

import { useRef, MouseEvent, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';

const projects = [
  { id: 1, title: 'Quantum Rebrand', category: 'Brand Identity', image: '/hero-images/HomeHeroimage.png', size: 'featured' },
  { id: 2, title: 'Eco Packaging', category: 'Packaging Design', image: '/brand3.png', size: 'small' },
  { id: 3, title: 'Neon Nights', category: 'Social Media', image: '/featureimage.jpg', size: 'medium' },
  { id: 4, title: 'Aura App UI', category: 'UI Design', image: '/hero-images/HomeHeroimage.png', size: 'medium' },
  { id: 5, title: 'Vertex Logo', category: 'Logo Design', image: '/brand3.png', size: 'small' },
];

const TiltCard = ({ project, index }: { project: { id: number, title: string, category: string, image: string, size: string }, index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  // Subtle parallax effect, alternating direction based on index
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, (index % 2 === 0 ? -40 : 40)]);

  let wrapperClasses = 'col-span-12';
  let innerHeight = 'h-[300px]';

  if (project.size === 'featured') {
    wrapperClasses = 'lg:col-span-6';
    innerHeight = 'h-[400px] lg:h-full';
  } else if (project.size === 'medium') {
    wrapperClasses = 'lg:col-span-3';
    innerHeight = 'h-[300px] lg:h-full';
  } else {
    wrapperClasses = 'col-span-1'; // Inside the nested right-side grid
    innerHeight = 'h-[250px] lg:h-full';
  }

  return (
    <motion.div
      ref={ref}
      style={{ y: yParallax, perspective: 1500 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 1, 0.5, 1] }}
      className={`relative ${wrapperClasses} ${innerHeight} rounded-[2rem] overflow-visible group cursor-pointer z-10 hover:z-20 w-full`}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ 
          rotateX: isHovered ? rotateX : 0, 
          rotateY: isHovered ? rotateY : 0, 
          transformStyle: "preserve-3d" 
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        className="w-full h-full relative rounded-[2rem] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,127,255,0.15)] bg-white border border-gray-100 will-change-transform"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-[1.12]"
        />
        
        {/* Animated Gradient Glow on Hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#007FFF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
        
        {/* 3D Pop-out content */}
        <div 
          className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
        >
          <motion.div
             style={{ z: isHovered ? 50 : 0 }}
             transition={{ type: "spring", stiffness: 400, damping: 30 }}
             className="flex flex-col"
          >
            <span className="text-[#007FFF] font-jakarta font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
              {project.category}
            </span>
            <h3 className="text-white font-jakarta text-xl md:text-3xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150 leading-[1.2]">
              {project.title}
            </h3>
            <div className="mt-4 md:mt-6 overflow-hidden">
              <span className="text-white/80 text-xs md:text-sm font-semibold flex items-center gap-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-200 uppercase tracking-widest">
                View Project <span className="text-lg leading-none">→</span>
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function GraphicDesignShowcase() {
  return (
    <section className="w-full bg-white py-24 md:py-32 lg:py-40 overflow-hidden relative">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#007FFF]/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-[#007FFF]"></div>
            <span className="font-jakarta text-[13px] md:text-sm font-semibold uppercase text-[#007FFF]">
              Creative Portfolio
            </span>
          </div>
          <h2 className="font-jakarta text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#111] leading-[1.1] mb-6">
            Visuals with <span className="eb-garamond italic text-[#007FFF] font-medium pr-2">purpose</span>
          </h2>
          <p className="text-[#555] font-jakarta text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            From bold brand identities to clean pixel perfect UI designs explore our graphic design showcase. Every piece is crafted to capture attention and elevate your brand.
          </p>
        </motion.div>

        {/* Asymmetrical Grid Layout */}
        <div className="grid grid-cols-12 gap-6 md:gap-8 lg:h-[600px] auto-rows-min lg:auto-rows-auto relative z-20">
          {/* Item 1 - Medium Left */}
          <TiltCard project={projects[2]} index={0} />
          
          {/* Item 2 - Featured Center */}
          <TiltCard project={projects[0]} index={1} />
          
          {/* Items 3 & 4 - Stacked Right */}
          <div className="col-span-12 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 md:gap-8 lg:grid-rows-2 lg:h-full">
            <TiltCard project={projects[1]} index={2} />
            <TiltCard project={projects[4]} index={3} />
          </div>
        </div>

      </div>
    </section>
  );
}
