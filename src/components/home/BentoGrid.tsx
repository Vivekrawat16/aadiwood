"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Play, Music, Calendar, ArrowUpRight } from "lucide-react";
import { mockVideos } from "@/lib/mockData";



interface BentoGridProps {
    onOpenSuccessModal: () => void;
    onOpenCulturalModal: () => void;
}

export default function BentoGrid({ onOpenSuccessModal, onOpenCulturalModal }: BentoGridProps) {
    const featuredVideo = mockVideos[0];
    const secondaryVideo = mockVideos[1];

    return (
        <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto relative">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12 text-center"
            >
                <h2 className="text-3xl md:text-5xl font-display font-bold text-warm-taupe mb-4">
                    Latest <span className="text-terracotta">Releases</span>
                </h2>
                <div className="w-24 h-1 bg-ochre-gold mx-auto rounded-full" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-auto md:h-[800px]">
                {/* Module A: Featured Video (Large Square) */}
                <motion.div
                    whileHover={{ scale: 0.98 }}
                    onClick={onOpenSuccessModal}
                    className="col-span-1 md:col-span-2 md:row-span-2 relative rounded-3xl overflow-hidden group cursor-pointer glass-panel order-2 md:order-none"
                >
                    <Image
                        src={featuredVideo.thumbnail}
                        alt={featuredVideo.title}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight-canopy via-transparent to-transparent opacity-90" />
                    <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                        <span className="inline-block px-3 py-1 bg-terracotta text-white text-xs font-bold rounded-full mb-3">
                            FEATURED
                        </span>
                        <h3 className="text-2xl md:text-4xl font-display font-bold text-white mb-2">
                            {featuredVideo.title}
                        </h3>
                        <p className="text-gray-300 line-clamp-2 mb-4">{featuredVideo.description}</p>
                        <div className="flex items-center gap-2 text-sapling-green font-bold text-sm uppercase tracking-wider">
                            <Play size={16} fill="currentColor" /> Watch Now
                        </div>
                    </div>
                </motion.div>

                {/* Module B: Artist Spotlight (Vertical Rectangle) */}
                <motion.div
                    whileHover={{ y: -5 }}
                    className="col-span-1 md:col-span-1 md:row-span-2 relative rounded-3xl overflow-hidden glass-panel p-6 flex flex-col justify-end group order-1 md:order-none"
                >
                    <Image
                        src="/artist-spotlight-bg.jpg"
                        alt="Artist Spotlight"
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover brightness-125 group-hover:brightness-150 transition-all"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight-canopy/70 via-midnight-canopy/20 to-transparent" />
                    <div className="relative z-10">
                        <h4 className="text-ochre-gold text-sm font-bold uppercase mb-1">Artist Spotlight</h4>
                        <h3 className="text-2xl font-display font-bold text-white mb-2">Sohan Bhai</h3>
                        <p className="text-gray-400 text-sm mb-4">The voice behind "Jangal Rakhwala"</p>
                        <button className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-terracotta transition-colors">
                            <ArrowUpRight size={20} className="text-white" />
                        </button>
                    </div>
                </motion.div>

                {/* Module C: Cultural Context (Square) */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    onClick={onOpenCulturalModal}
                    className="col-span-1 md:col-span-1 md:row-span-1 rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden cursor-pointer"
                >
                    <Image
                        src="/tribal-beats-bg.png"
                        alt="Tribal Beats"
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover brightness-150"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight-canopy/60 via-midnight-canopy/10 to-transparent" />
                    <div className="absolute top-0 right-0 p-4 opacity-40 z-10">
                        <Music size={48} className="text-ochre-gold" />
                    </div>
                    <h3 className="text-ochre-gold font-display font-bold text-xl relative z-10">
                        Tribal Beats
                    </h3>
                    <p className="text-warm-taupe text-sm relative z-10">
                        Explore the traditional instruments of Nimar.
                    </p>
                </motion.div>

                {/* Module D: Event (Square) */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="col-span-1 md:col-span-1 md:row-span-1 rounded-3xl p-6 flex flex-col justify-between text-white relative overflow-hidden"
                >
                    <Image
                        src="/upcoming-adivasi-bg.jpg"
                        alt="Upcoming Adivasi Event"
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover brightness-125"
                    />
                    <div className="absolute inset-0 bg-midnight-canopy/30" />
                    <div className="relative z-10">
                        <span className="text-xs font-bold opacity-80">UPCOMING</span>
                        <h3 className="font-display font-bold text-xl mt-1">Adivasi Day</h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium relative z-10">
                        <Calendar size={16} /> Aug 9, 2025
                    </div>
                </motion.div>

                {/* Module E: Secondary Video (Wide) */}
                {/* Module E: Secondary Video (Wide) */}
                <Link href={`/video/${secondaryVideo.id}`} className="col-span-1 md:col-span-2 md:row-span-1 block">
                    <motion.div
                        whileHover={{ scale: 0.98 }}
                        className="relative h-full rounded-3xl overflow-hidden group cursor-pointer glass-panel"
                    >
                        <Image
                            src={secondaryVideo.thumbnail}
                            alt={secondaryVideo.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                        <div className="absolute bottom-0 left-0 p-6 flex items-center justify-between w-full">
                            <div>
                                <h3 className="text-xl font-display font-bold text-white">{secondaryVideo.title}</h3>
                                <p className="text-gray-300 text-sm">New Release</p>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                                <Play size={20} className="text-white ml-1" fill="currentColor" />
                            </div>
                        </div>
                    </motion.div>
                </Link>
            </div>
        </section>
    );
}
