"use client";

import { motion } from "framer-motion";
import { sectionHeadingVariants } from "@/lib/animations";

interface SectionHeadingProps {
  label?: string;
  title: React.ReactNode;
  className?: string;
}

export function SectionHeading({ label, title, className = "" }: SectionHeadingProps) {
  return (
    <motion.div
      variants={sectionHeadingVariants.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`text-center mb-16 ${className}`}
    >
      {label && (
        <motion.p
          variants={sectionHeadingVariants.label}
          className="text-xs text-cyan-500 uppercase tracking-widest font-medium mb-3"
        >
          {label}
        </motion.p>
      )}
      <motion.h2
        variants={sectionHeadingVariants.title}
        className="text-3xl md:text-4xl font-bold mb-4"
      >
        {title}
      </motion.h2>
      <motion.div
        variants={sectionHeadingVariants.line}
        className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"
        style={{ originX: 0.5 }}
      />
    </motion.div>
  );
}
