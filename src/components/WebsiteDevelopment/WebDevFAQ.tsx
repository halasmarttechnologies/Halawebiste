'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const webDevFaqs = [
  {
    number: "01",
    question: "What makes your web development services top quality?",
    answer: "We build high performance websites using modern frameworks like Next.js React Node and TypeScript delivering fast load speeds strong security and conversion focused design."
  },
  {
    number: "02",
    question: "How can your web development services drive digital innovation?",
    answer: "By combining clean code architecture with modern design practices we create websites that not only look professional but also perform seamlessly and scale with your business needs."
  },
  {
    number: "03",
    question: "What industries do you cater to with your web development services?",
    answer: "We build websites for a wide range of industries including eCommerce real estate healthcare hospitality and professional service businesses."
  },
  {
    number: "04",
    question: "Do you build fully responsive websites?",
    answer: "Yes every website we develop is fully responsive ensuring a smooth consistent experience across desktops tablets and mobile devices."
  },
  {
    number: "05",
    question: "How long does it take to build a website?",
    answer: "Timelines vary based on project complexity but most standard websites are completed within a few weeks from discovery to launch."
  },
  {
    number: "06",
    question: "Will my website be optimized for search engines?",
    answer: "Yes we build websites with SEO friendly structure fast load speeds and clean code giving your site a strong foundation to rank well."
  },
  {
    number: "07",
    question: "Do you offer website maintenance after launch?",
    answer: "Yes we provide ongoing support and maintenance packages to keep your website secure updated and running smoothly after launch."
  },
  {
    number: "08",
    question: "Can you redesign my existing website?",
    answer: "Yes we specialize in redesigning outdated websites into modern fast and high converting platforms while preserving your existing content and SEO value."
  },
  {
    number: "09",
    question: "What platforms or technologies do you build with?",
    answer: "We primarily develop using Next.js React Node.js and Tailwind CSS along with CMS integrations depending on your project's specific requirements."
  },
  {
    number: "10",
    question: "How do I get started with a web development project?",
    answer: "Simply reach out with your requirements and our team will schedule a discovery call to understand your goals before building a tailored development plan."
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
              FAQs &amp; Answers
            </h2>

            <p className="font-jakarta text-base md:text-lg text-[#555555] leading-relaxed mb-8">
              Everything you need to know about our development process tech stack mobile responsiveness and post launch support.
            </p>

            <div className="w-full bg-[#f9f9f9] border border-[#e5e5e5] rounded-2xl p-6 sm:p-7 flex flex-col items-start">
              <span className="font-jakarta text-xs font-semibold text-[#007FFF] uppercase tracking-wider mb-2">
                Custom Web Engineering
              </span>
              <h3 className="font-jakarta font-semibold text-lg text-[#111111] mb-2">
                Ready to build or redesign your site?
              </h3>
              <p className="font-jakarta text-xs md:text-sm text-[#666666] leading-relaxed mb-6">
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
