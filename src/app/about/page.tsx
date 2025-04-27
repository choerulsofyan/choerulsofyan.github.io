"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <main className="container mx-auto px-4 py-12">
      <motion.h1 
        className="text-3xl md:text-4xl font-semibold text-primary mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h1>
      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Card>
          <CardContent className="pt-6">
            <motion.div variants={itemVariants}>
              <p className="text-secondary mb-4">
                Full Stack Developer with expertise in building robust web applications. Based in Bandung, West Java, 
                I specialize in creating efficient and scalable solutions using modern technologies.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <p className="text-secondary mb-4">
                With experience working in remote teams and multinational environments, I bring a collaborative 
                approach to development and a passion for clean, maintainable code.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <p className="text-secondary">
                I have a strong foundation in both frontend and backend technologies, including React.js, TypeScript, 
                Node.js, and Laravel. My goal is to deliver high-quality, user-friendly applications that solve real-world problems.
              </p>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
}
