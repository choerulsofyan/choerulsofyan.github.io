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
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
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
                                As a full stack developer, I have 5+ years of
                                experience in various programming fields,
                                specializing in HTML, CSS, JavaScript, PHP, and
                                MySQL. My front-end development expertise lies
                                in React.js, Redux, and NodeJS, which enable me
                                to create dynamic and user-friendly web
                                interfaces. For back-end development, I
                                specialize in Laravel, a powerful and reliable
                                PHP framework that allows me to develop robust
                                and scalable web systems.
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <p className="text-secondary mb-4">
                                With a bachelor’s degree in informatics
                                engineering, I have a strong foundation in
                                computer science and software engineering
                                principles. Working with overseas companies has
                                honed my communication and collaboration skills,
                                making me comfortable working in diverse
                                environments. I am passionate about staying up
                                to date with the latest technologies and tools,
                                and I am excited to work with you to create
                                something amazing.
                            </p>
                        </motion.div>
                    </CardContent>
                </Card>
            </motion.div>
        </main>
    );
}
