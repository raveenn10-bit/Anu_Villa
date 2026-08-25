"use client";

import React from "react";
import Image, { ImageProps } from "next/image";
import { motion, MotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

// ──────────────────────────────────────────────────────────────
// LuxuryImage — The unified cinematic image component for all
// photography on the Anu Villa website.
//
// Wraps next/image with:
//  • Cinematic CSS filter (warm, slightly desaturated grade)
//  • Slow zoom hover effect (0.65s cubic spring)
//  • Scroll-triggered fade-up reveal
//  • Optional warm tonal overlay
//  • Optional gradient overlay (for text legibility)
//  • Film grain texture on hover
// ──────────────────────────────────────────────────────────────

type OverlayVariant =
  | "none"
  | "warm"          // Subtle warm tonal wash
  | "cinematic"     // Bottom-to-top dark gradient for card text
  | "hero"          // Full directional hero overlay
  | "vignette";     // Radial vignette edges

interface LuxuryImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  width?: number;
  height?: number;
  className?: string;
  containerClassName?: string;
  overlay?: OverlayVariant;
  priority?: boolean;
  quality?: number;
  /** Enable slow zoom on hover (default: true) */
  hoverZoom?: boolean;
  /** Enable scroll-triggered fade-in reveal (default: true) */
  reveal?: boolean;
  /** Reveal delay in seconds (default: 0) */
  revealDelay?: number;
  /** Object fit (default: cover) */
  objectFit?: "cover" | "contain";
  /** Object position (default: center) */
  objectPosition?: string;
  sizes?: string;
}

const overlayClasses: Record<OverlayVariant, string> = {
  none: "",
  warm:
    "absolute inset-0 bg-gradient-to-br from-amber-900/8 via-transparent to-transparent pointer-events-none z-10",
  cinematic:
    "absolute inset-0 bg-gradient-to-t from-[#0B0F0D]/75 via-[#0B0F0D]/25 to-transparent pointer-events-none z-10",
  hero:
    "absolute inset-0 bg-gradient-to-r from-[#0B0F0D]/92 via-[#0B0F0D]/65 to-[#0B0F0D]/10 pointer-events-none z-10",
  vignette:
    "absolute inset-0 [background:radial-gradient(ellipse_at_center,transparent_40%,rgba(11,15,13,0.55)_100%)] pointer-events-none z-10",
};

export default function LuxuryImage({
  src,
  alt,
  fill = true,
  width,
  height,
  className = "",
  containerClassName = "",
  overlay = "none",
  priority = false,
  quality = 88,
  hoverZoom = true,
  reveal = true,
  revealDelay = 0,
  objectFit = "cover",
  objectPosition = "center",
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: LuxuryImageProps) {

  const revealAnimation: MotionProps = reveal
    ? {
        initial: { opacity: 0, scale: 0.97 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true, margin: "-40px" },
        transition: {
          opacity: { duration: 0.7, delay: revealDelay, ease: [0.16, 1, 0.3, 1] },
          scale: { duration: 0.9, delay: revealDelay, ease: [0.16, 1, 0.3, 1] },
        },
      }
    : {};

  return (
    <motion.div
      {...revealAnimation}
      className={cn("relative overflow-hidden", containerClassName)}
    >
      {/* Image with cinematic CSS grading filter */}
      <div
        className={cn(
          "w-full h-full",
          hoverZoom && "overflow-hidden group"
        )}
        style={{ position: fill ? "relative" : undefined, height: fill ? "100%" : undefined }}
      >
        <Image
          src={src}
          alt={alt}
          fill={fill}
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          priority={priority}
          quality={quality}
          sizes={sizes}
          className={cn(
            "will-change-transform",
            // Cinematic color grade — warm, slightly desaturated, lifted
            "[filter:brightness(0.97)_contrast(1.04)_saturate(0.91)]",
            hoverZoom && "transition-transform duration-[650ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]",
            className
          )}
          style={{
            objectFit,
            objectPosition,
          }}
        />

        {/* Tonal overlay layer */}
        {overlay !== "none" && (
          <div className={overlayClasses[overlay]} aria-hidden="true" />
        )}

        {/* Subtle warm tonal wash — always applied on top */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-amber-900/[0.05] via-transparent to-transparent pointer-events-none z-20"
          aria-hidden="true"
        />
      </div>
    </motion.div>
  );
}
