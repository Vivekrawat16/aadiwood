"use client";

import { motion } from "framer-motion";

export function WarliDivider() {
    return (
        <div className="w-full h-12 flex items-center justify-center overflow-hidden my-12 opacity-40">
            <svg width="100%" height="40" preserveAspectRatio="none">
                <pattern id="warli-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M0 20 L10 0 L20 20 L30 40 L40 20" fill="none" stroke="#C4A484" strokeWidth="1.5" />
                    <circle cx="10" cy="5" r="2" fill="#C4A484" />
                    <circle cx="30" cy="35" r="2" fill="#C4A484" />
                </pattern>
                <rect x="0" y="0" width="100%" height="40" fill="url(#warli-pattern)" />
            </svg>
        </div>
    );
}

export function WarliLoader() {
    return (
        <div className="flex items-center justify-center p-8">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="relative w-16 h-16"
            >
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute top-0 left-1/2 w-2 h-8 bg-sapling-green origin-bottom rounded-full"
                        style={{ transform: `translateX(-50%) rotate(${i * 60}deg)` }}
                    />
                ))}
            </motion.div>
        </div>
    );
}

export function GondOverlay() {
    return (
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0 gond-texture mix-blend-overlay" />
    );
}
