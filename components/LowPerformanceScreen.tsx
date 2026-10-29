"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LowPerformanceScreen() {
  // 20 radial dashes for the circular buffering spinner
  const dashesCount = 20;

  return (
    <div className="fixed inset-0 w-full h-full min-h-screen bg-[#0d0202] text-white flex flex-col justify-between items-center p-4 sm:p-6 lg:p-8 select-none overflow-hidden z-[999999]">
      {/* ── Background Image with Atmospheric Dusk & Red Noir Vignette ── */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/maintenance-bg.webp"
          alt="Villa Backdrop"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.72] contrast-[1.1] saturate-[1.2]"
        />
      </div>

      {/* Atmospheric Vignette & Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-[#100303]/40 to-black/85 -z-10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] bg-red-600/10 blur-[140px] rounded-full -z-10 pointer-events-none" />

      {/* ── Top: Official Gold Logo ─────────────────────────────────── */}
      <header className="w-full flex justify-center pt-2 sm:pt-4">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center cursor-default"
        >
          <div className="relative w-24 sm:w-28 h-16 sm:h-20 flex items-center justify-center">
            <Image
              src="/images/logo-transparent.png"
              alt="MSA Anu Villa"
              width={160}
              height={160}
              priority
              className="max-h-full w-auto object-contain filter drop-shadow-[0_2px_12px_rgba(197,145,82,0.4)]"
            />
          </div>
        </motion.div>
      </header>

      {/* ── Middle: Buffering Loader, Titles, and Status Glass Card ─── */}
      <main className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center my-auto py-2 sm:py-4">
        {/* Buffering Spinner + Central Alert Triangle */}
        <div className="relative flex items-center justify-center w-36 h-36 sm:w-44 sm:h-44">
          {/* Animated 20-dash Buffering Radial Wheel */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full filter drop-shadow-[0_0_16px_rgba(255,59,48,0.7)]"
            >
              {Array.from({ length: dashesCount }).map((_, i) => {
                const angle = i * (360 / dashesCount);
                // Opacity curve mimicking classic buffering gradient sweep
                const opacity = 0.15 + 0.85 * Math.pow(i / (dashesCount - 1), 1.6);
                return (
                  <rect
                    key={i}
                    x="96.5"
                    y="18"
                    width="7"
                    height="18"
                    rx="3.5"
                    fill="#FF3B30"
                    opacity={opacity}
                    transform={`rotate(${angle} 100 100)`}
                  />
                );
              })}
            </svg>
          </motion.div>

          {/* Central Static / Pulsing Red Alert Triangle */}
          <motion.div
            animate={{
              scale: [1, 1.06, 1],
              opacity: [0.92, 1, 0.92],
            }}
            transition={{
              repeat: Infinity,
              duration: 2.2,
              ease: "easeInOut",
            }}
            className="relative z-10 flex items-center justify-center"
          >
            <svg
              viewBox="0 0 64 64"
              className="w-12 h-12 sm:w-14 sm:h-14 filter drop-shadow-[0_0_12px_rgba(255,59,48,0.9)]"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Rounded Triangle Path */}
              <path
                d="M32 10L54 48C55.2 50.1 53.7 52.8 51.2 52.8H12.8C10.3 52.8 8.8 50.1 10 48L32 10Z"
                stroke="#FF3B30"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Exclamation Point */}
              <line
                x1="32"
                y1="25"
                x2="32"
                y2="37"
                stroke="#FF3B30"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <circle cx="32" cy="44" r="2.5" fill="#FF3B30" />
            </svg>
          </motion.div>
        </div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center mt-5 sm:mt-7 space-y-2 px-4"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-black tracking-tight leading-tight">
            <span className="text-[#FF3B30] drop-shadow-[0_0_25px_rgba(255,59,48,0.7)]">
              Low{" "}
            </span>
            <span className="text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
              Performance
            </span>
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-200/90 max-w-xl mx-auto font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
            The MSA Anu Villa website is currently experiencing low performance due to server issues.
          </p>
        </motion.div>

        {/* ── 3-Column Glassmorphism Status Bar ─────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-6 sm:mt-8 w-[92%] sm:w-full max-w-3xl rounded-2xl bg-black/50 backdrop-blur-xl border border-red-500/30 p-3 sm:p-5 shadow-[0_0_35px_rgba(239,68,68,0.14),inset_0_1px_2px_rgba(255,255,255,0.08)]"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-red-500/20 gap-3 md:gap-0">
            {/* Metric 1: Slow Loading */}
            <div className="flex items-center gap-3 sm:gap-3.5 px-2 sm:px-4 py-2 md:py-0">
              <div className="w-10 h-10 rounded-full border border-[#FF3B30]/60 bg-[#FF3B30]/15 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(255,59,48,0.3)]">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-[#FF3B30]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <polyline points="12 7 12 12 15 14" />
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="text-xs sm:text-sm font-bold text-[#FF3B30] tracking-tight">
                  Slow Loading
                </h3>
                <p className="text-[11px] sm:text-xs text-gray-300 font-normal truncate">
                  Server Response Slow
                </p>
              </div>
            </div>

            {/* Metric 2: Content Not Loading */}
            <div className="flex items-center gap-3 sm:gap-3.5 px-2 sm:px-4 py-2 md:py-0">
              <div className="w-10 h-10 rounded-xl border border-[#FF3B30]/60 bg-[#FF3B30]/15 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(255,59,48,0.3)]">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-[#FF3B30]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="9" y1="15" x2="15" y2="15" />
                  <line x1="9" y1="11" x2="11" y2="11" />
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="text-xs sm:text-sm font-bold text-[#FF3B30] tracking-tight">
                  Content Not Loading
                </h3>
                <p className="text-[11px] sm:text-xs text-gray-300 font-normal truncate">
                  Some pages not displaying
                </p>
              </div>
            </div>

            {/* Metric 3: Low Performance */}
            <div className="flex items-center gap-3 sm:gap-3.5 px-2 sm:px-4 py-2 md:py-0">
              <div className="w-10 h-10 rounded-xl border border-[#FF3B30]/60 bg-[#FF3B30]/15 flex items-center justify-center shrink-0 shadow-[0_0_12px_rgba(255,59,48,0.3)]">
                <svg
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-[#FF3B30]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {/* Bar graph bars */}
                  <rect x="3" y="14" width="3" height="7" rx="1" fill="#FF3B30" />
                  <rect x="8" y="10" width="3" height="11" rx="1" fill="#FF3B30" />
                  <rect x="13" y="6" width="3" height="15" rx="1" fill="#FF3B30" />
                  <rect x="18" y="12" width="3" height="9" rx="1" fill="#FF3B30" />
                  {/* Downward trend line */}
                  <path
                    d="M3 7L10 12L15 8L21 16"
                    stroke="#FF3B30"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <polyline points="17 16 21 16 21 12" />
                </svg>
              </div>
              <div className="min-w-0">
                <h3 className="text-xs sm:text-sm font-bold text-[#FF3B30] tracking-tight">
                  Low Performance
                </h3>
                <p className="text-[11px] sm:text-xs text-gray-300 font-normal truncate">
                  Due to high traffic / server issues
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      {/* ── Bottom: 3-Dot Buffering Animation & Status Message ───────── */}
      <footer className="w-full flex flex-col items-center justify-center pb-3 sm:pb-6 space-y-3">
        {/* 3 Sequential Indicator Dots */}
        <div className="flex items-center gap-2">
          {[0, 1, 2].map((dotIdx) => (
            <motion.span
              key={dotIdx}
              animate={{
                opacity: [0.25, 1, 0.25],
                scale: [0.85, 1.25, 0.85],
                backgroundColor: [
                  dotIdx === 0 ? "#FF3B30" : "#7F1D1D",
                  "#FFFFFF",
                  dotIdx === 0 ? "#FF3B30" : "#7F1D1D",
                ],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                delay: dotIdx * 0.25,
                ease: "easeInOut",
              }}
              className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full shadow-[0_0_8px_rgba(255,59,48,0.6)]"
            />
          ))}
        </div>

        {/* Status notice */}
        <motion.p
          animate={{ opacity: [0.75, 1, 0.75] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="text-xs sm:text-sm text-gray-300/90 font-normal tracking-wide drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
        >
          Please wait while we fix this...
        </motion.p>
      </footer>
    </div>
  );
}
