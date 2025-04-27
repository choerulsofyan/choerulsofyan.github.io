import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SkipToContent from "@/components/SkipToContent";
import PerformanceMonitor from "@/components/PerformanceMonitor";
import PreloadResources from "@/components/PreloadResources";
import AccessibilityProvider from "@/components/AccessibilityProvider";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Choerul Sofyan | Full Stack Developer",
  description: "Full Stack Developer specializing in building modern web applications with React, Next.js, and Node.js",
  keywords: ["Choerul Sofyan", "Full Stack Developer", "React", "Next.js", "TypeScript", "Freelance Developer Indonesia", "Web Developer"],
  authors: [{ name: "Choerul Sofyan", url: "https://github.com/choerulsofyan" }],
  creator: "Choerul Sofyan",
  publisher: "Choerul Sofyan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://choerulsofyan.github.io",
    title: "Choerul Sofyan | Full Stack Developer",
    description: "Full Stack Developer specializing in building modern web applications with React, Next.js, and Node.js",
    siteName: "Choerul Sofyan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Choerul Sofyan | Full Stack Developer",
    description: "Full Stack Developer specializing in building modern web applications with React, Next.js, and Node.js",
    creator: "@choerulsofyan",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0A2647" />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-background flex flex-col min-h-screen`}>
        <AccessibilityProvider>
          <ThemeProvider defaultTheme="light">
            <SkipToContent />
            <Navigation />
            <main id="main-content" className="flex-grow">
              {children}
            </main>
            <Footer />
            <ScrollToTop />
            <PerformanceMonitor />
            <PreloadResources />
          </ThemeProvider>
        </AccessibilityProvider>
      </body>
    </html>
  );
}
