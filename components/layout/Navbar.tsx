"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { navItems, countryMeta } from "@/data/navigation";
import BorderGlow from "@/components/BorderGlow";
import {
  mobileMenuOverlay,
  mobileMenuItem,
  mobileMenuStagger,
  springSmooth,
} from "@/lib/animations";

/* ─── Shared inline style objects ─── */
const navbarBaseStyle: React.CSSProperties = {
  background:
    "linear-gradient(180deg, rgba(28,26,22,0.92) 0%, rgba(16,15,12,0.90) 50%, rgba(10,9,7,0.94) 100%)",
  border: "1px solid rgba(215,190,89,0.18)",
  boxShadow:
    "0 12px 40px -4px rgba(0,0,0,0.7), 0 4px 16px -2px rgba(0,0,0,0.5), 0 0 60px -20px rgba(215,190,89,0.08), inset 0 1px 0 0 rgba(255,255,255,0.14), inset 0 2px 4px 0 rgba(255,255,255,0.04), inset 0 -1px 0 0 rgba(0,0,0,0.4), inset 0 -2px 6px 0 rgba(0,0,0,0.2)",
};

const navbarScrolledStyle: React.CSSProperties = {
  background:
    "linear-gradient(180deg, rgba(24,22,18,0.96) 0%, rgba(12,11,9,0.95) 50%, rgba(6,5,4,0.97) 100%)",
  border: "1px solid rgba(215,190,89,0.22)",
  boxShadow:
    "0 16px 48px -4px rgba(0,0,0,0.8), 0 6px 20px -2px rgba(0,0,0,0.6), 0 0 80px -20px rgba(215,190,89,0.06), inset 0 1px 0 0 rgba(255,255,255,0.12), inset 0 2px 4px 0 rgba(255,255,255,0.03), inset 0 -1px 0 0 rgba(0,0,0,0.5), inset 0 -2px 6px 0 rgba(0,0,0,0.25)",
};

const goldButtonStyle: React.CSSProperties = {
  background: "linear-gradient(180deg, #e5d285 0%, #d7be59 40%, #c4a940 100%)",
  color: "#000",
  border: "1px solid rgba(255,255,255,0.15)",
  boxShadow:
    "0 4px 12px -2px rgba(0,0,0,0.5), 0 2px 4px -1px rgba(0,0,0,0.3), 0 0 20px -4px rgba(215,190,89,0.25), inset 0 1px 0 0 rgba(255,255,255,0.35), inset 0 2px 4px 0 rgba(255,255,255,0.1), inset 0 -1px 0 0 rgba(0,0,0,0.15), inset 0 -2px 4px 0 rgba(0,0,0,0.08)",
};

const megaMenuStyle: React.CSSProperties = {
  background:
    "linear-gradient(180deg, rgba(18,17,14,0.97) 0%, rgba(10,9,7,0.98) 100%)",
  border: "1px solid rgba(215,190,89,0.15)",
  boxShadow:
    "0 20px 60px -10px rgba(0,0,0,0.8), 0 8px 24px -4px rgba(0,0,0,0.5), 0 0 80px -20px rgba(215,190,89,0.06), inset 0 1px 0 0 rgba(255,255,255,0.08)",
};

/* ─── Mega Menu (rendered relative to <nav>, centered) ─── */
function MegaMenu({ onMouseEnter, onMouseLeave, onSelect }: { onMouseEnter: () => void; onMouseLeave: () => void; onSelect: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.98 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 z-50"
      style={{ width: "min(95vw, 1100px)" }}
    >
      <BorderGlow
        backgroundColor="#0d0c0a"
        borderRadius={16}
        glowColor="45 70 60"
        colors={["#d7be59", "#e5d285", "#b89e3a"]}
        edgeSensitivity={3}
        glowRadius={25}
        glowIntensity={3}
        coneSpread={30}
        animated
      >
        <div className="relative rounded-2xl p-6" style={megaMenuStyle}>
          {/* Top shine */}
          <div
            className="absolute inset-x-4 top-0 h-px pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(215,190,89,0.2) 30%, rgba(255,255,255,0.1) 50%, rgba(215,190,89,0.2) 70%, transparent 100%)",
            }}
          />

          <div className="grid grid-cols-5 gap-4">
            {countryMeta.map((country) => (
            <Link
              key={country.name}
              href={country.href}
              onClick={onSelect}
              className="group block p-3 h-full rounded-2xl transition-colors duration-300 hover:bg-white/[0.04]"
            >
              {/* Country image */}
              <div className="relative h-24 rounded-lg overflow-hidden mb-3">
                <Image
                  src={country.image}
                  alt={`Study in ${country.name}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-2 left-2.5">
                  <h3 className="text-base font-bold text-white group-hover:text-[#d7be59] transition-colors duration-300">
                    {country.name}
                  </h3>
                </div>
              </div>

              {/* Tagline */}
              <p className="text-xs leading-relaxed mb-3" style={{ color: "#999" }}>
                {country.tagline}
              </p>

              {/* Stats grid */}
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#d7be59" strokeWidth="2" className="mt-0.5 flex-shrink-0">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider block" style={{ color: "#666" }}>
                      Fees
                    </span>
                    <span className="text-xs font-medium" style={{ color: "#ccc" }}>
                      {country.fees}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#d7be59" strokeWidth="2" className="mt-0.5 flex-shrink-0">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider block" style={{ color: "#666" }}>
                      Work Rights
                    </span>
                    <span className="text-xs" style={{ color: "#ccc" }}>
                      {country.workRights}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#d7be59" strokeWidth="2" className="mt-0.5 flex-shrink-0">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider block" style={{ color: "#666" }}>
                      Visa Type
                    </span>
                    <span className="text-xs" style={{ color: "#ccc" }}>
                      {country.visaType}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#d7be59" strokeWidth="2" className="mt-0.5 flex-shrink-0">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
                  </svg>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider block" style={{ color: "#666" }}>
                      Top Universities
                    </span>
                    <span className="text-xs" style={{ color: "#ccc" }}>
                      {country.topUniversities.join(", ")}
                    </span>
                  </div>
                </div>
              </div>

              {/* Learn more link */}
              <div
                className="mt-3 flex items-center gap-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{ color: "#d7be59" }}
              >
                Learn more
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
            </Link>
            ))}
          </div>
        </div>
      </BorderGlow>
    </motion.div>
  );
}

/* ─── Mobile menu ─── */
function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={mobileMenuOverlay}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="fixed inset-0 z-[90] flex flex-col overflow-hidden"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.99) 100%)",
          }}
        >
          {/* Decorative gold radial glow */}
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(215,190,89,0.04) 0%, transparent 70%)",
              filter: "blur(80px)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(215,190,89,0.02) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />

          {/* Top spacer — close is handled by the hamburger button (z-101) above the overlay */}
          <div className="h-20" />

          {/* Menu items */}
          <motion.nav
            variants={mobileMenuStagger}
            initial="hidden"
            animate="visible"
            className="flex-1 flex flex-col justify-center px-8 gap-1"
          >
            {navItems.map((item) => (
              <motion.div key={item.label} variants={mobileMenuItem}>
                {item.children ? (
                  <div>
                    <button
                      onClick={() =>
                        setExpandedItem(
                          expandedItem === item.label ? null : item.label
                        )
                      }
                      className="w-full flex items-center justify-between py-4 text-3xl font-semibold transition-colors duration-200"
                      style={{ color: "#eeeeee" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#d7be59")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "#eeeeee")
                      }
                    >
                      {item.label}
                      <motion.span
                        animate={{
                          rotate: expandedItem === item.label ? 180 : 0,
                        }}
                        transition={springSmooth}
                        style={{ color: "#d7be59" }}
                        className="text-lg"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        >
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
                      </motion.span>
                    </button>
                    <AnimatePresence>
                      {expandedItem === item.label && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden pl-4"
                          style={{
                            borderLeft: "1px solid rgba(215,190,89,0.15)",
                          }}
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={onClose}
                              className="block py-3 text-lg transition-colors duration-200"
                              style={{ color: "#999" }}
                              onMouseEnter={(e) =>
                                (e.currentTarget.style.color = "#d7be59")
                              }
                              onMouseLeave={(e) =>
                                (e.currentTarget.style.color = "#999")
                              }
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block py-4 text-3xl font-semibold transition-colors duration-200"
                    style={{ color: "#eeeeee" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#d7be59")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#eeeeee")
                    }
                  >
                    {item.label}
                  </Link>
                )}
              </motion.div>
            ))}

            {/* Mobile CTA */}
            <motion.div variants={mobileMenuItem} className="mt-8">
              <Link
                href="/contact"
                onClick={onClose}
                className="inline-flex items-center justify-center w-full py-4 rounded-full font-semibold text-lg"
                style={goldButtonStyle}
              >
                Book Free Consultation
              </Link>
            </motion.div>
          </motion.nav>

          <div className="px-8 pb-8 text-sm" style={{ color: "#666" }}>
            <p>Dubai &middot; Bangalore &middot; Mohali</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── Main Navbar ─── */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleDropdownEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setActiveDropdown(label);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="fixed top-0 left-0 right-0 z-[100] flex justify-center px-4 pt-4"
      >
        <BorderGlow
          backgroundColor="#0a0a0a"
          borderRadius={9999}
          glowColor="45 70 60"
          colors={["#d7be59", "#e5d285", "#b89e3a"]}
          edgeSensitivity={3}
          glowRadius={25}
          glowIntensity={3}
          coneSpread={30}
          animated
          className="w-full max-w-6xl"
        >
        <nav
          className="relative flex items-center justify-between w-full rounded-full px-6 transition-all duration-500"
          style={{
            ...(scrolled ? navbarScrolledStyle : navbarBaseStyle),
            padding: scrolled ? "0.75rem 1.5rem" : "0.9rem 1.5rem",
            borderRadius: 9999,
          }}
        >
          {/* Top shine edge */}
          <div
            className="absolute inset-x-3 top-0 h-px rounded-full pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 30%, rgba(215,190,89,0.12) 50%, rgba(255,255,255,0.15) 70%, transparent 100%)",
            }}
          />
          {/* Bottom shadow edge */}
          <div
            className="absolute inset-x-6 bottom-0 h-px rounded-full pointer-events-none"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.3) 70%, transparent 100%)",
            }}
          />

          {/* Logo */}
          <Link href="/" className="flex-shrink-0 relative z-10">
            <Image
              src="/Mindstorm-Logo.jpg"
              alt="Mindstorm Strategic Consulting"
              width={160}
              height={44}
              className="h-9 w-auto object-contain"
              style={{ objectFit: "contain" }}
            />
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.children
                    ? handleDropdownEnter(item.label)
                    : undefined
                }
                onMouseLeave={
                  item.children ? handleDropdownLeave : undefined
                }
              >
                {item.children ? (
                  <button
                    className="px-4 py-2 text-sm font-medium transition-all duration-300 flex items-center gap-1.5 rounded-full"
                    style={{ color: "#999" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#d7be59")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#999")
                    }
                  >
                    {item.label}
                    <motion.svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      animate={{
                        rotate:
                          activeDropdown === item.label ? 180 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </motion.svg>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full inline-block"
                    style={{ color: "#999" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#d7be59")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#999")
                    }
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-2 rounded-full text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5"
              style={goldButtonStyle}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-[101] w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <motion.span
                animate={
                  mobileOpen
                    ? { rotate: 45, y: 8, backgroundColor: "#d7be59" }
                    : { rotate: 0, y: 0, backgroundColor: "#eeeeee" }
                }
                transition={springSmooth}
                className="block h-0.5 w-full rounded-full origin-center"
                style={{ backgroundColor: "#eeeeee" }}
              />
              <motion.span
                animate={
                  mobileOpen
                    ? { opacity: 0, scaleX: 0 }
                    : { opacity: 1, scaleX: 1 }
                }
                transition={{ duration: 0.2 }}
                className="block h-0.5 w-full rounded-full"
                style={{ backgroundColor: "#eeeeee" }}
              />
              <motion.span
                animate={
                  mobileOpen
                    ? { rotate: -45, y: -8, backgroundColor: "#d7be59" }
                    : { rotate: 0, y: 0, backgroundColor: "#eeeeee" }
                }
                transition={springSmooth}
                className="block h-0.5 w-full rounded-full origin-center"
                style={{ backgroundColor: "#eeeeee" }}
              />
            </div>
          </button>

          {/* ─── Mega Menu — positioned relative to <nav> center ─── */}
          <AnimatePresence>
            {activeDropdown === "Study Abroad" && (
              <MegaMenu
                onMouseEnter={() => handleDropdownEnter("Study Abroad")}
                onMouseLeave={handleDropdownLeave}
                onSelect={() => setActiveDropdown(null)}
              />
            )}
          </AnimatePresence>
        </nav>
        </BorderGlow>
      </motion.header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
