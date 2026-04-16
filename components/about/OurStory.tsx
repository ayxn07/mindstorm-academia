"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  viewportOnce,
  lineDraw,
} from "@/lib/animations";
import BorderGlow from "@/components/BorderGlow";
import ShinyText from "@/components/ShinyText";

export default function OurStory() {
  return (
    <section className="relative overflow-hidden">
      {/* Top divider */}
      <motion.div
        variants={lineDraw}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="w-full h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(215,190,89,0.2) 50%, transparent 100%)",
        }}
      />

      {/* Decorative background glow */}
      <div
        className="absolute left-0 top-1/3 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(215,190,89,0.02) 0%, transparent 70%)",
          filter: "blur(100px)",
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
          <motion.div variants={fadeInUp} className="mb-3">
            <ShinyText
              text="Our Story"
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
            The Journey Behind{" "}
            <span className="text-gradient-gold">Mindstorm</span>
          </motion.h2>
        </motion.div>

        {/* Story content — alternating image/text rows */}
        <div className="space-y-20 max-w-6xl mx-auto">
          {/* Row 1: Image left, text right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
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
                  className="relative overflow-hidden"
                  style={{ borderRadius: 30 }}
                >
                  <div className="relative h-[300px] sm:h-[380px]">
                    <Image
                      src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Mindstorm team at work"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                </div>
              </BorderGlow>
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="space-y-5"
            >
              <h3
                className="text-2xl sm:text-3xl font-bold"
                style={{ color: "#eeeeee" }}
              >
                Where It All Began
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#999" }}
              >
                Mindstorm Strategic Consulting FZ-LLC was born from a simple yet
                powerful idea: every student deserves access to world-class
                education, regardless of where they come from. Founded by
                education professionals who experienced the complexities of
                studying abroad first-hand, Mindstorm was created to simplify
                the international admissions process.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#999" }}
              >
                Based in Dubai and operating across multiple regions, we
                identified the frustrations students face &mdash; confusing
                requirements, unreliable guidance, and missed deadlines. We set
                out to build a consultancy that treats every application with
                the strategic precision it deserves.
              </p>
              <div
                className="w-16 h-0.5 rounded-full"
                style={{ background: "rgba(215,190,89,0.3)" }}
              />
            </motion.div>
          </div>

          {/* Row 2: Text left, image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="space-y-5 order-2 lg:order-1"
            >
              <h3
                className="text-2xl sm:text-3xl font-bold"
                style={{ color: "#eeeeee" }}
              >
                Scaling With Purpose
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#999" }}
              >
                Over the years, Mindstorm has expanded its reach to cover
                admissions across Canada, Australia, Europe, Russia, and the
                UAE. We have forged direct partnerships with over 120
                universities, giving our students access to verified
                opportunities and streamlined application channels.
              </p>
              <p
                className="text-base leading-relaxed"
                style={{ color: "#999" }}
              >
                Today, our team of dedicated counselors, documentation
                specialists, and visa experts works as a single unit to deliver
                end-to-end education consulting. From initial profile
                assessment to pre-departure orientation, we manage every
                detail so students can focus on what matters most &mdash; their
                future.
              </p>
              <div
                className="w-16 h-0.5 rounded-full"
                style={{ background: "rgba(215,190,89,0.3)" }}
              />
            </motion.div>

            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="order-1 lg:order-2"
            >
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
                  className="relative overflow-hidden"
                  style={{ borderRadius: 30 }}
                >
                  <div className="relative h-[300px] sm:h-[380px]">
                    <Image
                      src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                      alt="Global education network"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                </div>
              </BorderGlow>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
