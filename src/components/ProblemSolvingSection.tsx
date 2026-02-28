"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { Code2, GitBranch, TerminalSquare, ExternalLink, Lightbulb, Zap, Server } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// A small hook for counting up
function useCountUp(end: number, duration: number = 2000) {
    const [count, setCount] = useState(0);
    const countRef = useRef<number>(0);

    useEffect(() => {
        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;

            // Easing function for smooth deceleration
            const easeOutQuart = 1 - Math.pow(1 - Math.min(progress / duration, 1), 4);
            const currentCount = Math.floor(easeOutQuart * end);

            if (currentCount !== countRef.current) {
                countRef.current = currentCount;
                setCount(currentCount);
            }

            if (progress < duration) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        animationFrame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return count;
}

const stats = [
    { label: "Problems Solved", value: 100, suffix: "+", icon: Code2, color: "text-blue-400" },
    { label: "Platforms Used", value: 3, suffix: "", icon: TerminalSquare, color: "text-purple-400" },
    { label: "Core Topics", value: 5, suffix: "+", icon: GitBranch, color: "text-emerald-400" },
];

const focusAreas = [
    "Arrays & Hashing",
    "Strings & Manipulation",
    "Stack-Queue",
    "Recursion & Backtracking",
    "Linked List"
];

const platforms = [
    { name: "LeetCode", icon: "/leetcode.svg", link: personalInfo.leetcode || "#" },
    { name: "CodeChef", icon: "/codechef.svg", link: "#" },
    { name: "HackerRank", icon: "/hackerrank.svg", link: "#" },
];

export default function ProblemSolvingSection() {
    // Only start counting when in view
    const [isInView, setIsInView] = useState(false);

    return (
        <section id="problem-solving" className="py-24 bg-background relative border-t border-card-border/50">
            {/* Background elements */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 max-w-6xl relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    onViewportEnter={() => setIsInView(true)}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row gap-12 items-center"
                >
                    {/* Left content */}
                    <div className="flex-1 space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium">
                            <Lightbulb size={16} /> Data Structures & Algorithms
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                            Problem-Solving & <br className="hidden md:block" />
                            <span className="text-accent">Algorithmic Thinking</span>
                        </h2>
                        <p className="text-foreground/80 leading-relaxed text-lg pb-2">
                            Consistent practice with Data Structures and Algorithms is the foundation of my engineering approach. It sharpens my logical thinking, allows me to write cleaner, more efficient code, and enables me to routinely optimize time and space complexity effectively. This rigorous analytical practice seamlessly translates into my ability to develop resilient, high-performance software projects.
                        </p>

                        {/* Focus Areas */}
                        <div className="space-y-4 pt-2">
                            <h3 className="text-sm uppercase tracking-wider text-foreground/50 font-bold">Key Focus Areas</h3>
                            <div className="flex flex-wrap gap-2">
                                {focusAreas.map((area, idx) => (
                                    <span key={idx} className="px-4 py-2 bg-card border border-card-border rounded-lg text-sm text-foreground/90 font-medium">
                                        {area}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* LeetCode Button */}
                        <div className="pt-6">
                            <a
                                href={personalInfo.leetcode || "https://leetcode.com"}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white font-medium rounded-xl hover:bg-accent/90 transition-all hover:-translate-y-1 hover:shadow-[0_10px_20px_-10px_rgba(20,184,166,0.4)]"
                            >
                                <TerminalSquare size={20} />
                                View LeetCode Profile
                                <ExternalLink size={16} className="ml-1 opacity-70" />
                            </a>
                        </div>
                    </div>

                    {/* Right content / Stats Grid */}
                    <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Solved Counter Card - spans full width */}
                        <div className="sm:col-span-2 p-6 bg-card border border-card-border rounded-2xl shadow-lg relative overflow-hidden group hover:border-accent/50 transition-colors">
                            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Code2 size={64} className="text-accent" />
                            </div>
                            <div className="relative z-10 space-y-2">
                                <p className="text-foreground/60 font-medium">Total Problems Solved</p>
                                <div className="flex items-baseline gap-1">
                                    <span className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent to-blue-400">
                                        {isInView ? <Counter end={100} /> : "0"}
                                    </span>
                                    <span className="text-4xl md:text-5xl font-bold text-accent">+</span>
                                </div>
                                <div className="mt-4 flex items-center gap-2 text-sm text-foreground/70 bg-background/50 inline-flex px-3 py-1.5 rounded-lg border border-card-border">
                                    <Zap size={14} className="text-amber-400" />
                                    Optimizing for Time (O(N)) & Space (O(1))
                                </div>
                            </div>
                        </div>

                        {/* Other Stats Cards */}
                        <div className="p-6 bg-card border border-card-border rounded-2xl shadow-md flex items-center gap-4 hover:-translate-y-1 transition-transform">
                            <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                                <Server className="text-blue-400" size={24} />
                            </div>
                            <div>
                                <p className="text-foreground/60 text-sm font-medium mb-1">Platforms</p>
                                <p className="text-xl font-bold">LeetCode, CodeChef, HackerRank</p>
                            </div>
                        </div>

                        <div className="p-6 bg-card border border-card-border rounded-2xl shadow-md flex items-center gap-4 hover:-translate-y-1 transition-transform">
                            <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                                <GitBranch className="text-emerald-400" size={24} />
                            </div>
                            <div>
                                <p className="text-foreground/60 text-sm font-medium mb-1">Consistency</p>
                                <p className="text-xl font-bold">Regular Practice</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

// Separate counter component so it can use the hook cleanly
function Counter({ end }: { end: number }) {
    const value = useCountUp(end);
    return <>{value}</>;
}
