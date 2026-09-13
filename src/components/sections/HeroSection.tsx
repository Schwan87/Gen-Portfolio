"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles, Code2 } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

const roles = [
  "Frontend Developer",
  "Information Systems Student",
  "Full Stack Enthusiast",
];

const stats = [
  { value: "1+", label: "Year Experience" },
  { value: "8+", label: "Projects Built" },
  { value: "10+", label: "Tech Stack Tools" },
];

const floatingIcons = [
  { icon: "⚛️", delay: 0, x: -60, y: -40 },
  { icon: "🚀", delay: 1.5, x: 60, y: -60 },
  { icon: "💻", delay: 0.8, x: -80, y: 60 },
  { icon: "🎨", delay: 2.2, x: 80, y: 40 },
];

export function HeroSection() {
  const [currentRole, setCurrentRole] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
  };

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden">

      {/* === BACKGROUND LAYERS === */}
      {/* Aurora animated background */}
      <motion.div style={{ y }} className="absolute inset-0 -z-20">
        <div className="absolute inset-0 aurora opacity-60" />
        <div className="absolute inset-0 dot-pattern opacity-40" />
      </motion.div>

      {/* Floating large glow orbs — static divs, CSS handles glow animation */}
      <div className="absolute top-[15%] left-[5%] w-[500px] h-[500px] rounded-full bg-blue-500/20 blur-[120px] -z-10 animate-glow-pulse" />
      <div
        className="absolute bottom-[10%] right-[5%] w-[450px] h-[450px] rounded-full bg-cyan-500/20 blur-[120px] -z-10 animate-glow-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-[50%] left-[50%] w-[300px] h-[300px] rounded-full bg-violet-500/10 blur-[100px] -z-10 animate-glow-pulse"
        style={{ animationDelay: "4s" }}
      />

      {/* === MAIN CONTENT === */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">

          {/* ─── LEFT: Text Content ─── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ opacity }}
            className="flex-1 text-center md:text-left space-y-6"
          >
            {/* Available badge */}
            <motion.div variants={itemVariants} className="flex justify-center md:justify-start">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium animate-neon-pulse">
                <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block animate-ping" />
                <Sparkles className="h-3.5 w-3.5" />
                Available for Freelance & Internship
              </div>
            </motion.div>

            {/* Greeting */}
            <motion.div variants={itemVariants}>
              <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-2">
                Hello, I&apos;m
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
                <motion.span
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="block"
                >
                  Muhammad
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="block text-gradient"
                >
                  Genta Dwiputra
                </motion.span>
              </h1>
            </motion.div>

            {/* Typing Role */}
            <motion.div variants={itemVariants} className="h-10 flex items-center justify-center md:justify-start gap-3">
              <Code2 className="h-5 w-5 text-primary shrink-0" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRole}
                  initial={{ opacity: 0, y: 15, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -15, filter: "blur(4px)" }}
                  transition={{ duration: 0.4 }}
                  className="text-2xl md:text-3xl font-semibold text-gradient"
                >
                  {roles[currentRole]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0 leading-relaxed"
            >
              I&apos;m an Information Systems student and Frontend Developer who loves building clean, fast, and responsive web applications. I focus on React, Next.js, and Tailwind CSS, turning ideas into smooth digital experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2"
            >
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link href="#projects" className={buttonVariants({ size: "lg", className: "rounded-full shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-shadow" })}>
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link href="/cv.pdf" target="_blank" className={buttonVariants({ variant: "outline", size: "lg", className: "rounded-full glass glow-border" })}>
                  <Download className="mr-2 h-4 w-4" /> Download CV
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link href="#contact" className={buttonVariants({ variant: "secondary", size: "lg", className: "rounded-full" })}>
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats Row */}
            <motion.div variants={itemVariants} className="flex flex-wrap justify-center md:justify-start gap-8 pt-4 border-t border-border/40">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + i * 0.15 }}
                  whileHover={{ y: -3 }}
                  className="text-center md:text-left"
                >
                  <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* ─── RIGHT: Profile Photo ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
            className="flex-1 flex justify-center md:justify-end"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96">

              {/* Spinning outer ring */}
              <div
                className="absolute inset-[-12px] rounded-full border border-dashed border-blue-500/30 animate-spin-slow pointer-events-none"
              />
              <div
                className="absolute inset-[-24px] rounded-full border border-dashed border-cyan-500/20 animate-orbit-reverse pointer-events-none"
              />

              {/* Glowing gradient ring */}
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-cyan-400 to-violet-500 p-[3px] animate-glow-pulse"
              >
                <div className="w-full h-full bg-background rounded-full overflow-hidden p-2">
                  <div className="w-full h-full bg-muted rounded-full overflow-hidden relative">
                  <Image src="/profile.jpg" alt="Muhammad Genta Dwiputra" fill sizes="(max-width: 768px) 288px, 384px" className="object-cover object-center" priority />
                  </div>
                </div>
              </div>

              {/* Floating tech icons around photo */}
              {floatingIcons.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                  transition={{
                    opacity: { delay: 1 + item.delay, duration: 0.4 },
                    scale: { delay: 1 + item.delay, duration: 0.4, type: "spring" },
                    y: { duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: item.delay },
                  }}
                  style={{ left: `calc(50% + ${item.x}px)`, top: `calc(50% + ${item.y}px)` }}
                  className="absolute w-10 h-10 glass rounded-xl flex items-center justify-center text-lg shadow-lg shadow-blue-500/10 -translate-x-1/2 -translate-y-1/2"
                >
                  {item.icon}
                </motion.div>
              ))}

              {/* Glow behind photo */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-blue-600/30 to-cyan-400/30 blur-2xl -z-10 animate-glow-pulse" />
            </div>
          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-border/60 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 bg-primary/60 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
