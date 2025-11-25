"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, Play, Camera, Film, Palette, TrendingUp, Award, Users } from "lucide-react";
import { WarliDivider } from "@/components/ui/WarliComponents";
import Button from "@/components/ui/Button";

const stats = [
    { label: "Views", value: "200M+", color: "text-sapling-green" },
    { label: "Subscribers", value: "740K+", color: "text-white" },
    { label: "Silver Creator Award", value: "✓", color: "text-ochre-gold" }
];

const videos = [
    {
        id: 1,
        title: "Jangal Rakhwala Re",
        category: "Featured Release",
        thumbnail: "/thumbnail_01.jpg",
        span: "col-span-1 md:col-span-2 row-span-2",
        link: "https://youtu.be/HnnMo5dMdgs?si=9h51-T-EFAXlVglq"
    },
    {
        id: 2,
        title: "Bhangoriya Festival",
        category: "Director's Cut",
        thumbnail: "/thumbnail_04.jpg",
        span: "col-span-1 md:col-span-1 row-span-2",
        link: "https://youtu.be/4MoWGtFKTsw?si=mVfuRsJReklWwloa"
    },
    {
        id: 3,
        title: "Behind The Scenes",
        category: "Production Insights",
        thumbnail: "/thumbnail_05.png",
        span: "col-span-1 md:col-span-1 row-span-1"
    }
];

const techSpecs = [
    { icon: Camera, label: "Aerial Cinematography" },
    { icon: Film, label: "Ultra HD Production" },
    { icon: Palette, label: "DI Color Grading" }
];

export default function ShowreelPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#020501] to-deep-forest relative overflow-x-hidden text-warm-taupe font-body">
            {/* Noise Texture Overlay */}
            <div className="fixed inset-0 opacity-5 pointer-events-none z-0 mix-blend-overlay"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            {/* Close Button */}
            <Link href="/" className="fixed top-6 right-6 z-50">
                <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full bg-midnight-canopy/50 backdrop-blur-md border border-terracotta/50 flex items-center justify-center text-terracotta hover:bg-terracotta hover:text-white transition-colors shadow-lg"
                >
                    <X size={24} />
                </motion.button>
            </Link>

            {/* Hero Section */}
            <section className="relative h-[80vh] w-full overflow-hidden">
                <Image
                    src="/showreel-hero1.png"
                    alt="Cinematic Camera in Forest"
                    fill
                    className="object-cover brightness-90"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-canopy via-midnight-canopy/60 to-transparent opacity-95" />

                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-ochre-gold mb-6 leading-tight drop-shadow-lg"
                    >
                        The Lens of Nimar:<br />
                        <span className="text-warm-taupe">A Visual Legacy</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-warm-taupe/90 text-lg md:text-xl max-w-3xl mx-auto mb-10 font-light"
                    >
                        From the valleys of Sendhwa to screens worldwide. We don't just record culture; we elevate it.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                    >
                        <a href="https://youtube.com/@aadiwood7?si=fauyBwgK29dFBi_i" target="_blank" rel="noopener noreferrer">
                            <button className="group relative px-10 py-4 bg-white/10 backdrop-blur-md border-2 border-ochre-gold rounded-full text-ochre-gold font-bold text-lg tracking-wide hover:bg-ochre-gold hover:text-midnight-canopy transition-all duration-300 shadow-xl flex items-center gap-3 overflow-hidden">
                                <span className="relative z-10 flex items-center gap-3">
                                    WATCH SHOWREEL
                                    <Play size={20} fill="currentColor" />
                                </span>
                                <div className="absolute inset-0 bg-ochre-gold transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                            </button>
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="relative py-12 bg-midnight-canopy/40 backdrop-blur-md border-y border-white/10">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-16 text-center">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <h3 className={`text-4xl md:text-6xl font-display font-bold ${stat.color} mb-2`}>
                                    {stat.value}
                                </h3>
                                <p className="text-gray-400 text-sm uppercase tracking-widest">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Warli Divider */}
            <WarliDivider />

            {/* Video Gallery - Bento Grid */}
            <section className="container mx-auto px-4 py-16 md:py-24 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-5xl font-display font-bold text-ochre-gold text-center mb-12"
                >
                    Featured Works
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
                    {videos.map((video, index) => {
                        const CardContent = (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                whileHover={{ scale: 0.98, y: -8 }}
                                className="relative w-full h-full rounded-3xl overflow-hidden group cursor-pointer bg-deep-forest/60 backdrop-blur-sm border border-white/5"
                            >
                                <Image
                                    src={video.thumbnail}
                                    alt={video.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 brightness-90"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-midnight-canopy via-midnight-canopy/40 to-transparent opacity-90" />

                                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-16 h-16 rounded-full bg-ochre-gold/20 backdrop-blur-md flex items-center justify-center mb-4 border-2 border-ochre-gold">
                                        <Play size={28} className="text-ochre-gold ml-1" fill="currentColor" />
                                    </div>
                                </div>

                                <div className="absolute bottom-0 left-0 w-full p-6 z-10">
                                    <p className="text-ochre-gold text-xs font-bold uppercase mb-2">{video.category}</p>
                                    <h3 className="text-white font-display text-xl md:text-2xl font-bold">{video.title}</h3>
                                </div>
                            </motion.div>
                        );

                        return video.link ? (
                            <a key={video.id} href={video.link} target="_blank" rel="noopener noreferrer" className={video.span}>
                                {CardContent}
                            </a>
                        ) : (
                            <div key={video.id} className={video.span}>
                                {CardContent}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Technical Specs Footer */}
            <section className="relative py-16 border-t border-white/10">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap justify-center gap-12 md:gap-20"
                    >
                        {techSpecs.map((spec, index) => (
                            <motion.div
                                key={spec.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col items-center gap-3 group"
                            >
                                <div className="w-16 h-16 rounded-full bg-ochre-gold/10 flex items-center justify-center border border-ochre-gold/30 group-hover:bg-ochre-gold/20 transition-colors">
                                    <spec.icon size={32} className="text-ochre-gold" />
                                </div>
                                <p className="text-warm-taupe text-sm font-medium text-center">{spec.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
