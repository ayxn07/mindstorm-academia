"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";
import BorderGlow from "@/components/BorderGlow";
import ShinyText from "@/components/ShinyText";

const offices = [
  {
    name: "Dubai",
    label: "Main Office",
    image:
      "https://images.pexels.com/photos/2115367/pexels-photo-2115367.jpeg?auto=compress&cs=tinysrgb&w=400",
    address: "Mindstorm Strategic Consulting FZ-LLC",
    city: "Dubai, United Arab Emirates",
    contact: "info@mindstormglobal.com",
    phone: "+971 XX XXX XXXX",
  },
  {
    name: "India",
    label: "Partner Office",
    image:
      "https://images.pexels.com/photos/3573351/pexels-photo-3573351.jpeg?auto=compress&cs=tinysrgb&w=400",
    address: "Partner Consulting Office",
    city: "India",
    contact: "india@mindstormglobal.com",
    phone: "+91 XX XXXX XXXX",
  },
  {
    name: "Online",
    label: "Consultations",
    image:
      "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=400",
    address: "Virtual Consultations",
    city: "Available Worldwide",
    contact: "online@mindstormglobal.com",
    phone: "Book via website",
  },
];

export default function ContactMap() {
  return (
    <section className="relative overflow-hidden">
      {/* Ambient glow */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(215,190,89,0.03) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      <div className="section-container">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="mb-3">
            <ShinyText
              text="Our Offices"
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
            Visit Us{" "}
            <span className="text-gradient-gold">Worldwide</span>
          </motion.h2>
        </motion.div>

        {/* Office cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {offices.map((office, i) => (
            <motion.div key={i} variants={fadeInUp}>
              <BorderGlow
                backgroundColor="#0a0a0a"
                borderRadius={30}
                glowColor="45 70 60"
                colors={["#d7be59", "#e5d285", "#b89e3a"]}
                edgeSensitivity={3}
                glowRadius={35}
                glowIntensity={3}
                coneSpread={30}
              >
                <div
                  className="flex flex-col overflow-hidden"
                  style={{ borderRadius: 30 }}
                >
                  {/* Image */}
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={office.image}
                      alt={`${office.name} office`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
                    {/* Label badge */}
                    <div
                      className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase"
                      style={{
                        background: "rgba(0,0,0,0.6)",
                        border: "1px solid rgba(215,190,89,0.3)",
                        color: "#d7be59",
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {office.label}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <h3
                      className="text-xl font-bold"
                      style={{ color: "#eeeeee" }}
                    >
                      {office.name}
                    </h3>

                    {/* Address */}
                    <div className="flex items-start gap-3">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#d7be59"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="flex-shrink-0 mt-0.5"
                      >
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                      <div>
                        <p
                          className="text-sm leading-relaxed"
                          style={{ color: "#999" }}
                        >
                          {office.address}
                        </p>
                        <p
                          className="text-sm"
                          style={{ color: "#777" }}
                        >
                          {office.city}
                        </p>
                      </div>
                    </div>

                    {/* Contact info */}
                    <div className="flex items-center gap-3">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#d7be59"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="flex-shrink-0"
                      >
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                        <path d="M22 4l-10 8L2 4" />
                      </svg>
                      <p
                        className="text-sm"
                        style={{ color: "#999" }}
                      >
                        {office.contact}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#d7be59"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="flex-shrink-0"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                      <p
                        className="text-sm"
                        style={{ color: "#999" }}
                      >
                        {office.phone}
                      </p>
                    </div>
                  </div>
                </div>
              </BorderGlow>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
