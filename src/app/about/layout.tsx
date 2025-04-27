import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Choerul Sofyan - Full Stack Developer",
  description: "Learn about Choerul Sofyan's background and journey as a Full Stack Developer based in Bandung, Indonesia",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
