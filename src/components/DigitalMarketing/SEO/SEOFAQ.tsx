'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const seoFaqs = [
  {
    number: "01",
    question: "What is SEO, and why is it important?",
    answer: "SEO (Search Engine Optimization) is the process of optimizing your website to rank higher on Google search results. It is essential because high rankings generate continuous, high-intent organic traffic without paying for every click."
  },
  {
    number: "02",
    question: "How long does it take to see SEO results?",
    answer: "Initial technical indexation fixes show ranking improvements within 30 to 60 days. Sustainable Page-1 rankings and traffic exponential growth typically compound within 3 to 6 months of consistent optimization."
  },
  {
    number: "03",
    question: "Do you follow Google’s SEO guidelines?",
    answer: "Yes, 100%. We practice strict White-Hat SEO strictly complying with Google Search Quality Rater Guidelines, Core Web Vitals, EEAT rules, and helpful content updates to protect your domain authority."
  },
  {
    number: "04",
    question: "What kind of businesses benefit from SEO?",
    answer: "Any business whose prospective customers search online for products, services, or solutions benefits from SEO—including local UAE businesses, eCommerce stores, corporate services, and B2B tech platforms."
  },
  {
    number: "05",
    question: "How do you choose keywords?",
    answer: "We perform deep search intent analysis combining keyword search volume, ranking difficulty, commercial intent, and competitor gap analysis to target high-converting transactional keywords."
  },
  {
    number: "06",
    question: "Is content creation part of SEO?",
    answer: "Yes! High-quality SEO copywriting, content structure, pillar pages, and regular blog publishing are core pillars of our organic search optimization strategy."
  },
  {
    number: "07",
    question: "Will you provide regular reports?",
    answer: "Yes, you receive transparent monthly performance reports detailing keyword position changes, organic traffic growth, backlink acquisitions, and Google Search Console performance metrics."
  },
  {
    number: "08",
    question: "Can SEO increase sales?",
    answer: "Yes! By capturing users active in their decision-making phase and sending targeted commercial search traffic directly to optimized landing pages, SEO directly drives qualified leads and sales."
  },
  {
    number: "09",
    question: "What’s the difference between on-page and off-page SEO?",
    answer: "On-page SEO optimizes elements directly on your site (content, meta tags, speed, internal links). Off-page SEO builds domain authority through high-quality external backlinks, brand citations, and digital PR."
  },
  {
    number: "10",
    question: "Do you guarantee top rankings?",
    answer: "No reputable agency can guarantee #1 spot on Google due to algorithm updates. However, our proven White-Hat methodology consistently delivers Page-1 rankings and sustainable traffic growth across competitive markets."
  }
];

export default function SEOFAQ() {
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
              Search Optimization <br className="hidden sm:inline" />
              FAQs &amp; Answers.
            </h2>

            <p className="font-jakarta text-base md:text-lg text-[#555555] leading-relaxed mb-8">
              Everything you need to know about our organic search engine optimization, technical audits, Google compliance, and ranking models.
            </p>

            <div className="w-full bg-[#f9f9f9] border border-[#e5e5e5] rounded-2xl p-6 sm:p-7 flex flex-col items-start">
              <span className="font-jakarta text-xs font-semibold text-[#007FFF] uppercase tracking-wider mb-2">
                Organic Search Growth
              </span>
              <h3 className="font-jakarta font-semibold text-lg text-[#111111] mb-2">
                Ready to rank higher on Google?
              </h3>
              <p className="font-jakarta text-xs md:text-sm text-[#666666] leading-relaxed mb-6">
                Our Dubai SEO specialists are ready to audit your website and identify major ranking growth opportunities.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#007FFF] hover:bg-[#0066CC] transition-colors text-white font-jakarta font-semibold text-xs md:text-sm px-6 py-3 rounded-xl"
              >
                <span>Request Free SEO Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4 w-full">
            {seoFaqs.map((faq, index) => {
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
