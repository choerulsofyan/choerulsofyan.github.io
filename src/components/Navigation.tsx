"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
    const pathname = usePathname();

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Experience", path: "/experience" },
        { name: "Skills", path: "/skills" },
        { name: "Projects", path: "/projects" },
        { name: "Education", path: "/education" },
        { name: "Resume", path: "/resume" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <header className="bg-white shadow-sm sticky top-0 z-20">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <Link
                        href="/"
                        className="font-semibold text-lg text-primary"
                    >
                        Choerul Sofyan
                    </Link>

                    <div className="hidden md:flex items-center space-x-6">
                        <nav className="flex space-x-6">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`font-medium transition-colors ${
                                        pathname === item.path
                                            ? "text-accent-blue border-b-2 border-accent-blue"
                                            : "text-secondary hover:text-accent-blue"
                                    }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        <ThemeToggle />
                    </div>

                    {/* Mobile menu */}
                    <MobileMenu navItems={navItems} />
                </div>
            </div>
        </header>
    );
}
