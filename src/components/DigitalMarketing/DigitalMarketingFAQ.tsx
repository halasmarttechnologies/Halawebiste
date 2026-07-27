'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const digitalMarketingFaqs = [
  {
    number: "01",
    question: "Who should invest in Digital Marketing?",
    answer: "Any business looking to increase customer reach, boost online sales, build brand authority, or outpace competitors should invest in digital marketing—including B2B companies, eCommerce stores, local service providers, and global enterprises."
  },
  {
    number: "02",
    question: "What’s the difference between SEO, PPC, and Social Media?",
    answer: "SEO builds long-term organic visibility on Google. PPC (Pay-Per-Click) delivers instant targeted traffic through paid search ads. Social Media Marketing engages audiences, builds brand trust, and generates leads on platforms like Instagram, LinkedIn, and Meta."
  },
  {
    number: "03",
    question: "How long does it take to see results?",
    answer: "PPC ad campaigns and paid social ads deliver instant traffic and lead volume on launch. SEO strategies and organic content marketing show compounding growth and peak rankings within 3 to 6 months."
  },
  {
    number: "04",
    question: "Is Digital Marketing suitable for small businesses?",
    answer: "Yes! Digital marketing allows small businesses to compete directly with industry giants by hyper-targeting local buyers, optimizing ad budgets, and converting high-intent leads efficiently."
  },
  {
    number: "05",
    question: "Will you create the content too?",
    answer: "Yes! Our full-service marketing packages include end-to-end content production—from graphic design and video editing to SEO copywriting, ad creatives, and landing page designs."
  },
  {
    number: "06",
    question: "Can I track the performance of campaigns?",
    answer: "Yes, 100%. We provide transparent real-time analytics dashboards tracking click-through rates, lead conversion costs, keyword rankings, and exact Return on Ad Spend (ROAS)."
  },
  {
    number: "07",
    question: "Is a website required to start?",
    answer: "While having a high-converting website optimizes lead capture, we can also launch campaigns utilizing dedicated sales landing pages, social media lead forms, or WhatsApp direct funnels."
  },
  {
    number: "08",
    question: "How do I get started with Hala Technology?",
    answer: "Getting started is simple! Reach out to our Dubai strategy team at 1803, Latifa Tower, Sheikh Zayed Road, email Contact@halatechnology.ae, or call +971 58 613 9007 for a custom growth audit."
  },
  {
    number: "09",
    question: "How much should I budget for digital marketing?",
    answer: "Budgets vary based on your industry competitiveness and growth targets. We craft tailored marketing packages designed to maximize Return on Investment for both emerging startups and enterprise budgets."
  },
  {
    number: "10",
    question: "Do I need to sign a long-term contract?",
    answer: "No, we offer flexible month-to-month marketing retainers focused on delivering measurable performance without locking you into restrictive long-term commitments."
  }
];

export default function DigitalMarketingFAQ() {
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
              Digital Marketing <br className="hidden sm:inline" />
              FAQs &amp; Answers.
            </h2>

            <p className="font-jakarta text-base md:text-lg text-[#555555] font-normal leading-relaxed mb-8">
              Everything you need to know about our digital marketing channels, timelines, performance tracking, and ROI models.
            </p>

            <div className="w-full bg-[#f9f9f9] border border-[#e5e5e5] rounded-2xl p-6 sm:p-7 flex flex-col items-start">
              <span className="font-jakarta text-xs font-semibold text-[#007FFF] uppercase tracking-wider mb-2">
                Performance Marketing
              </span>
              <h3 className="font-jakarta font-semibold text-lg text-[#111111] mb-2">
                Want to grow your revenue online?
              </h3>
              <p className="font-jakarta text-xs md:text-sm text-[#666666] font-normal leading-relaxed mb-6">
                Our Dubai marketing strategists will audit your brand and build a custom multi-channel roadmap.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#007FFF] hover:bg-[#0066CC] transition-colors text-white font-jakarta font-semibold text-xs md:text-sm px-6 py-3 rounded-xl"
              >
                <span>Request Growth Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4 w-full">
            {digitalMarketingFaqs.map((faq, index) => {
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
