"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  placeholder?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  objectFit = "cover",
  placeholder = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Crect width='40' height='40' fill='%23f5f5f5'/%3E%3C/svg%3E"
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(placeholder);
  
  // We'll set this flag but not use it directly in this version
  // since we're using static image paths for GitHub Pages compatibility
  const [, setSupportsWebP] = useState(false);
  
  useEffect(() => {
    // Check for WebP support
    const checkWebPSupport = async () => {
      try {
        const webPCheck = document.createElement('canvas');
        if (webPCheck.toDataURL('image/webp').indexOf('data:image/webp') === 0) {
          setSupportsWebP(true);
        }
      } catch {
        // WebP not supported
        console.warn('WebP format not supported in this browser');
      }
    };
    
    checkWebPSupport();
    
    // Set the actual image source after placeholder is shown
    if (priority) {
      setImgSrc(src);
    } else {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setImgSrc(src);
      };
    }
  }, [src, priority]);
  
  // Handle image load error
  const handleError = () => {
    console.warn(`Failed to load image: ${src}`);
    setImgSrc(placeholder);
  };

  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0.3 }}
      transition={{ duration: 0.5 }}
    >
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-muted/30 animate-pulse" 
          aria-hidden="true"
        />
      )}
      
      {/* 
        Using img element for better control over loading behavior and static export compatibility.
        We're deliberately not using next/image here because:
        1. We need static export compatibility for GitHub Pages
        2. We're implementing our own optimized loading behavior
        3. We're handling WebP support detection manually
      */}
      <img
        src={imgSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
        className={`w-full h-auto transition-opacity duration-500 ${isLoaded ? "opacity-100" : "opacity-0"}`}
        style={{ objectFit }}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
      />
    </motion.div>
  );
}
