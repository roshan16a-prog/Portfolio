"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
    };

    const ctaHover = {
        scale: 1.05,
        boxShadow: "0px 0px 20px rgba(20, 184, 166, 0.4)", // teal-500 glow
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center pt-24 pb-16 overflow-hidden relative"
        >
            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 -right-64 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -z-10" />
            <div className="absolute bottom-1/4 -left-64 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] -z-10" />

            <div className="container mx-auto px-6 max-w-6xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Text Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col gap-6"
                    >
                        <motion.div variants={itemVariants} className="inline-block">
                            <span className="px-4 py-2 rounded-full bg-card border border-card-border text-sm font-medium text-accent">
                                Welcome to my portfolio
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl md:text-7xl font-bold tracking-tight text-foreground"
                        >
                            Hi, I&apos;m <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500">
                                {personalInfo.name}
                            </span>
                        </motion.h1>

                        <motion.h2 variants={itemVariants} className="text-xl md:text-2xl font-mono text-foreground/80">
                            {/* Simple Typewriter simulation for subtitle */}
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 1.5, ease: "linear" }}
                            >
                                {personalInfo.title}
                            </motion.span>
                        </motion.h2>

                        <motion.p variants={itemVariants} className="text-lg text-foreground/70 max-w-xl leading-relaxed">
                            {personalInfo.about}
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex gap-2 sm:gap-4 pt-4 flex-nowrap w-full items-center">
                            <motion.a
                                href="#projects"
                                whileHover={ctaHover}
                                whileTap={{ scale: 0.95 }}
                                className="flex-1 sm:flex-none flex justify-center items-center gap-1 sm:gap-2 px-2 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg sm:rounded-xl bg-accent text-white font-medium transition-colors whitespace-nowrap text-[11px] sm:text-sm md:text-base"
                            >
                                View Projects
                                <ArrowRight size={16} className="hidden sm:block" />
                            </motion.a>
                            <motion.a
                                href="#achievements"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex-1 sm:flex-none flex justify-center items-center gap-1 sm:gap-2 px-2 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg sm:rounded-xl bg-card border border-card-border hover:border-accent text-foreground font-medium transition-colors whitespace-nowrap text-[11px] sm:text-sm md:text-base"
                            >
                                View Achievements
                            </motion.a>
                            {personalInfo.resume && (
                                <motion.a
                                    href={personalInfo.resume}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="flex-1 sm:flex-none flex justify-center items-center gap-1 sm:gap-2 px-2 py-2 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-lg sm:rounded-xl bg-card border border-card-border hover:border-accent text-foreground font-medium transition-colors whitespace-nowrap text-[11px] sm:text-sm md:text-base"
                                >
                                    Resume
                                    <Download size={16} className="hidden sm:block" />
                                </motion.a>
                            )}
                        </motion.div>
                    </motion.div>

                    {/* Right Image Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="relative lg:h-[600px] flex justify-center items-center mt-12 lg:mt-0"
                    >
                        {/* Profile Image Container with Animated Border */}
                        <div className="relative w-72 h-72 md:w-96 md:h-96">

                            {/* Animated Glowing Ring */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-[-10px] rounded-full border-2 border-transparent border-t-accent border-r-accent/30 opacity-70"
                            />

                            <motion.div
                                animate={{ rotate: -360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-[-20px] rounded-full border border-dashed border-accent/20"
                            />

                            {/* Main Image Wrapper */}
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative w-full h-full rounded-full overflow-hidden border-4 border-card bg-card shadow-[0_0_40px_rgba(20,184,166,0.3)] z-10"
                            >
                                {personalInfo.profileImage ? (
                                    <Image
                                        src={personalInfo.profileImage}
                                        alt={personalInfo.name}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-card to-background flex items-center justify-center text-accent/50">
                                        <span className="font-mono text-sm border border-card-border p-2 rounded">Replace with Image</span>
                                    </div>
                                )}
                            </motion.div>

                            {/* Decorative Floating Dots */}
                            <motion.div
                                animate={{ y: [0, 20, 0], opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute top-10 -right-4 w-4 h-4 rounded-full bg-accent/80 blur-[2px]"
                            />
                            <motion.div
                                animate={{ y: [0, -15, 0], opacity: [0.3, 0.8, 0.3] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                                className="absolute bottom-20 -left-6 w-6 h-6 rounded-full bg-blue-500/60 blur-[3px]"
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
