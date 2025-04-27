"use client";

import { useCallback, useEffect } from "react";

/**
 * Hook to improve keyboard focus visibility
 * This adds a 'focus-visible' class to the body when the user is navigating with keyboard
 * and removes it when using mouse, improving accessibility
 */
export function useFocusVisible() {
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    // Add focus-visible class to body when Tab key is pressed
    if (event.key === "Tab") {
      document.body.classList.add("focus-visible");
    }
  }, []);

  const handleMouseDown = useCallback(() => {
    // Remove focus-visible class from body when mouse is used
    document.body.classList.remove("focus-visible");
  }, []);

  useEffect(() => {
    // Add event listeners
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleMouseDown);

    // Check if user might be using keyboard already
    if (document.activeElement && document.activeElement !== document.body) {
      document.body.classList.add("focus-visible");
    }

    // Cleanup
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, [handleKeyDown, handleMouseDown]);
}
