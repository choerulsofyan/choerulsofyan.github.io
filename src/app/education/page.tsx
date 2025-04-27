"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function EducationPage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <motion.div 
        className="mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Education</h1>
        <p className="text-secondary max-w-3xl">My academic journey that has provided me with a strong foundation in informatics engineering and software development.</p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Card className="overflow-hidden border-border/70 hover:shadow-lg transition-shadow duration-300">
          <CardHeader className="bg-muted/30 dark:bg-muted/10 border-b border-border/50">
            <div className="flex flex-col sm:flex-row justify-between gap-4 mb-1">
              <CardTitle className="text-xl text-accent-blue">Bachelor of Informatics Engineering</CardTitle>
              <Badge variant="outline" className="font-normal text-xs bg-accent-blue/10 text-accent-blue self-start sm:self-center">
                2016 – 2021
              </Badge>
            </div>
            <CardDescription className="text-secondary font-medium text-base">
              INSTITUT DIGITAL EKONOMI LPKIA
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <motion.p 
              className="text-secondary mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Completed a comprehensive program in Informatics Engineering, focusing on software development,
              database management, and web technologies. Gained hands-on experience with various programming
              languages and frameworks, preparing me for a career in Full Stack Development.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="bg-muted/20 dark:bg-muted/5 p-5 rounded-lg border border-border/30">
                <h3 className="font-semibold text-accent-blue mb-3 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                  </svg>
                  Key Courses
                </h3>
                <ul className="list-disc list-outside ml-5 text-secondary space-y-2">
                  <li>Web Development</li>
                  <li>Database Systems</li>
                  <li>Object-Oriented Programming</li>
                  <li>Software Engineering</li>
                  <li>Data Structures & Algorithms</li>
                </ul>
              </div>
              
              <div className="bg-muted/20 dark:bg-muted/5 p-5 rounded-lg border border-border/30">
                <h3 className="font-semibold text-accent-blue mb-3 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v4"/>
                    <path d="M20 12h-4"/>
                    <path d="M12 18v4"/>
                    <path d="M4 12H0"/>
                    <path d="M3.5 3.5l3 3"/>
                    <path d="M17.5 3.5l-3 3"/>
                    <path d="M3.5 20.5l3-3"/>
                    <path d="M17.5 20.5l-3-3"/>
                  </svg>
                  Skills Acquired
                </h3>
                <ul className="list-disc list-outside ml-5 text-secondary space-y-2">
                  <li>Full Stack Development</li>
                  <li>Database Design</li>
                  <li>Software Architecture</li>
                  <li>Problem Solving</li>
                  <li>Project Management</li>
                </ul>
              </div>
              
              <div className="bg-muted/20 dark:bg-muted/5 p-5 rounded-lg border border-border/30">
                <h3 className="font-semibold text-accent-blue mb-3 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                  </svg>
                  Areas of Interest
                </h3>
                <ul className="list-disc list-outside ml-5 text-secondary space-y-2">
                  <li>Front-end Development</li>
                  <li>UI/UX Design</li>
                  <li>Performance Optimization</li>
                  <li>Modern JavaScript Frameworks</li>
                  <li>API Design</li>
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              className="mt-8 pt-6 border-t border-border/30"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <h3 className="font-semibold mb-3">Continuous Professional Development</h3>
              <p className="text-secondary mb-4">
                In addition to my formal education, I regularly participate in online courses, workshops, and coding challenges to enhance my skills and stay updated with the latest technologies and industry trends.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-accent-blue/10 text-accent-blue hover:bg-accent-blue/20 transition-colors">
                  React Advanced Patterns
                </Badge>
                <Badge className="bg-accent-blue/10 text-accent-blue hover:bg-accent-blue/20 transition-colors">
                  TypeScript Mastery
                </Badge>
                <Badge className="bg-accent-blue/10 text-accent-blue hover:bg-accent-blue/20 transition-colors">
                  Modern JavaScript
                </Badge>
                <Badge className="bg-accent-blue/10 text-accent-blue hover:bg-accent-blue/20 transition-colors">
                  CSS Architecture
                </Badge>
              </div>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
}
