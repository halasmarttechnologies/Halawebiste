'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const contactFaqs = [
  {
    number: "01",
    question: "How quickly will your team respond to my inquiry?",
    answer: "Our strategy team in Dubai guarantees a response in less than an hour during business hours (Monday – Saturday, 9:00 AM to 6:00 PM GST). If you reach out outside business hours, we will respond first thing the following morning."
  },
  {
    number: "02",
    question: "Where is your office located in Dubai?",
    answer: "Our global headquarters is located at 1803, Latifa Tower, Sheikh Zayed Road, Dubai, United Arab Emirates. Visitors are welcome for in-person strategy consultations by appointment."
  },
  {
    number: "03",
    question: "What is the best way to contact your team directly?",
    answer: "You can email us directly at Contact@halatechnology.ae or call / WhatsApp our direct consultant line at +971 58 613 9007 for instant support."
  },
  {
    number: "04",
    question: "What should I prepare for our 15-minute guided tour or consultation?",
    answer: "Simply bring your current website URL, key growth goals, and target timeline. We will analyze your digital positioning live and discuss actionable steps to achieve your revenue objectives."
  },
  {
    number: "05",
    question: "Can I request a custom RFP review or project proposal?",
    answer: "Yes! You can email your RFP, project scope, or technical specifications to Contact@halatechnology.ae. Our senior strategists will review your documentation and provide a comprehensive proposal within 24 hours."
  },
  {
    number: "06",
    question: "Do you work with international clients outside the UAE?",
    answer: "Absolutely. While our headquarters is based on Sheikh Zayed Road in Dubai, we work with ambitious startups, eCommerce platforms, and established enterprises across the GCC, Europe, and North America."
  }
];

export default function ContactFAQ() {
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
              Contact FAQs <br className="hidden sm:inline" />
              &amp; Answers.
            </h2>

            <p className="font-poppins text-base md:text-lg text-[#555555] font-normal leading-relaxed mb-8">
              Got questions before scheduling a consultation or visiting our office? Here is everything you need to know about reaching our Dubai team.
            </p>

            {/* Help Box */}
            <div className="w-full bg-[#f9f9f9] border border-[#e5e5e5] rounded-2xl p-6 sm:p-7 flex flex-col items-start">
              <span className="font-poppins text-xs font-semibold text-[#007FFF] uppercase tracking-wider mb-2">
                Fast Assistance
              </span>
              <h3 className="font-poppins font-semibold text-lg text-[#111111] mb-2">
                Need Immediate Help?
              </h3>
              <p className="font-poppins text-xs md:text-sm text-[#666666] font-normal leading-relaxed mb-6">
                Call or WhatsApp our direct line for instant project assistance.
              </p>
              <a
                href="https://wa.me/971586139007"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#007FFF] hover:bg-[#0066CC] transition-colors text-white font-poppins font-semibold text-xs md:text-sm px-6 py-3 rounded-xl"
              >
                <span>WhatsApp Us Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column (Accordion List) */}
          <div className="lg:col-span-7 flex flex-col gap-4 w-full">
            {contactFaqs.map((faq, index) => {
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
