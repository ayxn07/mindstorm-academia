"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  countrySlug: string;
  countryName: string;
}

const goldButtonStyle: React.CSSProperties = {
  background:
    "linear-gradient(180deg, #e5d285 0%, #d7be59 40%, #c4a940 100%)",
  color: "#000",
  border: "1px solid rgba(255,255,255,0.15)",
  boxShadow:
    "0 4px 12px -2px rgba(0,0,0,0.5), 0 2px 4px -1px rgba(0,0,0,0.3), 0 0 24px -4px rgba(215,190,89,0.45), inset 0 1px 0 0 rgba(255,255,255,0.35), inset 0 2px 4px 0 rgba(255,255,255,0.1), inset 0 -1px 0 0 rgba(0,0,0,0.15), inset 0 -2px 4px 0 rgba(0,0,0,0.08)",
};

export default function FloatingApplyButton({ countrySlug, countryName }: Props) {
  const [visible, setVisible] = useState(false);
  const [hideForCTA, setHideForCTA] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 400) setVisible(true);
      else setVisible(false);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ctaEl = document.querySelector("section a[href='/contact']")?.closest("section");
    if (!ctaEl) return;
    observerRef.current = new IntersectionObserver(
      (entries) => {
        for (const e of entries) setHideForCTA(e.isIntersecting);
      },
      { threshold: 0.2 }
    );
    observerRef.current.observe(ctaEl);
    return () => observerRef.current?.disconnect();
  }, []);

  const show = visible && !hideForCTA;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="floating-apply"
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="fixed left-1/2 -translate-x-1/2 z-40"
          style={{
            bottom: "max(1.5rem, env(safe-area-inset-bottom))",
          }}
        >
          <motion.div
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <Link
              href={`/apply?from=${countrySlug}`}
              aria-label={`Apply to study in ${countryName}`}
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold tracking-wide uppercase transition-transform duration-200"
              style={goldButtonStyle}
            >
              Apply Now
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
