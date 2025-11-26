"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function HeroVideo() {
    return (
        <div className="relative h-[100svh] w-full overflow-hidden bg-white">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    poster="/banner.jpg" // Fallback image
                >
                    <source src="/hero_video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                {/* Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-transparent" />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, staggerChildren: 0.2 }}
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-secondary font-bold tracking-widest uppercase mb-4 text-sm md:text-base"
                    >
                        Official Production House
                    </motion.h2>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold text-white mb-6 leading-tight drop-shadow-2xl"
                        style={{ fontFamily: 'var(--font-outfit), sans-serif', fontWeight: 500 }}
                    >
                        <span className="drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">THE VOICE OF</span> <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-white drop-shadow-[0_0_40px_rgba(210,125,45,0.5)]">ADIVASI</span>{" "}
                        <span className="drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">CULTURE</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="text-gray-200 max-w-2xl mx-auto mb-10 text-lg drop-shadow-lg"
                    >
                        Bridging the gap between traditional roots and modern cinema.
                        Experience the untold stories of the land in high definition.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0, duration: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mx-auto sm:max-w-none"
                    >
                        <a
                            href="https://youtu.be/3tWgV4_JJxU?si=qaNR1faefLOnSw66"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-bold flex items-center justify-center transition-all transform hover:scale-105 shadow-lg hover:shadow-xl w-full sm:w-auto"
                        >
                            <Play className="mr-2 fill-current" size={20} />
                            Watch New Release
                        </a>
                    </motion.div>
                </motion.div>
            </div>


        </div>
    );
}
