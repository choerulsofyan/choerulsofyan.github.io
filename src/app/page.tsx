import Link from "next/link";
import Hero from "@/components/Hero";
import StructuredData from "@/components/StructuredData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Choerul Sofyan | Full Stack Developer",
  description: "Freelance Full Stack Developer based in Bandung, Indonesia, specializing in modern web technologies",
};

export default function Home() {
  // Structured data for SEO
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
    knowsAbout: ["Web Development", "React", "TypeScript", "Laravel", "Node.js", "MySQL"]
  };
  
  // Featured projects for homepage
  const featuredProjects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with product management, cart functionality, and secure checkout.",
      tech: "React.js, Redux, TypeScript",
      color: "bg-accent-blue/10",
      icon: "🛒"
    },
    {
      title: "Corporate Dashboard",
      description: "Real-time analytics dashboard for sales teams with data visualization and reporting features.",
      tech: "React.js, TypeScript, MySQL",
      color: "bg-[#4A0E0E]/10",
      icon: "📊"
    }
  ];
  
  return (
    <main>
      {typeof window !== 'undefined' && <StructuredData type="Person" data={personData} />}
      <Hero />
      
      {/* Experience Highlights */}
      <section className="py-20 bg-white dark:bg-card/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Experience Highlights</h2>
              <p className="text-secondary max-w-xl">Over 8 years of expertise in full-stack development</p>
            </div>
            <Link 
              href="/experience"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-accent-blue hover:underline font-medium"
            >
              View full experience
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Experience Card 1 */}
            <div className="bg-card dark:bg-card/60 p-6 rounded-xl shadow-sm border border-border/30 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-accent-blue">Frontend Developer</h3>
                <span className="text-sm font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">2022-2024</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">Identiticoders Pte Ltd (Remote)</p>
              <p className="text-secondary mb-4">Developed dynamic and interactive user interfaces using React.js, Redux, and TypeScript.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-accent-blue/10 text-accent-blue px-2 py-1 rounded-full">React</span>
                <span className="text-xs bg-accent-blue/10 text-accent-blue px-2 py-1 rounded-full">Redux</span>
                <span className="text-xs bg-accent-blue/10 text-accent-blue px-2 py-1 rounded-full">TypeScript</span>
              </div>
            </div>
            
            {/* Experience Card 2 */}
            <div className="bg-card dark:bg-card/60 p-6 rounded-xl shadow-sm border border-border/30 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-accent-blue">Frontend Developer</h3>
                <span className="text-sm font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">2021-2022</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">Geekseat Indonesia (Remote)</p>
              <p className="text-secondary mb-4">Built dynamic and responsive user interfaces for multinational clients using React.js and TypeScript.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-accent-blue/10 text-accent-blue px-2 py-1 rounded-full">React</span>
                <span className="text-xs bg-accent-blue/10 text-accent-blue px-2 py-1 rounded-full">TypeScript</span>
                <span className="text-xs bg-accent-blue/10 text-accent-blue px-2 py-1 rounded-full">UI/UX</span>
              </div>
            </div>
            
            {/* Experience Card 3 */}
            <div className="bg-card dark:bg-card/60 p-6 rounded-xl shadow-sm border border-border/30 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold text-accent-blue">Full-Stack Developer</h3>
                <span className="text-sm font-medium text-muted-foreground bg-muted px-2 py-1 rounded-full">2019-2020</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">Bellezkin (On Site)</p>
              <p className="text-secondary mb-4">Developed custom e-commerce application using Laravel and integrated with existing systems.</p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-accent-blue/10 text-accent-blue px-2 py-1 rounded-full">Laravel</span>
                <span className="text-xs bg-accent-blue/10 text-accent-blue px-2 py-1 rounded-full">MVC</span>
                <span className="text-xs bg-accent-blue/10 text-accent-blue px-2 py-1 rounded-full">Livewire</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Projects */}
      <section className="py-20 bg-muted/30 dark:bg-muted/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Projects</h2>
              <p className="text-secondary max-w-xl">Some of my recent work</p>
            </div>
            <Link 
              href="/projects"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-accent-blue hover:underline font-medium"
            >
              View all projects
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div 
                key={project.title}
                className="bg-white dark:bg-card p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-border/30 flex flex-col h-full"
              >
                <div className="mb-6">
                  <span className="text-4xl">{project.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-secondary mb-4 flex-grow">{project.description}</p>
                <div className="mt-auto">
                  <div className="mb-4">
                    <span className={`inline-block text-sm font-medium ${project.color} text-primary px-3 py-1 rounded-md`}>
                      {project.tech}
                    </span>
                  </div>
                  <Link 
                    href="/projects"
                    className="inline-flex items-center gap-1 text-accent-blue hover:underline text-sm font-medium"
                  >
                    View details
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact CTA - Clean and not duplicated */}
      <section className="py-20 bg-white dark:bg-card/30">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to start your project?</h2>
          <p className="text-secondary mb-10">
            I&apos;m currently available for freelance projects. If you&apos;re looking for a developer to bring your ideas to life, I&apos;d love to discuss how we can work together.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-blue text-white font-medium rounded-md hover:bg-accent-blue/90 transition-colors text-lg"
          >
            Let&apos;s talk about your project
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14"></path>
              <path d="m12 5 7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
