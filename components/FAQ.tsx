"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { VILLA_DATA } from "@/data/villaData";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24 bg-sand-50 dark:bg-tropical-deep relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <span className="text-xs font-bold tracking-[0.25em] text-gold-600 dark:text-gold-400 uppercase">
            HAVE QUESTIONS?
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl text-charcoal-900 dark:text-white font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600 dark:text-charcoal-300">
            Everything you need to know about booking, policies, facilities, and your stay at Anu Villa.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {VILLA_DATA.faq.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white dark:bg-tropical-surface rounded-2xl border border-sand-200 dark:border-white/10 shadow-xs overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-semibold text-charcoal-900 dark:text-white hover:text-gold-600 dark:hover:text-gold-400 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-medium">{item.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-sand-50 dark:bg-tropical-deep flex items-center justify-center text-charcoal-500 dark:text-charcoal-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-gold-100 dark:bg-tropical-card text-gold-700 dark:text-gold-400" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-charcoal-600 dark:text-charcoal-300 leading-relaxed border-t border-sand-100 dark:border-white/10">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
