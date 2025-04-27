import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience | Choerul Sofyan - Full Stack Developer",
  description: "Explore Choerul Sofyan's professional experience as a Full Stack Developer",
};

export default function ExperienceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
