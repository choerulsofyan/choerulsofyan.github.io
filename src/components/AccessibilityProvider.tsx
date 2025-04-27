"use client";

import { useFocusVisible } from "@/hooks/useFocusVisible";
import { ReactNode, useEffect } from "react";

interface AccessibilityProviderProps {
  children: ReactNode;
}

export default function AccessibilityProvider({ children }: AccessibilityProviderProps) {
  // Use the focus visible hook
  useFocusVisible();

  // Add additional accessibility enhancements
  useEffect(() => {
    // Add a class to the body to indicate JS is enabled
    document.body.classList.add("js-enabled");

    // Add a class to help with reduced motion preferences
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.body.classList.add("reduce-motion");
    }

    // Add a class for high contrast mode
    if (window.matchMedia("(prefers-contrast: more)").matches) {
      document.body.classList.add("high-contrast");
    }

    // Add keyboard focus styles to the global stylesheet
    const style = document.createElement("style");
    style.innerHTML = `
      .focus-visible :focus-visible {
        outline: 2px solid var(--accent-blue) !important;
        outline-offset: 2px !important;
      }
      
      .reduce-motion * {
        transition-duration: 0.001ms !important;
        animation-duration: 0.001ms !important;
      }
      
      .high-contrast {
        --background: #ffffff;
        --foreground: #000000;
        --card: #ffffff;
        --card-foreground: #000000;
        --border: #000000;
        --input: #ffffff;
        --primary: #000000;
        --primary-foreground: #ffffff;
        --secondary: #000000;
        --secondary-foreground: #ffffff;
        --accent: #000000;
        --accent-foreground: #ffffff;
        --destructive: #ff0000;
        --destructive-foreground: #ffffff;
        --ring: #000000;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.body.classList.remove("js-enabled");
      document.head.removeChild(style);
    };
  }, []);

  return <>{children}</>;
}
