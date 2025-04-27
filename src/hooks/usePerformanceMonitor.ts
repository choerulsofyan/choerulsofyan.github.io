"use client";

import { useEffect, useState } from "react";

interface PerformanceMetrics {
  fcp: number | null; // First Contentful Paint
  lcp: number | null; // Largest Contentful Paint
  cls: number | null; // Cumulative Layout Shift
  fid: number | null; // First Input Delay
  ttfb: number | null; // Time to First Byte
}

export function usePerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fcp: null,
    lcp: null,
    cls: null,
    fid: null,
    ttfb: null,
  });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    // Only run in production to avoid development overhead
    if (process.env.NODE_ENV !== "production") {
      return;
    }

    // Ensure PerformanceObserver is available
    if (typeof PerformanceObserver === "undefined") {
      return;
    }

    // First Contentful Paint
    try {
      const fcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        if (entries.length > 0) {
          const fcp = entries[0].startTime;
          setMetrics((prev) => ({ ...prev, fcp }));
        }
      });
      fcpObserver.observe({ type: "paint", buffered: true });
    } catch (e) {
      console.error("FCP observer error:", e);
    }

    // Largest Contentful Paint
    try {
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          const lcp = lastEntry.startTime;
          setMetrics((prev) => ({ ...prev, lcp }));
        }
      });
      lcpObserver.observe({ type: "largest-contentful-paint", buffered: true });
    } catch (e) {
      console.error("LCP observer error:", e);
    }

    // Cumulative Layout Shift
    try {
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          // Type assertion for LayoutShift entries
          const layoutShiftEntry = entry as PerformanceEntry & { hadRecentInput: boolean; value: number };
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value;
            setMetrics((prev) => ({ ...prev, cls: clsValue }));
          }
        }
      });
      clsObserver.observe({ type: "layout-shift", buffered: true });
    } catch (e) {
      console.error("CLS observer error:", e);
    }

    // First Input Delay
    try {
      const fidObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        if (entries.length > 0) {
          // Type assertion for PerformanceEventTiming
          const entry = entries[0] as PerformanceEventTiming;
          const fid = entry.processingStart - entry.startTime;
          setMetrics((prev) => ({ ...prev, fid }));
        }
      });
      fidObserver.observe({ type: "first-input", buffered: true });
    } catch (e) {
      console.error("FID observer error:", e);
    }

    // Time to First Byte
    try {
      const navigationEntries = performance.getEntriesByType("navigation");
      if (navigationEntries.length > 0) {
        // Type assertion for PerformanceNavigationTiming
        const navEntry = navigationEntries[0] as PerformanceNavigationTiming;
        const ttfb = navEntry.responseStart;
        setMetrics((prev) => ({ ...prev, ttfb }));
      }
    } catch (e) {
      console.error("TTFB measurement error:", e);
    }

    // Log metrics to console in development
    if (process.env.NODE_ENV !== "production") {
      const timer = setTimeout(() => {
        console.log("Performance metrics:", metrics);
      }, 5000);

      return () => clearTimeout(timer);
    }
    
    // Empty return for production environment
    return undefined;
    // We intentionally don't include metrics as a dependency to avoid infinite loops
    // as metrics would change every time we update it within this effect
  }, []);

  return metrics;
}
