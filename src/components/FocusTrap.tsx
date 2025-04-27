"use client";

import { useEffect, useRef } from "react";

interface FocusTrapProps {
  children: React.ReactNode;
  active?: boolean;
  initialFocus?: boolean;
}

export default function FocusTrap({
  children,
  active = true,
  initialFocus = false,
}: FocusTrapProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const startRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!active) return;

    const root = rootRef.current;
    if (!root) return;

    // Get all focusable elements
    const focusableElements = root.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    // Set initial focus if requested
    if (initialFocus && firstElement) {
      firstElement.focus();
    }

    // Handle tab key press
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      // Shift + Tab
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      }
      // Tab
      else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    // Add event listener
    document.addEventListener("keydown", handleKeyDown);

    // Clean up
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [active, initialFocus]);

  // If not active, just render children
  if (!active) return <>{children}</>;

  return (
    <>
      <div tabIndex={0} ref={startRef} aria-hidden="true" />
      <div ref={rootRef}>{children}</div>
      <div tabIndex={0} ref={endRef} aria-hidden="true" />
    </>
  );
}
