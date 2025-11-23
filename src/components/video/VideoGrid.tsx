"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mockVideos } from "@/lib/mockData";
import { ChevronLeft, ChevronRight, TrendingUp } from "lucide-react";
import Image from "next/image";

export default function VideoGrid() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Show only top 3 videos
    const topVideos = mockVideos.slice(0, 3);
    const currentVideo = topVideos[currentIndex];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % topVideos.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + topVideos.length) % topVideos.length);
    };

    return (
        <section id="videos" className="py-16 md:py-32 bg-gradient-to-br from-gray-50 via-white to-primary/5 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header with badge */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                        <TrendingUp size={18} />
                        <span className="text-sm font-bold uppercase tracking-wider">Trending Now</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-accent mb-6 leading-tight">
                        TOP <span className="cinematic-gradient">HITS</span>
                    </h2>
                    <p className="text-gray-600 text-xl max-w-2xl mx-auto">
                        Experience the most watched cultural masterpieces
                    </p>
                </div>

                {/* Modern Split Layout */}
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Video Preview */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 0.95, x: -50 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.95, x: 50 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="relative group"
                            >
                                <a
                                    href={currentVideo.videoUrl.replace("embed/", "watch?v=")}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {/* Main video card */}
                                    <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">
                                        <Image
                                            src={currentVideo.thumbnail}
                                            alt={currentVideo.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                    </div>
                                </a>
                            </motion.div>
                        </AnimatePresence>

                        {/* Right: Video Info & Navigation */}
                        <div className="space-y-8">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={currentIndex}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2, duration: 0.5 }}
                                        className="flex items-center gap-3 text-primary mb-4"
                                    >
                                        <div className="w-12 h-1 bg-primary"></div>
                                        <span className="font-bold uppercase tracking-wider text-sm">Featured Video #{currentIndex + 1}</span>
                                    </motion.div>

                                    <motion.h3
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3, duration: 0.6 }}
                                        className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-accent mb-6 leading-tight"
                                    >
                                        {currentVideo.title}
                                    </motion.h3>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4, duration: 0.6 }}
                                        className="text-gray-600 text-lg leading-relaxed mb-8"
                                    >
                                        {currentVideo.description || "Experience the authentic voice of Adivasi culture through this captivating visual journey."}
                                    </motion.p>

                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5, duration: 0.5 }}
                                        className="flex flex-wrap gap-2 mb-8"
                                    >
                                        {(currentVideo.tags || []).map((tag, i) => (
                                            <span key={i} className="px-4 py-1 bg-gray-100 text-gray-600 rounded-full text-sm font-medium">
                                                #{tag}
                                            </span>
                                        ))}
                                    </motion.div>
                                    <div className="flex items-center gap-4 mb-8">
                                        {topVideos.map((video, index) => (
                                            <button
                                                key={index}
                                                onClick={() => setCurrentIndex(index)}
                                                className="group relative"
                                            >
                                                <div className={`relative w-24 h-16 rounded-lg overflow-hidden transition-all ${index === currentIndex
                                                    ? 'ring-4 ring-primary shadow-lg scale-110'
                                                    : 'opacity-50 hover:opacity-100'
                                                    }`}>
                                                    <Image
                                                        src={video.thumbnail}
                                                        alt={video.title}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                            </button>
                                        ))}
                                    </div>

                                    <div className="flex flex-col sm:flex-row items-center gap-4">
                                        <div className="flex gap-4 w-full sm:w-auto justify-center">
                                            <button
                                                onClick={prevSlide}
                                                className="w-14 h-14 bg-white hover:bg-primary border-2 border-gray-200 hover:border-primary text-accent hover:text-white rounded-full flex items-center justify-center transition-all shadow-md hover:shadow-xl"
                                            >
                                                <ChevronLeft size={24} />
                                            </button>
                                            <button
                                                onClick={nextSlide}
                                                className="w-14 h-14 bg-primary hover:bg-accent text-white rounded-full flex items-center justify-center transition-all shadow-md hover:shadow-xl"
                                            >
                                                <ChevronRight size={24} />
                                            </button>
                                        </div>

                                        <a
                                            href={currentVideo.videoUrl.replace("embed/", "watch?v=")}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-full sm:flex-1 bg-accent hover:bg-primary text-white py-4 px-8 rounded-full font-bold text-center transition-all shadow-lg hover:shadow-2xl uppercase tracking-wider"
                                        >
                                            Watch Now
                                        </a>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
