"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { navItems, type NavItem } from "@/data/navigation";
import {
  navDropdown,
  mobileMenuOverlay,
  mobileMenuItem,
  mobileMenuStagger,
  springSmooth,
} from "@/lib/animations";

/* ─── Desktop dropdown ─── */
function DropdownMenu({ items }: { items: NavItem[] }) {
  return (
    <motion.div
      variants={navDropdown}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-56 rounded-2xl glass-strong p-2"
    >
      {/* Caret */}
      <div
        className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 rounded-sm"
        style={{
          background: "linear-gradient(135deg, rgba(40,38,32,0.9), rgba(22,21,18,0.85))",
          borderLeft: "1px solid rgba(215,190,89,0.20)",
          borderTop: "1px solid rgba(215,190,89,0.20)",
          boxShadow: "inset 0 1px 0 0 rgba(255,255,255,0.10)",
        }}
      />
      {items.map((child) => (
        <Link
          key={child.href}
          href={child.href}
          className="block px-4 py-2.5 rounded-xl text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-all duration-300 nav-link-3d"
        >
          {child.label}
        </Link>
      ))}
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
          className="fixed inset-0 z-[90] flex flex-col"
          style={{
            background: "linear-gradient(180deg, rgba(0,0,0,0.97) 0%, rgba(0,0,0,0.99) 100%)",
          }}
        >
          {/* Decorative gold radial glow */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[var(--color-primary)] opacity-[0.04] blur-[150px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[var(--color-primary)] opacity-[0.02] blur-[100px] pointer-events-none" />

          {/* Close button */}
          <div className="flex justify-end p-6">
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="w-10 h-10 flex items-center justify-center"
            >
              <motion.div
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ delay: 0.3, ...springSmooth }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </motion.div>
            </button>
          </div>

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
                        setExpandedItem(expandedItem === item.label ? null : item.label)
                      }
                      className="w-full flex items-center justify-between py-4 text-3xl font-semibold text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors duration-200"
                    >
                      {item.label}
                      <motion.span
                        animate={{ rotate: expandedItem === item.label ? 180 : 0 }}
                        transition={springSmooth}
                        className="text-[var(--color-primary)] text-lg"
                      >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
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
                          className="overflow-hidden pl-4 border-l border-[var(--glass-border)]"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={onClose}
                              className="block py-3 text-lg text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-colors duration-200"
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
                    className="block py-4 text-3xl font-semibold text-[var(--color-text)] hover:text-[var(--color-primary)] transition-colors duration-200"
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
                className="inline-flex items-center justify-center w-full py-4 rounded-full btn-3d-gold text-black font-semibold text-lg"
              >
                Book Free Consultation
              </Link>
            </motion.div>
          </motion.nav>

          <div className="px-8 pb-8 text-sm text-[var(--color-text-dim)]">
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

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="fixed top-0 left-0 right-0 z-[100] flex justify-center px-4 pt-4"
      >
        <nav
          className={`
            relative flex items-center justify-between w-full max-w-6xl
            rounded-full px-6 transition-all duration-500 glass-navbar
            ${scrolled ? "py-2.5 scrolled" : "py-3"}
          `}
        >
          {/* Top shine edge — gives illusion of light hitting the top */}
          <div
            className="absolute inset-x-3 top-0 h-px rounded-full pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.15) 30%, rgba(215,190,89,0.12) 50%, rgba(255,255,255,0.15) 70%, transparent 100%)",
            }}
          />
          {/* Bottom shadow edge */}
          <div
            className="absolute inset-x-6 bottom-0 h-px rounded-full pointer-events-none"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.3) 70%, transparent 100%)",
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
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.children ? (
                  <button className="px-4 py-2 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-all duration-300 flex items-center gap-1.5 nav-link-3d">
                    {item.label}
                    <motion.svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </motion.svg>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-[var(--color-text-muted)] hover:text-[var(--color-primary)] transition-all duration-300 nav-link-3d inline-block"
                  >
                    {item.label}
                  </Link>
                )}

                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <DropdownMenu items={item.children} />
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-2 rounded-full text-sm font-semibold text-black btn-3d-gold"
            >
              Get Started
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
                animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                className="block h-0.5 w-full rounded-full bg-[var(--color-text)]"
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
        </nav>
      </motion.header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
