'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Compass, Code2, LineChart, Rocket, CheckCircle2, ArrowRight } from 'lucide-react';

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    shortTitle: 'Discovery & Strategy',
    tag: 'PHASE 01',
    description: 'We begin by understanding your business, your goals, and your target audience. This phase involves competitor analysis, keyword research, and defining your website’s core objectives.',
    highlights: [
      'Business & Audience Analysis',
      'Competitor Benchmarking',
      'Technical Keyword Research',
      'Core Objectives Definition'
    ],
    icon: Search,
    mockupTitle: 'Strategic Blueprint',
    mockupDetail: 'Defining target personas, architecture, and high-ROI conversion funnels.'
  },
  {
    step: '02',
    title: 'Design & Prototyping',
    shortTitle: 'Design & Prototyping',
    tag: 'PHASE 02',
    description: 'Our creative team develops wireframes and high-fidelity mockups, presenting multiple design concepts for your review and feedback before development begins.',
    highlights: [
      'Interactive Wireframes',
      'High-Fidelity Figma Concepts',
      'Brand Alignment & UI Kits',
      'Client Review & Revisions'
    ],
    icon: Compass,
    mockupTitle: 'UI/UX Design Systems',
    mockupDetail: 'Crafting responsive layouts, micro-interactions, and visual style guides.'
  },
  {
    step: '03',
    title: 'Development & Testing',
    shortTitle: 'Development & Testing',
    tag: 'PHASE 03',
    description: 'Our developers bring the approved designs to life using clean, efficient code. Rigorous testing is conducted across all browsers and devices to ensure flawless functionality.',
    highlights: [
      'Clean Modular Codebase',
      'Cross-Browser & Device Audit',
      'Fast Page Load Optimization',
      'Interactive Component Build'
    ],
    icon: Code2,
    mockupTitle: 'Engineered Stack',
    mockupDetail: 'Building accessible, scalable Next.js and Tailwind CSS web architectures.'
  },
  {
    step: '04',
    title: 'SEO & Optimization',
    shortTitle: 'SEO & Optimization',
    tag: 'PHASE 04',
    description: 'Before launch, we conduct a thorough SEO audit and implement on-page optimization to ensure your website is ready to rank on Google from day one.',
    highlights: [
      'On-Page Technical SEO',
      'Meta Data & Schema Markup',
      'Core Web Vitals Tuning',
      'Sitemap & Indexing Setup'
    ],
    icon: LineChart,
    mockupTitle: 'Search Dominance',
    mockupDetail: 'Optimizing site structure for maximum visibility across UAE search results.'
  },
  {
    step: '05',
    title: 'Launch & Support',
    shortTitle: 'Launch & Support',
    tag: 'PHASE 05',
    description: 'We manage a smooth, zero-downtime launch and provide ongoing support and maintenance to keep your website secure, fast, and up to date.',
    highlights: [
      'Zero-Downtime Deployment',
      'Domain & SSL Verification',
      '24/7 Security Monitoring',
      'Continuous Maintenance'
    ],
    icon: Rocket,
    mockupTitle: 'Flawless Go-Live',
    mockupDetail: 'Managing cloud server deployment, SSL security, and live health checks.'
  },
  {
    step: '06',
    title: 'Delivery & Growth',
    shortTitle: 'Delivery',
    tag: 'PHASE 06',
    description: 'After launch, we provide full project documentation, training (if required), and performance tracking reports. We continuously monitor analytics, user behavior, and conversion metrics to refine strategies and support long-term digital growth.',
    highlights: [
      'Full Project Documentation',
      'Client Training & Handoff',
      'Analytics & Behavior Tracking',
      'Long-Term Conversion Strategy'
    ],
    icon: CheckCircle2,
    mockupTitle: 'Post-Launch Insights',
    mockupDetail: 'Tracking live metrics and conversion rates to maximize long-term business ROI.'
  }
];

export default function ProcessSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = processSteps[activeStepIndex];

  return (
    <section className="w-full bg-white text-[#111111] py-20 md:py-28 px-4 sm:px-6 md:px-8 lg:px-12 relative border-t border-[#EEEEEE]">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mb-12 sm:mb-16">
          <span className="inline-block bg-[#F4F4F5] text-[#111111] text-xs font-semibold px-3.5 py-1.5 rounded-full mb-4 border border-[#E4E4E7]">
            OUR PROCESS
          </span>
          <h2 className="font-jakarta font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] text-[#111111] tracking-tight leading-[1.15] mb-5">
            A Structured Approach To{' '}
            <span className="font-jakarta font-normal text-[#111111]">
              Digital Excellence
            </span>
          </h2>
          <p className="font-jakarta text-base sm:text-lg text-[#666666] font-medium leading-relaxed">
            From initial strategy to final delivery, we follow a transparent and efficient 6-step workflow to ensure your website succeeds.
          </p>
        </div>

        {/* Step Navigation Bar */}
        <div className="w-full overflow-x-auto pb-3 mb-8 no-scrollbar scroll-smooth">
          <div className="flex items-center justify-start md:justify-center gap-2 min-w-max px-1">
            {processSteps.map((item, index) => {
              const isActive = index === activeStepIndex;
              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStepIndex(index)}
                  className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-colors border ${
                    isActive
                      ? 'bg-[#111111] text-white border-[#111111]'
                      : 'bg-[#F5F5F7] text-[#555555] border-[#E5E5E5] hover:bg-[#EAEAEA] hover:text-[#111111]'
                  }`}
                >
                  <span className={`text-[10px] sm:text-[11px] px-1.5 py-0.5 rounded-md ${isActive ? 'bg-[#007FFF] text-white' : 'bg-white text-[#111111]'}`}>
                    {item.step}
                  </span>
                  <span className="whitespace-nowrap">{item.shortTitle}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Split Card Featured Showcase */}
        <div className="w-full rounded-[20px] sm:rounded-[32px] border border-[#E5E5E5] overflow-hidden bg-white shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStepIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-2 min-h-[400px]"
            >
              {/* Left Side: Dark Card */}
              <div className="bg-[#111111] text-white p-5 sm:p-8 lg:p-14 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4 sm:mb-6">
                    <span className="w-2 h-2 rounded-full bg-[#007FFF]" />
                    <span className="text-[11px] sm:text-xs font-bold tracking-widest text-white/70 uppercase">
                      {activeStep.tag}
                    </span>
                  </div>

                  <h3 className="font-jakarta font-bold text-xl sm:text-3xl lg:text-4xl text-white mb-3 sm:mb-5 leading-tight">
                    {activeStep.title}
                  </h3>

                  <p className="text-white/80 font-jakarta text-xs sm:text-base leading-relaxed mb-6 sm:mb-8">
                    {activeStep.description}
                  </p>
                </div>

                {/* Key Deliverables Checkmarks */}
                <div className="pt-4 sm:pt-6 border-t border-white/10">
                  <span className="text-[11px] sm:text-xs font-bold text-[#007FFF] uppercase tracking-wider block mb-2 sm:mb-3">
                    Key Deliverables:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                    {activeStep.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-white/90 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#007FFF] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side: Brand Blue Card */}
              <div className="bg-[#007FFF] text-white p-5 sm:p-8 lg:p-14 flex flex-col justify-between relative overflow-hidden">
                <div>
                  <div className="flex items-center gap-2 mb-4 sm:mb-6">
                    <span className="w-2 h-2 rounded-full bg-white" />
                    <span className="text-[11px] sm:text-xs font-bold tracking-widest text-white/80 uppercase">
                      HALA WORKFLOW
                    </span>
                  </div>

                  <h3 className="font-jakarta font-bold text-xl sm:text-3xl lg:text-4xl text-white mb-3 sm:mb-4 leading-tight">
                    {activeStep.mockupTitle}
                  </h3>

                  <p className="text-white/90 font-jakarta text-xs sm:text-base leading-relaxed">
                    {activeStep.mockupDetail}
                  </p>
                </div>

                {/* Internal Card Graphic */}
                <div className="mt-6 sm:mt-8 bg-white text-[#111111] p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-white/30 shadow-md">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="flex items-center gap-2 sm:gap-2.5">
                      <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#111111] text-white flex items-center justify-center font-bold text-xs">
                        {activeStep.step}
                      </div>
                      <span className="font-jakarta font-bold text-xs sm:text-sm text-[#111111]">
                        {activeStep.title}
                      </span>
                    </div>
                    <span className="bg-[#007FFF]/10 text-[#007FFF] text-[10px] sm:text-[11px] font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md uppercase">
                      IN PROGRESS
                    </span>
                  </div>

                  <p className="text-xs text-[#555555] leading-relaxed mb-3 sm:mb-4">
                    {activeStep.description}
                  </p>

                  <div className="flex items-center justify-between pt-2.5 sm:pt-3 border-t border-[#EEEEEE] text-[10px] sm:text-[11px] text-[#777777] font-semibold">
                    <span>STATUS: ACTIVE</span>
                    <span className="text-[#007FFF] flex items-center gap-1 font-bold">
                      Step {activeStepIndex + 1} of 6 <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
