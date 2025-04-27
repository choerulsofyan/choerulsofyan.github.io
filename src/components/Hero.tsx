"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-background to-muted dark:from-background dark:to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
              Hi, I&apos;m <span className="text-accent-blue">Choerul Sofyan</span>
            </h1>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl md:text-3xl font-semibold mb-4 text-accent-burgundy"
          >
            Full Stack Developer
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-secondary mb-8"
          >
            I build modern, responsive, and user-friendly web applications using
            React, Next.js, and Node.js. With a focus on clean code and
            performance, I deliver high-quality solutions for clients worldwide.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              asChild 
              size="lg"
              className="bg-accent-blue hover:bg-accent-blue/90 dark:bg-accent-blue dark:hover:bg-accent-blue/80"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Get in Touch
              </Link>
            </Button>
            
            <Button variant="outline" asChild size="lg">
              <Link href="/projects" className="flex items-center gap-2">
                <ExternalLink size={18} />
                View My Work
              </Link>
            </Button>
            
            <Button variant="ghost" asChild size="lg">
              <Link href="/resume" className="flex items-center gap-2">
                <FileText size={18} />
                Resume
              </Link>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-3"
          >
            <span className="text-sm font-medium text-secondary">Tech Stack:</span>
            {["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                className="px-3 py-1 bg-muted rounded-full text-sm font-medium text-secondary"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
