"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";
import BorderGlow from "@/components/BorderGlow";

const team = [
  {
    name: "Arjun Mehta",
    role: "Founder & CEO",
    bio: "Over 12 years in international education consulting. Passionate about opening doors for students worldwide.",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Sara Al-Hashemi",
    role: "Head of Admissions",
    bio: "Specialist in university admissions across Canada and Australia with a track record of 500+ successful placements.",
    image:
      "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Dmitry Volkov",
    role: "Europe & Russia Lead",
    bio: "Fluent in 4 languages with deep expertise in European and Russian university systems and scholarship programs.",
    image:
      "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    name: "Priya Sharma",
    role: "Visa & Documentation Head",
    bio: "Former immigration consultant with expertise in visa processing, SOP crafting, and financial documentation.",
    image:
      "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

export default function OurTeam() {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative left glow */}
      <div
        className="absolute left-0 top-1/3 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(215,190,89,0.02) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeInUp}
            className="text-sm font-medium tracking-widest uppercase mb-3"
            style={{ color: "#d7be59" }}
          >
            Leadership
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5"
            style={{ color: "#eeeeee" }}
          >
            Meet the <span className="text-gradient-gold">Team</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ color: "#999" }}
          >
            A dedicated group of education professionals committed to your
            success at every step.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
        >
          {team.map((member, index) => (
            <motion.div key={index} variants={fadeInUp}>
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
                <div
                  className="group relative h-full overflow-hidden"
                  style={{ borderRadius: 30 }}
                >
                  {/* Photo */}
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-transparent" />

                    {/* Gold accent line on hover */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, #d7be59, transparent)",
                      }}
                    />
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3
                      className="text-lg font-semibold mb-1 group-hover:text-[#d7be59] transition-colors duration-300"
                      style={{ color: "#eeeeee" }}
                    >
                      {member.name}
                    </h3>
                    <p
                      className="text-xs font-medium tracking-wider uppercase mb-3"
                      style={{ color: "#d7be59" }}
                    >
                      {member.role}
                    </p>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#999" }}
                    >
                      {member.bio}
                    </p>
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
