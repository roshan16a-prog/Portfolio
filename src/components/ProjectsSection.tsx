"use client";

import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolio";
import { useState, useRef } from "react";
import { ArrowUpRight, Github, ExternalLink, X, Tag, ChevronLeft, ChevronRight, Calendar, Lock } from "lucide-react";
import Image from "next/image";
import clsx from "clsx";

export default function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState<string | null>(null);
    const sliderRef = useRef<HTMLDivElement>(null);

    const activeProject = projects.find((p) => p.id === selectedProject);

    const scroll = (direction: "left" | "right") => {
        if (sliderRef.current) {
            const scrollAmount = window.innerWidth < 768 ? 320 : 400;
            sliderRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
        }
    };

    return (
        <section id="projects" className="py-24 bg-card/30 relative">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured <span className="text-accent">Projects</span></h2>
                        <p className="text-foreground/70">
                            A selection of my recent work focusing on solving real-world problems.
                        </p>
                    </motion.div>

                    {/* Desktop Navigation Arrows */}
                    <div className="hidden md:flex gap-4">
                        <button onClick={() => scroll("left")} className="p-3 rounded-full border border-card-border bg-card hover:bg-accent hover:text-white transition-colors">
                            <ChevronLeft size={24} />
                        </button>
                        <button onClick={() => scroll("right")} className="p-3 rounded-full border border-card-border bg-card hover:bg-accent hover:text-white transition-colors">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Horizontal Slider Area */}
                <div className="relative -mx-6 px-6 md:mx-0 md:px-0">
                    <div
                        ref={sliderRef}
                        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar pb-8 pt-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {projects.map((project, idx) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="snap-start bg-card border border-card-border rounded-2xl overflow-hidden flex flex-col group cursor-pointer w-[300px] sm:w-[350px] md:w-[400px] shrink-0 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(20,184,166,0.3)] hover:border-accent/50 transition-all duration-300 relative focus:outline-none focus:border-accent"
                                onClick={() => setSelectedProject(project.id)}
                            >
                                {/* Thumbnail */}
                                <div className="w-full h-48 bg-muted relative overflow-hidden">
                                    {project.images && project.images.length > 0 ? (
                                        <Image src={project.images[0]} alt={project.title} fill sizes="(max-width: 768px) 100vw, 400px" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                    ) : (
                                        <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-blue-500/20 flex items-center justify-center">
                                            <span className="text-accent font-mono text-sm border border-accent/20 px-3 py-1 rounded bg-background/50 backdrop-blur-sm">No Image</span>
                                        </div>
                                    )}
                                    {/* Duration Badge */}
                                    {project.duration && (
                                        <div className="absolute top-3 left-3 bg-background/80 backdrop-blur-md px-2 py-1 rounded-md text-xs font-medium border border-card-border text-foreground flex items-center gap-1.5 shadow-sm">
                                            <Calendar size={12} className="text-accent" />
                                            {project.duration}
                                        </div>
                                    )}
                                </div>

                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors line-clamp-1">
                                        {project.title}
                                    </h3>

                                    {/* Tech Stack Previews */}
                                    <div className="flex flex-wrap gap-1.5 mb-4">
                                        {project.techStack.slice(0, 3).map(tech => (
                                            <span key={tech} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded font-medium">
                                                {tech}
                                            </span>
                                        ))}
                                        {project.techStack.length > 3 && (
                                            <span className="px-2 py-1 bg-muted text-foreground/70 text-xs rounded font-medium">
                                                +{project.techStack.length - 3}
                                            </span>
                                        )}
                                    </div>

                                    <p className="text-foreground/70 text-sm line-clamp-2 mb-4">
                                        {project.summary}
                                    </p>

                                    <div className="mt-auto flex items-center gap-2 text-sm font-semibold text-foreground/50 group-hover:text-accent transition-colors">
                                        View Project <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Project Details Modal */}
            <AnimatePresence>
                {selectedProject && activeProject && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-background/90 backdrop-blur-md"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-5xl bg-card border border-card-border rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[95vh] lg:max-h-[90vh]"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2 text-white bg-black/40 hover:bg-black/80 rounded-full transition-colors backdrop-blur-md border border-white/10"
                            >
                                <X size={24} />
                            </button>

                            <div className="overflow-y-auto w-full h-full custom-scrollbar flex flex-col">
                                {/* Top Section (Hero) */}
                                <div className="relative w-full h-64 sm:h-80 shrink-0 bg-muted">
                                    {activeProject.images && activeProject.images.length > 0 ? (
                                        <Image src={activeProject.images[0]} alt={activeProject.title} fill className="object-cover" priority />
                                    ) : (
                                        <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-blue-500/20" />
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

                                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 z-10">
                                        {activeProject.duration && (
                                            <div className="inline-flex items-center gap-1.5 px-3 py-1 mb-3 rounded-full bg-accent text-white text-sm font-medium shadow-lg">
                                                <Calendar size={14} />
                                                {activeProject.duration}
                                            </div>
                                        )}
                                        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 drop-shadow-md">
                                            {activeProject.title}
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {activeProject.techStack.map(tech => (
                                                <span key={tech} className="flex items-center gap-1.5 px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-sm font-medium border border-card-border/50 text-foreground">
                                                    <Tag size={12} className="text-accent" />
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Main Content */}
                                <div className="p-6 sm:p-10 flex flex-col gap-10">
                                    {/* Description */}
                                    <div className="prose prose-invert max-w-none">
                                        <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-medium">
                                            {activeProject.description}
                                        </p>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-10">
                                        {/* Problem / Solution */}
                                        <div className="space-y-6">
                                            {(activeProject as any).problemStatement && (
                                                <div className="bg-background/50 border border-card-border rounded-2xl p-6 relative overflow-hidden">
                                                    <div className="absolute top-0 left-0 w-1 h-full bg-red-400/50" />
                                                    <h4 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
                                                        <span>Problem Statement</span>
                                                    </h4>
                                                    <p className="text-foreground/70 leading-relaxed text-sm lg:text-base">
                                                        {(activeProject as any).problemStatement}
                                                    </p>
                                                </div>
                                            )}
                                            {(activeProject as any).solution && (
                                                <div className="bg-accent/5 border border-accent/20 rounded-2xl p-6 relative overflow-hidden">
                                                    <div className="absolute top-0 left-0 w-1 h-full bg-accent" />
                                                    <h4 className="text-lg font-bold text-accent mb-3 flex items-center gap-2">
                                                        <span>Solution Overview</span>
                                                    </h4>
                                                    <p className="text-foreground/80 leading-relaxed text-sm lg:text-base">
                                                        {(activeProject as any).solution}
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Features & Tools */}
                                        <div className="space-y-8">
                                            {(activeProject as any).features && (activeProject as any).features.length > 0 && (
                                                <div>
                                                    <h4 className="text-xl font-bold mb-4">Key Features</h4>
                                                    <ul className="space-y-3">
                                                        {(activeProject as any).features.map((feature: string, i: number) => (
                                                            <li key={i} className="flex items-start gap-3 text-foreground/80">
                                                                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0 shadow-[0_0_8px_rgba(20,184,166,0.6)]" />
                                                                <span className="text-sm lg:text-base leading-relaxed">{feature}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}

                                            {(activeProject as any).tools && (activeProject as any).tools.length > 0 && (
                                                <div>
                                                    <h4 className="text-xl font-bold mb-4">Tools & Technologies</h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {(activeProject as any).tools.map((tool: string, i: number) => (
                                                            <span key={i} className="px-3 py-1.5 bg-background border border-card-border rounded-lg text-sm text-foreground/80 font-medium">
                                                                {tool}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Screenshots Gallery */}
                                    {(activeProject as any).screenshots && (activeProject as any).screenshots.length > 0 && (
                                        <div className="space-y-4">
                                            <h4 className="text-xl font-bold flex items-center gap-2">
                                                <span className="w-1.5 h-6 bg-accent rounded-full" />
                                                Screenshot Gallery
                                            </h4>
                                            <div className="flex gap-4 overflow-x-auto snap-x scroll-smooth hide-scrollbar pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                                                {(activeProject as any).screenshots.map((src: string, i: number) => (
                                                    <div key={i} className="snap-start shrink-0 relative w-[280px] h-[160px] sm:w-[400px] sm:h-[225px] rounded-xl overflow-hidden border border-card-border bg-muted/50 hover:border-accent/50 transition-colors">
                                                        {src ? (
                                                            <Image src={src} alt={`Screenshot ${i + 1}`} fill className="object-cover" />
                                                        ) : (
                                                            <div className="w-full h-full flex items-center justify-center text-accent/50 text-sm font-mono">No Image</div>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {/* Action Buttons */}
                                    <div className="flex flex-wrap gap-4 pt-6 border-t border-card-border mt-auto">
                                        {activeProject.githubUrl ? (
                                            <a
                                                href={activeProject.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-background border border-card-border hover:border-foreground transition-colors font-medium hover:bg-muted"
                                            >
                                                <Github size={18} />
                                                View Source
                                            </a>
                                        ) : (
                                            <button disabled className="flex items-center gap-2 px-6 py-3 rounded-xl bg-background border border-card-border/50 text-foreground/40 font-medium cursor-not-allowed">
                                                <Lock size={18} />
                                                Private Source
                                            </button>
                                        )}

                                        {activeProject.liveUrl ? (
                                            <a
                                                href={activeProject.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white hover:bg-accent/90 transition-colors font-medium shadow-[0_0_15px_rgba(20,184,166,0.3)] hover:shadow-[0_0_25px_rgba(20,184,166,0.5)]"
                                            >
                                                <ExternalLink size={18} />
                                                Live Demo
                                            </a>
                                        ) : (
                                            <button disabled className="flex items-center gap-2 px-6 py-3 rounded-xl bg-background border border-card-border/50 text-foreground/40 font-medium cursor-not-allowed">
                                                <Lock size={18} />
                                                Private Demo
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Global Hide Scrollbar Style */}
            <style jsx global>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
}
