'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    number: "01",
    question: "What is expert branding & marketing, and why is it important?",
    answer: "Expert branding is the professional process of creating a unique, cohesive identity and strategic search positioning for your business. It builds recognition, long-term trust, and differentiates your brand in competitive UAE markets."
  },
  {
    number: "02",
    question: "How do your digital marketing and SEO strategies drive business growth?",
    answer: "We combine consumer analytics, targeted keyword intent, and high-converting creative execution across Google, Meta, and social platforms to turn search traffic directly into qualified leads and sales."
  },
  {
    number: "03",
    question: "What core elements are included in your full-suite services?",
    answer: "Our full-suite includes SEO (On-page, Off-page, Technical), Pay-Per-Click Ads, Social Media Marketing, Content Creation, and Mobile-first Web Design engineered for maximum conversions."
  },
  {
    number: "04",
    question: "How long does it take to see measurable results from SEO & Marketing?",
    answer: "PPC ad campaigns deliver instant traffic and leads on launch. Organic SEO search rankings typically show strong momentum and sustainable traffic increases within 3 to 6 months."
  },
  {
    number: "05",
    question: "Can your services work for startups and expanding UAE businesses?",
    answer: "Yes! We tailor our growth strategies specifically for your business scale—whether you are a startup building initial market presence or an established brand scaling regional market share."
  },
  {
    number: "06",
    question: "How do I know if my business needs a marketing & website upgrade?",
    answer: "If your website traffic is stagnant, competitors rank higher on Google search results, or your current campaigns fail to produce measurable ROI, a strategic upgrade is recommended."
  },
  {
    number: "07",
    question: "What kind of performance reporting and analytics do you provide?",
    answer: "We provide complete transparency with real-time reporting dashboards, tracking user behavior, traffic sources, conversion rates, and keyword rankings so you know your exact ROI."
  },
  {
    number: "08",
    question: "How do we get started with Hala Technology?",
    answer: "Getting started is simple. Contact our Dubai strategy team to discuss your business goals, and we will prepare a customized proposal and strategic roadmap for your brand."
  }
];

export default function BrandingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white text-[#111111] py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#e5e5e5]">
      <div className="max-w-[1280px] mx-auto">
        
        {/* Main Grid Layout: Left Sticky Header & Right Accordions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (Sticky Sidebar & Callout) */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28">
            <h2 className="font-poppins font-semibold text-3xl sm:text-4xl md:text-5xl text-[#111111] leading-tight mb-6">
              Got Questions? <br className="hidden sm:inline" />
              We Have Answers.
            </h2>

            <p className="font-poppins text-base md:text-lg text-[#555555] font-normal leading-relaxed mb-8">
              Everything you need to know about our digital strategies, search engine optimization, content execution, and measurable growth models.
            </p>

            {/* Human-crafted Help Box */}
            <div className="w-full bg-[#f9f9f9] border border-[#e5e5e5] rounded-2xl p-6 sm:p-7 flex flex-col items-start">
              <span className="font-poppins text-xs font-semibold text-[#007FFF] uppercase tracking-wider mb-2">
                Need Custom Advice?
              </span>
              <h3 className="font-poppins font-semibold text-lg text-[#111111] mb-2">
                Have a specific question?
              </h3>
              <p className="font-poppins text-xs md:text-sm text-[#666666] font-normal leading-relaxed mb-6">
                Our Dubai strategy team is ready to analyze your business goals and provide tailored insights.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#007FFF] hover:bg-[#0066CC] transition-colors text-white font-poppins font-semibold text-xs md:text-sm px-6 py-3 rounded-xl"
              >
                <span>Ask Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column (Accordion List) */}
          <div className="lg:col-span-7 flex flex-col gap-4 w-full">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div 
                  key={index} 
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                    isOpen 
                      ? 'bg-[#111111] border-[#111111] text-white' 
                      : 'bg-[#f9f9f9] hover:bg-[#f2f2f2] border-[#e5e5e5] text-[#111111]'
                  }`}
                  onClick={() => toggleFAQ(index)}
                >
                  <button
                    type="button"
                    className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
                  >
                    <div className="flex items-center gap-4 pr-4">
                      {/* Index Number Badge */}
                      <span className={`font-poppins text-xs md:text-sm font-semibold px-2.5 py-1 rounded-md transition-colors ${
                        isOpen ? 'bg-[#007FFF] text-white' : 'bg-white text-[#111111] border border-[#e5e5e5]'
                      }`}>
                        {faq.number}
                      </span>

                      {/* Question Text */}
                      <span className={`font-poppins text-base md:text-lg font-semibold transition-colors ${
                        isOpen ? 'text-white' : 'text-[#111111]'
                      }`}>
                        {faq.question}
                      </span>
                    </div>

                    {/* Toggle Icon */}
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
                        <div className="px-6 pb-6 pt-1 font-poppins text-xs sm:text-sm md:text-base text-[#CCCCCC] font-normal leading-relaxed pl-16">
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
