"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, Printer } from "lucide-react";
import { useEffect } from "react";

export default function ResumePage() {
  // Handle print functionality
  const handlePrint = () => {
    window.print();
  };

  // Add print-specific styles when component mounts
  useEffect(() => {
    // Add print styles
    const style = document.createElement("style");
    style.id = "print-styles";
    style.innerHTML = `
      @media print {
        @page {
          size: A4;
          margin: 1.5cm;
        }
        nav, footer, .no-print {
          display: none !important;
        }
        body {
          font-size: 12pt;
          line-height: 1.3;
          background: white !important;
          color: black !important;
        }
        .print-container {
          padding: 0 !important;
          max-width: 100% !important;
        }
        .page-break {
          page-break-before: always;
        }
        a {
          text-decoration: none !important;
          color: black !important;
        }
        h1, h2, h3 {
          color: black !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      // Clean up
      const printStyle = document.getElementById("print-styles");
      if (printStyle) {
        printStyle.remove();
      }
    };
  }, []);

  return (
    <main className="container mx-auto px-4 py-8 print-container">
      <div className="no-print flex justify-between items-center mb-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold"
        >
          Resume
        </motion.h1>
        <div className="flex gap-4">
          <Button onClick={handlePrint} className="flex items-center gap-2">
            <Printer size={16} />
            Print
          </Button>
          <Button variant="outline" asChild>
            <a
              href="/Choerul_Sofyan_Resume.pdf"
              download
              className="flex items-center gap-2"
            >
              <Download size={16} />
              Download PDF
            </a>
          </Button>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Card className="p-8 mb-8 shadow-sm">
          {/* Header */}
          <header className="mb-6 border-b border-border pb-6">
            <h1 className="text-3xl font-bold mb-2">Choerul Sofyan Muhammad Falih</h1>
            <h2 className="text-xl text-secondary mb-4">Full Stack Developer</h2>
            <div className="flex flex-col sm:flex-row sm:gap-8 text-sm text-secondary">
              <p>📧 choerulsofyanmf@gmail.com</p>
              <p>📱 +62 821 1817 8993</p>
              <p>🌐 github.com/choerulsofyan</p>
              <p>🔗 linkedin.com/in/choerulsofyan</p>
            </div>
          </header>

          {/* Summary */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Professional Summary</h2>
            <p className="text-secondary">
              Full Stack Developer with over 5 years of experience specializing in building robust, scalable web applications. 
              Proficient in React, Next.js, TypeScript, and Node.js with a strong focus on creating performant and accessible user interfaces.
              Passionate about clean code, best practices, and continuous learning.
            </p>
          </section>

          {/* Skills */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">Frontend</h3>
                <ul className="list-disc list-inside text-secondary space-y-1">
                  <li>React, Next.js, TypeScript</li>
                  <li>HTML5, CSS3, Tailwind CSS, SCSS</li>
                  <li>Redux, Context API, React Query</li>
                  <li>Jest, React Testing Library</li>
                  <li>Responsive Design, Accessibility</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium mb-2">Backend</h3>
                <ul className="list-disc list-inside text-secondary space-y-1">
                  <li>Node.js, Express, NestJS</li>
                  <li>RESTful APIs, GraphQL</li>
                  <li>MongoDB, PostgreSQL, MySQL</li>
                  <li>Authentication, Authorization</li>
                  <li>Docker, CI/CD, AWS</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Professional Experience</h2>
            
            <div className="mb-4">
              <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
                <h3 className="font-medium">Senior Full Stack Developer</h3>
                <span className="text-secondary">2022 - Present</span>
              </div>
              <p className="text-accent-blue mb-2">Tech Innovations Inc., Bandung</p>
              <ul className="list-disc list-inside text-secondary space-y-1">
                <li>Led the development of a high-traffic e-commerce platform using Next.js, resulting in a 40% improvement in page load times</li>
                <li>Implemented CI/CD pipelines reducing deployment time by 60%</li>
                <li>Mentored junior developers and conducted code reviews to ensure code quality</li>
                <li>Designed and implemented RESTful APIs using Node.js and Express</li>
              </ul>
            </div>
            
            <div className="mb-4">
              <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
                <h3 className="font-medium">Full Stack Developer</h3>
                <span className="text-secondary">2019 - 2022</span>
              </div>
              <p className="text-accent-blue mb-2">WebSolutions Co., Jakarta</p>
              <ul className="list-disc list-inside text-secondary space-y-1">
                <li>Developed and maintained multiple client projects using React and Node.js</li>
                <li>Integrated third-party APIs and payment gateways</li>
                <li>Optimized database queries resulting in 30% faster response times</li>
                <li>Collaborated with UI/UX designers to implement responsive designs</li>
              </ul>
            </div>
            
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
                <h3 className="font-medium">Frontend Developer</h3>
                <span className="text-secondary">2017 - 2019</span>
              </div>
              <p className="text-accent-blue mb-2">Digital Agency Ltd., Surabaya</p>
              <ul className="list-disc list-inside text-secondary space-y-1">
                <li>Built responsive web applications using HTML, CSS, and JavaScript</li>
                <li>Implemented animations and interactive elements to enhance user experience</li>
                <li>Worked with cross-functional teams to deliver projects on time</li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Education</h2>
            <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
              <h3 className="font-medium">Bachelor of Computer Science</h3>
              <span className="text-secondary">2013 - 2017</span>
            </div>
            <p className="text-accent-blue">University of Indonesia, Jakarta</p>
          </section>

          {/* Certifications */}
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Certifications</h2>
            <ul className="list-disc list-inside text-secondary space-y-1">
              <li>AWS Certified Developer Associate</li>
              <li>MongoDB Certified Developer</li>
              <li>React Advanced Patterns Certification</li>
            </ul>
          </section>

          {/* Languages */}
          <section>
            <h2 className="text-xl font-semibold mb-3">Languages</h2>
            <ul className="list-disc list-inside text-secondary space-y-1">
              <li>English (Professional)</li>
              <li>Indonesian (Native)</li>
            </ul>
          </section>
        </Card>
      </motion.div>
    </main>
  );
}
