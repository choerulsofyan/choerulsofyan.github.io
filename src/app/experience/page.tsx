"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ExperiencePage() {
  const experiences = [
    {
      company: "Identiticoders Pte Ltd",
      position: "Frontend Developer",
      period: "MAY 2022 – DECEMBER 2024",
      location: "Remote",
      responsibilities: [
        "Developed dynamic and interactive user interfaces using React.js, Redux, and jQuery.",
        "Leveraged React.js to create reusable components, enhancing code modularity and maintainability.",
        "Collaborated closely with the backend teams to integrate frontend and backend functionality seamlessly.",
        "Contributed to the creation of mockups to visualize and refine user interface designs.",
        "Actively participated in cross-functional team meetings to ensure effective communication and alignment across departments."
      ],
      skills: ["React.js", "Redux", "jQuery", "TypeScript"]
    },
    {
      company: "Geekseat Indonesia",
      position: "Frontend Developer",
      period: "MAY 2021 – APRIL 2022",
      location: "Remote",
      responsibilities: [
        "Worked as a Frontend Developer for a multinational IT solution company, collaborating with a diverse team to develop web applications for multinational clients.",
        "Collaborated with project managers and clients to gather requirements, translate design mockups into functional UI components, and deliver high-quality frontend solutions.",
        "Utilized React.js and TypeScript to build dynamic and responsive user interfaces, ensuring a smooth user experience across various devices.",
        "Collaborated with cross-functional teams including designers, backend developers, and project managers to deliver high-quality applications within project timelines.",
        "Actively participated in agile development processes, including sprint planning, stand-up meetings, and retrospectives."
      ],
      skills: ["React.js", "TypeScript", "UI/UX", "Agile"]
    },
    {
      company: "Freelance",
      position: "Full-Stack Developer",
      period: "SEPTEMBER 2020 – MAY 2021",
      location: "Remote",
      responsibilities: [
        "Collaborated with a freelance agency, working as a freelance developer for ERA Indonesia, a leading real estate agency in Indonesia.",
        "Improved the existing mobile app, ERA Mobile, utilizing Vue.js and Apache Cordova technologies.",
        "Successfully addressed bugs, ensuring a smooth and error-free user experience for ERA Mobile and the web admin application users.",
        "Integrated new functionalities into the web admin application, aligning them with the business objectives and requirements."
      ],
      skills: ["Vue.js", "Apache Cordova", "Mobile Apps", "Bug Fixing"]
    },
    {
      company: "Bellezkin",
      position: "Full-Stack Developer",
      period: "MARCH 2019 – SEPTEMBER 2020",
      location: "On Site",
      responsibilities: [
        "Developed a custom e-commerce application using Laravel, adhering to the MVC design pattern.",
        "Utilized Livewire for creating dynamic and interactive user interfaces, enhancing the shopping experience.",
        "Integrated the developed Laravel e-commerce app seamlessly with the company's existing web app, ensuring smooth data synchronization and consistent user experience.",
        "Collaborated closely with the company's marketing team to understand business requirements, implement personalized product recommendations and implement custom features."
      ],
      skills: ["Laravel", "MVC", "Livewire", "E-commerce"]
    },
    {
      company: "Revota",
      position: "Full-Stack Developer",
      period: "NOVEMBER 2018 – MARCH 2019",
      location: "On Site",
      responsibilities: [
        "Developed a Service App to seamlessly integrate data between the company's desktop app product and web app, facilitating efficient data exchange and synchronization.",
        "Designed and developed the user interface (UI) for sales point dashboards and summaries using the Vue.js framework.",
        "Implemented responsive and user-friendly UI components to enhance the user experience and improve data visualization.",
        "Worked closely with stakeholders to gather requirements, understand business needs, and deliver effective solutions that met project objectives.",
        "Acted as a technical resource, promoting knowledge sharing and fostering a collaborative team environment."
      ],
      skills: ["Vue.js", "UI/UX", "Dashboard Development", "Data Integration"]
    },
    {
      company: "Revota",
      position: "PHP Developer",
      period: "APRIL 2016 – NOVEMBER 2018",
      location: "On Site",
      responsibilities: [
        "Developed web applications using the CodeIgniter framework, adhering to the MVC design pattern.",
        "Assisted in the creation of innovative web apps for retail clients, incorporating features such as membership management, sales dashboard, and customer analytics.",
        "Developed APIs to integrate the web applications with the company's existing desktop app product, facilitating data synchronization and enhancing workflow efficiency.",
        "Collaborated with the retail clients and internal teams to gather requirements, design solutions, and deliver successful integrations."
      ],
      skills: ["PHP", "CodeIgniter", "MVC", "API Development"]
    },
    {
      company: "Revota",
      position: "IT Support Technician",
      period: "DECEMBER 2013 – APRIL 2016",
      location: "On Site",
      responsibilities: [
        "Installed and configured Travics! Revota App, a point of sale (POS) software, ensuring smooth operation and compatibility with retail systems.",
        "Provided exceptional customer service by resolving technical issues and inquiries from retail staff.",
        "Collaborated with cross-functional teams to troubleshoot and resolve hardware and software issues related to the Revota App.",
        "Assisted in training retail staff on how to effectively utilize the Revota App, including providing guidance on its features and functionalities.",
        "Acted as a point of contact for retail staff, providing timely and accurate technical support via phone, email, or in-person."
      ],
      skills: ["IT Support", "Customer Service", "POS Systems", "Technical Training"]
    },
    {
      company: "PT. Interconsys Technology",
      position: "Administrative Assistant",
      period: "JUNE 2013 – OCTOBER 2013",
      location: "On Site",
      responsibilities: [
        "Handled incoming and outgoing correspondence, including emails and phone calls.",
        "Maintained and updated confidential files and documents with a strong attention to detail.",
        "Prepared and edited documents and reports, ensuring accuracy and professionalism."
      ],
      skills: ["Administration", "Documentation", "Communication", "Organization"]
    }
  ];

  return (
    <main className="container mx-auto px-4 py-12">
      <motion.div 
        className="mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Professional Experience</h1>
        <p className="text-secondary max-w-3xl">Over 10 years of professional experience in various roles, with a focus on front-end and full-stack development for the last 8 years.</p>
      </motion.div>
      
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <motion.div 
            key={`${experience.company}-${experience.position}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Card className="overflow-hidden border-border/70 hover:shadow-md transition-shadow duration-300">
              <CardHeader className="bg-muted/30 dark:bg-muted/10 border-b border-border/50 pb-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                  <CardTitle className="text-xl text-accent-blue">{experience.company}</CardTitle>
                  <Badge variant="outline" className="font-normal text-xs bg-accent-blue/10 text-accent-blue self-start sm:self-center">
                    {experience.period}
                  </Badge>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-secondary">
                  <p className="font-medium text-base">
                    {experience.position}
                  </p>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {experience.location}
                  </p>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Responsibilities</h3>
                <ul className="list-disc list-outside ml-5 text-secondary space-y-2 mb-6">
                  {experience.responsibilities.map((responsibility, i) => (
                    <motion.li 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + (i * 0.05), duration: 0.3 }}
                      className="pl-1"
                    >
                      {responsibility}
                    </motion.li>
                  ))}
                </ul>
                
                <div className="pt-2 border-t border-border/30">
                  <h3 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Key Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="font-normal">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
