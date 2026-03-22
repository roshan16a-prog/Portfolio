"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { Menu, X } from "lucide-react";
import clsx from "clsx";

const NAV_LINKS = [
    { name: "Home", href: "#home" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Problem Solving", href: "#problem-solving" },
    { name: "Achievements", href: "#achievements" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const activeSection = useScrollSpy(NAV_LINKS.map((link) => link.href.substring(1)));

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setMobileMenuOpen(false);
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);
        if (element) {
            setTimeout(() => {
                window.scrollTo({
                    top: element.offsetTop - 80, // Adjust for navbar height
                    behavior: "smooth",
                });
            }, 50);
        }
    };

    return (
        <header
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-card-border py-4"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
                <a
                    href="#home"
                    onClick={(e) => handleLinkClick(e, "#home")}
                    className="text-2xl font-bold tracking-tighter text-foreground"
                >
                    {personalInfo.name.split(" ")[0]}
                    <span className="text-accent">.</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => {
                        const isActive = activeSection === link.href.substring(1);
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleLinkClick(e, link.href)}
                                className={clsx(
                                    "relative text-sm font-medium transition-colors hover:text-accent",
                                    isActive ? "text-accent" : "text-foreground/80"
                                )}
                            >
                                {link.name}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeNav"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                                        initial={false}
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </a>
                        );
                    })}
                    {personalInfo.resume && (
                        <a
                            href={personalInfo.resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border border-accent text-accent hover:bg-accent hover:text-white transition-colors"
                        >
                            Resume
                        </a>
                    )}
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-foreground hover:text-accent transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.nav
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden bg-card border-b border-card-border overflow-hidden"
                    >
                        <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
                            {NAV_LINKS.map((link) => {
                                const isActive = activeSection === link.href.substring(1);
                                return (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => handleLinkClick(e, link.href)}
                                        className={clsx(
                                            "text-lg font-medium transition-colors",
                                            isActive ? "text-accent" : "text-foreground/80 hover:text-accent"
                                        )}
                                    >
                                        {link.name}
                                    </a>
                                );
                            })}
                            {personalInfo.resume && (
                                <a
                                    href={personalInfo.resume}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="flex items-center justify-center gap-2 px-4 py-3 mt-2 text-base font-medium rounded-lg bg-accent text-white transition-colors"
                                >
                                    Resume
                                </a>
                            )}
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
