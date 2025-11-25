"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Home, Video, Users, Info, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState("/");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/", icon: Home },
        { name: "Videos", href: "/#videos", icon: Video },
        { name: "Partners", href: "/#partners", icon: Users },
        { name: "About", href: "/#about", icon: Info },
        { name: "Contact", href: "/#contact", icon: Phone },
    ];

    return (
        <>
            {/* Desktop Floating Pill */}
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:flex items-center px-6 py-3 rounded-full transition-all duration-300 ${scrolled ? "glass-nav shadow-2xl scale-95" : "bg-transparent"
                    }`}
                style={{ width: scrolled ? "auto" : "90%", maxWidth: "1200px" }}
            >
                <Link href="/" className="mr-8">
                    <Image
                        src="/logo-full-v2.png"
                        alt="Aadiwood"
                        width={120}
                        height={40}
                        className="object-contain"
                        style={{ width: "auto", height: "auto" }}
                        priority
                    />
                </Link>

                <div className="flex items-center space-x-1 flex-1 justify-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setActiveLink(link.href)}
                            className="relative px-4 py-2 rounded-full group overflow-hidden"
                        >
                            <span className={`relative z-10 text-sm font-medium tracking-wide transition-colors duration-300 ${activeLink === link.href ? "text-sapling-green" : "text-warm-taupe group-hover:text-white"
                                }`}>
                                {link.name}
                            </span>

                            {/* Bioluminescent Hover Glow */}
                            <span className="absolute inset-0 bg-moss-shadow opacity-0 group-hover:opacity-100 rounded-full blur-md transition-opacity duration-300 -z-0" />
                            <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 rounded-full transition-opacity duration-300 z-0" />
                        </Link>
                    ))}
                </div>

                <div className="ml-8">
                    <Link
                        href="/#contact"
                        className="px-6 py-2 bg-terracotta text-white text-sm font-bold rounded-full hover:bg-sienna transition-colors shadow-lg hover:shadow-terracotta/40"
                    >
                        JOIN US
                    </Link>
                </div>
            </motion.nav>

            {/* Mobile Bottom Navigation */}
            <nav className="fixed bottom-0 left-0 w-full z-50 md:hidden glass-nav border-t border-ochre-gold/20 pb-safe">
                <div className="flex justify-around items-center p-3">
                    {navLinks.map((link) => {
                        const Icon = link.icon;
                        const isActive = activeLink === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setActiveLink(link.href)}
                                className={`flex flex-col items-center space-y-1 p-2 rounded-xl transition-all ${isActive ? "text-sapling-green" : "text-warm-taupe/70"
                                    }`}
                            >
                                <motion.div
                                    whileTap={{ scale: 0.9 }}
                                    animate={isActive ? { y: -5 } : { y: 0 }}
                                >
                                    <Icon size={24} strokeWidth={isActive ? 2.5 : 1.5} />
                                </motion.div>
                                <span className="text-[10px] font-medium">{link.name}</span>
                                {isActive && (
                                    <motion.div
                                        layoutId="mobile-indicator"
                                        className="absolute bottom-1 w-1 h-1 bg-sapling-green rounded-full"
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </nav>
        </>
    );
}
