"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function HeroVideo() {
    return (
        <div className="relative h-screen w-full overflow-hidden bg-white">
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
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-yellow-400 font-bold tracking-widest uppercase mb-4 text-sm md:text-base">
                        Official Production House
                    </h2>
                    <h1 className="text-6xl md:text-8xl font-display font-bold text-white mb-6 leading-tight">
                        THE VOICE OF <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-500 to-red-600">ADIVASI</span> CULTURE
                    </h1>
                    <p className="text-gray-200 max-w-2xl mx-auto mb-10 text-lg">
                        Bridging the gap between traditional roots and modern cinema.
                        Experience the untold stories of the land in high definition.
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <button className="bg-primary hover:bg-accent text-white px-8 py-4 rounded-full font-bold flex items-center justify-center transition-all transform hover:scale-105 shadow-lg">
                            <Play className="mr-2 fill-current" size={20} />
                            Watch New Release
                        </button>
                        <button className="bg-white hover:bg-gray-50 border-2 border-primary text-primary hover:text-accent px-8 py-4 rounded-full font-bold transition-all">
                            Explore Artists
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-gray-400 rounded-full" />
                </div>
            </motion.div>
        </div>
    );
}
