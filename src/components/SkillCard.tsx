"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SkillCardProps {
  title: string;
  skills: string[];
}

export default function SkillCard({ title, skills }: SkillCardProps) {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl text-accent-blue">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <motion.div 
          className="flex flex-wrap gap-2"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {skills.map((skill) => (
            <motion.span 
              key={skill} 
              className="px-3 py-1 bg-background text-secondary rounded-full text-sm font-medium hover:bg-accent-blue hover:text-white transition-colors inline-block"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </CardContent>
    </Card>
  );
}
