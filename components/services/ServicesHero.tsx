"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import SplitText from "@/components/SplitText";
import ShinyText from "@/components/ShinyText";

export default function ServicesHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Professional consulting session"
          fill
          className="object-cover"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center bottom, rgba(215,190,89,0.06) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Floating particles */}
      <motion.div
        className="absolute top-[30%] left-[12%] w-1 h-1 rounded-full opacity-40"
        style={{ backgroundColor: "#d7be59" }}
        animate={{ y: [-10, 10, -10], opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[50%] right-[18%] w-1.5 h-1.5 rounded-full opacity-30"
        style={{ backgroundColor: "#d7be59" }}
        animate={{ y: [10, -15, 10], opacity: [0.2, 0.6, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto pt-16 md:pt-24"
      >
        {/* Breadcrumb */}
        <motion.nav variants={fadeInUp} className="mb-8">
          <ol className="flex items-center gap-2 text-xs tracking-wider uppercase">
            <li>
              <Link
                href="/"
                className="transition-colors duration-200"
                style={{ color: "#999" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#d7be59")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#999")}
              >
                Home
              </Link>
            </li>
            <li style={{ color: "#666" }}>/</li>
            <li style={{ color: "#d7be59" }}>Services</li>
          </ol>
        </motion.nav>

        {/* Badge */}
        <motion.div variants={fadeInUp} className="mb-6">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase"
            style={{
              background: "rgba(215,190,89,0.08)",
              border: "1px solid rgba(215,190,89,0.2)",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: "#d7be59" }}
            />
            <ShinyText
              text="What We Offer"
              color="#d7be59"
              shineColor="#f5ecc8"
              speed={3}
              spread={120}
            />
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div variants={fadeInUp} className="mb-6">
          <SplitText
            text="Comprehensive Education"
            tag="h1"
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight text-white"
            splitType="chars"
            delay={30}
            duration={0.8}
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="center"
            rootMargin="0px"
            threshold={0.1}
          />
          <SplitText
            text="Consulting Services"
            tag="h1"
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight"
            style={{ color: "#d7be59" }}
            splitType="chars"
            delay={30}
            duration={0.8}
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            textAlign="center"
            rootMargin="0px"
            threshold={0.1}
          />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={fadeInUp}
          className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          From initial consultation to post-arrival support, we manage every
          step of your international education journey with precision and care.
        </motion.p>
      </motion.div>
    </section>
  );
}
