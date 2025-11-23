"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Video } from "@/lib/mockData";

interface VideoCardProps {
    video: Video;
}

export default function VideoCard({ video }: VideoCardProps) {
    return (
        <a
            href={video.videoUrl.replace("embed/", "watch?v=")}
            target="_blank"
            rel="noopener noreferrer"
        >
            <motion.div
                whileHover={{ y: -10 }}
                className="group relative cinematic-card rounded-lg overflow-hidden cursor-pointer"
            >
                {/* Thumbnail Container */}
                <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                {/* Content */}
                <div className="p-4">
                    <h3 className="text-white font-bold text-lg leading-tight mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                        {video.title}
                    </h3>
                </div>
            </motion.div>
        </a>
    );
}
