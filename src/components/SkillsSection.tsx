"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";
import { useState } from "react";
import clsx from "clsx";

export default function SkillsSection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="skills" className="py-24 bg-background relative border-t border-card-border/50">
            <div className="container mx-auto px-6 max-w-6xl">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="max-w-2xl mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical <span className="text-accent">Skills</span></h2>
                    <p className="text-foreground/70">
                        A comprehensive overview of my technical expertise, categorized for clarity.
                    </p>
                </motion.div>

                <div className="flex flex-col md:flex-row gap-8 lg:gap-16">

                    {/* Categories Sidebar / Tabs */}
                    <div className="md:w-1/3 flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-4 md:pb-0 hide-scrollbar">
                        {skills.categories.map((category, idx) => {
                            const Icon = category.icon;
                            const isActive = activeTab === idx;

                            return (
                                <button
                                    key={category.name}
                                    onClick={() => setActiveTab(idx)}
                                    className={clsx(
                                        "flex items-center gap-4 px-6 py-4 rounded-xl text-left transition-all whitespace-nowrap md:whitespace-normal",
                                        isActive
                                            ? "bg-card border-accent text-accent shadow-[0_0_15px_rgba(20,184,166,0.15)]"
                                            : "bg-transparent border-transparent text-foreground/70 hover:bg-card/50 hover:text-foreground"
                                    )}
                                    style={{ borderWidth: "1px" }}
                                >
                                    <Icon size={20} className={isActive ? "text-accent" : ""} />
                                    <span className="font-medium whitespace-nowrap">{category.name}</span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Skills Display Area */}
                    <div className="md:w-2/3 min-h-[400px]">
                        <motion.div
                            key={activeTab} // Changing key forces re-render and re-animation
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                        >
                            {skills.categories[activeTab].skills.map((skill, idx) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(20,184,166,0.1)" }}
                                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                                    className="bg-card border border-card-border p-6 rounded-2xl"
                                >
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="font-semibold text-lg">{skill.name}</span>
                                        <span className="text-accent font-mono">{skill.level}%</span>
                                    </div>

                                    {/* Progress Bar Container */}
                                    <div className="h-2 w-full bg-background rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, ease: "easeOut", delay: idx * 0.1 + 0.2 }}
                                            className="h-full bg-gradient-to-r from-accent to-blue-500 rounded-full relative"
                                        >
                                            {/* Glow effect on the tip of the progress bar */}
                                            <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/30 blur-[2px]" />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
