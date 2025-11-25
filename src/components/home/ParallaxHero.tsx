"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Image from "next/image";

export default function ParallaxHero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const foregroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

    return (
        <div ref={ref} className="relative min-h-screen md:h-screen w-full overflow-hidden bg-midnight-canopy pt-16 md:pt-0">
            {/* Layer 0: Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0 brightness-125"
            >
                <source src="/hero_video.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-midnight-canopy/30 z-5" />

            {/* Layer 1: Tribal Pattern Overlay */}
            <div className="absolute inset-0 z-10 opacity-10"
                style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C4A484' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }}
            />

            {/* Layer 2: Main Content (Text) */}
            <motion.div
                className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4 my-8 md:my-0 mt-16 md:mt-0"
                style={{ y: typeof window !== 'undefined' && window.innerWidth >= 768 ? textY : 0 }}
            >
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-ochre-gold font-display tracking-[0.2em] uppercase mb-4 text-sm md:text-base"
                >
                    The Brand of Nimar
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-7xl lg:text-8xl font-display font-bold text-warm-taupe mb-6 leading-tight"
                >
                    THE VOICE OF <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sapling-green to-terracotta">
                        ADIVASI CULTURE
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-white/90 max-w-2xl mx-auto mb-10 text-lg md:text-xl font-light px-4 drop-shadow-lg"
                >
                    Bridging the gap between ancient Adivasi roots and modern cinema.
                    <br />The voice of the forest, now in high definition.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="flex flex-col md:flex-row gap-3 md:gap-4 w-full max-w-md md:max-w-none justify-center px-4"
                >
                    <Link href="/showreel" className="w-full md:w-auto">
                        <button className="w-full md:w-auto px-4 md:px-6 py-2.5 md:py-3 bg-transparent backdrop-blur-sm text-white font-bold rounded-full hover:bg-terracotta/20 transition-all shadow-lg border-2 border-terracotta">
                            Watch Showreel
                        </button>
                    </Link>
                    <Link href="/explore" className="w-full md:w-auto">
                        <button className="w-full md:w-auto px-4 md:px-6 py-2.5 md:py-3 bg-midnight-canopy/60 backdrop-blur-md text-warm-taupe font-bold rounded-full hover:bg-midnight-canopy/80 transition-all shadow-lg border border-ochre-gold/40">
                            Explore Culture
                        </button>
                    </Link>
                </motion.div>
            </motion.div>

        </div>
    );
}
