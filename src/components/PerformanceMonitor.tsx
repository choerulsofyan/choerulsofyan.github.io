"use client";

import { usePerformanceMonitor } from "@/hooks/usePerformanceMonitor";
import { useEffect } from "react";

export default function PerformanceMonitor() {
  const metrics = usePerformanceMonitor();

  useEffect(() => {
    // Only log in production and when metrics are available
    if (
      process.env.NODE_ENV === "production" &&
      metrics.fcp &&
      metrics.lcp &&
      metrics.cls !== null
    ) {
      // Send metrics to analytics service if available
      // This is where you would integrate with Google Analytics or similar
      console.log("Core Web Vitals:", {
        FCP: `${Math.round(metrics.fcp)}ms`,
        LCP: `${Math.round(metrics.lcp)}ms`,
        CLS: metrics.cls.toFixed(3),
        FID: metrics.fid ? `${Math.round(metrics.fid)}ms` : "N/A",
        TTFB: metrics.ttfb ? `${Math.round(metrics.ttfb)}ms` : "N/A",
      });
    }
  }, [metrics]);

  // This component doesn't render anything
  return null;
}
