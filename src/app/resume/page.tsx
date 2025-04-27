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
                    <Button
                        onClick={handlePrint}
                        className="flex items-center gap-2"
                    >
                        <Printer size={16} />
                        Print
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => {
                            const printContent =
                                document.getElementById("resume-content");
                            if (printContent) {
                                const printWindow = window.open(
                                    "",
                                    "",
                                    "height=650,width=900"
                                );
                                printWindow!.document.write(
                                    "<html><head><title>Choerul Sofyan - Resume</title>"
                                );
                                printWindow!.document.write(
                                    '<link rel="stylesheet" href="/styles.css" media="print">'
                                );
                                printWindow!.document.write("</head><body>");
                                printWindow!.document.write(
                                    printContent.innerHTML
                                );
                                printWindow!.document.write("</body></html>");
                                printWindow!.document.close();
                                printWindow!.focus();

                                setTimeout(() => {
                                    printWindow!.print();
                                    printWindow!.close();
                                }, 250);
                            }
                        }}
                        className="flex items-center gap-2"
                    >
                        <Download size={16} />
                        Save as PDF
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
                        <h1 className="text-3xl font-bold mb-2">
                            Choerul Sofyan Muhammad Falih
                        </h1>
                        <h2 className="text-xl text-secondary mb-4">
                            Full Stack Developer
                        </h2>
                        <div className="flex flex-col sm:flex-row sm:gap-8 text-sm text-secondary">
                            <p>📧 choerulsofyanmf@gmail.com</p>
                            <p>📱 +62 821 1817 8993</p>
                            <p>🌐 github.com/choerulsofyan</p>
                            <p>🔗 linkedin.com/in/choerulsofyan</p>
                        </div>
                    </header>

                    {/* Summary */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-3">
                            Professional Summary
                        </h2>
                        <p className="text-secondary">
                            Dedicated Full Stack Developer with 5+ years of
                            experience specializing in React.js, Vue.js, and
                            Laravel ecosystems. Demonstrated expertise in
                            creating responsive, user-centered web applications
                            and mobile solutions. Strong track record of
                            delivering high-quality projects across diverse
                            industries while working in both remote and on-site
                            environments. Passionate about clean code,
                            continuous learning, and implementing modern
                            development practices.
                        </p>
                    </section>

                    {/* Skills */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-3">
                            Technical Skills
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h3 className="font-medium mb-2">Frontend</h3>
                                <ul className="list-disc list-inside text-secondary space-y-1">
                                    <li>React.js, Vue.js, Next.js</li>
                                    <li>
                                        HTML5, CSS3, Tailwind CSS, Bootstrap
                                    </li>
                                    <li>JavaScript, TypeScript</li>
                                    <li>Redux, Vuex, Context API</li>
                                    <li>Responsive Design, Accessibility</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="font-medium mb-2">
                                    Backend & Mobile
                                </h3>
                                <ul className="list-disc list-inside text-secondary space-y-1">
                                    <li>Node.js, Laravel/PHP, CodeIgniter</li>
                                    <li>React Native, Apache Cordova</li>
                                    <li>MySQL, PostgreSQL</li>
                                    <li>RESTful APIs, GraphQL</li>
                                    <li>Git, Docker, AWS, GCP</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Experience */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-3">
                            Professional Experience
                        </h2>

                        <div className="mb-4">
                            <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
                                <h3 className="font-medium">
                                    Frontend Developer
                                </h3>
                                <span className="text-secondary">
                                    MAY 2022 – DECEMBER 2024
                                </span>
                            </div>
                            <p className="text-accent-blue mb-2">
                                Identiticoders Pte Ltd (Remote)
                            </p>
                            <ul className="list-disc list-inside text-secondary space-y-1">
                                <li>
                                    Developed dynamic and interactive user
                                    interfaces using React.js, Redux, and jQuery
                                </li>
                                <li>
                                    Leveraged React.js to create reusable
                                    components, enhancing code modularity and
                                    maintainability
                                </li>
                                <li>
                                    Collaborated closely with the backend teams
                                    to integrate frontend and backend
                                    functionality seamlessly
                                </li>
                                <li>
                                    Contributed to the creation of mockups to
                                    visualize and refine user interface designs
                                </li>
                                <li>
                                    Actively participated in cross-functional
                                    team meetings to ensure effective
                                    communication
                                </li>
                            </ul>
                        </div>

                        <div className="mb-4">
                            <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
                                <h3 className="font-medium">
                                    Frontend Developer
                                </h3>
                                <span className="text-secondary">
                                    MAY 2021 – APRIL 2022
                                </span>
                            </div>
                            <p className="text-accent-blue mb-2">
                                Geekseat Indonesia (Remote)
                            </p>
                            <ul className="list-disc list-inside text-secondary space-y-1">
                                <li>
                                    Worked as a Frontend Developer for a
                                    multinational IT solution company,
                                    collaborating with a diverse team
                                </li>
                                <li>
                                    Collaborated with project managers and
                                    clients to gather requirements and translate
                                    design mockups
                                </li>
                                <li>
                                    Utilized React.js and TypeScript to build
                                    dynamic and responsive user interfaces
                                </li>
                                <li>
                                    Collaborated with cross-functional teams to
                                    deliver high-quality applications within
                                    project timelines
                                </li>
                                <li>
                                    Actively participated in agile development
                                    processes including sprint planning and
                                    stand-ups
                                </li>
                            </ul>
                        </div>

                        <div className="mb-4">
                            <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
                                <h3 className="font-medium">
                                    Full-Stack Developer
                                </h3>
                                <span className="text-secondary">
                                    SEPTEMBER 2020 – MAY 2021
                                </span>
                            </div>
                            <p className="text-accent-blue mb-2">
                                Freelance (Remote)
                            </p>
                            <ul className="list-disc list-inside text-secondary space-y-1">
                                <li>
                                    Collaborated with a freelance agency,
                                    working as a freelance developer for ERA
                                    Indonesia
                                </li>
                                <li>
                                    Improved the existing mobile app, ERA
                                    Mobile, utilizing Vue.js and Apache Cordova
                                    technologies
                                </li>
                                <li>
                                    Successfully addressed bugs, ensuring a
                                    smooth and error-free user experience
                                </li>
                                <li>
                                    Integrated new functionalities into the web
                                    admin application
                                </li>
                            </ul>
                        </div>

                        <div className="mb-4">
                            <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
                                <h3 className="font-medium">
                                    Full-Stack Developer
                                </h3>
                                <span className="text-secondary">
                                    MARCH 2019 – SEPTEMBER 2020
                                </span>
                            </div>
                            <p className="text-accent-blue mb-2">
                                Bellezkin (On Site)
                            </p>
                            <ul className="list-disc list-inside text-secondary space-y-1">
                                <li>
                                    Developed a custom e-commerce application
                                    using Laravel, adhering to the MVC design
                                    pattern
                                </li>
                                <li>
                                    Utilized Livewire for creating dynamic and
                                    interactive user interfaces
                                </li>
                                <li>
                                    Integrated the developed Laravel e-commerce
                                    app seamlessly with the company's existing
                                    web app
                                </li>
                                <li>
                                    Collaborated closely with the company's
                                    marketing team to understand business
                                    requirements
                                </li>
                            </ul>
                        </div>

                        <div className="mb-4">
                            <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
                                <h3 className="font-medium">
                                    Full-Stack Developer
                                </h3>
                                <span className="text-secondary">
                                    NOVEMBER 2018 – MARCH 2019
                                </span>
                            </div>
                            <p className="text-accent-blue mb-2">
                                Revota (On Site)
                            </p>
                            <ul className="list-disc list-inside text-secondary space-y-1">
                                <li>
                                    Developed a Service App to seamlessly
                                    integrate data between the company's desktop
                                    app and web app
                                </li>
                                <li>
                                    Designed and developed the UI for sales
                                    point dashboards using Vue.js framework
                                </li>
                                <li>
                                    Implemented responsive and user-friendly UI
                                    components to enhance user experience
                                </li>
                                <li>
                                    Worked closely with stakeholders to gather
                                    requirements and deliver effective solutions
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Education */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-3">
                            Education
                        </h2>
                        <div className="flex flex-col sm:flex-row sm:justify-between mb-1">
                            <h3 className="font-medium">
                                Bachelor of Informatics Engineering
                            </h3>
                            <span className="text-secondary">2016 - 2021</span>
                        </div>
                        <p className="text-accent-blue mb-1">
                            Institut Digital Ekonomi LPKIA, Bandung
                        </p>
                        <p className="text-secondary">
                            Focused on web development, software engineering,
                            and database management systems
                        </p>
                    </section>

                    {/* Additional Skills */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-3">
                            Additional Skills
                        </h2>
                        <ul className="list-disc list-inside text-secondary space-y-1">
                            <li>
                                UI/UX Design: Wireframing, prototyping, and
                                responsive design principles
                            </li>
                            <li>
                                Performance Optimization: Page load
                                optimization, code splitting, lazy loading
                            </li>
                            <li>
                                SEO Implementation: Meta tags, structured data,
                                analytics integration
                            </li>
                            <li>
                                Project Management: Requirements gathering, task
                                prioritization, timeline estimation
                            </li>
                            <li>
                                Team Collaboration: Remote work proficiency,
                                cross-functional teamwork, client communication
                            </li>
                        </ul>
                    </section>

                    {/* Languages */}
                    <section className="mb-6">
                        <h2 className="text-xl font-semibold mb-3">
                            Languages
                        </h2>
                        <ul className="list-disc list-inside text-secondary space-y-1">
                            <li>Indonesian (Native)</li>
                            <li>English (Professional Working Proficiency)</li>
                        </ul>
                    </section>
                </Card>
            </motion.div>
        </main>
    );
}
