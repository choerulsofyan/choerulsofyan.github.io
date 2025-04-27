"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-[70vh] text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-20 h-20 mb-8 rounded-full bg-muted flex items-center justify-center"
      >
        <motion.div
          animate={{ 
            rotate: [0, 10, 0, -10, 0],
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 5,
            repeatType: "loop",
          }}
        >
          <span className="text-5xl">🔍</span>
        </motion.div>
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-5xl md:text-6xl font-bold mb-4"
      >
        404
      </motion.h1>
      
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-2xl md:text-3xl font-semibold mb-4"
      >
        Page Not Found
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-secondary mb-8 max-w-md"
      >
        The page you are looking for doesn&apos;t exist or has been moved.
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col sm:flex-row gap-4"
      >
        <Button asChild size="lg">
          <Link href="/" className="flex items-center gap-2">
            <Home size={18} />
            Return Home
          </Link>
        </Button>
        
        <Button variant="outline" size="lg" onClick={() => window.history.back()}>
          <span className="flex items-center gap-2 cursor-pointer">
            <ArrowLeft size={18} />
            Go Back
          </span>
        </Button>
      </motion.div>
    </div>
  );
}
