'use client';

import { useState, memo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonialsRow1 = [
  {
    quote: "Exceeded our expectations with innovative designs that brought our vision to life - a truly remarkable creative agency.",
    name: "Samantha Johnson",
    title: "CEO and Co-founder of ABC Company",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "Their ability to capture our brand essence in every project is unparalleled - an invaluable creative collaborator.",
    name: "Isabella Rodriguez",
    title: "CEO and Co-founder of ABC Company",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "Creative geniuses who listen, understand, and craft captivating visuals - an agency that truly understands our needs.",
    name: "Gabrielle Williams",
    title: "CEO and Co-founder of ABC Company",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "A refreshing and imaginative agency that consistently delivers exceptional results - highly recommended for any project.",
    name: "Victoria Thompson",
    title: "CEO and Co-founder of ABC Company",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80"
  }
];

const testimonialsRow2 = [
  {
    quote: "Their team's artistic flair and strategic approach resulted in remarkable campaigns - a reliable creative partner.",
    name: "John Peter",
    title: "CEO and Co-founder of ABC Company",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "From concept to execution, their creativity knows no bounds - a game-changer for our brand's success.",
    name: "Natalie Martinez",
    title: "CEO and Co-founder of ABC Company",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "Working with Hala has been transformative. They don't just create content; they create experiences that resonate deeply.",
    name: "Michael Chen",
    title: "Marketing Director at XYZ Corp",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "The attention to detail and strategic foresight they bring to the table is unmatched in the entire creative industry.",
    name: "Sarah Jenkins",
    title: "Founder of Startup Inc",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
  }
];

// Duplicate arrays for seamless infinite loop
const marquee1 = [...testimonialsRow1, ...testimonialsRow1];
const marquee2 = [...testimonialsRow2, ...testimonialsRow2];

const QuoteIcon = memo(function QuoteIcon() {
  return (
    <svg className="w-7 h-7 md:w-[45px] md:h-[45px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 11V17H4V11H7.5C7.5 9.5 6.5 8.5 5 8.5V6C7.5 6 10 7.5 10 11ZM20 11V17H14V11H17.5C17.5 9.5 16.5 8.5 15 8.5V6C17.5 6 20 7.5 20 11Z" fill="#007FFF"/>
    </svg>
  );
});

export default function Testimonials() {
  return (
    <section className="w-full bg-white py-10 md:py-20 overflow-hidden flex flex-col items-center">
      
      {/* Header Container */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto px-4 sm:px-6 mb-8 md:mb-16">
        {/* Heading */}
        <h2 className="font-jakarta text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-bold text-[#111111] leading-[1.15] tracking-tight">
          Words of praise from others <br className="hidden md:block" />
          about our presence.
        </h2>
      </div>

      {/* Marquee Section */}
      <div className="w-full flex flex-col gap-4 md:gap-8 relative overflow-hidden pb-4 md:pb-8">
        
        {/* Row 1 - Moving Left */}
        <div className="flex w-fit">
          <motion.div
            className="flex gap-4 md:gap-8 pr-4 md:pr-8 [will-change:transform]"
            animate={{ x: "-50%" }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
            style={{ transform: 'translateZ(0)' }}
          >
            {marquee1.map((testimonial, idx) => (
              <TestimonialCard key={`row1-${idx}`} {...testimonial} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 - Moving Right */}
        <div className="flex w-fit">
          <motion.div
            className="flex gap-4 md:gap-8 pr-4 md:pr-8 [will-change:transform]"
            initial={{ x: "-50%" }}
            animate={{ x: "0%" }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }}
            style={{ transform: 'translateZ(0)' }}
          >
            {marquee2.map((testimonial, idx) => (
              <TestimonialCard key={`row2-${idx}`} {...testimonial} />
            ))}
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}

const TestimonialCard = memo(function TestimonialCard({ quote, name, title, image }: { quote: string, name: string, title: string, image: string }) {
  const [imgSrc, setImgSrc] = useState(image);

  return (
    <div className="w-[270px] sm:w-[300px] md:w-[440px] shrink-0 bg-[#F9FAFB] border border-[#EEEEEE] rounded-[20px] md:rounded-[32px] p-5 md:p-10 flex flex-col md:hover:-translate-y-2 transition-transform duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.02)] md:hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] gpu-accelerated">
      
      {/* Quote Icon */}
      <div className="mb-4 md:mb-6">
        <QuoteIcon />
      </div>

      {/* Quote Text */}
      <p className="font-jakarta text-[13.5px] sm:text-[14.5px] md:text-[18px] text-[#333333] leading-[1.5] md:leading-[1.6] font-medium mb-6 md:mb-12 flex-grow">
        {quote}
      </p>

      {/* User Info */}
      <div className="flex items-center gap-3 md:gap-4 mt-auto">
        <div className="w-10 h-10 md:w-14 md:h-14 rounded-full overflow-hidden bg-gray-200 shrink-0 border-2 border-white shadow-sm flex items-center justify-center relative">
          <Image 
            src={imgSrc} 
            alt={name} 
            width={56}
            height={56}
            className="w-full h-full object-cover" 
            onError={() => setImgSrc(`https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=007FFF&color=fff`)}
            unoptimized={imgSrc.startsWith('http')}
          />
        </div>
        <div className="flex flex-col">
          <h4 className="font-jakarta font-bold text-[#111111] text-[13.5px] md:text-[16px]">
            {name}
          </h4>
          <span className="font-jakarta text-[11.5px] md:text-[14px] text-[#777777] font-medium mt-0.5">
            {title}
          </span>
        </div>
      </div>
      
    </div>
  );
});
