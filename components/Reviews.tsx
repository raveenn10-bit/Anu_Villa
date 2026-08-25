"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { VILLA_DATA } from "@/data/villaData";
import { useAutoScroll } from "@/hooks/useAutoScroll";

export default function Reviews() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-sand-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gold-100/80 border border-gold-200 text-gold-800 text-xs font-semibold tracking-wider uppercase font-sans">
            <Star className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
            <span>5.0 / 5.0 GUEST SATISFACTION</span>
          </div>
          <h2 className="font-editorial text-3xl sm:text-5xl lg:text-[52px] text-charcoal-950 font-normal leading-[1.05] tracking-[-0.02em]">
            Cherished Guest Moments
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-600 font-sans font-normal">
            Real experiences from families and groups who made M.S.A Anu Villa their peaceful home in Unawatuna.
          </p>
        </div>

        {/* Mobile Horizontal Snap-Scroll / Desktop 3-col Grid */}
        <div
          ref={scrollRef}
          className="flex md:grid md:grid-cols-3 gap-4 sm:gap-8 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 snap-x snap-mandatory scrollbar-none px-1 md:px-0 scroll-smooth"
        >
          {VILLA_DATA.testimonials.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="w-[85vw] max-w-[340px] md:w-auto md:max-w-none flex-shrink-0 snap-start bg-white rounded-3xl p-6 sm:p-7 border border-sand-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                {/* Stars and Quote */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-gold-300 group-hover:text-gold-500 transition-colors" />
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-charcoal-700 leading-relaxed italic font-serif font-normal">
                  &ldquo;{review.review}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-5 mt-4 border-t border-sand-100 flex items-center justify-between font-sans">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-base">{review.flag}</span>
                    <h4 className="font-semibold text-xs sm:text-sm text-charcoal-900 leading-tight">
                      {review.name}
                    </h4>
                  </div>
                  <p className="text-[11px] text-charcoal-400 mt-0.5">{review.country}</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-gold-700 block tracking-wider">
                    {review.stayType}
                  </span>
                  <span className="text-[10px] text-charcoal-400">{review.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Action Link to Google Maps */}
        <div className="text-center pt-4">
          <a
            href={VILLA_DATA.social.googleMaps}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-sand-100 text-charcoal-900 px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm border border-sand-300 transition-all shadow-xs"
          >
            <span>Read All Reviews on Google Maps &amp; Get Directions</span>
            <span className="text-gold-600">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
