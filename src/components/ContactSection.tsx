"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { Mail, Github, Linkedin } from "lucide-react";

export default function ContactSection() {
    const socialLinks = [
        { icon: Mail, label: "Email", href: `mailto:${personalInfo.email}` },
        { icon: Github, label: "GitHub", href: personalInfo.github },
        { icon: Linkedin, label: "LinkedIn", href: personalInfo.linkedin },
    ];

    return (
        <section id="contact" className="py-24 bg-background relative border-t border-card-border/50 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                 > 
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In <span className="text-accent">Touch</span></h2>
                    <p className="text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        I&apos;m currently open to new opportunities, collaborations, and freelance projects.
                        Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex flex-wrap justify-center gap-6 md:gap-8"
                >
                    {socialLinks.map((link, idx) => {
                        const Icon = link.icon;
                        return (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target={link.label !== "Email" ? "_blank" : undefined}
                                rel="noopener noreferrer"
                                whileHover={{ y: -5, scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-3 px-6 py-4 bg-card border border-card-border rounded-2xl hover:border-accent hover:shadow-[0_10px_30px_-10px_rgba(20,184,166,0.3)] transition-all group"
                            >
                                <div className="text-accent group-hover:scale-110 transition-transform">
                                    <Icon size={24} />
                                </div>
                                <span className="text-lg font-medium text-foreground/90 group-hover:text-foreground transition-colors">
                                    {link.label}
                                </span>
                            </motion.a>
                        );
                    })}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-24 text-foreground/50 text-sm font-mono border-t border-card-border pt-8"
                >
                    <p>Designed & Built by {personalInfo.name}</p>
                    <p className="mt-2 text-accent/50">&copy; {new Date().getFullYear()} All rights reserved.</p>
                </motion.div>
            </div>
        </section>
    );
}
