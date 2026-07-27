'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const webDevFaqs = [
  {
    number: "01",
    question: "What makes your web development services top-quality?",
    answer: "We engineer high-performance web applications using modern frameworks (Next.js, React, Node, Tailwind, TypeScript) with zero-bloat code, sub-second load speeds, enterprise-grade security, and conversion-focused UX architecture."
  },
  {
    number: "02",
    question: "How can your web development services drive digital innovation?",
    answer: "We incorporate interactive 3D elements, dynamic micro-interactions, custom API integrations, real-time analytics, and headless CMS capabilities that position your brand light-years ahead of competitors."
  },
  {
    number: "03",
    question: "What industries do you cater to with your web development services?",
    answer: "We build tailored web solutions for real estate conglomerates, eCommerce brands, financial institutions, technology startups, healthcare providers, legal firms, and corporate enterprises across Dubai and globally."
  },
  {
    number: "04",
    question: "How do you ensure website growth and scalability?",
    answer: "Our modular architecture separates frontend performance from backend data layers, allowing your platform to seamlessly handle spikes in user traffic, expanding product catalogs, and international localization without slowing down."
  },
  {
    number: "05",
    question: "Do you build SEO-friendly websites?",
    answer: "Yes, 100%. Every website we build features clean semantic HTML5 markup, automated schema structured data, SSR (Server-Side Rendering) for instant Google indexing, fast Core Web Vitals, and mobile-first responsiveness."
  },
  {
    number: "06",
    question: "Can you help with website maintenance and updates after launch?",
    answer: "Yes, we provide ongoing web maintenance retainers including security updates, performance monitoring, cloud hosting management, monthly content updates, and feature expansions."
  },
  {
    number: "07",
    question: "How long does it take to develop a website?",
    answer: "Standard business websites take 3 to 5 weeks from initial design mockups to launch. Complex web platforms or custom eCommerce portals take 6 to 10 weeks depending on custom features and API integrations."
  },
  {
    number: "08",
    question: "Can you redesign my existing website?",
    answer: "Yes! We specialize in legacy website overhauls, modernizing visual design, upgrading tech stacks, improving mobile usability, and boosting search engine rankings while preserving existing SEO authority."
  },
  {
    number: "09",
    question: "What platforms and technologies do you use?",
    answer: "We develop using modern tech stacks including Next.js, React, Node.js, TypeScript, Tailwind CSS, GraphQL, WordPress, Shopify, Webflow, and custom serverless architectures on AWS / Vercel."
  },
  {
    number: "10",
    question: "Will my website be mobile-friendly?",
    answer: "Yes, every website is engineered with a mobile-first philosophy, ensuring flawless rendering, smooth touch gestures, and ultra-fast loading across all smartphones, tablets, and desktop displays."
  }
];

export default function WebDevFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white text-[#111111] py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#e5e5e5]">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28">
            <h2 className="font-jakarta font-semibold text-3xl sm:text-4xl md:text-5xl text-[#111111] leading-tight mb-6">
              Web Development <br className="hidden sm:inline" />
              FAQs &amp; Answers.
            </h2>

            <p className="font-jakarta text-base md:text-lg text-[#555555] font-normal leading-relaxed mb-8">
              Everything you need to know about our web engineering process, technologies, mobile responsiveness, and post-launch maintenance.
            </p>

            <div className="w-full bg-[#f9f9f9] border border-[#e5e5e5] rounded-2xl p-6 sm:p-7 flex flex-col items-start">
              <span className="font-jakarta text-xs font-semibold text-[#007FFF] uppercase tracking-wider mb-2">
                Custom Web Engineering
              </span>
              <h3 className="font-jakarta font-semibold text-lg text-[#111111] mb-2">
                Ready to build or redesign your site?
              </h3>
              <p className="font-jakarta text-xs md:text-sm text-[#666666] font-normal leading-relaxed mb-6">
                Our Dubai development team is ready to plan your high-converting web architecture.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#007FFF] hover:bg-[#0066CC] transition-colors text-white font-jakarta font-semibold text-xs md:text-sm px-6 py-3 rounded-xl"
              >
                <span>Start Web Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4 w-full">
            {webDevFaqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div 
                  key={index} 
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                    isOpen 
                      ? 'bg-[#111111] border-[#111111] text-white' 
                      : 'bg-[#f9f9f9] border-[#e5e5e5] text-[#111111]'
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <button
                    type="button"
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-4 pr-4">
                      <span className={`font-jakarta text-xs md:text-sm font-semibold px-2.5 py-1 rounded-md transition-colors ${
                        isOpen ? 'bg-[#007FFF] text-white' : 'bg-white text-[#111111] border border-[#e5e5e5]'
                      }`}>
                        {faq.number}
                      </span>

                      <span className={`font-jakarta text-base md:text-lg font-semibold transition-colors ${
                        isOpen ? 'text-white' : 'text-[#111111]'
                      }`}>
                        {faq.question}
                      </span>
                    </div>

                    <div className="shrink-0">
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-white" />
                      ) : (
                        <Plus className="w-5 h-5 text-[#111111]" />
                      )}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <div className="px-6 pb-6 pt-1 font-jakarta text-xs sm:text-sm md:text-base text-[#CCCCCC] font-normal leading-relaxed pl-16">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
