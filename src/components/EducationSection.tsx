"use client";

import { motion } from "framer-motion";
import { education } from "@/data/portfolio";
import { GraduationCap, Calendar } from "lucide-react";
import clsx from "clsx";

export default function EducationSection() {
    return (
        <section id="education" className="py-24 bg-card/30 relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl relative">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">My <span className="text-accent">Education</span></h2>
                    <p className="text-foreground/70 max-w-2xl mx-auto">
                        The academic foundation that has shaped my engineering journey.
                    </p>
                </motion.div>

                {/* Timeline Container */}
                <div className="relative">
                    {/* Vertical Line */}
                    <motion.div
                        initial={{ height: 0 }}
                        whileInView={{ height: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent -translate-x-1/2"
                    />

                    {/* Timeline Items */}
                    <div className="space-y-12 relative z-10">
                        {education.map((item, idx) => {
                            const isEven = idx % 2 === 0;

                            return (
                                <div key={idx} className={clsx(
                                    "flex flex-col md:flex-row items-start md:items-center gap-6",
                                    isEven ? "md:flex-row-reverse" : "md:flex-row"
                                )}>
                                    {/* Content Box */}
                                    <motion.div
                                        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                        className={clsx(
                                            "md:w-1/2 flex",
                                            isEven ? "md:justify-start" : "md:justify-end",
                                            "pl-20 md:pl-0"
                                        )}
                                    >
                                        <div className={clsx(
                                            "bg-card border border-card-border p-6 rounded-2xl w-full md:max-w-[90%] relative shadow-lg hover:border-accent/50 transition-colors",
                                            item.isCurrent ? "border-accent shadow-[0_0_15px_rgba(20,184,166,0.1)]" : ""
                                        )}>
                                            {item.isCurrent && (
                                                <div className="absolute -top-3 -right-3">
                                                    <span className="relative flex h-4 w-4">
                                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                                        <span className="relative inline-flex rounded-full h-4 w-4 bg-accent"></span>
                                                    </span>
                                                </div>
                                            )}

                                            <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                                            <p className="text-foreground/70 font-medium mb-3">{item.college}</p>

                                            <div className="flex flex-wrap items-center gap-3">
                                                <div className="flex items-center gap-2 text-sm text-accent font-mono bg-accent/10 w-fit px-3 py-1.5 rounded-lg">
                                                    <Calendar size={14} />
                                                    {item.yearRange}
                                                </div>
                                                {(item as any).score && (
                                                    <div className="flex items-center gap-2 text-sm text-foreground/80 font-semibold bg-background border border-card-border w-fit px-3 py-1.5 rounded-lg">
                                                        {(item as any).score}
                                                    </div>
                                                )}
                                            </div>

                                        </div>
                                    </motion.div>

                                    {/* Marker Node */}
                                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 bg-background border-4 border-card rounded-full flex items-center justify-center shadow-xl">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.4 }}
                                            className={clsx(
                                                "w-8 h-8 rounded-full flex items-center justify-center",
                                                item.isCurrent ? "bg-accent text-white" : "bg-card-border text-foreground/50"
                                            )}
                                        >
                                            <GraduationCap size={16} />
                                        </motion.div>
                                    </div>

                                    {/* Empty space for alternating layout on desktop */}
                                    <div className="hidden md:block md:w-1/2" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
