"use client";

import React from "react";
import Image from "next/image";
import { Maximize2 } from "lucide-react";
import { GalleryItem } from "@/data/villaData";

interface ImageAutoSliderProps {
  items: GalleryItem[];
  onSelectImage: (index: number) => void;
  speedSeconds?: number;
  reverse?: boolean;
}

export const ImageAutoSlider: React.FC<ImageAutoSliderProps> = ({
  items,
  onSelectImage,
  speedSeconds = 35,
  reverse = false,
}) => {
  // Duplicate array 3 times for completely seamless infinite loop
  const displayItems = [...items, ...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-4 group/slider">
      {/* Edge gradient fading masks */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-sand-50 via-sand-50/80 to-transparent z-20 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-sand-50 via-sand-50/80 to-transparent z-20 pointer-events-none" />

      {/* Infinite scrolling track */}
      <div
        className={`flex gap-4 sm:gap-6 w-max ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } group-hover/slider:[animation-play-state:paused]`}
        style={{
          animationDuration: `${speedSeconds}s`,
        }}
      >
        {displayItems.map((item, index) => {
          const originalIndex = index % items.length;
          return (
            <div
              key={`${item.id}-${index}`}
              onClick={() => onSelectImage(originalIndex)}
              className="relative flex-shrink-0 w-60 h-44 sm:w-72 sm:h-52 md:w-80 md:h-60 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl bg-sand-200 border border-sand-200/80 cursor-pointer transition-all duration-500 hover:scale-[1.03] group/card"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 240px, (max-width: 1024px) 320px, 360px"
                className="object-cover transition-transform duration-700 group-hover/card:scale-108"
              />

              {/* Cinematic Bottom Gradient & Title Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-noir-950/80 via-noir-950/20 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex items-end p-4 z-10">
                <div className="flex items-center gap-2.5 w-full justify-between">
                  <span className="text-white text-xs font-semibold tracking-wide font-sans line-clamp-1">
                    {item.title}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-md shrink-0 text-gold-700">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* Warm amber subtle luxury tint */}
              <div className="absolute inset-0 bg-amber-900/[0.04] pointer-events-none z-[5]" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageAutoSlider;
