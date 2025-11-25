"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X } from "lucide-react";
import { WarliDivider, GondOverlay } from "@/components/ui/WarliComponents";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function ExplorePage() {
    const { language } = useLanguage();
    const t = translations[language].explore;

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#020501] to-deep-forest relative overflow-x-hidden text-warm-taupe font-body">
            {/* Noise Texture Overlay */}
            <div className="fixed inset-0 opacity-5 pointer-events-none z-0 mix-blend-overlay"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            {/* Close Button */}
            <Link href="/" className="fixed top-20 md:top-6 left-4 md:right-6 md:left-auto z-50">
                <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-midnight-canopy/50 backdrop-blur-md border border-terracotta/50 flex items-center justify-center text-terracotta hover:bg-terracotta hover:text-white transition-colors shadow-lg"
                >
                    <X size={20} className="md:hidden" />
                    <X size={24} className="hidden md:block" />
                </motion.button>
            </Link>

            <div className="container mx-auto px-4 py-12 relative z-10">
                {/* Glassmorphism Container */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl mx-auto bg-deep-forest/40 backdrop-blur-xl border border-white/5 rounded-[20px] overflow-hidden shadow-2xl"
                >

                    {/* Hero Section */}
                    <div className="relative h-[60vh] w-full">
                        <Image
                            src="/explore-hero.png"
                            alt="Tribal Guardian overlooking forest"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-deep-forest via-transparent to-transparent opacity-90" />

                        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 text-center">
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-terracotta drop-shadow-lg leading-tight"
                            >
                                {t.title} <br />
                                <span className="text-white">{t.subtitle}</span>
                            </motion.h1>
                        </div>
                    </div>

                    {/* Article Body */}
                    <div className="p-8 md:p-16 space-y-16">

                        {/* Intro Text */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="max-w-3xl mx-auto text-center"
                        >
                            <p className="text-lg md:text-xl leading-relaxed text-warm-taupe/90 font-light">
                                {t.intro}
                            </p>
                        </motion.div>

                        <WarliDivider />

                        {/* Mid-Section Visual Break */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="order-2 md:order-1"
                            >
                                <h3 className="text-2xl font-display font-bold text-ochre-gold mb-6">{t.digitalRoots}</h3>
                                <p className="text-lg leading-relaxed text-gray-300">
                                    {t.digitalRootsDesc}
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl border border-ochre-gold/20 order-1 md:order-2 group"
                            >
                                <Image
                                    src="/explore-mid.png"
                                    alt="Abstract Jal Jungle Jamin Art"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <GondOverlay />
                            </motion.div>
                        </div>

                        <WarliDivider />

                        {/* Conclusion & Festival Visual */}
                        <div className="space-y-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="max-w-3xl mx-auto text-center"
                            >
                                <p className="text-xl md:text-2xl font-display text-white leading-relaxed">
                                    {t.conclusion}
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl border border-terracotta/20"
                            >
                                <Image
                                    src="/explore-festival.png"
                                    alt="Bhangoriya Festival Dancers"
                                    fill
                                    sizes="100vw"
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-midnight-canopy/80 via-transparent to-transparent" />
                            </motion.div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </div>
    );
}
