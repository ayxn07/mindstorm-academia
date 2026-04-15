"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  buttonHover,
} from "@/lib/animations";

const heroImages = [
  {
    src: "https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "Toronto skyline, Canada",
  },
  {
    src: "https://images.pexels.com/photos/1619854/pexels-photo-1619854.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "Sydney Opera House, Australia",
  },
  {
    src: "https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "Brandenburg Gate, Europe",
  },
  {
    src: "https://images.pexels.com/photos/236294/pexels-photo-236294.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "St. Basil's Cathedral, Russia",
  },
  {
    src: "https://images.pexels.com/photos/2115367/pexels-photo-2115367.jpeg?auto=compress&cs=tinysrgb&w=1920",
    alt: "Dubai skyline, UAE",
  },
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = useCallback(() => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [nextImage]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ─── Full-screen carousel background ─── */}
      <div className="absolute inset-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[currentImage].src}
              alt={heroImages[currentImage].alt}
              fill
              className="object-cover"
              sizes="100vw"
              quality={85}
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark overlays for text readability */}
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

        {/* Subtle gold vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)",
          }}
        />
      </div>

      {/* Floating particles */}
      <motion.div
        className="absolute top-[20%] left-[10%] w-1 h-1 rounded-full bg-[var(--color-primary)] opacity-40"
        animate={{ y: [-10, 10, -10], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[60%] right-[15%] w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] opacity-30"
        animate={{ y: [10, -15, 10], opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute top-[35%] right-[30%] w-0.5 h-0.5 rounded-full bg-[var(--color-primary)] opacity-50"
        animate={{ y: [-8, 12, -8], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />

      {/* ─── Content ─── */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto"
      >
        {/* Badge */}
        <motion.div variants={fadeInUp} className="mb-8">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-medium text-[var(--color-primary)] tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
            Trusted Education Consultancy
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeInUp}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6"
        >
          <span className="text-white">Your Gateway to</span>
          <br />
          <span className="text-gradient-gold">Global Education</span>
          <br />
          <span className="text-white">Excellence</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          className="text-base sm:text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          Expert admission services across Canada, Australia, Europe, Russia &amp; UAE.
          We architect your complete international education journey.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.div variants={buttonHover} initial="rest" whileHover="hover" whileTap="tap">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-black font-semibold text-base btn-3d-gold"
            >
              Book Free Consultation
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </motion.div>
          <motion.div variants={buttonHover} initial="rest" whileHover="hover" whileTap="tap">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white font-medium text-base btn-3d-outline"
            >
              Explore Services
            </Link>
          </motion.div>
        </motion.div>

        {/* Image indicator dots */}
        <motion.div variants={fadeInUp} className="mt-16 flex items-center gap-2">
          {heroImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentImage(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="relative group p-1"
            >
              <motion.div
                className="w-2 h-2 rounded-full transition-colors duration-300"
                animate={{
                  backgroundColor: currentImage === i ? "#d7be59" : "rgba(255,255,255,0.3)",
                  scale: currentImage === i ? 1.3 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
              {currentImage === i && (
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{ border: "1px solid rgba(215,190,89,0.4)" }}
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1.8, opacity: 0 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div variants={fadeInUp} className="mt-10">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="inline-flex flex-col items-center gap-2 text-white/40"
          >
            <span className="text-xs tracking-widest uppercase">Scroll</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
