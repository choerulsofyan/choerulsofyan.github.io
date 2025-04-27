import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Choerul Sofyan - Full Stack Developer",
  description: "View my portfolio of web development projects showcasing my skills in React, Next.js, TypeScript, and more.",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
