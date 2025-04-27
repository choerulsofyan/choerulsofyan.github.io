"use client";

import SkillCard from "@/components/SkillCard";
import { motion } from "framer-motion";

export default function SkillsPage() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML", "CSS", "Bootstrap", "JavaScript", "React.js", "Styled Components", "TypeScript", "Redux", "jQuery"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "PHP", "Laravel", "OOP", "MVC", "MySQL"]
    },
    {
      title: "Tools & Methodologies",
      skills: ["Git", "GitHub", "UI/UX", "Figma", "Linux", "Python", "Agile Methodologies", "Azure Boards", "Notion", "Slack"]
    }
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-semibold text-primary mb-6">Skills & Expertise</h1>
      
      <div className="space-y-8">
        {skillCategories.map((category, index) => (
          <motion.div 
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <SkillCard 
              title={category.title} 
              skills={category.skills} 
            />
          </motion.div>
        ))}
      </div>
    </main>
  );
}
