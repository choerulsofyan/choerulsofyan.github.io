import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Choerul Sofyan - Full Stack Developer",
  description: "Professional resume of Choerul Sofyan, a Full Stack Developer specializing in modern web technologies.",
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
