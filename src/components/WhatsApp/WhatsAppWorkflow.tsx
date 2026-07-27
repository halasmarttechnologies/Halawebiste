'use client';

import { useState } from 'react';
import { MessageSquare, ListFilter, UserCheck, Send, UserPlus, ChevronRight, CheckCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WORKFLOW_STEPS = [
  {
    id: 'trigger',
    step: '01',
    title: 'Lead Trigger & Greeting',
    subtitle: 'Instant response on first message',
    icon: MessageSquare,
    description: 'The moment a customer clicks your WhatsApp ad or sends a message, our automated workflow triggers an instant welcome response.',
    mockup: <TriggerMockup />,
  },
  {
    id: 'menu',
    step: '02',
    title: 'Interactive Menu & Options',
    subtitle: 'Self-service interactive navigation',
    icon: ListFilter,
    description: 'Guide prospects with interactive button menus and quick-reply options so they can choose services, view pricing, or request consultations.',
    mockup: <MenuMockup />,
  },
  {
    id: 'qualification',
    step: '03',
    title: 'Smart Lead Qualification',
    subtitle: 'Automated prospect data capture',
    icon: UserCheck,
    description: 'AI chat logic asks targeted qualifying questions to capture customer contact details, budget ranges, and project urgency automatically.',
    mockup: <QualificationMockup />,
  },
  {
    id: 'nurture',
    step: '04',
    title: 'Broadcast & Drip Nurturing',
    subtitle: 'High open-rate campaign messages',
    icon: Send,
    description: 'Schedule automated drip messages, promotional updates, and booking reminders directly inside WhatsApp with 98%+ open rates.',
    mockup: <NurtureMockup />,
  },
  {
    id: 'handoff',
    step: '05',
    title: 'Human Agent Escalation',
    subtitle: 'Seamless live sales team transfer',
    icon: UserPlus,
    description: 'When a lead is qualified or requests custom assistance, the chat is instantly transferred to your live sales team with full chat history.',
    mockup: <HandoffMockup />,
  },
];

export default function WhatsAppWorkflow() {
  const [activeStepId, setActiveStepId] = useState(WORKFLOW_STEPS[0].id);

  const activeStepObj = WORKFLOW_STEPS.find((s) => s.id === activeStepId) || WORKFLOW_STEPS[0];

  return (
    <section className="font-jakarta bg-white text-[#111111] py-10 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-[1280px] mx-auto">

        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.1] text-[#111111] tracking-tight mb-4 max-w-3xl">
            Live WhatsApp Automation Workflow.
          </h2>
          <p className="text-[#555555] text-base md:text-lg font-medium max-w-2xl leading-relaxed">
            See how customer messages are instantly greeted, qualified, and routed through a seamless automated WhatsApp channel.
          </p>
        </div>

        {/* Workflow Main Box (Pure White, No Shadows, Light Border) */}
        <div className="bg-white rounded-[24px] md:rounded-[32px] border border-[#E5E7EB] p-4 sm:p-6 md:p-10">

          {/* Desktop Layout: 2 Columns */}
          <div className="hidden md:grid md:grid-cols-12 gap-8 lg:gap-12 items-stretch">

            {/* Left Steps Menu (5 cols) */}
            <div className="md:col-span-5 flex flex-col justify-between space-y-3">
              {WORKFLOW_STEPS.map((step) => {
                const Icon = step.icon;
                const isActive = activeStepId === step.id;

                return (
                  <button
                    key={step.id}
                    onClick={() => setActiveStepId(step.id)}
                    className={`w-full text-left p-5 rounded-2xl transition-all duration-200 flex items-center justify-between border ${isActive
                        ? 'bg-white border-[#111111] border-2 font-semibold translate-x-1'
                        : 'bg-white text-[#111111] border-[#E5E7EB] hover:border-gray-300'
                      }`}
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center font-bold text-sm border ${isActive ? 'bg-gray-100 border-[#111111] text-[#111111]' : 'bg-gray-50 border-gray-200 text-[#555555]'
                          }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold tracking-wider uppercase text-[#666666] block">
                          Step {step.step}
                        </span>
                        <h3 className="font-bold text-base lg:text-lg text-[#111111] tracking-tight">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <ChevronRight
                      className={`w-5 h-5 transition-transform duration-200 ${isActive ? 'text-[#111111] translate-x-1' : 'text-gray-300'
                        }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Live Preview Card (7 cols) */}
            <div className="md:col-span-7 bg-white rounded-2xl border border-[#E5E7EB] p-6 lg:p-8 flex flex-col justify-between relative overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStepObj.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col h-full justify-between space-y-6"
                >
                  {/* Step Description Top */}
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-gray-100 text-[#111111] rounded-full text-xs font-bold uppercase tracking-wider border border-gray-200">
                        Step {activeStepObj.step}
                      </span>
                      <span className="text-xs text-[#666666] font-medium">
                        {activeStepObj.subtitle}
                      </span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-[#111111] tracking-tight mb-2">
                      {activeStepObj.title}
                    </h3>
                    <p className="text-[#555555] text-sm lg:text-base leading-relaxed">
                      {activeStepObj.description}
                    </p>
                  </div>

                  {/* Live WhatsApp Chat Interface Display */}
                  <div className="w-full bg-[#F8F9FA] rounded-2xl border border-[#E5E7EB] p-4 lg:p-6 overflow-hidden">
                    {activeStepObj.mockup}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* Mobile Accordion Layout */}
          <div className="md:hidden flex flex-col space-y-3">
            {WORKFLOW_STEPS.map((step) => {
              const Icon = step.icon;
              const isActive = activeStepId === step.id;

              return (
                <div
                  key={step.id}
                  className={`rounded-2xl border transition-all overflow-hidden ${isActive ? 'bg-white border-[#111111] border-2' : 'bg-white border-[#E5E7EB]'
                    }`}
                >
                  <button
                    onClick={() => setActiveStepId(isActive ? '' : step.id)}
                    className="w-full p-4 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-xs border ${isActive ? 'bg-gray-100 border-[#111111] text-[#111111]' : 'bg-gray-50 border-gray-200 text-[#555555]'
                          }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold text-[#666666] uppercase tracking-wider block">
                          Step {step.step}
                        </span>
                        <h3 className="font-bold text-[#111111] text-base tracking-tight">
                          {step.title}
                        </h3>
                      </div>
                    </div>

                    <ChevronRight
                      className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isActive ? 'rotate-90 text-[#111111]' : ''
                        }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-4 pb-5 overflow-hidden border-t border-gray-100 pt-4"
                      >
                        <p className="text-xs text-[#555555] leading-relaxed mb-4">
                          {step.description}
                        </p>
                        <div className="bg-[#F8F9FA] rounded-xl border border-[#E5E7EB] p-3 overflow-hidden">
                          {step.mockup}
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

/* ─────────────────────────────────────────────────────────────
   Live WhatsApp Chat UI Mockups (Pure White & Authentic Green)
───────────────────────────────────────────────────────────── */

function WhatsAppHeader() {
  return (
    <div className="flex items-center justify-between border-b border-gray-200 pb-2.5 mb-3 gap-2">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.147 4.191 4.29-1.124zm11.233-6.387c-.298-.149-1.761-.868-2.033-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.645.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
          </svg>
        </div>
        <div>
          <span className="text-xs font-bold text-[#111111] block leading-tight">Hala Assistant</span>
          <span className="text-[9px] sm:text-[10px] text-green-600 font-semibold block">Online 24/7</span>
        </div>
      </div>
      <span className="text-[9px] sm:text-[10px] text-gray-400 font-medium border border-gray-200 rounded-full px-2 py-0.5 bg-white shrink-0">
        WhatsApp Business
      </span>
    </div>
  );
}

function TriggerMockup() {
  return (
    <div className="flex flex-col space-y-3">
      <WhatsAppHeader />
      {/* Customer Outgoing Message */}
      <div className="self-end bg-gray-100 text-[#111111] p-3 rounded-2xl rounded-tr-xs max-w-[85%] text-xs border border-gray-200">
        Hi! I'd like to learn more about your services.
        <div className="text-[9px] text-gray-400 text-right mt-1 flex items-center justify-end gap-1">
          10:42 AM <CheckCheck className="w-3 h-3 text-[#25D366]" />
        </div>
      </div>
      {/* Bot Incoming Message */}
      <div className="self-start bg-white text-[#111111] p-3 rounded-2xl rounded-tl-xs max-w-[90%] text-xs border border-gray-200">
        Hello! Welcome to Hala Technologies. How can we help scale your business today?
        <div className="text-[9px] text-gray-400 mt-1">10:42 AM</div>
      </div>
    </div>
  );
}

function MenuMockup() {
  return (
    <div className="flex flex-col space-y-3">
      <WhatsAppHeader />
      <div className="self-start bg-white text-[#111111] p-3 rounded-2xl rounded-tl-xs max-w-[95%] text-xs border border-gray-200 space-y-2">
        <span>Please select an option below:</span>
        <div className="flex flex-col gap-1.5 pt-1">
          <div className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2 text-[#111111] text-xs font-semibold text-center hover:bg-gray-100 cursor-pointer">
            1. View Digital Marketing Services
          </div>
          <div className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2 text-[#111111] text-xs font-semibold text-center hover:bg-gray-100 cursor-pointer">
            2. Request Custom Quote
          </div>
          <div className="w-full bg-gray-50 border border-gray-200 rounded-lg p-2 text-[#111111] text-xs font-semibold text-center hover:bg-gray-100 cursor-pointer">
            3. Talk to a Live Consultant
          </div>
        </div>
      </div>
    </div>
  );
}

function QualificationMockup() {
  return (
    <div className="flex flex-col space-y-3">
      <WhatsAppHeader />
      <div className="self-start bg-white text-[#111111] p-3 rounded-2xl rounded-tl-xs max-w-[90%] text-xs border border-gray-200">
        Great choice! To get you the exact quote, what is your estimated monthly marketing budget?
      </div>
      <div className="self-end bg-gray-100 text-[#111111] p-2.5 rounded-2xl rounded-tr-xs max-w-[75%] text-xs border border-gray-200">
        $2,000 - $5,000 / month
      </div>
      <div className="self-start bg-white text-[#111111] p-2.5 rounded-2xl rounded-tl-xs max-w-[90%] text-xs border border-gray-[#25D366] border-l-4">
        <span className="font-bold text-[#111111] block mb-0.5">High Intent Lead Qualified</span>
        Our senior marketing team has been notified for your priority consultation!
      </div>
    </div>
  );
}

function NurtureMockup() {
  return (
    <div className="flex flex-col space-y-3">
      <WhatsAppHeader />
      <div className="bg-white p-3 rounded-2xl border border-gray-200 space-y-2">
        <div className="flex items-center justify-between border-b border-gray-100 pb-1.5">
          <span className="text-xs font-bold text-[#111111]">Automated Broadcast Status</span>
          <span className="text-[10px] bg-green-50 text-green-700 font-bold px-2 py-0.5 rounded-full border border-green-200">
            98.4% Open Rate
          </span>
        </div>
        <p className="text-xs text-[#555555]">
          "Special Offer: Book your strategy session today and receive a complimentary SEO Audit."
        </p>
        <div className="text-[10px] text-gray-400 font-medium pt-1">
          Delivered to 1,240 subscribers • 312 Clicks
        </div>
      </div>
    </div>
  );
}

function HandoffMockup() {
  return (
    <div className="flex flex-col space-y-3">
      <WhatsAppHeader />
      <div className="bg-gray-100 p-2.5 rounded-xl border border-gray-200 text-center">
        <span className="text-xs font-bold text-[#111111] block">Live Agent Handover</span>
        <span className="text-[10px] text-gray-500 font-medium">Senior Consultant Sarah joined the chat</span>
      </div>
      <div className="self-start bg-white text-[#111111] p-3 rounded-2xl rounded-tl-xs max-w-[90%] text-xs border border-gray-200">
        Hi! I’ve reviewed your audit details. Let’s jump on a quick 10-min call to finalize your roadmap!
      </div>
    </div>
  );
}
