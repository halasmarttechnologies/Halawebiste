'use client';

import Image from 'next/image';

export default function SocialMediaShowcase() {
  return (
    <section className="w-full bg-white text-[#111] relative z-20 pb-0 md:pb-0">

      {/* Title Section - Sticky */}
      <div className="sticky top-[100px] md:top-[120px] z-0 w-full bg-white h-[40vh] md:h-[50vh] flex flex-col justify-center items-center">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 text-center">
          <h2 className="font-jakarta text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 text-[#111]">
            Visuals that <span className="eb-garamond italic text-[#007FFF]">speak.</span>
          </h2>
          <p className="text-[#555] font-jakarta text-sm md:text-base max-w-2xl mx-auto">
            From striking brand identities to pixel-perfect UI designs, explore our premium graphic design showcase. Each piece is crafted to capture attention and elevate your brand.
          </p>
        </div>
      </div>

      {/* 1. Full-width image - Sticky Stack */}
      <div className="sticky top-[60px] md:top-[80px] z-10 w-full bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <div className="w-full aspect-[16/9] md:aspect-[21/9] relative overflow-hidden group">
          <Image
            src="/featureimage.jpg"
            alt="Full Width Showcase"
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            priority
          />
        </div>
      </div>

      {/* The rest of the images - Relative Scroll Over */}
      <div className="relative z-20 w-full bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        {/* 2. Below that add 2 images */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2">
          <div className="w-full aspect-[4/3] relative overflow-hidden group">
            <Image src="/hero-images/HomeHeroimage.png" alt="Two Column 1" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="w-full aspect-[4/3] relative overflow-hidden group">
            <Image src="/brand3.png" alt="Two Column 2" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>

        {/* 3. Below that add 2 images */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2">
          <div className="w-full aspect-[4/3] relative overflow-hidden group">
            <Image src="/design.jpg" alt="Two Column 3" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="w-full aspect-[4/3] relative overflow-hidden group">
            <Image src="/seo.jpg" alt="Two Column 4" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>

        {/* 5. Below that 4 images, side by side. */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4">
          <div className="w-full aspect-[3/4] relative overflow-hidden group">
            <Image src="/hero-images/HomeHeroimage.png" alt="Four Grid 1" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="w-full aspect-[3/4] relative overflow-hidden group">
            <Image src="/brand3.png" alt="Four Grid 2" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="w-full aspect-[3/4] relative overflow-hidden group">
            <Image src="/design.jpg" alt="Four Grid 3" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
          <div className="w-full aspect-[3/4] relative overflow-hidden group">
            <Image src="/seo.jpg" alt="Four Grid 4" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </div>
      </div>

    </section>
  );
}
