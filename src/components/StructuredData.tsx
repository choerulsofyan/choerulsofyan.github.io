"use client";

import { useEffect } from "react";

interface StructuredDataProps {
  type: "Person" | "WebSite" | "WebPage" | "Article" | "BreadcrumbList";
  data: Record<string, unknown>;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  useEffect(() => {
    // Create the structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": type,
      ...data,
    };

    // Create a script element
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(structuredData);
    script.id = `structured-data-${type.toLowerCase()}`;

    // Remove existing script if it exists
    const existingScript = document.getElementById(`structured-data-${type.toLowerCase()}`);
    if (existingScript) {
      existingScript.remove();
    }

    // Append the script to the head
    document.head.appendChild(script);

    // Clean up on unmount
    return () => {
      const scriptToRemove = document.getElementById(`structured-data-${type.toLowerCase()}`);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [type, data]);

  // This component doesn't render anything
  return null;
}
