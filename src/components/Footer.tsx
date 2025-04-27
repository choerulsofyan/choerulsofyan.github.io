import Link from "next/link";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-white py-8 dark:bg-secondary dark:bg-opacity-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Choerul Sofyan</h3>
            <p className="text-gray-300">
              Full Stack Developer based in Bandung, Indonesia. Specializing in building robust web solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/experience" className="text-gray-300 hover:text-white transition-colors">
                  Experience
                </Link>
              </li>
              <li>
                <Link href="/skills" className="text-gray-300 hover:text-white transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/education" className="text-gray-300 hover:text-white transition-colors">
                  Education
                </Link>
              </li>
              <li>
                <Link href="/resume" className="text-gray-300 hover:text-white transition-colors">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:choerulsofyanmf@gmail.com" className="hover:text-white transition-colors">
                  choerulsofyanmf@gmail.com
                </a>
              </li>
              <li className="text-gray-300 flex items-center gap-2">
                <Phone size={16} />
                <a href="tel:+6282118178993" className="hover:text-white transition-colors">
                  +62 821 1817 8993
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Linkedin size={16} className="text-gray-300" />
                <a 
                  href="https://www.linkedin.com/in/choerulsofyan/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Github size={16} className="text-gray-300" />
                <a 
                  href="https://github.com/choerulsofyan" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>&copy; {currentYear} Choerul Sofyan. All rights reserved.</p>
          <div className="flex space-x-4">
            <a 
              href="https://github.com/choerulsofyan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/choerulsofyan/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:choerulsofyanmf@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
