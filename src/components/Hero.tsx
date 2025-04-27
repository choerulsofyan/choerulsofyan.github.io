"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
    FileText,
    ExternalLink,
    Mail,
    Github,
    Linkedin,
    ArrowRight,
} from "lucide-react";

export default function Hero() {
    const techStack = [
        { name: "React", icon: "⚛️" },
        { name: "TypeScript", icon: "🔷" },
        { name: "Node.js", icon: "🟢" },
        { name: "Laravel", icon: "🚀" },
        { name: "MySQL", icon: "🔍" },
    ];

    return (
        <section className="min-h-[90vh] flex items-center py-16 md:py-24 bg-gradient-to-br from-[#f8f9fa] via-[#f1f3f5] to-[#e9ecef] dark:from-[#111827] dark:via-[#1f2937] dark:to-[#374151] relative overflow-hidden">
            {/* Abstract background elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent-blue/5 rounded-full blur-3xl -mr-24 -mt-24 dark:bg-accent-blue/10"></div>
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#4A0E0E]/5 rounded-full blur-3xl -ml-12 -mb-12 dark:bg-[#4A0E0E]/10"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="mb-3 inline-block"
                        >
                            <span className="px-4 py-1 text-sm font-semibold bg-accent-blue/10 text-accent-blue rounded-full">
                                Available for Freelance Projects
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
                        >
                            Hi, I&apos;m{" "}
                            <span className="text-accent-blue">
                                Choerul Sofyan
                            </span>
                        </motion.h1>

                        <motion.h2
                            initial={{ opacity: 0, y: -15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-2xl md:text-3xl font-semibold mb-6 text-accent-burgundy inline-flex items-center"
                        >
                            Full Stack Developer
                            <span className="ml-3 h-px w-10 bg-[#4A0E0E]/70 hidden md:inline-block"></span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-lg md:text-xl text-secondary mb-8 max-w-2xl"
                        >
                            I build modern, responsive, and user-friendly web
                            applications using React, TypeScript, and Laravel.
                            With 8+ years of experience, I deliver high-quality
                            solutions with a focus on clean code and
                            performance.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="flex flex-wrap gap-4 mb-10"
                        >
                            <Button
                                asChild
                                size="lg"
                                className="bg-[#4A0E0E] hover:bg-[#4A0E0E]/90 text-white shadow-lg"
                            >
                                <Link
                                    href="/contact"
                                    className="flex items-center gap-2"
                                >
                                    <Mail size={18} />
                                    Contact Me
                                </Link>
                            </Button>

                            <Button variant="outline" asChild size="lg">
                                <Link
                                    href="/projects"
                                    className="flex items-center gap-2"
                                >
                                    <ExternalLink size={18} />
                                    View Projects
                                </Link>
                            </Button>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className="flex items-center gap-6"
                        >
                            <a
                                href="https://github.com/choerulsofyan"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-accent-blue transition-colors"
                            >
                                <Github size={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/choerulsofyan/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-accent-blue transition-colors"
                            >
                                <Linkedin size={20} />
                            </a>
                            <div className="h-6 w-px bg-border"></div>
                            <Link
                                href="/resume"
                                className="text-muted-foreground hover:text-accent-blue transition-colors flex items-center gap-2"
                            >
                                <FileText size={18} />
                                <span className="text-sm font-medium">
                                    Resume
                                </span>
                            </Link>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-5 space-y-8 flex flex-col items-center lg:items-end">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="bg-card p-6 rounded-xl shadow-lg border border-border/40"
                        >
                            <div className="rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl mb-6 w-48 h-48 mx-auto">
                                <Image
                                    src="/images/profile-picture-bg-transparent.png"
                                    alt="Choerul Sofyan"
                                    width={200}
                                    height={200}
                                    className="object-cover"
                                    priority
                                    unoptimized
                                />
                            </div>

                            <h3 className="text-lg font-semibold mb-4 flex items-center justify-center">
                                Core Technologies
                            </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {techStack.map((tech, index) => (
                                    <motion.div
                                        key={tech.name}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: 0.6 + index * 0.1,
                                        }}
                                        whileHover={{ y: -5 }}
                                        className="flex flex-col items-center justify-center p-3 bg-muted/50 dark:bg-muted/20 rounded-lg hover:bg-accent-blue/5 dark:hover:bg-accent-blue/10 transition-colors"
                                    >
                                        <span className="text-2xl mb-1">
                                            {tech.icon}
                                        </span>
                                        <span className="text-sm font-medium">
                                            {tech.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                            <div className="mt-6 text-center">
                                <Link
                                    href="/skills"
                                    className="inline-flex items-center gap-1 px-4 py-2 bg-accent-blue/10 text-accent-blue rounded-full hover:bg-accent-blue/20 transition-colors text-sm font-medium"
                                >
                                    View all skills <ArrowRight size={14} />
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
