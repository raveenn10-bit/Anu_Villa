"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, ChevronLeft, ChevronRight, X, Maximize2, Sparkles } from "lucide-react";
import { VILLA_DATA, GalleryItem } from "@/data/villaData";
import { useAutoScroll } from "@/hooks/useAutoScroll";

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [showFullGallery, setShowFullGallery] = useState(false);
  const scrollRef = useAutoScroll<HTMLDivElement>({ speed: 32, startDelay: 1800, pauseAfterTouch: 3000 });

  const categories = [
    { id: "all", name: "All Frames" },
    { id: "exterior", name: "Pool & Exterior" },
    { id: "bedrooms", name: "Suites & Baths" },
    { id: "living", name: "Kitchen & Dining" },
    { id: "garden", name: "Garden & BBQ" },
  ];

  const filteredImages = activeCategory === "all"
    ? VILLA_DATA.galleryImages
    : VILLA_DATA.galleryImages.filter((img) => img.category === activeCategory);

  const previewImages = VILLA_DATA.galleryImages.slice(0, 5);

  const handleNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % filteredImages.length);
  };

  const handlePrev = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  const handleScrollMobile = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -280 : 280,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-sand-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Header */}
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <span className="font-serif text-sm font-semibold tracking-[0.2em] text-gold-600 uppercase font-sans">
            03 / VISUAL CHRONICLES
          </span>
          <div className="flex-1 h-[1px] bg-sand-300/80" />
          <span className="text-xs text-charcoal-400 font-sans hidden sm:inline">
            Estate Photography
          </span>
        </div>

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="space-y-2">
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-[52px] text-charcoal-950 font-normal leading-[1.05] tracking-[-0.02em]">
              Glimpse the Atmosphere
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 font-sans font-normal max-w-lg">
              Explore the architectural spaces, peaceful gardens, and inviting pool at M.S.A Anu Villa.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <div className="flex sm:hidden items-center gap-1 bg-sand-200/60 p-1 rounded-xl">
              <button
                onClick={() => handleScrollMobile("left")}
                aria-label="Scroll gallery left"
                className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-charcoal-700 shadow-2xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleScrollMobile("right")}
                aria-label="Scroll gallery right"
                className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-charcoal-700 shadow-2xs"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowFullGallery(true)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-sand-300 text-xs sm:text-sm font-semibold text-charcoal-800 hover:text-gold-600 hover:border-gold-300 hover:bg-white transition-all shadow-2xs"
            >
              <ImageIcon className="w-4 h-4 text-gold-600" />
              <span>Full Photo Archive</span>
            </motion.button>
          </div>
        </div>

        {/* 5-Photo Cinematic Preview Strip (Swipeable on mobile) */}
        <div
          ref={scrollRef}
          className="flex sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 overflow-x-auto sm:overflow-x-visible pb-4 sm:pb-0 snap-x snap-mandatory scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          {previewImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              onClick={() => {
                const globalIndex = filteredImages.findIndex((item) => item.id === img.id);
                setSelectedImageIndex(globalIndex >= 0 ? globalIndex : 0);
              }}
              className="min-w-[240px] sm:min-w-0 flex-shrink-0 snap-center group relative h-48 sm:h-56 lg:h-64 rounded-2xl overflow-hidden cursor-pointer shadow-sm bg-sand-200 border border-sand-200/80 img-zoom-container"
            >
              <Image
                src={img.image}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 240px, (max-width: 1024px) 33vw, 20vw"
                className="object-cover img-gallery"
              />
              {/* Cinematic card overlay — text legibility on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-noir-950/70 via-noir-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-3.5 z-10">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md flex-shrink-0">
                    <Maximize2 className="w-3.5 h-3.5 text-gold-600" />
                  </div>
                  <span className="text-white/90 font-ui text-label-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 text-[10px]">{img.title}</span>
                </div>
              </div>
              {/* Warm amber tonal overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900/[0.06] to-transparent pointer-events-none z-[5]" />
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
              className="absolute inset-0 bg-noir-950/75 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 20 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="relative bg-white rounded-3xl max-w-5xl w-full p-6 sm:p-8 shadow-2xl border border-sand-200 z-10 max-h-[92vh] overflow-y-auto"
            >
              <div className="flex items-center justify-between pb-6 border-b border-sand-200">
                <div>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-charcoal-950">M.S.A Anu Villa Photography</h3>
                  <p className="text-xs text-gold-700 font-semibold mt-0.5">Samagiya, Thalpe North, Unawatuna</p>
                </div>
                <button
                  onClick={() => setShowFullGallery(false)}
                  className="w-9 h-9 rounded-full bg-sand-100 hover:bg-sand-200 flex items-center justify-center text-charcoal-600"
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
                    className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all ${
                      activeCategory === cat.id
                        ? "bg-gold-500 text-white shadow-sm"
                        : "bg-sand-100 text-charcoal-700 hover:bg-sand-200"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredImages.map((img, idx) => (
                  <motion.div
                    key={img.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedImageIndex(idx)}
                    className="group relative h-56 rounded-2xl overflow-hidden cursor-pointer shadow-xs bg-sand-200"
                  >
                    <Image
                      src={img.image}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-noir-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex items-end">
                      <span className="text-white text-xs font-medium font-sans">{img.title}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImageIndex !== null && filteredImages[selectedImageIndex] && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImageIndex(null)}
              className="absolute inset-0 bg-noir-950/90 backdrop-blur-lg"
            />

            <div className="relative z-10 max-w-5xl w-full h-[85vh] flex flex-col justify-between">
              <div className="flex items-center justify-between text-white p-4 font-sans">
                <span className="text-xs sm:text-sm font-medium">
                  {selectedImageIndex + 1} / {filteredImages.length} • {filteredImages[selectedImageIndex].title}
                </span>
                <button
                  onClick={() => setSelectedImageIndex(null)}
                  className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

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
                    sizes="(max-width: 1024px) 100vw, 1000px"
                    className="object-contain"
                  />
                </motion.div>

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

              <div className="bg-white/10 backdrop-blur-md text-white text-center py-3 px-6 rounded-2xl mx-auto max-w-xl font-sans">
                <p className="text-xs sm:text-sm font-medium">{filteredImages[selectedImageIndex].alt}</p>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
