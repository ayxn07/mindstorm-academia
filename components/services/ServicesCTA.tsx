"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  buttonHover,
  viewportOnce,
} from "@/lib/animations";
import ShinyText from "@/components/ShinyText";
import BorderGlow from "@/components/BorderGlow";

const goldButtonStyle: React.CSSProperties = {
  background:
    "linear-gradient(180deg, #e5d285 0%, #d7be59 40%, #c4a940 100%)",
  color: "#000",
  border: "1px solid rgba(255,255,255,0.15)",
  boxShadow:
    "0 4px 12px -2px rgba(0,0,0,0.5), 0 2px 4px -1px rgba(0,0,0,0.3), 0 0 20px -4px rgba(215,190,89,0.25), inset 0 1px 0 0 rgba(255,255,255,0.35), inset 0 2px 4px 0 rgba(255,255,255,0.1), inset 0 -1px 0 0 rgba(0,0,0,0.15), inset 0 -2px 4px 0 rgba(0,0,0,0.08)",
};

const outlineButtonStyle: React.CSSProperties = {
  background:
    "linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
  color: "#eeeeee",
  border: "1px solid rgba(215,190,89,0.25)",
  boxShadow:
    "0 4px 12px -2px rgba(0,0,0,0.4), 0 2px 4px -1px rgba(0,0,0,0.2), inset 0 1px 0 0 rgba(255,255,255,0.08), inset 0 -1px 0 0 rgba(0,0,0,0.2)",
};

export default function ServicesCTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="section-container">
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
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative p-10 sm:p-14 md:p-20 text-center overflow-hidden"
          style={{ borderRadius: 30 }}
        >
          {/* Background glows */}
          <div
            className="absolute top-0 left-1/4 w-[300px] h-[300px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(215,190,89,0.04) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-[250px] h-[250px] rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, rgba(215,190,89,0.03) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          <motion.div variants={fadeInUp} className="mb-4">
            <ShinyText
              text="Get Started Today"
              color="#d7be59"
              shineColor="#f5ecc8"
              speed={3}
              spread={120}
              className="text-sm font-medium tracking-widest uppercase"
            />
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 max-w-3xl mx-auto leading-tight"
            style={{ color: "#eeeeee" }}
          >
            Ready to Begin Your{" "}
            <span className="text-gradient-gold">Academic Journey</span>?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10"
            style={{ color: "#999" }}
          >
            Book a free consultation with our expert counselors and discover the
            best universities, scholarships, and career pathways for your future.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.div
              variants={buttonHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-base transition-transform duration-200"
                style={goldButtonStyle}
              >
                Book Free Consultation
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </motion.div>
            <motion.div
              variants={buttonHover}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium text-base transition-transform duration-200"
                style={outlineButtonStyle}
              >
                Learn About Us
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
        </BorderGlow>
      </div>
    </section>
  );
}
