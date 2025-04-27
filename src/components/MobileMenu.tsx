"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import FocusTrap from "./FocusTrap";
import { Menu, X } from "lucide-react";

interface MobileMenuProps {
  navItems: {
    name: string;
    path: string;
  }[];
}

export default function MobileMenu({ navItems }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <div className="md:hidden">
      <button 
        onClick={toggleMenu} 
        className="p-2 text-secondary focus:outline-none"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <FocusTrap active={isOpen} initialFocus={true}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-background dark:bg-background pt-24 px-8"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <div className="absolute top-4 right-4">
                <button 
                  onClick={closeMenu} 
                  className="p-2 text-secondary focus:outline-none"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="flex flex-col space-y-6 p-6">
                {navItems.map((item) => (
                  <motion.div key={item.path} variants={itemVariants}>
                    <Link
                      href={item.path}
                      className={`text-xl font-medium block py-2 ${
                        pathname === item.path
                          ? "text-accent-blue border-b-2 border-accent-blue"
                          : "text-secondary"
                      }`}
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div variants={itemVariants} className="pt-4 border-t border-border flex items-center">
                  <ThemeToggle />
                  <span className="ml-2 text-secondary">Toggle theme</span>
                </motion.div>
              </nav>
            </motion.div>
          </FocusTrap>
        )}
      </AnimatePresence>
    </div>
  );
}
