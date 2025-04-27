"use client";

import SkillCard from "@/components/SkillCard";
import { motion } from "framer-motion";

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "React.js", "Styled Components", "TypeScript", "Redux", "jQuery", "Vue.js", "UI/UX", "Frontend Development"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "PHP", "Laravel", "OOP", "MVC", "MySQL", "API Development", "CodeIgniter", "Full-Stack Development"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Figma", "Linux", "Python", "Agile Methodologies", "Azure Boards", "Notion", "Slack"]
    },
    {
      title: "Mobile & Cross-platform",
      skills: ["Apache Cordova", "Mobile Apps", "Responsive Design"]
    }
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Skills & Expertise</h1>
        <p className="text-secondary max-w-3xl">A comprehensive overview of my technical skills and expertise acquired through years of professional experience in web development.</p>
      </motion.div>
      
      <div className="space-y-8">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15, duration: 0.5 }}
          >
            <SkillCard 
              title={category.title} 
              skills={category.skills} 
            />
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="mt-16 p-6 bg-muted/30 dark:bg-muted/10 rounded-xl border border-border/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <h2 className="text-xl font-semibold mb-4">Continuous Learning</h2>
        <p className="text-secondary">
          I&apos;m committed to continuous learning and staying up-to-date with the latest technologies and industry best practices. 
          Currently expanding my expertise in modern React patterns, performance optimization techniques, and advanced TypeScript.
        </p>
      </motion.div>
    </main>
  );
}
