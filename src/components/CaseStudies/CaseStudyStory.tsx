'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const PROJECTS = [
  {
    id: 'marina-byblos',
    number: '01',
    name: 'Marina Byblos Hotel',
    category: 'Corporate',
    year: '2025',
    overview: 'A comprehensive digital transformation and branding initiative to elevate the hospitality experience in Dubai Marina.',
    aboutClient: 'Marina Byblos Hotel is a premier 4-star destination located in the heart of Dubai Marina, offering luxurious accommodations and world-class dining.',
    challenge: 'The client needed to modernize their digital presence, improve direct bookings, and establish a stronger brand identity in a highly competitive hospitality market.',
    delivered: 'We completely redesigned their web architecture, implemented a seamless booking engine, and launched targeted SEO and social media campaigns to drive organic traffic and engagement.',
    conclusion: 'The new digital ecosystem resulted in a significant increase in direct bookings and elevated the brand’s online reputation across all major platforms.'
  },
  {
    id: 'nell-gwynne',
    number: '02',
    name: 'Nell Gwynne',
    category: 'Corporate',
    year: '2025',
    overview: 'Revitalizing an iconic brand through strategic marketing and modern web development.',
    aboutClient: 'Nell Gwynne is a renowned authentic English pub in Dubai, famous for its vibrant atmosphere, live entertainment, and traditional dining experience.',
    challenge: 'Despite a loyal customer base, the brand struggled to attract new demographics and maintain a consistent digital presence that reflected their unique in-house experience.',
    delivered: 'We developed a modern, mobile-first website, captured high-quality visual content, and executed a robust social media strategy focused on event promotions and community building.',
    conclusion: 'The strategic overhaul successfully expanded their audience reach, driving higher footfall during key events and establishing a dominant social media footprint in their niche.'
  },
  {
    id: 'gulf-special',
    number: '03',
    name: 'Gulf Special Building Maintenance L.L.C.',
    category: 'Corporate',
    year: '2024',
    overview: 'Building a robust corporate identity and lead generation platform for a top-tier maintenance firm.',
    aboutClient: 'Gulf Special Building Maintenance L.L.C. provides comprehensive facilities management and specialized building maintenance services across the UAE.',
    challenge: 'The company required a professional digital storefront that communicated reliability, showcased their extensive service portfolio, and generated high-quality B2B leads.',
    delivered: 'Our team engineered a highly optimized, SEO-driven corporate website with clear conversion funnels, detailed service pages, and a unified corporate branding package.',
    conclusion: 'By establishing a strong digital authority, the client experienced a surge in qualified corporate inquiries and significantly shortened their B2B sales cycle.'
  },
  {
    id: 'green-crystal',
    number: '04',
    name: 'Green Crystal Ventilators & Air Filters Trading',
    category: 'Digital Marketing',
    year: '2024',
    overview: 'Scaling market reach and product visibility through targeted digital marketing and technical web design.',
    aboutClient: 'Green Crystal is a leading supplier of industrial ventilators, air filters, and HVAC components in the Middle East.',
    challenge: 'Operating in a niche B2B sector, the client needed to improve their search visibility for specific technical products and streamline their digital catalog for regional buyers.',
    delivered: 'We delivered a comprehensive technical SEO overhaul, a streamlined product showcase architecture, and launched highly targeted PPC campaigns targeting procurement managers.',
    conclusion: 'The targeted approach dominated search results for key HVAC components, directly resulting in major procurement contracts and long-term business growth.'
  }
];

const CATEGORIES = ['All Projects', 'Corporate', 'Digital Marketing'];

export default function CaseStudyStory() {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [selectedProjectId, setSelectedProjectId] = useState(PROJECTS[0].id);

  const filteredProjects = activeCategory === 'All Projects' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  const activeProject = PROJECTS.find(p => p.id === selectedProjectId) || filteredProjects[0] || PROJECTS[0];

  return (
    <section className="bg-white w-full py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1280px] mx-auto w-full">

        {/* Category Navigation Bar */}
        <div className="flex items-center justify-between border-b border-[#e5e5e5] pb-4 mb-12">
          <div className="flex items-center gap-8 overflow-x-auto no-scrollbar">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  const matching = category === 'All Projects' ? PROJECTS[0] : PROJECTS.find(p => p.category === category);
                  if (matching) setSelectedProjectId(matching.id);
                }}
                className={`whitespace-nowrap pb-2 text-sm font-jakarta font-medium transition-colors relative cursor-pointer
                  ${activeCategory === category ? 'text-[#111111]' : 'text-[#888888] hover:text-[#555555]'}`}
              >
                {category}
                {activeCategory === category && (
                  <motion.div 
                    layoutId="activeCategoryTab"
                    className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#007FFF]" 
                  />
                )}
              </button>
            ))}
          </div>
          <span className="hidden md:inline-block font-jakarta text-xs text-[#888888] uppercase tracking-wider font-semibold">
            Side-by-Side Documentation View
          </span>
        </div>

        {/* Documentation Layout (Side-by-Side) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Interactive Index & Active Project Summary */}
          <div className="lg:col-span-4 lg:sticky lg:top-[120px] flex flex-col gap-8 border-b lg:border-b-0 lg:border-r border-[#e5e5e5] pb-10 lg:pb-0 lg:pr-10">
            
            {/* Project List Selector */}
            <div className="flex flex-col gap-3">
              <span className="font-jakarta text-xs font-bold text-[#888888] uppercase tracking-wider mb-2 block">
                Select Case Study
              </span>
              {filteredProjects.map((p) => {
                const isActive = p.id === activeProject.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => setSelectedProjectId(p.id)}
                    className={`text-left p-4 rounded-lg border transition-all duration-200 cursor-pointer ${
                      isActive 
                        ? 'border-[#007FFF] bg-[#007FFF]/5 text-[#111111]' 
                        : 'border-[#e5e5e5] bg-white hover:border-[#cccccc] text-[#555555]'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-jakarta text-xs font-bold text-[#007FFF]">
                        {p.number}
                      </span>
                      <span className="font-jakarta text-[11px] text-[#888888]">
                        {p.year}
                      </span>
                    </div>
                    <div className="font-jakarta text-base font-semibold leading-snug">
                      {p.name}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Project Meta Summary Card */}
            <div className="bg-[#f9f9f9] border border-[#e5e5e5] p-6 rounded-lg flex flex-col gap-4">
              <div>
                <span className="font-jakarta text-xs font-semibold text-[#888888] uppercase tracking-wider block mb-1">
                  Category
                </span>
                <span className="font-jakarta text-sm font-semibold text-[#111111]">
                  {activeProject.category}
                </span>
              </div>
              <div className="border-t border-[#e5e5e5] pt-3">
                <span className="font-jakarta text-xs font-semibold text-[#888888] uppercase tracking-wider block mb-1">
                  Overview
                </span>
                <p className="font-jakarta text-xs text-[#555555] leading-relaxed">
                  {activeProject.overview}
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Detailed Documentation Flow */}
          <div className="lg:col-span-8 flex flex-col gap-12">
            
            {/* Documentation Header */}
            <div className="border-b border-[#e5e5e5] pb-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="px-2.5 py-1 text-xs font-jakarta font-bold bg-[#111111] text-white rounded">
                  DOC-{activeProject.number}
                </span>
                <span className="font-jakarta text-xs font-semibold text-[#888888] uppercase tracking-wider">
                  {activeProject.category} • {activeProject.year}
                </span>
              </div>
              <h2 className="font-jakarta text-3xl md:text-5xl font-semibold text-[#111111] leading-tight mb-4">
                {activeProject.name}
              </h2>
              <p className="font-jakarta text-base md:text-lg text-[#555555] leading-relaxed max-w-[720px]">
                {activeProject.overview}
              </p>
            </div>

            {/* Side-by-Side Documentation Sections */}
            <div className="flex flex-col gap-10">
              
              {/* Section 1: About the Client */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 border-b border-[#f0f0f0] pb-8 items-start">
                <div className="md:col-span-4">
                  <h3 className="font-jakarta text-sm font-semibold text-[#111111] uppercase tracking-wider flex items-center gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-[#111111]" />
                    About the Client
                  </h3>
                </div>
                <div className="md:col-span-8">
                  <p className="font-jakarta text-sm md:text-base text-[#444444] leading-relaxed">
                    {activeProject.aboutClient}
                  </p>
                </div>
              </div>

              {/* Section 2: The Challenge */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 border-b border-[#f0f0f0] pb-8 items-start">
                <div className="md:col-span-4">
                  <h3 className="font-jakarta text-sm font-semibold text-[#111111] uppercase tracking-wider flex items-center gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-[#111111]" />
                    The Challenge
                  </h3>
                </div>
                <div className="md:col-span-8">
                  <p className="font-jakarta text-sm md:text-base text-[#444444] leading-relaxed">
                    {activeProject.challenge}
                  </p>
                </div>
              </div>

              {/* Section 3: What We Delivered */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 border-b border-[#f0f0f0] pb-8 items-start">
                <div className="md:col-span-4">
                  <h3 className="font-jakarta text-sm font-semibold text-[#111111] uppercase tracking-wider flex items-center gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-[#111111]" />
                    What We Delivered
                  </h3>
                </div>
                <div className="md:col-span-8">
                  <p className="font-jakarta text-sm md:text-base text-[#444444] leading-relaxed">
                    {activeProject.delivered}
                  </p>
                </div>
              </div>

              {/* Section 4: Conclusion */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pb-4 items-start">
                <div className="md:col-span-4">
                  <h3 className="font-jakarta text-sm font-semibold text-[#111111] uppercase tracking-wider flex items-center gap-2">
                    <ArrowRight className="w-3.5 h-3.5 text-[#111111]" />
                    Conclusion
                  </h3>
                </div>
                <div className="md:col-span-8">
                  <p className="font-jakarta text-sm md:text-base text-[#444444] leading-relaxed font-medium">
                    {activeProject.conclusion}
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
