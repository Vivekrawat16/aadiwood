"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Home, Video, Users, Info, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeLink, setActiveLink] = useState("/");
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

            {/* Mobile Top Navigation */}
            <nav className="fixed top-0 left-0 w-full z-50 md:hidden glass-nav border-b border-ochre-gold/20">
                <div className="flex items-center justify-between p-4">
                    <Link href="/" className="flex items-center">
                        <Image
                            src="/logo-full-v2.png"
                            alt="Aadiwood"
                            width={120}
                            height={40}
                            className="object-contain brightness-200"
                            style={{ width: "auto", height: "auto" }}
                        />
                    </Link>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="p-2 text-warm-taupe hover:text-ochre-gold transition-colors"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="border-t border-ochre-gold/10 bg-midnight-canopy/40 backdrop-blur-xl"
                        >
                            <div className="flex flex-col p-4 space-y-2">
                                {navLinks.map((link) => {
                                    const isActive = activeLink === link.href;
                                    return (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => {
                                                setActiveLink(link.href);
                                                setMobileMenuOpen(false);
                                            }}
                                            className={`py-3 px-4 rounded-lg text-sm font-medium transition-all ${isActive ? "text-sapling-green bg-sapling-green/10" : "text-warm-taupe/80 hover:bg-white/5"}`}
                                        >
                                            {link.name}
                                        </Link>
                                    );
                                })}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </>
    );
}
