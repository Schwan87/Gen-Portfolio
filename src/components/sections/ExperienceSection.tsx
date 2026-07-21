"use client";

import { motion } from "framer-motion";
import { Briefcase, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeUp, dotPop, listItem } from "@/lib/animations";

const experiences = [
  {
    title: "Frontend Developer (Freelance)",
    company: "Freelance",
    period: "2023 - Present",
    icon: "💼",
    description: [
      "Built custom company profile websites with clean responsive design tailored for clients.",
      "Developed fast, interactive landing pages optimized for performance and search visibility.",
      "Managed version control with Git for smooth collaboration and deployment.",
    ],
  },
  {
    title: "Information Systems Student",
    company: "Universitas Pamulang",
    period: "2023 - Present",
    icon: "🎓",
    description: [
      "Completed web-based academic projects using clean code and modern development workflows.",
      "Expanded skills in server-side rendering, API integration, and database management.",
      "Collaborated in group projects covering database systems, algorithms, and UI/UX design.",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Animated background blobs */}
      <motion.div
        animate={{ x: [0, 30, -20, 0], y: [0, -20, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-500/5 blur-3xl -z-10"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl -z-10"
      />

      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          label="My Journey"
          title={<>Work &amp; <span className="text-gradient">Experience</span></>}
        />

        <div className="max-w-3xl mx-auto">
          {/* Timeline wrapper */}
          <div className="relative">
            {/* Animated vertical line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              style={{ originY: 0 }}
              className="absolute left-4 md:left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/60 via-cyan-400/40 to-transparent"
            />

            <motion.div
              variants={staggerContainer(0.25)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  className="mb-14 relative pl-12 md:pl-14"
                >
                  {/* Timeline dot */}
                  <motion.div
                    variants={dotPop}
                    className="absolute left-0 md:-left-[1px] flex items-center justify-center"
                    style={{ top: "6px" }}
                  >
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 0px rgba(34,211,238,0)",
                          "0 0 16px rgba(34,211,238,0.6)",
                          "0 0 0px rgba(34,211,238,0)",
                        ],
                      }}
                      transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.8 }}
                      className="w-9 h-9 bg-gradient-to-br from-blue-500/20 to-cyan-500/10 rounded-full flex items-center justify-center border border-primary/30 text-base"
                    >
                      {exp.icon}
                    </motion.div>
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ y: -5, boxShadow: "0 12px 40px rgba(59,130,246,0.12)" }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="glass p-6 md:p-8 rounded-2xl border border-border/40 hover:border-primary/30 transition-colors relative overflow-hidden group"
                  >
                    {/* Animated shimmer stripe */}
                    <motion.div
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.7, ease: "easeInOut" }}
                      className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"
                    />

                    <div className="flex flex-col md:flex-row md:items-start justify-between mb-5 gap-3">
                      <div>
                        <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                          <motion.div
                            animate={{ rotate: [0, 10, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, delay: index }}
                          >
                            <Briefcase className="h-5 w-5 text-primary" />
                          </motion.div>
                          {exp.title}
                        </h3>
                        <p className="text-sm text-cyan-500/80 mt-1 ml-7 font-medium">{exp.company}</p>
                      </div>
                      <motion.span
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.25 + 0.4, type: "spring" }}
                        className="text-sm font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-4 py-1 rounded-full w-fit shrink-0"
                      >
                        {exp.period}
                      </motion.span>
                    </div>

                    <motion.ul
                      variants={staggerContainer(0.1)}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="space-y-3"
                    >
                      {exp.description.map((item, i) => (
                        <motion.li
                          key={i}
                          variants={listItem}
                          className="flex items-start gap-3 text-muted-foreground text-sm leading-relaxed"
                        >
                          <motion.div
                            whileHover={{ scale: 1.3 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            <CheckCircle2 className="h-4 w-4 text-cyan-500/70 shrink-0 mt-0.5" />
                          </motion.div>
                          {item}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
