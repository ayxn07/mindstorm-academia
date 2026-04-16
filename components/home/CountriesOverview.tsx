"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";
import BorderGlow from "@/components/BorderGlow";
import ShinyText from "@/components/ShinyText";

const countries = [
  {
    name: "Canada",
    href: "/study/canada",
    tagline: "World-class education & immigration pathways",
    highlight: "High employability rate",
    fees: "10L - 22L / year",
    image:
      "https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Australia",
    href: "/study/australia",
    tagline: "Globally ranked universities & work rights",
    highlight: "Work during study",
    fees: "12L - 25L / year",
    image:
      "https://images.pexels.com/photos/1619854/pexels-photo-1619854.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Europe",
    href: "/study/europe",
    tagline: "Affordable education with Schengen mobility",
    highlight: "Low / zero tuition",
    fees: "Varies by country",
    image:
      "https://images.pexels.com/photos/2570063/pexels-photo-2570063.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "Russia",
    href: "/study/russia",
    tagline: "Affordable STEM & medical education",
    highlight: "Strong technical programs",
    fees: "3L - 10L / year",
    image:
      "https://images.pexels.com/photos/236294/pexels-photo-236294.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    name: "UAE",
    href: "/study/uae",
    tagline: "International degrees in a global hub",
    highlight: "Corporate exposure",
    fees: "8L - 20L / year",
    image:
      "https://images.pexels.com/photos/2115367/pexels-photo-2115367.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

function CountryCard({ country }: { country: (typeof countries)[0] }) {
  return (
    <BorderGlow
      backgroundColor="#0a0a0a"
      borderRadius={30}
      glowColor="45 70 60"
      colors={["#d7be59", "#e5d285", "#b89e3a"]}
      edgeSensitivity={3}
      glowRadius={35}
      glowIntensity={3}
      coneSpread={30}
      className="h-full"
    >
      <Link
        href={country.href}
        className="group block h-full overflow-hidden"
        style={{ borderRadius: 30 }}
      >
        {/* Image */}
        <div className="relative h-44 overflow-hidden">
          <Image
            src={country.image}
            alt={`Study in ${country.name}`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          {/* Country name overlay */}
          <div className="absolute bottom-4 left-5">
            <h3
              className="text-2xl font-bold group-hover:text-[#d7be59] transition-colors duration-300"
              style={{ color: "#fff" }}
            >
              {country.name}
            </h3>
            <span className="text-xs font-medium" style={{ color: "#d7be59" }}>
              {country.highlight}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#999" }}>
            {country.tagline}
          </p>
          <div className="flex items-center justify-between">
            <span
              className="text-xs px-3 py-1 rounded-full"
              style={{ color: "#666", background: "rgba(255,255,255,0.05)" }}
            >
              {country.fees}
            </span>
            <span
              className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1"
              style={{ color: "#d7be59" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </div>
        </div>
      </Link>
    </BorderGlow>
  );
}

export default function CountriesOverview() {
  return (
    <section className="relative">
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="mb-3">
            <ShinyText
              text="Destinations"
              color="#d7be59"
              shineColor="#f5ecc8"
              speed={3}
              spread={120}
              className="text-sm font-medium tracking-widest uppercase"
            />
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5"
            style={{ color: "#eeeeee" }}
          >
            Study Across{" "}
            <span className="text-gradient-gold">5 Countries</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#999" }}
          >
            We provide complete admission services across the world&apos;s most
            sought-after education destinations.
          </motion.p>
        </motion.div>

        {/* Top row: 3 cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6"
        >
          {countries.slice(0, 3).map((country, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <CountryCard country={country} />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom row: 2 cards centered */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
        >
          {countries.slice(3).map((country, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <CountryCard country={country} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
