"use client";

import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "ghost";
    children: React.ReactNode;
}

export default function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
    const variants = {
        primary: "bg-terracotta text-white shadow-lg hover:shadow-terracotta/40",
        secondary: "bg-ochre-gold text-midnight-canopy hover:bg-white",
        ghost: "bg-transparent border border-ochre-gold text-ochre-gold hover:bg-ochre-gold/10",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`relative px-8 py-3 rounded-full font-bold tracking-wide transition-all duration-300 overflow-hidden group ${variants[variant]} ${className}`}
            {...props}
        >
            <span className="relative z-10">{children}</span>

            {/* Organic Morphing Hover Effect */}
            <motion.div
                className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 blur-md"
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ scale: 1.2, opacity: 1 }}
                transition={{ duration: 0.4 }}
            />
        </motion.button>
    );
}
