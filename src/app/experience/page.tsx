"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ExperiencePage() {
  const experiences = [
    {
      company: "Identiticoders",
      position: "Full Stack Developer",
      period: "2022-2024",
      location: "Remote",
      responsibilities: [
        "Developed and maintained e-commerce applications using modern web technologies",
        "Implemented RESTful APIs and integrated third-party services",
        "Collaborated with cross-functional teams to deliver high-quality software solutions"
      ]
    },
    {
      company: "PT. Interconsys Technology",
      position: "Software Developer",
      period: "2013",
      location: "On-site",
      responsibilities: [
        "Contributed to the development of enterprise software solutions",
        "Assisted in database design and implementation",
        "Participated in code reviews and quality assurance processes"
      ]
    }
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <motion.h1 
        className="text-3xl md:text-4xl font-semibold text-primary mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Professional Experience
      </motion.h1>
      
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <motion.div 
            key={experience.company}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-accent-blue">{experience.company}</CardTitle>
                <p className="text-secondary font-medium">
                  {experience.position} | {experience.period} | {experience.location}
                </p>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-secondary space-y-2">
                  {experience.responsibilities.map((responsibility, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (i * 0.1), duration: 0.3 }}
                    >
                      {responsibility}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
