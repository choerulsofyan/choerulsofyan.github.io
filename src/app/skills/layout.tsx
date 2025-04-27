import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Choerul Sofyan - Full Stack Developer",
  description: "Explore Choerul Sofyan's technical skills and expertise as a Full Stack Developer",
};

export default function SkillsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
