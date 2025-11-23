"use client";

import { useParams } from "next/navigation";
import { mockVideos } from "@/lib/mockData";
import Link from "next/link";
import { ArrowLeft, Calendar, Eye, Share2, ThumbsUp } from "lucide-react";
import Image from "next/image";

export default function VideoPage() {
    const params = useParams();
    const id = params.id as string;
    const video = mockVideos.find((v) => v.id === id);

    if (!video) {
        return (
            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mb-4">Video Not Found</h1>
                <Link href="/" className="text-primary hover:underline">
                    Return Home
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-black text-white pt-24 pb-12">
            <div className="container mx-auto px-4">
                <Link
                    href="/"
                    className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors"
                >
                    <ArrowLeft size={20} className="mr-2" />
                    Back to Home
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Video Player */}
                        <div className="relative aspect-video bg-gray-900 rounded-xl overflow-hidden mb-6 border border-white/10 shadow-2xl">
                            <iframe
                                src={video.videoUrl}
                                title={video.title}
                                className="absolute inset-0 w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>

                        {/* Video Info */}
                        <h1 className="text-2xl md:text-3xl font-bold mb-4">{video.title}</h1>

                        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
                            <div className="flex items-center space-x-4 text-gray-400 text-sm">
                                <span className="flex items-center">
                                    <Eye size={16} className="mr-2" />
                                    {video.views} views
                                </span>
                                <span className="flex items-center">
                                    <Calendar size={16} className="mr-2" />
                                    2 days ago
                                </span>
                            </div>

                            <div className="flex items-center space-x-4">
                                <button className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors">
                                    <ThumbsUp size={18} />
                                    <span>Like</span>
                                </button>
                                <button className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors">
                                    <Share2 size={18} />
                                    <span>Share</span>
                                </button>
                            </div>
                        </div>

                        <div className="bg-[#1A1A1A] p-6 rounded-xl border border-white/5">
                            <h3 className="font-bold mb-2">Description</h3>
                            <p className="text-gray-400 leading-relaxed">
                                This is a placeholder description for the video "{video.title}".
                                In a real application, this would contain the full video description,
                                credits, and other relevant information.
                            </p>
                            <div className="mt-4 pt-4 border-t border-white/5">
                                <span className="text-primary font-bold text-sm uppercase tracking-wider">
                                    Category: {video.category}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar / Recommended (Mock) */}
                    <div className="lg:col-span-1">
                        <h3 className="text-xl font-bold mb-4">Up Next</h3>
                        <div className="space-y-4">
                            {mockVideos
                                .filter((v) => v.id !== video.id)
                                .slice(0, 4)
                                .map((relatedVideo) => (
                                    <Link
                                        href={`/video/${relatedVideo.id}`}
                                        key={relatedVideo.id}
                                        className="flex gap-3 group"
                                    >
                                        <div className="relative w-40 aspect-video rounded-lg overflow-hidden flex-shrink-0">
                                            <Image
                                                src={relatedVideo.thumbnail}
                                                alt={relatedVideo.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-300"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm line-clamp-2 group-hover:text-primary transition-colors">
                                                {relatedVideo.title}
                                            </h4>
                                            <p className="text-xs text-gray-400 mt-1">{relatedVideo.views} views</p>
                                        </div>
                                    </Link>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
