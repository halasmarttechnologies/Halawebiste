'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const faqs = [
  {
    number: "01",
    question: "What is professional branding and why does it matter?",
    answer: "Professional branding is the process of creating a unique consistent identity logo colors voice and messaging that helps your business stand out and build lasting recognition in a competitive market."
  },
  {
    number: "02",
    question: "How does strong branding help my business grow?",
    answer: "A clear consistent brand builds trust faster makes your business memorable and gives customers a reason to choose you over competitors which directly supports long term growth."
  },
  {
    number: "03",
    question: "What's included in your branding services?",
    answer: "Our branding services cover logo design complete visual identity systems brand guidelines and strategy everything needed to present a cohesive brand across every platform."
  },
  {
    number: "04",
    question: "How long does the branding process usually take?",
    answer: "Timelines vary by project scope but most branding packages from concept to final identity are typically completed within a few weeks."
  },
  {
    number: "05",
    question: "Do you offer complete rebranding for existing businesses?",
    answer: "Yes we help businesses refresh outdated branding with a new logo updated visual identity and consistent messaging that better reflects where the business stands today."
  },
  {
    number: "06",
    question: "Will my brand look different across social media website and print?",
    answer: "No we build one unified brand system so your logo colors and messaging stay consistent across every platform from your website to social media and printed materials."
  },
  {
    number: "07",
    question: "Do you provide brand strategy along with design?",
    answer: "Yes our branding process includes strategy work as well so every design decision from color choices to tone of voice is backed by a clear understanding of your audience and goals."
  },
  {
    number: "08",
    question: "Can you create branding for a completely new business?",
    answer: "Absolutely we regularly build brand identities from scratch helping new businesses establish a strong professional presence right from launch."
  },
  {
    number: "09",
    question: "What files will I receive after the branding project is complete?",
    answer: "You'll receive your final logo files brand guidelines color codes and typography details giving you everything needed to maintain a consistent brand across current and future materials."
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
            <h2 className="font-jakarta font-semibold text-3xl sm:text-4xl md:text-5xl text-[#111111] leading-tight mb-6">
              Got Questions? <br className="hidden sm:inline" />
              We Have Answers.
            </h2>

            <p className="font-jakarta text-base md:text-lg text-[#555555] leading-relaxed mb-8">
              Everything you need to know about our branding process logo design identity systems and how it drives real business growth.
            </p>

            {/* Human-crafted Help Box */}
            <div className="w-full bg-[#f9f9f9] border border-[#e5e5e5] rounded-2xl p-6 sm:p-7 flex flex-col items-start">
              <span className="font-jakarta text-xs font-semibold text-[#007FFF] uppercase tracking-wider mb-2">
                Need Custom Advice?
              </span>
              <h3 className="font-jakarta font-semibold text-lg text-[#111111] mb-2">
                Have a specific question?
              </h3>
              <p className="font-jakarta text-xs md:text-sm text-[#666666] leading-relaxed mb-6">
                Our Dubai strategy team is ready to analyze your business goals and provide tailored insights.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#007FFF] hover:bg-[#0066CC] transition-colors text-white font-jakarta font-semibold text-xs md:text-sm px-6 py-3 rounded-xl"
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
                      <span className={`font-jakarta text-xs md:text-sm font-semibold px-2.5 py-1 rounded-md transition-colors ${
                        isOpen ? 'bg-[#007FFF] text-white' : 'bg-white text-[#111111] border border-[#e5e5e5]'
                      }`}>
                        {faq.number}
                      </span>

                      {/* Question Text */}
                      <span className={`font-jakarta text-base md:text-lg font-semibold transition-colors ${
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
                        <div className="px-6 pb-6 pt-1 font-jakarta text-xs sm:text-sm md:text-base text-[#CCCCCC] leading-relaxed pl-16">
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
