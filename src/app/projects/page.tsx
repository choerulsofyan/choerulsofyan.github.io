import { Metadata } from "next";
import ProjectsContent from "@/components/ProjectsContent";

// Sample project data - would be replaced with actual projects
const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with product management, cart functionality, and secure checkout using Next.js, TypeScript, and Stripe integration.",
    image: "https://placehold.co/600x400/0A2647/FFFFFF?text=E-Commerce+Platform",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example/ecommerce",
    index: 0,
  },
  {
    title: "Task Management App",
    description: "A responsive task management application with drag-and-drop functionality, user authentication, and real-time updates using React and Firebase.",
    image: "https://placehold.co/600x400/1F2A44/FFFFFF?text=Task+Management+App",
    tags: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example/taskapp",
    index: 1,
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring dark mode, animations, and optimized performance.",
    image: "https://placehold.co/600x400/4A0E0E/FFFFFF?text=Portfolio+Website",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example/portfolio",
    index: 2,
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard that provides real-time weather data, forecasts, and location-based services using React and the OpenWeatherMap API.",
    image: "https://placehold.co/600x400/0A2647/FFFFFF?text=Weather+Dashboard",
    tags: ["React", "API Integration", "CSS", "JavaScript"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example/weather",
    index: 3,
  },
  {
    title: "Blog Platform",
    description: "A full-featured blog platform with content management, user authentication, and commenting system built with Next.js and MongoDB.",
    image: "https://placehold.co/600x400/1F2A44/FFFFFF?text=Blog+Platform",
    tags: ["Next.js", "MongoDB", "Tailwind CSS", "TypeScript"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example/blog",
    index: 4,
  },
  {
    title: "Fitness Tracker",
    description: "A fitness tracking application that allows users to log workouts, track progress, and set goals using React Native and Firebase.",
    image: "https://placehold.co/600x400/4A0E0E/FFFFFF?text=Fitness+Tracker",
    tags: ["React Native", "Firebase", "Expo", "TypeScript"],
    demoUrl: "https://example.com",
    githubUrl: "https://github.com/example/fitness",
    index: 5,
  },
];

export const metadata: Metadata = {
  title: "Projects | Choerul Sofyan",
  description: "Explore Choerul Sofyan's portfolio of web development projects showcasing expertise in React, TypeScript, Laravel, and more.",
  keywords: ["web development projects", "React projects", "TypeScript portfolio", "Laravel applications", "Choerul Sofyan portfolio", "full stack developer projects"],
  openGraph: {
    title: "Projects | Choerul Sofyan - Full Stack Developer",
    description: "Explore my portfolio of web development projects showcasing expertise in React, TypeScript, Laravel, and more.",
    url: "https://choerulsofyan.github.io/projects",
    siteName: "Choerul Sofyan - Full Stack Developer",
    images: [
      {
        url: "https://choerulsofyan.github.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Choerul Sofyan - Projects",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Choerul Sofyan - Full Stack Developer",
    description: "Explore my portfolio of web development projects showcasing expertise in React, TypeScript, Laravel, and more.",
    images: ["https://choerulsofyan.github.io/og-image.jpg"],
  },
};

export default function ProjectsPage() {
  return <ProjectsContent projects={projects} />;
}
