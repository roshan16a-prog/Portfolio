"use client";

import { personalInfo } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="py-8 text-center border-t border-card-border bg-card"
        >
            <p className="text-foreground/60 text-sm">
                &copy; {year} {personalInfo.name}. Built with passion.
            </p>
        </motion.footer>
    );
}
