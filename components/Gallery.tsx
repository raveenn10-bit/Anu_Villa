"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, ChevronLeft, ChevronRight, X } from "lucide-react";
import { VILLA_DATA, GalleryItem } from "@/data/villaData";
import { ImageAutoSlider } from "@/components/ui/image-auto-slider";

export default function Gallery() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [showFullGallery, setShowFullGallery] = useState(false);

  const categories = [
    { id: "all", name: "All Frames" },
    { id: "exterior", name: "Pool & Exterior" },
    { id: "bedrooms", name: "Suites & Baths" },
    { id: "living", name: "Kitchen & Dining" },
    { id: "garden", name: "Garden & Verandas" },
  ];

  const filteredImages = activeCategory === "all"
    ? VILLA_DATA.galleryImages
    : VILLA_DATA.galleryImages.filter((img) => img.category === activeCategory);

  const row1Images = VILLA_DATA.galleryImages.slice(0, Math.ceil(VILLA_DATA.galleryImages.length / 2));
  const row2Images = VILLA_DATA.galleryImages.slice(Math.ceil(VILLA_DATA.galleryImages.length / 2));

  const handleNext = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex + 1) % filteredImages.length);
  };

  const handlePrev = () => {
    if (selectedImageIndex === null) return;
    setSelectedImageIndex((selectedImageIndex - 1 + filteredImages.length) % filteredImages.length);
  };

  const handleSelectFromRow = (item: GalleryItem) => {
    const idx = filteredImages.findIndex((img) => img.id === item.id);
    setSelectedImageIndex(idx >= 0 ? idx : 0);
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
            Estate Photography • {VILLA_DATA.galleryImages.length} Authentic Frames
          </span>
        </div>

        {/* Section Header & Archive CTA */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div className="space-y-2 max-w-2xl">
            <h2 className="font-editorial text-3xl sm:text-5xl lg:text-[52px] text-charcoal-950 font-normal leading-[1.05] tracking-[-0.02em]">
              Glimpse the Atmosphere
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-600 font-sans font-normal">
              Continuous stream of authentic frames capturing our pool, suites, private baths, and lush verandas at M.S.A Anu Villa. Hover to pause, click to expand.
            </p>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowFullGallery(true)}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white border border-sand-300 hover:border-gold-400 text-xs sm:text-sm font-semibold text-charcoal-900 hover:text-gold-600 shadow-sm transition-all cursor-pointer self-start sm:self-auto shrink-0"
          >
            <ImageIcon className="w-4 h-4 text-gold-600" />
            <span>Full Photo Archive ({VILLA_DATA.galleryImages.length} Photos)</span>
          </motion.button>
        </div>

      </div>

      {/* Infinite Auto-Scrolling Stream Rows */}
      <div className="space-y-4">
        {/* Row 1: Scrolling Left */}
        <ImageAutoSlider
          items={row1Images}
          onSelectImage={(idx) => handleSelectFromRow(row1Images[idx])}
          speedSeconds={40}
          reverse={false}
        />

        {/* Row 2: Scrolling Right */}
        <ImageAutoSlider
          items={row2Images}
          onSelectImage={(idx) => handleSelectFromRow(row2Images[idx])}
          speedSeconds={44}
          reverse={true}
        />
      </div>

      {/* Full Gallery Archive Modal */}
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
                  <p className="text-xs text-gold-700 font-semibold mt-0.5">Samagiya, Thalpe North, Unawatuna • {VILLA_DATA.galleryImages.length} Total Photos</p>
                </div>
                <button
                  onClick={() => setShowFullGallery(false)}
                  className="w-9 h-9 rounded-full bg-sand-100 hover:bg-sand-200 flex items-center justify-center text-charcoal-600 transition-colors cursor-pointer"
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
                    className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
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
                    className="group relative h-56 rounded-2xl overflow-hidden cursor-pointer shadow-xs bg-sand-200 border border-sand-200"
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

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImageIndex !== null && filteredImages[selectedImageIndex] && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImageIndex(null)}
              className="absolute inset-0 bg-noir-950/90 backdrop-blur-lg cursor-pointer"
            />

            <div className="relative z-10 max-w-5xl w-full h-[85vh] flex flex-col justify-between">
              <div className="flex items-center justify-between text-white p-4 font-sans">
                <span className="text-xs sm:text-sm font-medium">
                  {selectedImageIndex + 1} / {filteredImages.length} • {filteredImages[selectedImageIndex].title}
                </span>
                <button
                  onClick={() => setSelectedImageIndex(null)}
                  className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
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
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer"
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
