'use client';

import Image from 'next/image';
import { PenTool } from 'lucide-react';
import ContentCreationServices from './ContentCreationServices';
import ContentCreationWhyChoose from './ContentCreationWhyChoose';
import CustomTestimonials from '../../Home/Testimonials';
import ContentCreationFAQ from '../ContentCreationFAQ';
import BrandingBlogs from '../BrandingBlogs';
import ContactCTA from '../../Home/ContactCTA/ContactCTA';

export default function ContentCreation() {
  return (
    <div className="relative w-full bg-[#111111] text-[#F3F0E6] overflow-x-hidden antialiased selection:bg-[#EADCF8] selection:text-[#111] rounded-b-[40px]">

      {/* Hero Section */}
      <section className="relative w-full h-[100vh] flex flex-col items-center justify-center px-6 z-10 overflow-hidden pt-[100px]">

        {/* Background Image Setup */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-images/contentcreation.jpg"
            alt="Content Creation Background"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
            className="opacity-90 blur-[2px] scale-105"
            priority
          />
          {/* Black overlays for high contrast and black-and-white design system */}
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-[#111111]"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center max-w-4xl flex flex-col items-center">
          <h1 className="font-jakarta text-5xl md:text-7xl lg:text-[85px] font-extrabold leading-[1.05] tracking-tight mb-6 text-white drop-shadow-xl">
            Words That Connect,
            <em className="eb-garamond font-semibold italic"> Visuals That Resonate.</em>
          </h1>

          <p className="font-jakarta text-base md:text-lg lg:text-xl mb-10 max-w-[600px] mx-auto font-medium text-white/90 leading-relaxed">
            At Hala Smart Technologies, we provide content creation services that give your brand a powerful voice.
          </p>

          <button className="flex items-center justify-center gap-2 bg-white hover:bg-[#f4f4f4] transition-colors duration-300 text-[#1A1523] font-jakarta font-semibold text-[14px] md:text-[15px] px-8 py-3.5 rounded-md shadow-lg shadow-black/20">
            <PenTool size={18} />
            Let's Create Content
          </button>
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative bg-[#111111] z-20 rounded-t-[40px] md:rounded-t-[60px] -mt-8 md:-mt-10 pt-10 pb-24 md:pt-16 md:pb-32 px-6 flex flex-col items-center overflow-hidden">
        {/* Centered container for perfect alignment */}
        <div className="max-w-[900px] text-center relative z-30">

          <p className="font-jakarta text-xl md:text-2xl lg:text-3xl leading-[1.6] md:leading-[1.7] mb-10 md:mb-14 text-[#E8E6E1]">
            From engaging website copy to high-performing social media content, we create compelling words and visuals that capture attention, build trust, and deliver measurable results.
          </p>

          <p className="font-jakarta text-lg md:text-xl lg:text-2xl leading-[1.6] mb-12 md:mb-16 text-[#E8E6E1]/80">
            Whether you're launching a startup, growing an eCommerce business, or building a personal brand, quality content is your strongest marketing asset—and we're here to help you make it count.
          </p>

          <button className="bg-[#222222] hover:bg-[#333333] transition-colors duration-300 text-white font-jakarta font-semibold text-[14px] md:text-[15px] px-8 py-4 rounded-md shadow-md border border-[#333333]">
            Learn about our Process
          </button>

        </div>
      </section>

      {/* Why Content Creation Matters Section */}
      <section className="relative bg-white z-10 py-16 md:py-24 px-6 border-t border-gray-100">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text Content */}
          <div className="flex flex-col items-start text-left">
            <h2 className="font-jakarta text-4xl md:text-5xl font-bold mb-8 text-[#111111] tracking-tight">
              Why Content Creation Matters
            </h2>

            <p className="font-jakarta text-base md:text-lg text-[#444444] leading-[1.7] mb-6">
              Good content isn't just about filling up space it's about starting real conversations with the people you want to reach. It's your chance to show what your brand stands for, build trust, and offer something valuable before ever making a sale.
            </p>

            <p className="font-jakarta text-base md:text-lg text-[#444444] leading-[1.7] mb-6">
              At Hala Smart Technologies, we know that every word, image, or video you put out is a reflection of your brand. That's why we focus on creating content that feels natural, speaks to your audience in a relatable way, and inspires action.
            </p>

            <p className="font-jakarta text-base md:text-lg text-[#444444] leading-[1.7] mb-10">
              Because when your content feels real, people listen and when they listen, they're more likely to trust, engage, and buy.
            </p>

            <button className="flex items-center justify-center gap-2 bg-[#007FFF] hover:bg-[#0066CC] transition-colors duration-300 text-white font-jakarta font-semibold text-[14px] md:text-[15px] px-8 py-3.5 rounded-xl shadow-md shadow-[#007FFF]/20">
              Get Started
            </button>
          </div>

          {/* Placeholder Image */}
          <div className="relative w-full aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 shadow-xl shadow-black/5 group">
            <Image
              src="/seo.jpg"
              alt="Content Creation Placeholder"
              fill
              className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
            />
          </div>

        </div>
      </section>

      {/* Services Section */}
      <ContentCreationServices />

      {/* Why Choose Hala Section */}
      <ContentCreationWhyChoose />

      {/* Testimonials Section */}
      <CustomTestimonials />

      {/* FAQs Section */}
      <ContentCreationFAQ />

      <ContactCTA contained={true} />

      {/* Blog Section */}
      <BrandingBlogs />

    </div>
  );
}
