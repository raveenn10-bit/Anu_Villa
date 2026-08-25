"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, MessageCircle, HelpCircle, Sparkles } from "lucide-react";
import { VILLA_DATA } from "@/data/villaData";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqList = [
    {
      question: "What is the nightly rate for the whole villa, and are there extra guest charges?",
      answer: "The entire villa is priced at USD $140 per night for up to 12 guests across all 6 private en-suite A/C bedrooms. There are no extra guest fees or hidden taxes when booking direct with our host.",
    },
    {
      question: "What are the standard check-in and check-out times?",
      answer: "Check-in begins at 12:00 PM (noon) and check-out is by 10:00 AM. Early check-in or late luggage drop-off can be arranged in advance with host M. Mangala based on availability.",
    },
    {
      question: "Are all 6 bedrooms air-conditioned with attached private bathrooms?",
      answer: "Yes! Every single room has its own whisper-quiet remote air-conditioning unit and private attached en-suite bathroom with solar hot water and rain showers.",
    },
    {
      question: "Can guests use the kitchen and outdoor BBQ facilities?",
      answer: "Absolutely. You enjoy exclusive access to the fully equipped kitchen (gas cooker, refrigerator, microwave, kettle, and cookware) and the poolside barbecue grill setup.",
    },
    {
      question: "How far is Anu Villa from Turtle Beach and Galle Fort?",
      answer: "Anu Villa is in Samagiya, Thalpe North — approximately 1.5 km (3 to 4 minutes) from Dalawella Turtle Beach and Thalpe Rock Pools, and 14 minutes (7.5 km) from UNESCO Galle Fort.",
    },
    {
      question: "Can the host arrange airport transfers, scooter rentals, or tuk-tuks?",
      answer: "Yes. Host M. Mangala can seamlessly coordinate direct Colombo airport (CMB) van pickups, daily scooter rentals, reliable tuk-tuks, and southern coast boat safari tours.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleWhatsAppHelp = () => {
    const text = encodeURIComponent(`Hello M. Mangala! I'm visiting the ${VILLA_DATA.officialName} website and have a question about staying at the villa.`);
    window.open(`https://wa.me/${VILLA_DATA.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-sand-50 relative overflow-hidden">
      
      {/* Background Soft Ocean Light Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[550px] bg-sky-200/40 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Ocean Blue Card Container (Exact match to Reference Image) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[32px] sm:rounded-[40px] bg-gradient-to-b from-[#0F2F3F] via-[#0A222E] to-[#061720] border border-sky-400/25 p-6 sm:p-12 lg:p-14 shadow-2xl shadow-sky-950/20 text-white overflow-hidden"
        >
          {/* Subtle Top Filmic Glow */}
          <div className="absolute top-0 inset-x-0 h-44 bg-gradient-to-b from-sky-400/10 via-transparent to-transparent pointer-events-none" />

          {/* Centered Top Content */}
          <div className="relative z-10 flex flex-col items-center text-center space-y-4 mb-8 sm:mb-12">
            
            {/* Top FAQs Capsule Badge */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-sky-500/20 border border-sky-400/35 text-sky-200 text-[11px] font-semibold tracking-wider font-sans shadow-xs">
              <span>FAQs</span>
            </div>

            {/* Headline matching image */}
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[34px] font-semibold leading-snug tracking-tight max-w-xl text-white">
              Have Questions? Here Are Quick Answers <br className="hidden sm:inline" />
              To Some Of The Most Common Queries
            </h2>
          </div>

          {/* Accordion Pill List */}
          <div className="relative z-10 space-y-3 sm:space-y-3.5 max-w-2xl mx-auto font-sans">
            {faqList.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="space-y-2">
                  {/* Capsule Question Bar */}
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => toggleAccordion(index)}
                    className={`w-full rounded-full py-2.5 px-3.5 sm:py-3 sm:px-4 flex items-center gap-3 sm:gap-3.5 text-left transition-all duration-300 border ${
                      isOpen
                        ? "bg-[#17465D] border-sky-400/50 shadow-md shadow-sky-950/30"
                        : "bg-[#103344]/75 hover:bg-[#143E52]/90 border-sky-500/20 shadow-xs"
                    }`}
                  >
                    {/* Left Question Mark Circle Badge */}
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white text-[#0A222E] flex items-center justify-center font-bold text-xs sm:text-sm shrink-0 shadow-xs">
                      ?
                    </div>

                    {/* Question Text */}
                    <span className="text-xs sm:text-sm font-medium text-white/95 leading-tight flex-1">
                      {item.question}
                    </span>
                  </motion.button>

                  {/* Expandable Answer Chat Bubble */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, y: -6 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: -6 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="rounded-2xl sm:rounded-3xl bg-[#0B2533]/90 border border-sky-400/30 p-4 sm:p-5 flex items-start justify-between gap-3.5 shadow-lg">
                          <p className="text-xs sm:text-sm text-sky-100/90 leading-relaxed font-sans font-light flex-1">
                            {item.answer}
                          </p>

                          {/* Right Chat Bubble Icon (Matching reference image) */}
                          <div className="w-7 h-7 rounded-xl bg-sky-500/25 border border-sky-400/40 flex items-center justify-center text-sky-200 shrink-0 shadow-xs">
                            <MessageSquare className="w-3.5 h-3.5 fill-sky-300 text-sky-300" />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Bottom WhatsApp Contact Strip */}
          <div className="relative z-10 pt-8 mt-8 sm:pt-10 sm:mt-10 border-t border-sky-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <h4 className="font-serif text-base sm:text-lg font-semibold text-white">
                Still have questions for your stay?
              </h4>
              <p className="text-xs text-sky-200/80 mt-0.5">
                Host M. Mangala is available on WhatsApp for direct assistance.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={handleWhatsAppHelp}
              className="bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider shadow-lg shadow-emerald-900/30 transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Ask Host on WhatsApp</span>
            </motion.button>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
