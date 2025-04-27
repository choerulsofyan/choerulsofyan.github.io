"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function EducationPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <motion.h1 
        className="text-3xl md:text-4xl font-semibold text-primary mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Education
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-xl text-accent-blue">Bachelor of Informatics Engineering</CardTitle>
            <CardDescription className="text-secondary font-medium text-base">
              Institut Digital Ekonomi LPKIA | 2016-2021
            </CardDescription>
          </CardHeader>
          <CardContent>
            <motion.p 
              className="text-secondary"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Completed a comprehensive program in Informatics Engineering, focusing on software development,
              database management, and web technologies. Gained hands-on experience with various programming
              languages and frameworks, preparing me for a career in Full Stack Development.
            </motion.p>
            
            <motion.div 
              className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div>
                <h3 className="font-medium text-accent-blue mb-2">Key Courses</h3>
                <ul className="list-disc list-inside text-secondary space-y-1">
                  <li>Web Development</li>
                  <li>Database Systems</li>
                  <li>Object-Oriented Programming</li>
                  <li>Software Engineering</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-medium text-accent-blue mb-2">Skills Acquired</h3>
                <ul className="list-disc list-inside text-secondary space-y-1">
                  <li>Full Stack Development</li>
                  <li>Database Design</li>
                  <li>Software Architecture</li>
                  <li>Problem Solving</li>
                </ul>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
}
