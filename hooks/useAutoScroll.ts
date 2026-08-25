"use client";

import { useEffect, useRef, useCallback } from "react";

interface UseAutoScrollOptions {
  /** Speed in pixels per second (default: 40) */
  speed?: number;
  /** Delay before auto-scroll starts in ms (default: 1200) */
  startDelay?: number;
  /** Pause duration after user touches in ms (default: 3000) */
  pauseAfterTouch?: number;
  /** Only activate below this screen width in px (default: 768) */
  mobileBreakpoint?: number;
}

/**
 * useAutoScroll — Smooth, infinite horizontal auto-scroll for mobile carousels.
 * - Activates only on mobile (below mobileBreakpoint).
 * - Pauses on touch/pointer start, resumes after pauseAfterTouch ms.
 * - Seamlessly loops back to start when reaching the end.
 * - Respects prefers-reduced-motion media query.
 */
export function useAutoScroll<T extends HTMLElement>(
  options: UseAutoScrollOptions = {}
) {
  const {
    speed = 40,
    startDelay = 1200,
    pauseAfterTouch = 3000,
    mobileBreakpoint = 768,
  } = options;

  const ref = useRef<T>(null);
  const animFrameRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);
  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isActiveRef = useRef(false);

  const stopAnimation = useCallback(() => {
    if (animFrameRef.current) {
      cancelAnimationFrame(animFrameRef.current);
      animFrameRef.current = null;
    }
    lastTimeRef.current = null;
  }, []);

  const animate = useCallback(
    (timestamp: number) => {
      const el = ref.current;
      if (!el || isPausedRef.current) {
        lastTimeRef.current = null;
        animFrameRef.current = requestAnimationFrame(animate);
        return;
      }

      if (lastTimeRef.current === null) {
        lastTimeRef.current = timestamp;
      }

      const delta = timestamp - lastTimeRef.current;
      lastTimeRef.current = timestamp;

      const pixelsToScroll = (speed * delta) / 1000;
      el.scrollLeft += pixelsToScroll;

      // Loop: if we've scrolled past halfway point, jump back to start smoothly
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 2) {
        el.scrollLeft = 0;
      }

      animFrameRef.current = requestAnimationFrame(animate);
    },
    [speed]
  );

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

    // Respect prefers-reduced-motion
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    // Only run on mobile
    const checkMobile = () => window.innerWidth < mobileBreakpoint;
    if (!checkMobile()) return;

    isActiveRef.current = true;

    // Attach event listeners for pause on touch/mouse
    el.addEventListener("touchstart", handleInteractionStart, { passive: true });
    el.addEventListener("touchend", handleInteractionEnd, { passive: true });
    el.addEventListener("mouseenter", handleInteractionStart);
    el.addEventListener("mouseleave", handleInteractionEnd);
    el.addEventListener("pointerdown", handleInteractionStart);
    el.addEventListener("pointerup", handleInteractionEnd);

    // Start animation after delay
    const startTimer = setTimeout(() => {
      if (isActiveRef.current) {
        animFrameRef.current = requestAnimationFrame(animate);
      }
    }, startDelay);

    // Resize observer: stop auto-scroll when screen becomes desktop
    const resizeObserver = new ResizeObserver(() => {
      if (!checkMobile()) {
        stopAnimation();
        isActiveRef.current = false;
      } else if (!isActiveRef.current) {
        isActiveRef.current = true;
        animFrameRef.current = requestAnimationFrame(animate);
      }
    });
    resizeObserver.observe(document.body);

    return () => {
      clearTimeout(startTimer);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
      stopAnimation();
      isActiveRef.current = false;
      resizeObserver.disconnect();
      el.removeEventListener("touchstart", handleInteractionStart);
      el.removeEventListener("touchend", handleInteractionEnd);
      el.removeEventListener("mouseenter", handleInteractionStart);
      el.removeEventListener("mouseleave", handleInteractionEnd);
      el.removeEventListener("pointerdown", handleInteractionStart);
      el.removeEventListener("pointerup", handleInteractionEnd);
    };
  }, [animate, handleInteractionStart, handleInteractionEnd, mobileBreakpoint, startDelay, stopAnimation]);

  return ref;
}
