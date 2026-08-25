"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { VILLA_DATA } from "@/data/villaData";

export default function Reviews() {
  return (
    <section className="py-16 lg:py-24 bg-white dark:bg-[#0E1612] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-50 dark:bg-tropical-deep border border-gold-200 dark:border-gold-500/30 text-gold-700 dark:text-gold-400 text-xs font-semibold">
            <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
            <span>5.0 / 5.0 Guest Satisfaction</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-4xl text-charcoal-900 dark:text-white font-bold">
            Loved by Guests Worldwide
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600 dark:text-charcoal-300">
            Read real feedback from families, couples, and groups of friends who made Anu Villa their holiday home in Sri Lanka.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {VILLA_DATA.testimonials.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-sand-50/80 dark:bg-tropical-deep rounded-3xl p-6 sm:p-7 border border-sand-200 dark:border-white/10 shadow-sm dark:shadow-black/30 hover:shadow-lg dark:hover:shadow-black/60 transition-all flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                {/* Stars and Quote */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-gold-300 dark:text-gold-600 group-hover:text-gold-500 transition-colors" />
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-charcoal-700 dark:text-charcoal-300 leading-relaxed italic">
                  &ldquo;{review.review}&rdquo;
                </p>
              </div>

              {/* Author & Country Info */}
              <div className="pt-5 mt-4 border-t border-sand-200/80 dark:border-white/10 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-base">{review.flag}</span>
                    <h4 className="font-bold text-xs sm:text-sm text-charcoal-900 dark:text-white leading-tight">
                      {review.name}
                    </h4>
                  </div>
                  <p className="text-[11px] text-charcoal-400 dark:text-charcoal-500 mt-0.5">{review.country}</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-gold-700 dark:text-gold-400 block tracking-wider">
                    {review.stayType}
                  </span>
                  <span className="text-[10px] text-charcoal-400 dark:text-charcoal-500">{review.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
