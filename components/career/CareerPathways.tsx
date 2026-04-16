"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  viewportOnce,
} from "@/lib/animations";
import ShinyText from "@/components/ShinyText";
import BorderGlow from "@/components/BorderGlow";

const pathways = [
  {
    title: "Technology & Engineering",
    description: "The tech industry continues to lead global job growth. Graduates in software engineering, data science, and AI command top salaries and enjoy remote-friendly career options worldwide.",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
    fields: ["Software Engineering", "Data Science", "AI/ML", "Cybersecurity"],
    salary: "$70K\u2013$150K",
    destinations: ["Canada", "Australia"],
  },
  {
    title: "Healthcare & Medicine",
    description: "Healthcare professionals are in high demand globally. Degrees in medicine, nursing, and pharmacy open doors to rewarding careers with excellent job security.",
    image:
      "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600",
    fields: ["Medicine", "Nursing", "Pharmacy", "Biomedical Sciences"],
    salary: "$60K\u2013$200K",
    destinations: ["Australia", "Europe"],
  },
  {
    title: "Business & Finance",
    description: "Business graduates thrive in consulting, finance, and marketing roles across multinational companies, with strong earning potential and leadership pathways.",
    image:
      "https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=600",
    fields: ["MBA", "Finance", "Marketing", "Consulting"],
    salary: "$55K\u2013$130K",
    destinations: ["UAE", "Canada"],
  },
  {
    title: "Education & Research",
    description: "Academic and research careers offer the chance to shape future generations. International degrees open paths to teaching, policy-making, and cutting-edge research positions.",
    image:
      "https://images.pexels.com/photos/5940841/pexels-photo-5940841.jpeg?auto=compress&cs=tinysrgb&w=600",
    fields: ["Teaching", "Research", "Policy", "Academic Leadership"],
    salary: "$50K\u2013$120K",
    destinations: ["Canada", "Europe"],
  },
  {
    title: "Hospitality & Tourism",
    description: "The global hospitality sector offers exciting careers in hotel management, event planning, and tourism marketing. International graduates bring cross-cultural expertise that employers value.",
    image:
      "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600",
    fields: ["Hotel Management", "Event Planning", "Tourism", "Culinary Arts"],
    salary: "$40K\u2013$90K",
    destinations: ["UAE", "Australia"],
  },
  {
    title: "Arts & Design",
    description: "Creative industries are booming with opportunities in UX/UI design, film production, and architecture. International exposure gives graduates a competitive edge.",
    image:
      "https://images.pexels.com/photos/3184460/pexels-photo-3184460.jpeg?auto=compress&cs=tinysrgb&w=600",
    fields: ["Graphic Design", "UX/UI", "Film", "Architecture"],
    salary: "$45K\u2013$100K",
    destinations: ["Europe", "Australia"],
  },
];

export default function CareerPathways() {
  return (
    <section className="relative overflow-hidden">
      <style>{`
        .cp-bento {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (min-width: 768px) {
          .cp-bento {
            grid-template-columns: repeat(12, 1fr);
            grid-auto-rows: auto;
          }
          .cp-bento .cp-card-0 { grid-column: span 7; }
          .cp-bento .cp-card-1 { grid-column: span 5; }
          .cp-bento .cp-card-2 { grid-column: span 5; }
          .cp-bento .cp-card-3 { grid-column: span 7; }
          .cp-bento .cp-card-4 { grid-column: span 6; }
          .cp-bento .cp-card-5 { grid-column: span 6; }
        }
      `}</style>

      {/* Ambient glow */}
      <div
        className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
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
              text="Career Paths"
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
            Popular{" "}
            <span className="text-gradient-gold">Career Pathways</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed"
            style={{ color: "#999" }}
          >
            Studying abroad opens doors to high-demand career fields worldwide.
            Explore the pathways our students pursue after graduation.
          </motion.p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="cp-bento"
        >
          {pathways.map((pathway, i) => (
            <motion.div key={i} variants={fadeInUp} className={`cp-card-${i}`}>
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
                  className="group relative overflow-hidden h-full flex flex-col"
                  style={{ borderRadius: 30 }}
                >
                  {/* Image */}
                  <div
                    className="relative overflow-hidden flex-shrink-0"
                    style={{ height: i === 0 ? 200 : 180 }}
                  >
                    <Image
                      src={pathway.image}
                      alt={pathway.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes={i === 0 ? "60vw" : i === 5 ? "100vw" : "50vw"}
                    />
                    {/* Overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.4) 50%, rgba(10,10,10,0.1) 100%)",
                      }}
                    />

                    {/* Title over image */}
                    <div className="absolute bottom-4 left-5 right-5">
                      <h3
                        className="text-xl sm:text-2xl font-bold"
                        style={{ color: "#eeeeee" }}
                      >
                        {pathway.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-6 pb-8 pt-5 flex flex-col gap-4">
                    {/* Description */}
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "#999" }}
                    >
                      {pathway.description}
                    </p>

                    {/* Field tags */}
                    <div className="flex flex-wrap gap-2">
                      {pathway.fields.map((field, fi) => (
                        <span
                          key={fi}
                          className="text-xs font-medium px-3 py-1.5"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.08)",
                            borderRadius: 20,
                            color: "#bbb",
                          }}
                        >
                          {field}
                        </span>
                      ))}
                    </div>

                    {/* Destinations */}
                    <div className="flex items-center gap-3">
                      <span
                        className="text-[11px] font-medium uppercase tracking-wider"
                        style={{ color: "#666" }}
                      >
                        Top Destinations
                      </span>
                      <div className="flex gap-2">
                        {pathway.destinations.map((dest, di) => (
                          <span
                            key={di}
                            className="text-xs font-semibold px-3 py-1"
                            style={{
                              background: "rgba(215,190,89,0.08)",
                              border: "1px solid rgba(215,190,89,0.2)",
                              borderRadius: 20,
                              color: "#d7be59",
                            }}
                          >
                            {dest}
                          </span>
                        ))}
                      </div>
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
