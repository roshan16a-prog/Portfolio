"use client";

import { motion, AnimatePresence } from "framer-motion";
import { achievements } from "@/data/portfolio";
import { useState, useRef } from "react";
import { Award, ChevronLeft, ChevronRight, X, ExternalLink, Calendar, Trophy, GraduationCap, Users } from "lucide-react";
import Image from "next/image";

type TabCategory = "Achievement" | "Completion" | "Participation";

const categories: TabCategory[] = ["Participation", "Achievement", "Completion"];

export default function AchievementsSection() {
    const [activeTab, setActiveTab] = useState<TabCategory>("Participation");
    const [selectedAchievementIndex, setSelectedAchievementIndex] = useState<number | null>(null);
    const sliderRef = useRef<HTMLDivElement>(null);

    const counts = {
        Participation: achievements.filter(a => (a as any).category === "Participation").length,
        Achievement: achievements.filter(a => (a as any).category === "Achievement").length,
        Completion: achievements.filter(a => (a as any).category === "Completion").length,

    };

    const filteredAchievements = achievements.filter(
        (item) => (item as any).category === activeTab
    );

    const scroll = (direction: "left" | "right") => {
        if (sliderRef.current) {
            const scrollAmount = window.innerWidth < 768 ? 320 : 380;
            sliderRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
        }
    };

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedAchievementIndex !== null) {
            setSelectedAchievementIndex((selectedAchievementIndex + 1) % filteredAchievements.length);
        }
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedAchievementIndex !== null) {
            setSelectedAchievementIndex(
                (selectedAchievementIndex - 1 + filteredAchievements.length) % filteredAchievements.length
            );
        }
    };

    return (
        <section id="achievements" className="py-24 bg-background relative border-t border-card-border/50 overflow-hidden">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications & <span className="text-accent">Recognition</span></h2>
                        <p className="text-foreground/70">
                            A collection of certifications, milestones, and awards shaping my technical journey.
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

                {/* Category Tabs */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex justify-center sm:justify-start mb-12 w-full"
                >
                    <div className="flex bg-card/20 p-2 rounded-full border border-white/5 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] backdrop-blur-xl relative overflow-x-auto hide-scrollbar snap-x snap-mandatory mx-auto md:mx-0 max-w-full">
                        {categories.map((category) => {
                            const isActive = activeTab === category;
                            const Icon = category === "Achievement" ? Trophy : category === "Completion" ? GraduationCap : Users;
                            return (
                                <button
                                    key={category}
                                    onClick={() => {
                                        setActiveTab(category);
                                        setSelectedAchievementIndex(null);
                                        if (sliderRef.current) sliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
                                    }}
                                    className={`relative snap-center px-5 py-3 sm:px-8 sm:py-3.5 rounded-full text-sm sm:text-base font-bold transition-all duration-500 whitespace-nowrap z-10 flex-shrink-0 flex items-center gap-2 group ${isActive ? "text-white" : "text-foreground/60 hover:text-foreground hover:bg-white/5 shadow-none"
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeCategoryTab"
                                            className="absolute inset-0 bg-gradient-to-br from-accent to-teal-500 rounded-full shadow-[0_0_20px_-3px_rgba(20,184,166,0.6)] z-[-1] border border-accent/50"
                                            transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10 flex items-center justify-center gap-2.5">
                                        <Icon
                                            size={18}
                                            className={`transition-all duration-300 ${isActive ? 'text-white scale-110 drop-shadow-md' : 'text-foreground/50 group-hover:text-accent group-hover:scale-110'}`}
                                        />
                                        <span className="tracking-wide">
                                            {category}
                                        </span>
                                        <span className={`text-xs px-2.5 py-0.5 rounded-full font-mono font-bold tracking-widest transition-all duration-300 ${isActive ? 'bg-black/20 text-white shadow-inner backdrop-blur-sm' : 'bg-background text-foreground/50 border border-card-border/50 group-hover:border-accent/30 shadow-inner'}`}>
                                            {counts[category]}
                                        </span>
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Horizontal Slider Area */}
                <div className="relative -mx-6 px-6 md:mx-0 md:px-0">
                    <div
                        ref={sliderRef}
                        className="overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar pb-8 pt-4"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.3 }}
                                className="flex gap-6 w-max"
                            >
                                {filteredAchievements.map((item, idx) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: idx * 0.05 }}
                                        className="snap-start bg-card border border-card-border p-5 rounded-2xl flex flex-col group w-[300px] sm:w-[350px] md:w-[380px] shrink-0 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(20,184,166,0.3)] hover:border-accent/50 transition-all duration-300 cursor-pointer focus:outline-none focus:border-accent"
                                        onClick={() => setSelectedAchievementIndex(idx)}
                                    >
                                        {/* Thumbnail Image */}
                                        <div className="w-full aspect-video bg-background border border-card-border rounded-xl overflow-hidden mb-6 relative group-hover:border-accent/50 transition-colors">
                                            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent flex items-center justify-center pointer-events-none z-0">
                                                <Award size={48} className="text-accent/20" />
                                            </div>
                                            {item.image && (
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 400px"
                                                    className="object-cover relative z-10 opacity-80 group-hover:opacity-100 transition-opacity"
                                                />
                                            )}
                                        </div>

                                        <h3 className="font-bold text-lg leading-tight mb-2 line-clamp-2 min-h-[56px] group-hover:text-accent transition-colors">{item.title}</h3>

                                        <div className="flex flex-col gap-2 mb-4">
                                            <p className="text-foreground/70 text-sm font-medium">{item.issuer}</p>
                                            <div className="flex items-center gap-1.5 text-xs text-foreground/50 font-mono">
                                                <Calendar size={12} />
                                                {(item as any).date || item.year}
                                            </div>
                                        </div>

                                        <button
                                            className="mt-auto w-full py-3 rounded-lg bg-background text-foreground/80 font-medium group-hover:bg-accent group-hover:text-white transition-all flex items-center justify-center gap-2 border border-card-border group-hover:border-accent"
                                        >
                                            View Details
                                            <ExternalLink size={16} />
                                        </button>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>

            {/* Detailed Gallery Modal */}
            <AnimatePresence>
                {selectedAchievementIndex !== null && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 pb-20 sm:pb-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedAchievementIndex(null)}
                            className="absolute inset-0 bg-background/95 backdrop-blur-xl"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-6xl z-10 flex flex-col lg:flex-row bg-card border border-card-border rounded-3xl overflow-hidden shadow-2xl h-[85vh] lg:h-[750px]"
                        >
                            {/* Close Button Mobile/Top - Absolute to container */}
                            <button
                                onClick={(e) => { e.stopPropagation(); setSelectedAchievementIndex(null); }}
                                className="absolute top-4 right-4 z-50 p-2 text-foreground/70 hover:text-accent bg-background/80 hover:bg-background rounded-full transition-colors border border-card-border backdrop-blur-md"
                            >
                                <X size={24} />
                            </button>

                            {/* Left Side: Large Image Display */}
                            <div className="w-full lg:w-3/5 h-[40vh] lg:h-full bg-background border-b lg:border-b-0 lg:border-r border-card-border relative flex items-center justify-center group overflow-hidden" onClick={(e) => e.stopPropagation()}>
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent flex items-center justify-center pointer-events-none">
                                    <Award size={100} className="text-accent/10" />
                                </div>

                                {filteredAchievements[selectedAchievementIndex]?.image && (
                                    <motion.div
                                        key={selectedAchievementIndex} // Re-animate on change
                                        initial={{ scale: 1.1, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{ duration: 0.6 }}
                                        className="relative w-full h-full p-4 sm:p-8 flex items-center justify-center"
                                    >
                                        <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl border border-card-border/50">
                                            <Image
                                                src={filteredAchievements[selectedAchievementIndex].image}
                                                alt={filteredAchievements[selectedAchievementIndex].title}
                                                fill
                                                className="object-contain"
                                                priority
                                            />
                                        </div>
                                    </motion.div>
                                )}

                                {/* Desktop Navigation Arrows inside image area */}
                                {filteredAchievements.length > 1 && (
                                    <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between hidden lg:flex">
                                        <button onClick={handlePrev} className="p-3 bg-black/50 hover:bg-accent text-white rounded-full backdrop-blur-md transition-colors shadow-lg border border-white/10">
                                            <ChevronLeft size={24} />
                                        </button>
                                        <button onClick={handleNext} className="p-3 bg-black/50 hover:bg-accent text-white rounded-full backdrop-blur-md transition-colors shadow-lg border border-white/10">
                                            <ChevronRight size={24} />
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Right Side: Details Panel */}
                            <div className="w-full lg:w-2/5 h-[45vh] lg:h-full overflow-y-auto p-6 lg:p-10 flex flex-col custom-scrollbar bg-card/50" onClick={(e) => e.stopPropagation()}>

                                <div className="mb-6 pt-4 lg:pt-0">
                                    <div className="flex flex-wrap items-center gap-3 mb-4">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium shadow-inner">
                                            <Calendar size={14} />
                                            {(filteredAchievements[selectedAchievementIndex] as any)?.date || filteredAchievements[selectedAchievementIndex]?.year}
                                        </span>
                                    </div>
                                    <h3 className="text-3xl lg:text-4xl font-bold leading-tight mb-4 text-foreground">
                                        {filteredAchievements[selectedAchievementIndex]?.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-foreground/80 text-lg font-medium p-4 bg-background border border-card-border rounded-xl">
                                        <Award size={20} className="text-accent shrink-0" />
                                        <span>Issued by <strong>{filteredAchievements[selectedAchievementIndex]?.issuer}</strong></span>
                                    </div>
                                </div>

                                <div className="space-y-6 mt-4">
                                    <div>
                                        <h4 className="text-sm uppercase tracking-wider text-foreground/50 font-bold mb-3 flex items-center gap-2">
                                            <span className="w-4 h-[2px] bg-accent rounded-full"></span>
                                            Description
                                        </h4>
                                        <p className="text-foreground/80 leading-relaxed text-lg">
                                            {filteredAchievements[selectedAchievementIndex]?.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Mobile Navigation Controls (Bottom of details) */}
                                {filteredAchievements.length > 1 && (
                                    <div className="mt-auto pt-8 flex justify-between lg:hidden border-t border-card-border">
                                        <button onClick={handlePrev} className="flex items-center gap-2 px-4 py-2 bg-background border border-card-border rounded-lg text-foreground hover:bg-accent hover:text-white transition-colors">
                                            <ChevronLeft size={20} /> Prev
                                        </button>
                                        <button onClick={handleNext} className="flex items-center gap-2 px-4 py-2 bg-background border border-card-border rounded-lg text-foreground hover:bg-accent hover:text-white transition-colors">
                                            Next <ChevronRight size={20} />
                                        </button>
                                    </div>
                                )}
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
