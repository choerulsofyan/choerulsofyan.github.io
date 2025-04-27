import Link from "next/link";
import Hero from "@/components/Hero";
import StructuredData from "@/components/StructuredData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Choerul Sofyan | Full Stack Developer",
  description: "Freelance Full Stack Developer based in Bandung, Indonesia, specializing in modern web technologies",
};

export default function Home() {
  const keySkills = [
    "React.js", 
    "TypeScript", 
    "Laravel", 
    "Node.js", 
    "MySQL"
  ];
  
  const personData = {
    name: "Choerul Sofyan Muhammad Falih",
    jobTitle: "Full Stack Developer",
    url: "https://choerulsofyan.github.io",
    sameAs: [
      "https://github.com/choerulsofyan",
      "https://www.linkedin.com/in/choerulsofyan/"
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bandung",
      addressRegion: "West Java",
      addressCountry: "Indonesia"
    },
    email: "choerulsofyanmf@gmail.com",
    telephone: "+6282118178993",
    knowsAbout: ["Web Development", "React", "Next.js", "TypeScript", "Node.js", "Laravel"]
  };
  
  return (
    <main>
      <StructuredData type="Person" data={personData} />
      <Hero />
      
      <section className="py-16 bg-muted/50 dark:bg-muted/10">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-center">Key Skills</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {keySkills.map((skill, index) => (
              <div 
                key={skill}
                className="group relative overflow-hidden bg-white dark:bg-card rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-accent-blue opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                <div className="p-4 text-center">
                  <span className="inline-block text-4xl mb-2">
                    {index === 0 ? "⚛️" : index === 1 ? "🔷" : index === 2 ? "🚀" : index === 3 ? "🟢" : "🔍"}
                  </span>
                  <h3 className="font-medium text-primary">{skill}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/skills"
              className="inline-flex items-center gap-2 text-accent-blue font-medium hover:underline transition-colors"
            >
              View all skills
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-white dark:bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6">Let&apos;s Work Together</h2>
          <p className="text-secondary max-w-2xl mx-auto mb-8">
            I&apos;m currently available for freelance projects. If you&apos;re looking for a developer to bring your ideas to life, let&apos;s connect.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-blue text-white font-medium rounded-md hover:bg-opacity-90 transition-colors"
            >
              Get in Touch
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
            </Link>
            <Link 
              href="/resume"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-background text-accent-blue dark:text-accent-blue font-medium rounded-md border border-accent-blue hover:bg-accent-blue hover:text-white dark:hover:bg-accent-blue dark:hover:text-white transition-colors"
            >
              View Resume
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
