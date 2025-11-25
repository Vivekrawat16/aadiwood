"use client";

import { useParams } from "next/navigation";
import { mockVideos } from "@/lib/mockData";
import Link from "next/link";
import { ArrowLeft, Calendar, Eye, Share2, ThumbsUp, Play } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { WarliDivider } from "@/components/ui/WarliComponents";

export default function VideoPage() {
    const params = useParams();
    const id = params.id as string;
    const video = mockVideos.find((v) => v.id === id);

    if (!video) {
        return (
            <div className="min-h-screen bg-midnight-canopy text-warm-taupe flex flex-col items-center justify-center">
                <h1 className="text-4xl font-display font-bold mb-4">Video Not Found</h1>
                <Link href="/" className="text-terracotta hover:underline">
                    Return Home
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-midnight-canopy text-warm-taupe pt-24 pb-12 overflow-x-hidden">
            {/* Ambient Glow Background */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[60vh] bg-deep-forest/20 blur-[120px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <Link
                    href="/"
                    className="inline-flex items-center text-ochre-gold hover:text-white mb-8 transition-colors group"
                >
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Forest
                </Link>

                {/* Cinema Mode Player */}
                <div className="max-w-6xl mx-auto mb-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-ochre-gold/10 group"
                    >
                        {/* Ambient Light Behind Player */}
                        <div className="absolute -inset-4 bg-terracotta/20 blur-3xl -z-10 opacity-50 group-hover:opacity-70 transition-opacity duration-1000" />

                        <iframe
                            src={video.videoUrl}
                            title={video.title}
                            className="absolute inset-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {/* Main Info */}
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-3xl md:text-5xl font-display font-bold text-white mb-4 leading-tight"
                            >
                                {video.title}
                            </motion.h1>

                            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 font-medium">
                                <span className="flex items-center text-sapling-green">
                                    <Eye size={18} className="mr-2" />
                                    {video.views} views
                                </span>
                                <span className="flex items-center">
                                    <Calendar size={18} className="mr-2" />
                                    2 days ago
                                </span>
                                <span className="px-3 py-1 bg-white/5 rounded-full border border-white/10 text-xs uppercase tracking-wider">
                                    {video.category}
                                </span>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <Button variant="primary" className="flex items-center gap-2 px-6">
                                <ThumbsUp size={18} /> Like
                            </Button>
                            <Button variant="ghost" className="flex items-center gap-2 px-6">
                                <Share2 size={18} /> Share
                            </Button>
                        </div>

                        <div className="glass-panel p-8 rounded-2xl">
                            <h3 className="font-display font-bold text-xl text-ochre-gold mb-4">Story of the Song</h3>
                            <p className="text-gray-300 leading-relaxed text-lg font-light">
                                {video.description || "Immerse yourself in the rhythm of the Nimar valley. This visual masterpiece captures the essence of Adivasi tradition, blending ancient instruments with modern storytelling."}
                            </p>
                        </div>
                    </div>

                    {/* Sidebar / Up Next */}
                    <div className="lg:col-span-1">
                        <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
                            <Play size={20} className="text-terracotta" /> Up Next
                        </h3>
                        <div className="space-y-6">
                            {mockVideos
                                .filter((v) => v.id !== video.id)
                                .slice(0, 4)
                                .map((relatedVideo, index) => (
                                    <motion.div
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        key={relatedVideo.id}
                                    >
                                        <Link
                                            href={`/video/${relatedVideo.id}`}
                                            className="flex gap-4 group p-3 rounded-xl hover:bg-white/5 transition-colors"
                                        >
                                            <div className="relative w-32 aspect-video rounded-lg overflow-hidden flex-shrink-0 border border-white/10">
                                                <Image
                                                    src={relatedVideo.thumbnail}
                                                    alt={relatedVideo.title}
                                                    fill
                                                    sizes="128px"
                                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-sm text-warm-taupe group-hover:text-terracotta transition-colors line-clamp-2 mb-1">
                                                    {relatedVideo.title}
                                                </h4>
                                                <p className="text-xs text-gray-500">{relatedVideo.views} views</p>
                                            </div>
                                        </Link>
                                    </motion.div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20">
                <WarliDivider />
            </div>
        </div>
    );
}
