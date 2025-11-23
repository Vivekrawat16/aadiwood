"use client";

import { motion, useMotionValue } from "framer-motion";
import { partners } from "@/lib/partnersData";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";

export default function PartnersSection() {
    const x = useMotionValue(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    // Auto-scroll speed
    const AUTO_SCROLL_SPEED = 0.3;

    // Duplicate partners array for smooth infinite loop
    const extendedPartners = [...partners, ...partners];

    // Infinite auto-scroll
    useEffect(() => {
        let animationFrame: number;

        const autoScroll = () => {
            if (!isHovering && !isDragging) {
                x.set(x.get() - AUTO_SCROLL_SPEED);
                if (containerRef.current && x.get() < -containerRef.current.scrollWidth / 2) {
                    x.set(0);
                }
            }
            animationFrame = requestAnimationFrame(autoScroll);
        };

        animationFrame = requestAnimationFrame(autoScroll);
        return () => cancelAnimationFrame(animationFrame);
    }, [isHovering, isDragging, x]);

    const scroll = (direction: "left" | "right") => {
        x.set(x.get() + (direction === "left" ? 300 : -300));
    };

    return (
        <section id="partners" className="relative py-16 bg-[#0a0a0a] overflow-visible">
            {/* Gradient glow background */}
            <div className="absolute top-0 left-1/3 w-[280px] h-[280px] bg-primary/20 rounded-full blur-[90px] opacity-30 -z-10"></div>
            <div className="absolute bottom-0 right-1/3 w-[280px] h-[280px] bg-secondary/20 rounded-full blur-[90px] opacity-30 -z-10"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Title */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-white"
                    >
                        CREATIVE{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary">
                            NETWORK
                        </span>
                    </motion.h2>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        className="w-28 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto mt-5 rounded-full"
                    ></motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mt-4"
                    >
                        Collaborating with visionary creators to shape the future of digital entertainment.
                    </motion.p>
                </div>

                {/* Carousel */}
                <div
                    className="relative group"
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    {/* Navigation buttons */}
                    <button
                        onClick={() => scroll("left")}
                        className="absolute left-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-black/40 hover:bg-primary text-white rounded-full backdrop-blur-sm flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                    >
                        <ChevronLeft size={22} />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-black/40 hover:bg-primary text-white rounded-full backdrop-blur-sm flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                    >
                        <ChevronRight size={22} />
                    </button>

                    {/* Scrollable list */}
                    <div className="overflow-hidden" ref={containerRef}>
                        <motion.div
                            className="flex gap-8 py-14 px-5 w-max"
                            style={{ x }}
                            drag="x"
                            dragElastic={0.1}
                            onDragStart={() => setIsDragging(true)}
                            onDragEnd={() => setIsDragging(false)}
                            whileTap={{ cursor: "grabbing" }}
                        >
                            {extendedPartners.map((partner, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.02 }}
                                    className="relative w-[300px] sm:w-[320px] flex-shrink-0 bg-[#151515]/90 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-xl flex flex-col items-center"
                                >
                                    {/* Floating profile image */}
                                    <div className="absolute -top-16 w-28 h-28 rounded-full shadow-lg">
                                        <img
                                            src={partner.logo}
                                            alt={partner.name}
                                            className="w-full h-full object-cover rounded-full"
                                        />
                                    </div>

                                    {/* Card Info */}
                                    <div className="mt-20 text-center">
                                        <h3 className="text-lg font-bold text-white mb-2">{partner.name}</h3>

                                        <div className="flex justify-center gap-2 mb-3 text-xs">
                                            {/* ✔ Updated Subscriber Badge */}
                                            <span className="px-2 py-1 bg-white/10 text-white/70 border border-white/20 rounded-full">
                                                {partner.subscribers}
                                            </span>

                                            <span className="px-2 py-1 bg-primary/10 text-primary rounded-full">
                                                {partner.category}
                                            </span>
                                        </div>

                                        <p className="text-xs text-gray-400 leading-relaxed line-clamp-4">
                                            {partner.description}
                                        </p>
                                    </div>

                                    {/* ✔ Updated Gradient Button */}
                                    <a
                                        href={partner.channelUrl}
                                        target="_blank"
                                        className="mt-auto w-full text-center text-xs font-medium py-2 rounded-full 
                               bg-gradient-to-r from-primary to-secondary 
                               text-white shadow-md hover:opacity-90 transition-all duration-300"
                                    >
                                        View Profile →
                                    </a>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
