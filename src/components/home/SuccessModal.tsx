"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, Mic, PenTool, Music, Video } from "lucide-react";
import Button from "@/components/ui/Button";

interface SuccessModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-midnight-canopy/80 backdrop-blur-[20px]"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{
                            scale: 1,
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.5, ease: "easeOut" }
                        }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-deep-forest/40 backdrop-blur-xl border border-white/5 rounded-[20px] shadow-2xl scrollbar-hide z-10"
                    >
                        {/* Noise Texture */}
                        <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-overlay"
                            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
                        />

                        {/* Close Button */}
                        <motion.button
                            whileHover={{ scale: 1.1, rotate: 90 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={onClose}
                            className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-midnight-canopy/50 backdrop-blur-md border border-terracotta/50 flex items-center justify-center text-terracotta hover:bg-terracotta hover:text-white transition-colors shadow-lg"
                        >
                            <X size={24} />
                        </motion.button>

                        {/* Hero Image */}
                        <div className="relative h-[50vh] w-full">
                            <Image
                                src="/success-hero-v2.jpg"
                                alt="Jangal Rakhwala Re Success"
                                fill
                                sizes="(max-width: 768px) 100vw, 80vw"
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-deep-forest via-transparent to-transparent opacity-90" />

                            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                                <span className="inline-block px-4 py-1.5 bg-terracotta text-white text-xs font-bold rounded-full mb-4 shadow-lg tracking-wider uppercase">
                                    Record Breaker
                                </span>
                                <h2 className="text-3xl md:text-5xl font-display font-bold text-white leading-tight drop-shadow-lg">
                                    100 Million Heartbeats: <br />
                                    <span className="text-sapling-green">The Anthem That Woke the World</span>
                                </h2>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 md:p-12 space-y-12">

                            {/* Stats Row */}
                            <div className="flex flex-wrap gap-12 justify-center text-center border-b border-white/10 pb-12">
                                <div>
                                    <h3 className="text-4xl md:text-6xl font-display font-bold text-white mb-2">100M+</h3>
                                    <p className="text-ochre-gold text-sm uppercase tracking-widest font-bold">YouTube Views</p>
                                </div>
                                <div>
                                    <h3 className="text-4xl md:text-6xl font-display font-bold text-white mb-2">1M+</h3>
                                    <p className="text-ochre-gold text-sm uppercase tracking-widest font-bold">Instagram Reels</p>
                                </div>
                            </div>

                            {/* Text Content */}
                            <div className="max-w-3xl mx-auto text-center space-y-6">
                                <p className="text-xl leading-relaxed text-warm-taupe/90 font-light">
                                    "Jangal Rakhwala Re" is not merely a song; it is a cultural roar. In an era dominated by mainstream pop, this track emerged from the valleys of Nimar to become the digital anthem of the Adivasi identity.
                                </p>
                                <p className="text-lg leading-relaxed text-gray-400">
                                    With powerful vocals by Bheem Kanoje, Piru Bhai Solanki, and Sheetal Senani, the track bridges the gap between ancient tribal rhythms and modern cinematic grandeur.
                                </p>
                            </div>

                            {/* Credits Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/5 p-8 rounded-2xl border border-white/5">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-ochre-gold/10 flex items-center justify-center text-ochre-gold shrink-0 border border-ochre-gold/20">
                                        <Mic size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-ochre-gold font-bold text-sm uppercase mb-1">Vocals</h4>
                                        <p className="text-white text-lg font-display">Bheem Kanoje, Piru Bhai Solanki, Sheetal Senani</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-ochre-gold/10 flex items-center justify-center text-ochre-gold shrink-0 border border-ochre-gold/20">
                                        <PenTool size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-ochre-gold font-bold text-sm uppercase mb-1">Lyrics</h4>
                                        <p className="text-white text-lg font-display">Rohit Padiyar</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-ochre-gold/10 flex items-center justify-center text-ochre-gold shrink-0 border border-ochre-gold/20">
                                        <Music size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-ochre-gold font-bold text-sm uppercase mb-1">Music Director</h4>
                                        <p className="text-white text-lg font-display">Ritesh Kirade</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-ochre-gold/10 flex items-center justify-center text-ochre-gold shrink-0 border border-ochre-gold/20">
                                        <Video size={24} />
                                    </div>
                                    <div>
                                        <h4 className="text-ochre-gold font-bold text-sm uppercase mb-1">Director</h4>
                                        <p className="text-white text-lg font-display">Rohit Vaishaki (Aadiwood)</p>
                                    </div>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="flex justify-center pt-4">
                                <Link href="/video/1" className="w-full md:w-auto">
                                    <Button variant="primary" className="w-full px-16 py-5 text-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                                        Watch Full Video
                                    </Button>
                                </Link>
                            </div>

                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
