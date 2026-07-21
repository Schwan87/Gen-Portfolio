"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Database, Monitor, BrainCircuit, Code } from "lucide-react";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeUp, scaleIn } from "@/lib/animations";

export function EducationSection() {
  const focusAreas = [
    { name: "Web & App Development", icon: <Monitor className="h-4 w-4" /> },
    { name: "Database Systems", icon: <Database className="h-4 w-4" /> },
    { name: "UI/UX Design", icon: <Code className="h-4 w-4" /> },
    { name: "Software Engineering", icon: <BookOpen className="h-4 w-4" /> },
    { name: "Basic Machine Learning", icon: <BrainCircuit className="h-4 w-4" /> },
  ];

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <motion.div
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 right-0 w-[500px] h-[400px] bg-violet-500/5 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-3xl -z-10"
      />

      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          label="Academic Background"
          title={<>My <span className="text-gradient">Education</span></>}
        />

        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ y: -4, boxShadow: "0 20px 60px rgba(59,130,246,0.1)" }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <Card className="glass border-border/50 p-8 md:p-12 rounded-[2rem] overflow-hidden relative">
                {/* Animated top gradient bar */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                  style={{ originX: 0 }}
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500"
                />

                {/* Decorative rotating orb */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-8 right-8 w-32 h-32 rounded-full border border-dashed border-primary/10 -z-0"
                />
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />

                <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
                  {/* Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0, rotate: -20 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.2 }}
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    className="p-4 bg-primary/10 rounded-2xl shrink-0"
                  >
                    <GraduationCap className="h-12 w-12 text-primary" />
                  </motion.div>

                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        <h3 className="text-2xl font-bold">Bachelor of Information Systems (S1)</h3>
                        <p className="text-lg text-muted-foreground mt-1">Universitas Pamulang</p>
                      </motion.div>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", delay: 0.4 }}
                        className="px-4 py-1.5 bg-secondary text-secondary-foreground font-medium rounded-full text-sm w-fit"
                      >
                        2023 – Present
                      </motion.span>
                    </div>

                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                      className="text-muted-foreground leading-relaxed mb-6"
                    >
                      Studying how information technology bridges business needs and software development. My coursework covers software engineering, database administration, and system analysis to build reliable digital tools.
                    </motion.p>

                    <div>
                      <motion.h4
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="font-semibold mb-3"
                      >
                        Core Focus Areas:
                      </motion.h4>
                      <motion.div
                        variants={staggerContainer(0.08, 0.5)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-2"
                      >
                        {focusAreas.map((area) => (
                          <motion.div
                            key={area.name}
                            variants={fadeUp}
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ type: "spring", stiffness: 400 }}
                            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/50 border border-border/50 text-sm hover:border-primary/40 hover:bg-primary/5 transition-colors cursor-default"
                          >
                            <div className="text-primary">{area.icon}</div>
                            <span className="font-medium">{area.name}</span>
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
