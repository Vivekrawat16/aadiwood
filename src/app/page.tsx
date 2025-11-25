"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ParallaxHero from "@/components/home/ParallaxHero";
import BentoGrid from "@/components/home/BentoGrid";
import PartnersSection from "@/components/home/PartnersSection";
import ContactFormModal from "@/components/ContactFormModal";
import { founder } from "@/lib/founderData";
import { WarliDivider, WarliLoader, GondOverlay } from "@/components/ui/WarliComponents";
import Button from "@/components/ui/Button";
import Image from "next/image";

import SuccessModal from "@/components/home/SuccessModal";
import CulturalModal from "@/components/home/CulturalModal";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isCulturalModalOpen, setIsCulturalModalOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language].home;
  const founderProfile = translations[language].founderProfile;

  // Merge mock data (images/social) with translation data (text)
  const localizedFounder = {
    ...founder,
    ...founderProfile
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-midnight-canopy text-warm-taupe overflow-x-hidden">
      {/* Hero Section */}
      <ParallaxHero />

      {/* Warli Divider */}
      <WarliDivider />

      {/* BentoGrid (Videos) */}
      <div id="videos" className="relative">
        <GondOverlay />
        <div className="relative z-10">
          <BentoGrid
            onOpenSuccessModal={() => setIsSuccessModalOpen(true)}
            onOpenCulturalModal={() => setIsCulturalModalOpen(true)}
          />
        </div>
      </div>

      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
      />

      <CulturalModal
        isOpen={isCulturalModalOpen}
        onClose={() => setIsCulturalModalOpen(false)}
      />

      {/* Warli Divider */}
      <div className="md:block">
        <WarliDivider />
      </div>

      {/* Partners Section */}
      <div id="partners" className="relative bg-deep-forest/30 py-6 md:py-12">
        <PartnersSection />
      </div>

      {/* Warli Divider */}
      <div className="md:block">
        <WarliDivider />
      </div>

      {/* Founder Section */}
      <section id="founder" className="relative py-10 md:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-deep-forest rounded-full blur-[120px] opacity-40 -z-10" />
        <div className="container mx-auto px-6 lg:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-warm-taupe">
              {t.meetOur} <span className="text-terracotta">{t.founder}</span>
            </h2>
            <div className="w-24 h-1 bg-ochre-gold mx-auto mt-4 rounded-full" />
          </motion.div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Photo with Organic Shape */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex justify-center md:justify-end"
            >
              <div className="relative w-full max-w-md aspect-[3/4] rounded-[2rem] overflow-hidden border border-ochre-gold/20 shadow-2xl">
                <Image
                  src={localizedFounder.photo}
                  alt={localizedFounder.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-canopy via-transparent to-transparent opacity-60" />
              </div>
              {/* Decorative Leaf/Organic Shape */}
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-sapling-green rounded-full blur-2xl opacity-20" />
            </motion.div>

            {/* Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-8 md:p-12 rounded-[2rem] relative"
            >
              <GondOverlay />
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">{localizedFounder.name}</h3>
              <p className="text-sapling-green font-medium tracking-wide mb-6 uppercase text-sm">{localizedFounder.role}</p>
              <p className="text-gray-300 leading-relaxed mb-8 text-lg font-light">{localizedFounder.bio}</p>

              <div className="space-y-4 mb-8">
                {localizedFounder.achievements.map((item: string, i: number) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 mt-2 bg-terracotta rounded-full" />
                    <p className="text-gray-300 text-sm">{item}</p>
                  </div>
                ))}
              </div>

              <Button
                variant="secondary"
                onClick={() => window.open(localizedFounder.social.youtube, '_blank')}
              >
                {t.followJourney}
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <WarliDivider />

      {/* About Us Section */}
      <section id="about" className="py-20 md:py-32 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold text-warm-taupe mb-8 leading-tight">
                {t.preserving} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ochre-gold to-terracotta">
                  {t.heritage}
                </span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {t.heritageDesc1}
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-10">
                {t.heritageDesc2}
              </p>
              <Button onClick={() => setIsContactModalOpen(true)}>
                {t.workWithUs}
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-[3rem] overflow-hidden"
            >
              <Image
                src="/cultural-heritage.jpg"
                alt="Cultural Heritage"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-midnight-canopy/20 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-deep-forest relative warli-border-top">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
              {t.letsCreate} <span className="text-sapling-green">{t.magic}</span>
            </h2>
            <p className="text-gray-300 text-xl mb-12 font-light">
              {t.storyToTell}
            </p>
            <Button
              variant="primary"
              onClick={() => setIsContactModalOpen(true)}
              className="text-lg px-12 py-4"
            >
              {t.getInTouch}
            </Button>
          </motion.div>
        </div>
      </section>

      <ContactFormModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
