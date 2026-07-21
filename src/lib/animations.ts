/**
 * Shared Framer Motion animation variants for the portfolio.
 * Import these to keep animations consistent across sections.
 *
 * NOTE: Cubic-bezier arrays must be typed as [number, number, number, number]
 * (BezierDefinition) to satisfy Framer Motion v12's strict `Easing` type.
 */

import type { Variants } from "framer-motion";

// ─── Shared easing curves (properly typed) ───────────────────────────────────

const EASE_SMOOTH = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number];
const EASE_SPRING_OUT = [0.34, 1.56, 0.64, 1] as [number, number, number, number];

// ─── Fade + Slide Variants ───────────────────────────────────────────────────

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE_SMOOTH },
  },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: EASE_SMOOTH },
  },
};

export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: EASE_SMOOTH },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: EASE_SMOOTH },
  },
};

export const scaleInSpring: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

// ─── Container / Stagger Variants ────────────────────────────────────────────

export const staggerContainer = (staggerDelay = 0.1, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren,
    },
  },
});

// ─── Section Heading Variants ─────────────────────────────────────────────────

export const sectionHeadingVariants = {
  container: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  } satisfies Variants,
  label: {
    hidden: { opacity: 0, letterSpacing: "0.5em" },
    visible: {
      opacity: 1,
      letterSpacing: "0.2em",
      transition: { duration: 0.7 },
    },
  } satisfies Variants,
  title: {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: EASE_SMOOTH },
    },
  } satisfies Variants,
  line: {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  } satisfies Variants,
};

// ─── Card Variants ────────────────────────────────────────────────────────────

export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: EASE_SMOOTH },
  },
};

// ─── Timeline dot variant ─────────────────────────────────────────────────────

export const dotPop: Variants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 350, damping: 18 },
  },
};

// ─── List item stagger ────────────────────────────────────────────────────────

export const listItem: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};
