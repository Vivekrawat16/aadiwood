"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Play, Drum, Circle, Wind } from "lucide-react";
import { WarliDivider } from "@/components/ui/WarliComponents";

interface CulturalModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const instruments = [
    { name: "Mandal", icon: Drum, description: "The heavy percussion soul of the tribe" },
    { name: "Thali", icon: Circle, description: "Providing the sharp, metallic counter-rhythm" },
    { name: "Pawri", icon: Wind, description: "The haunting wind instrument of the valleys" }
];

export default function CulturalModal({ isOpen, onClose }: CulturalModalProps) {
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

                    {/* Modal - Slide up animation */}
                    <motion.div
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            transition: { type: "spring", damping: 30, stiffness: 300 }
                        }}
                        exit={{ y: "100%", opacity: 0 }}
                        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-deep-forest/40 backdrop-blur-xl border border-white/5 rounded-t-[20px] md:rounded-[20px] shadow-2xl scrollbar-hide z-10"
                        style={{ position: 'relative' }}
                    >
                        {/* Wood Grain Texture */}
                        <div className="absolute inset-0 opacity-5 pointer-events-none mix-blend-overlay"
                            style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 Q50 50 0 100 T0 200 L200 200 Q150 150 200 100 T200 0 Z' fill='%23F7F3EE' fill-opacity='0.05'/%3E%3C/svg%3E")` }}
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
                                src="/cultural-hero.png"
                                alt="Traditional Mandal Drum"
                                fill
                                sizes="(max-width: 768px) 100vw, 80vw"
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-deep-forest via-transparent to-transparent opacity-90" />

                            <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 space-y-4">
                                <h2 className="text-3xl md:text-5xl font-display font-bold text-ochre-gold leading-tight drop-shadow-lg">
                                    The Pulse of the Satpura
                                </h2>
                                <p className="text-warm-taupe/90 text-lg md:text-xl font-light max-w-3xl">
                                    Exploring the Mandal and the Timli—the ancient rhythms powering Aadiwood's modern hits.
                                </p>
                                {/* Audio Preview Button */}
                                <button className="inline-flex items-center gap-3 px-6 py-3 bg-terracotta text-white rounded-full hover:bg-terracotta/80 transition-all shadow-lg">
                                    <Play size={20} fill="white" />
                                    <span className="font-bold text-sm">Hear the Beat</span>
                                </button>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 md:p-12 space-y-12">

                            {/* Main Article */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="max-w-3xl mx-auto text-center space-y-6"
                            >
                                <p className="text-xl leading-relaxed text-warm-taupe/90 font-light" style={{ lineHeight: 1.8 }}>
                                    In the digital age of synthesizers and auto-tune, Aadiwood Production remains grounded in a rhythm that is centuries old: the <span className="text-ochre-gold font-bold">Timli</span>. This isn't just a genre; it is the heartbeat of the Bhilala, Bhil and Barela communities of the Nimar valley.
                                </p>
                                <p className="text-lg leading-relaxed text-gray-400" style={{ lineHeight: 1.8 }}>
                                    At the center of this soundscape is the <span className="text-ochre-gold font-medium">Mandal</span>—a large, traditional drum that does not just keep time but commands movement. Whether it is the festive chaos of Bhangoriya or the devotional reverence of Badwa Pujan, the deep, resonant boom of the Mandal is the signal for the community to unite.
                                </p>
                                <p className="text-lg leading-relaxed text-gray-400" style={{ lineHeight: 1.8 }}>
                                    Modern music directors like <span className="text-white font-medium">Ritesh Kirade</span> and <span className="text-white font-medium">Bheem Kanoje</span> have mastered the art of fusing these raw, organic percussion sounds with high-energy digital basslines. This unique blend creates a sound that is distinctively "Aadiwood"—where the dust of the village fair meets the polish of a global studio.
                                </p>
                            </motion.div>

                            <WarliDivider />

                            {/* Instruments Section with Image */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="order-2 md:order-1"
                                >
                                    <h3 className="text-3xl font-display font-bold text-ochre-gold mb-8">The Instruments</h3>
                                    <div className="space-y-6">
                                        {instruments.map((instrument, index) => (
                                            <motion.div
                                                key={instrument.name}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: index * 0.1 }}
                                                className="flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-white/5 hover:border-ochre-gold/30 transition-all"
                                            >
                                                <div className="w-14 h-14 rounded-full bg-ochre-gold/10 flex items-center justify-center text-ochre-gold shrink-0 border border-ochre-gold/20">
                                                    <instrument.icon size={28} />
                                                </div>
                                                <div>
                                                    <h4 className="text-white font-display text-xl font-bold mb-1">{instrument.name}</h4>
                                                    <p className="text-gray-400 text-sm">{instrument.description}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl border border-ochre-gold/20 order-1 md:order-2 group"
                                >
                                    <Image
                                        src="/cultural-instruments.png"
                                        alt="Adivasi musicians performing"
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </motion.div>
                            </div>

                            <WarliDivider />

                            {/* Closing Quote */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="max-w-3xl mx-auto text-center"
                            >
                                <p className="text-2xl font-display text-white leading-relaxed italic">
                                    "When you hear an Aadiwood track, you aren't just hearing a song; you are hearing the echo of the Satpura hills."
                                </p>
                            </motion.div>

                            {/* Close Link */}
                            <div className="text-center pt-8">
                                <button
                                    onClick={onClose}
                                    className="text-gray-500 hover:text-white transition-colors text-sm font-medium"
                                >
                                    Close
                                </button>
                            </div>

                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
