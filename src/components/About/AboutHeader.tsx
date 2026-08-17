import React from 'react';
import Image from 'next/image';

export default function AboutHeader() {
  return (
    <section className="bg-white w-full px-4 sm:px-6 md:px-8 pt-24 md:pt-32 pb-8 md:pb-12 flex justify-center border-b-0">
      <div className="w-full max-w-[1300px] h-[400px] sm:h-[500px] md:h-[550px] relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden flex items-center justify-center shadow-lg">
        {/* Background Image */}
        <Image
          src="/hero-images/digitalmarekingheropage.png"
          alt="About Us Background"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Overlay with Blur */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        
        {/* Text Content */}
        <h1 className="relative z-10 font-jakarta font-medium text-white text-5xl sm:text-7xl md:text-[80px] lg:text-[100px] tracking-tight">
          About Us
        </h1>
      </div>
    </section>
  );
}
