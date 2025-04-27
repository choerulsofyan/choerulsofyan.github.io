"use client";

import { useEffect } from "react";

export default function PreloadResources() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== "production") return;

    // Preload critical fonts
    const fontPreloads = [
      { href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap", as: "style" },
    ];

    // Preload critical images (e.g., hero background, logo)
    const imagePreloads = [
      // Add any critical images here
      { href: "/favicon.svg", as: "image" },
    ];

    // Create and append preload links
    [...fontPreloads, ...imagePreloads].forEach(resource => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.href = resource.href;
      link.as = resource.as;
      if (resource.as === "font") {
        link.type = "font/woff2";
        link.crossOrigin = "anonymous";
      }
      document.head.appendChild(link);
    });

    // Preconnect to external domains
    const preconnects = [
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com",
      "https://formspree.io",
    ];

    preconnects.forEach(domain => {
      const link = document.createElement("link");
      link.rel = "preconnect";
      link.href = domain;
      link.crossOrigin = "anonymous";
      document.head.appendChild(link);
    });
  }, []);

  return null;
}
