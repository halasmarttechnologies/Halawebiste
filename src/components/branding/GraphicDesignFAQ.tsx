'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const graphicDesignFaqs = [
  {
    number: "01",
    question: "Who can avail of your graphic design services?",
    answer: "Any business or individual looking to strengthen their brand can avail of these services including startups retailers influencers ecommerce businesses service providers and corporate entities."
  },
  {
    number: "02",
    question: "Can I ask for edits post delivery?",
    answer: "Yes we offer a set number of revisions with every project so the final design fully matches your expectations before delivery."
  },
  {
    number: "03",
    question: "Do you provide custom design packages?",
    answer: "Yes we tailor every package based on your specific needs whether it's a single design piece or a complete set of brand visuals."
  },
  {
    number: "04",
    question: "Do I receive source files such as PSD AI or SVG?",
    answer: "Yes once the project is complete you receive all relevant source files so you have full ownership and flexibility for future use."
  },
  {
    number: "05",
    question: "How long does a typical graphic design project take?",
    answer: "Turnaround time depends on project complexity but most standard design requests are completed within a few business days."
  },
  {
    number: "06",
    question: "What types of graphic design services do you offer?",
    answer: "We offer logo design social media graphics marketing materials packaging design UI graphics and complete visual identity design."
  },
  {
    number: "07",
    question: "Can you match my existing brand guidelines?",
    answer: "Yes we work closely with your existing brand colors fonts and style to keep every new design consistent with your current identity."
  },
  {
    number: "08",
    question: "Do you design for both print and digital use?",
    answer: "Yes our team creates designs optimized for both digital platforms and print materials ensuring quality across every format."
  },
  {
    number: "09",
    question: "What software do you use for design work?",
    answer: "We work with industry standard tools including Adobe Illustrator Photoshop InDesign and Figma to deliver professional high quality results."
  },
  {
    number: "10",
    question: "How do I get started with a graphic design project?",
    answer: "Simply reach out to our team with your requirements and we will schedule a quick consultation to understand your goals before starting the design process."
  }
];

export default function GraphicDesignFAQ() {
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
              Graphic Design <br className="hidden sm:inline" />
              FAQs &amp; Answers.
            </h2>

            <p className="font-jakarta text-base md:text-lg text-[#555555] font-normal leading-relaxed mb-8">
              Everything you need to know about our design process file formats revisions and delivery timelines.
            </p>

            <div className="w-full bg-[#f9f9f9] border border-[#e5e5e5] rounded-2xl p-6 sm:p-7 flex flex-col items-start">
              <span className="font-jakarta text-xs font-semibold text-[#007FFF] uppercase tracking-wider mb-2">
                Custom Creative Support
              </span>
              <h3 className="font-jakarta font-semibold text-lg text-[#111111] mb-2">
                Have a specific design requirement?
              </h3>
              <p className="font-jakarta text-xs md:text-sm text-[#666666] font-normal leading-relaxed mb-6">
                Our Dubai design team is ready to discuss your custom branding or creative project.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#007FFF] hover:bg-[#0066CC] transition-colors text-white font-jakarta font-semibold text-xs md:text-sm px-6 py-3 rounded-xl"
              >
                <span>Talk to a Designer</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-4 w-full">
            {graphicDesignFaqs.map((faq, index) => {
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
