import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education | Choerul Sofyan - Full Stack Developer",
  description: "Learn about Choerul Sofyan's educational background and qualifications",
};

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
