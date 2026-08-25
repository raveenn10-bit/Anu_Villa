"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, ChevronLeft, ChevronRight, X, Maximize2, Sparkles, Filter } from "lucide-react";
import { VILLA_DATA, GalleryItem } from "@/data/villaData";

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [showFullGallery, setShowFullGallery] = useState(false);

  const categories = [
    { id: "all", name: "All Photos" },
    { id: "exterior", name: "Pool & Exterior" },
    { id: "bedrooms", name: "Bedrooms & Baths" },
    { id: "living", name: "Living & Kitchen" },
    { id: "garden", name: "Garden & Grounds" },
  ];

  const filteredImages = activeCategory === "all"
    ? VILLA_DATA.galleryImages
    : VILLA_DATA.galleryImages.filter((img) => img.category === activeCategory);

  // Initial preview images (first 5 to match mockup row layout)
  const previewImages = VILLA_DATA.galleryImages.slice(0, 5);

  const handleNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % filteredImages.length);
  };

  const handlePrev = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-sand-50 dark:bg-tropical-deep relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Matches mockup layout) */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div className="space-y-2">
            <span className="text-xs font-bold tracking-[0.25em] text-gold-600 dark:text-gold-400 uppercase">
              GALLERY
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-charcoal-900 dark:text-white font-bold">
              A Glimpse of Anu Villa
            </h2>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowFullGallery(true)}
            className="self-start sm:self-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-sand-300 dark:border-white/15 text-xs sm:text-sm font-medium text-charcoal-700 dark:text-charcoal-200 hover:text-gold-600 dark:hover:text-gold-400 hover:border-gold-300 hover:bg-white dark:hover:bg-tropical-surface transition-all shadow-xs"
          >
            <ImageIcon className="w-4 h-4 text-gold-600 dark:text-gold-400" />
            <span>View Full Gallery</span>
          </motion.button>
        </div>

        {/* 5 Thumbnail Row (Exact mockup visual layout) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {previewImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              onClick={() => {
                const globalIndex = filteredImages.findIndex((item) => item.id === img.id);
                setSelectedImageIndex(globalIndex >= 0 ? globalIndex : 0);
              }}
              className="group relative h-40 sm:h-48 lg:h-56 rounded-2xl overflow-hidden cursor-pointer shadow-md bg-sand-200 dark:bg-tropical-surface border border-sand-200 dark:border-white/10"
            >
              <Image
                src={img.image}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.97] dark:brightness-[0.88]"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white/90 dark:bg-tropical-surface/90 backdrop-blur-sm flex items-center justify-center text-charcoal-900 dark:text-white shadow-md transform scale-75 group-hover:scale-100 transition-transform">
                  <Maximize2 className="w-4 h-4 text-gold-600 dark:text-gold-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full Gallery Modal */}
      <AnimatePresence>
        {showFullGallery && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowFullGallery(false)}
              className="absolute inset-0 bg-black/75 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white dark:bg-tropical-deep rounded-3xl max-w-5xl w-full p-6 sm:p-8 shadow-2xl border border-sand-200 dark:border-white/10 z-10 max-h-[92vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-6 border-b border-sand-200 dark:border-white/10">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-charcoal-900 dark:text-white">Anu Villa Photo Gallery</h3>
                  <p className="text-xs text-gold-600 dark:text-gold-400 font-medium">Explore every corner of our Unawatuna oasis</p>
                </div>
                <button
                  onClick={() => setShowFullGallery(false)}
                  className="w-9 h-9 rounded-full bg-sand-100 dark:bg-tropical-surface hover:bg-sand-200 dark:hover:bg-tropical-card flex items-center justify-center text-charcoal-600 dark:text-charcoal-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2 py-6">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                      activeCategory === cat.id
                        ? "bg-gold-500 dark:bg-gold-600 text-white shadow-sm"
                        : "bg-sand-100 dark:bg-tropical-surface text-charcoal-700 dark:text-charcoal-300 hover:bg-sand-200 dark:hover:bg-tropical-card"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Grid of Filtered Images */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredImages.map((img, idx) => (
                  <motion.div
                    key={img.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedImageIndex(idx)}
                    className="group relative h-52 rounded-2xl overflow-hidden cursor-pointer shadow-sm bg-sand-200 dark:bg-tropical-surface"
                  >
                    <Image
                      src={img.image}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                      <span className="text-white text-xs font-medium">{img.title}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && filteredImages[selectedImageIndex] && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImageIndex(null)}
              className="absolute inset-0 bg-black/92 backdrop-blur-lg"
            />

            {/* Lightbox Container */}
            <div className="relative z-10 max-w-5xl w-full h-[85vh] flex flex-col justify-between">
              {/* Top Controls */}
              <div className="flex items-center justify-between text-white p-4">
                <span className="text-sm font-medium text-sand-100">
                  {selectedImageIndex + 1} / {filteredImages.length} • {filteredImages[selectedImageIndex].title}
                </span>
                <button
                  onClick={() => setSelectedImageIndex(null)}
                  className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Image Display */}
              <div className="relative flex-1 w-full my-2 flex items-center justify-center">
                <motion.div
                  key={selectedImageIndex}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full max-h-[70vh] rounded-2xl overflow-hidden shadow-2xl"
                >
                  <Image
                    src={filteredImages[selectedImageIndex].image}
                    alt={filteredImages[selectedImageIndex].alt}
                    fill
                    className="object-contain"
                  />
                </motion.div>

                {/* Left/Right Buttons */}
                <button
                  onClick={handlePrev}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-md transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-md transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Caption Bar */}
              <div className="bg-white/10 dark:bg-black/40 backdrop-blur-md text-white text-center py-3 px-6 rounded-2xl mx-auto max-w-xl border border-white/10">
                <p className="text-sm font-medium">{filteredImages[selectedImageIndex].alt}</p>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
