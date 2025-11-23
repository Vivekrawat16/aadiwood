"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import HeroVideo from "@/components/home/HeroVideo";
import VideoGrid from "@/components/video/VideoGrid";
import PartnersSection from "@/components/home/PartnersSection";
import ContactFormModal from "@/components/ContactFormModal";
import { founder } from "@/lib/founderData";

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Video */}
      <HeroVideo />

      {/* Video Grid */}
      <VideoGrid />

      {/* Partners & Collaborations Section */}
      <PartnersSection />

      {/* Founder Section */}
      <section
        id="founder"
        className="relative py-12 md:py-16 bg-gradient-to-br from-black via-gray-900 to-gray-950 overflow-hidden"
      >
        <div className="absolute -top-8 -right-8 w-[350px] h-[350px] bg-primary/10 blur-[100px] rounded-full"></div>
        <div className="absolute -bottom-8 -left-8 w-[350px] h-[350px] bg-secondary/10 blur-[100px] rounded-full"></div>
        <div className="container mx-auto px-6 lg:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 md:mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Founder</span>
            </h2>
            <p className="mt-2 text-gray-400 text-xs md:text-sm uppercase tracking-wider">
              Vision behind Aadiwood Production
            </p>
          </motion.div>
          {/* Founder Content */}
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative group flex justify-center md:justify-end"
              >
                <div className="relative w-full max-w-[300px] aspect-[3/4] md:w-96 md:h-[500px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl">
                  <img
                    src={founder.photo}
                    alt={founder.name}
                    className="w-full h-full object-cover object-top rounded-2xl shadow-xl transition-transform duration-500 ease-out group-hover:scale-102 group-hover:shadow-[0_0_30px_rgba(200,0,0,0.25)]"
                  />
                  <div className="absolute -bottom-4 left-0 right-0 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    {Object.entries(founder.social).map(([platform, url], idx) =>
                      url && (
                        <a
                          key={idx}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white hover:text-primary transition-all hover:shadow-md"
                        >
                          <i className={`ri-${platform}-fill text-base`} aria-hidden="true" />
                        </a>
                      )
                    )}
                  </div>
                </div>
              </motion.div>
              {/* Details */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="backdrop-blur-md bg-white/5 p-6 rounded-2xl border border-white/10 shadow-lg space-y-4"
              >
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">{founder.name}</h3>
                  <p className="text-sm text-primary font-semibold tracking-wide">{founder.role}</p>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">{founder.bio}</p>
                <div className="space-y-2 pt-3 border-t border-white/10">
                  <h4 className="text-base font-semibold text-white flex items-center gap-2">
                    <span className="w-5 h-1 bg-primary rounded-full"></span>
                    Key Achievements
                  </h4>
                  <ul className="space-y-1.5">
                    {founder.achievements.map((item: string, i: number) => (
                      <li key={i} className="text-gray-300 flex items-start gap-2 text-sm">
                        <span className="w-1.5 h-1.5 mt-2 bg-primary rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-2">
                  <a
                    href={founder.social.youtube || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary px-5 py-2.5 rounded-full font-semibold text-white uppercase text-xs tracking-wide shadow-md hover:shadow-lg transition-all hover:scale-105"
                  >
                    Follow Journey →
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-12 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-16"
          >
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-accent mb-4">
              ABOUT <span className="cinematic-gradient">AADIWOOD</span>
            </h2>
            <div className="w-16 md:w-24 h-1 bg-primary mx-auto"></div>
          </motion.div>

          {/* Split Layout with Image */}
          <div className="max-w-7xl mx-auto mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative group"
              >
                <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/cultural-heritage.jpg"
                    alt="Adivasi Cultural Heritage"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl"></div>
              </motion.div>

              {/* Right: Description */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <p className="text-gray-600 text-lg leading-relaxed">
                  Aadiwood is a creative production house dedicated to showcasing the rich cultural heritage
                  of the Adivasi community through modern cinematography and storytelling.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  We specialize in creating high-quality music videos, documentaries, and cultural content
                  that bridges traditional roots with contemporary cinema, bringing untold stories to life
                  in stunning high definition.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setIsContactModalOpen(true)}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-secondary px-6 py-3 rounded-full font-bold text-white uppercase text-sm tracking-wide shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    Work With Us →
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-24 bg-white cultural-border">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-6 max-w-3xl text-center"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-accent mb-6">
            GET IN <span className="cinematic-gradient">TOUCH</span>
          </h2>
          <div className="w-16 md:w-24 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-gray-500 text-lg mb-10 leading-relaxed">
            Have a project in mind? Let's create something amazing together.
          </p>
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="inline-block bg-primary hover:bg-accent text-white font-bold py-4 px-12 rounded-full transition-all shadow-lg hover:shadow-2xl text-lg uppercase tracking-wider"
          >
            Contact Us
          </button>
        </motion.div>
      </section>

      {/* Contact Form Modal */}
      <ContactFormModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
