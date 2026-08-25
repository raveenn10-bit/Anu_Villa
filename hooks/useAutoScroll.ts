"use client";

import { useEffect, useRef, useCallback } from "react";

interface UseSmoothCardAutoScrollOptions {
  /** Interval in ms between card transitions (default: 3200) */
  interval?: number;
  /** Pause duration after user interaction in ms (default: 4000) */
  pauseAfterTouch?: number;
  /** Only auto-scroll below this width in px (default: 1024) */
  mobileBreakpoint?: number;
}

/**
 * useSmoothCardAutoScroll — Step-by-step silky smooth card carousel auto-scroll on mobile & portrait.
 * - Transitions smoothly card-by-card every 3.2s.
 * - Snaps precisely without clipping or jitter.
 * - Loops smoothly back to start upon reaching the end.
 * - Pauses on user touch/pointer interaction and resumes after pauseAfterTouch ms.
 */
export function useAutoScroll<T extends HTMLElement>(
  options: UseSmoothCardAutoScrollOptions = {}
) {
  const {
    interval = 3200,
    pauseAfterTouch = 4000,
    mobileBreakpoint = 1024,
  } = options;

  const ref = useRef<T>(null);
  const isPausedRef = useRef(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleInteractionStart = useCallback(() => {
    isPausedRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  }, []);

  const handleInteractionEnd = useCallback(() => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      isPausedRef.current = false;
    }, pauseAfterTouch);
  }, [pauseAfterTouch]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const checkShouldScroll = () => {
      if (typeof window === "undefined") return false;
      return (
        window.innerWidth < mobileBreakpoint ||
        window.matchMedia("(orientation: portrait)").matches
      );
    };

    const timer = setInterval(() => {
      if (!el || isPausedRef.current || !checkShouldScroll()) return;

      const card = el.firstElementChild as HTMLElement | null;
      const scrollStep = card ? card.offsetWidth + 16 : 300;
      const maxScroll = el.scrollWidth - el.clientWidth;

      if (el.scrollLeft >= maxScroll - 20) {
        // Loop back to start smoothly
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: scrollStep, behavior: "smooth" });
      }
    }, interval);

    el.addEventListener("touchstart", handleInteractionStart, { passive: true });
    el.addEventListener("touchend", handleInteractionEnd, { passive: true });
    el.addEventListener("mouseenter", handleInteractionStart);
    el.addEventListener("mouseleave", handleInteractionEnd);
    el.addEventListener("pointerdown", handleInteractionStart);
    el.addEventListener("pointerup", handleInteractionEnd);

    return () => {
      clearInterval(timer);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
      el.removeEventListener("touchstart", handleInteractionStart);
      el.removeEventListener("touchend", handleInteractionEnd);
      el.removeEventListener("mouseenter", handleInteractionStart);
      el.removeEventListener("mouseleave", handleInteractionEnd);
      el.removeEventListener("pointerdown", handleInteractionStart);
      el.removeEventListener("pointerup", handleInteractionEnd);
    };
  }, [interval, mobileBreakpoint, handleInteractionStart, handleInteractionEnd]);

  return ref;
}
