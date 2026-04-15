import type { Variants, Transition } from "framer-motion";

// Spring transition presets
export const springSmooth: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
  mass: 0.8,
};

export const springBouncy: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 15,
  mass: 0.5,
};

export const springSnappy: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 25,
};

// Fade in up — most common section animation
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Fade in down
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// Fade in left / right
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Scale in
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// Stagger container — wraps children with stagger effect
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

// Slower stagger for bigger elements
export const staggerContainerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.15,
    },
  },
};

// Card hover effect
export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.03,
    y: -6,
    transition: springSmooth,
  },
};

// Button hover
export const buttonHover = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: springSnappy,
  },
  tap: { scale: 0.97 },
};

// Navbar animations
export const navDropdown: Variants = {
  hidden: {
    opacity: 0,
    y: 10,
    scale: 0.95,
    transition: { duration: 0.15 },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
  },
};

// Mobile menu variants
export const mobileMenuOverlay: Variants = {
  hidden: {
    clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  visible: {
    clipPath: "circle(150% at calc(100% - 2.5rem) 2.5rem)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const mobileMenuItem: Variants = {
  hidden: { opacity: 0, x: 50, rotate: 3 },
  visible: {
    opacity: 1,
    x: 0,
    rotate: 0,
    transition: springSmooth,
  },
};

export const mobileMenuStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
};

// Line draw animation (for decorative lines)
export const lineDraw: Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

// Viewport config (reusable)
export const viewportOnce = { once: true, margin: "-80px" as const };
