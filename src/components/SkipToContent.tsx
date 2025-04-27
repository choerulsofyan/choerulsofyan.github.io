"use client";

import { useState, useEffect } from "react";

export default function SkipToContent() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-accent-blue focus:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-blue"
    >
      Skip to content
    </a>
  );
}
