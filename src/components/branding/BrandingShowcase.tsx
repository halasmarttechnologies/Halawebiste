
import Image from 'next/image';

export default function BrandingShowcase() {
  return (
    <section className="w-full relative z-30 bg-white text-[#111111] rounded-t-[40px] md:rounded-t-[60px] -mt-8 md:-mt-12 pt-24 pb-24 md:pb-32 px-4 md:px-6">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div 
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-jakarta text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-5">
            Branding Shows Class
          </h2>
          <p className="font-jakarta text-lg md:text-xl text-black/70 max-w-2xl mx-auto">
            Discover the artistry behind our premium brand identities.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="w-full flex flex-col gap-4 md:gap-6">
          
          {/* Top Full-Width Item - Sticky Background Layer */}
          <div
            className="w-full relative h-[500px] md:h-[650px] rounded-[2rem] md:rounded-[3rem] overflow-hidden sticky top-24 z-0 shadow-xl"
          >
            <Image 
              src="/brand1.jpg" 
              alt="Brand Identity" 
              fill 
              style={{ objectFit: 'cover', objectPosition: 'center' }}
            />
          </div>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative z-10 mt-4 md:mt-6">
            
            {/* Grid Item 1 - Only Image */}
            <div
              className="relative h-[500px] md:h-[580px] rounded-t-[2rem] md:rounded-t-none md:rounded-l-[3rem] overflow-hidden shadow-xl"
            >
              <Image 
                src="/brand2.png" 
                alt="Brand 2 Preview" 
                fill 
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>

            {/* Grid Item 2 - Only Image */}
            <div
              className="relative h-[500px] md:h-[580px] rounded-b-[2rem] md:rounded-b-none md:rounded-r-[3rem] overflow-hidden shadow-xl"
            >
              <Image 
                src="/brand3.png" 
                alt="Brand 3 Preview" 
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
