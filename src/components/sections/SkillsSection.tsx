"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress, SiSupabase, SiPostgresql, SiFirebase, SiGit, SiGithub, SiVite, SiPostman, SiVercel, SiFigma } from "react-icons/si";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeUp } from "@/lib/animations";

const skillCategories = [
  {
    title: "Frontend",
    color: "from-blue-500 to-cyan-400",
    skills: [
      { name: "HTML", level: 95, icon: <SiHtml5 className="text-[#E34F26]" /> },
      { name: "CSS", level: 90, icon: <SiCss className="text-[#1572B6]" /> },
      { name: "JavaScript", level: 85, icon: <SiJavascript className="text-[#F7DF1E]" /> },
      { name: "TypeScript", level: 80, icon: <SiTypescript className="text-[#3178C6]" /> },
      { name: "React", level: 85, icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "Next.js", level: 80, icon: <SiNextdotjs className="text-foreground" /> },
      { name: "Tailwind CSS", level: 90, icon: <SiTailwindcss className="text-[#06B6D4]" /> },
    ],
  },
  {
    title: "Backend & Database",
    color: "from-violet-500 to-blue-500",
    skills: [
      { name: "Node.js", level: 75, icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: "Express", level: 70, icon: <SiExpress className="text-foreground" /> },
      { name: "Supabase", level: 80, icon: <SiSupabase className="text-[#3ECF8E]" /> },
      { name: "PostgreSQL", level: 75, icon: <SiPostgresql className="text-[#4169E1]" /> },
      { name: "Firebase", level: 70, icon: <SiFirebase className="text-[#FFCA28]" /> },
    ],
  },
  {
    title: "Tools & Others",
    color: "from-cyan-400 to-teal-400",
    skills: [
      { name: "Git", level: 85, icon: <SiGit className="text-[#F05032]" /> },
      { name: "GitHub", level: 85, icon: <SiGithub className="text-foreground" /> },
      { name: "Vite", level: 85, icon: <SiVite className="text-[#646CFF]" /> },
      { name: "Figma", level: 75, icon: <SiFigma className="text-[#F24E1E]" /> },
      { name: "Postman", level: 80, icon: <SiPostman className="text-[#FF6C37]" /> },
      { name: "Vercel", level: 85, icon: <SiVercel className="text-foreground" /> },
    ],
  },
];

function SkillBar({ name, level, icon, color, index }: { name: string; level: number; icon: React.ReactNode; color: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <motion.span
            whileHover={{ scale: 1.3, rotate: 10 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="text-lg"
          >
            {icon}
          </motion.span>
          <span className="font-medium text-sm">{name}</span>
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: index * 0.07 + 0.5 }}
          className="text-xs text-muted-foreground font-mono"
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden relative">
        {/* Track shimmer */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.1, delay: index * 0.07 + 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`h-full bg-gradient-to-r ${color} rounded-full relative`}
        >
          {/* Glow tip — CSS animation, no JS runtime cost */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white/80 blur-[2px] skill-glow-tip" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          label="Tech Stack"
          title={<>Skills &amp; <span className="text-gradient">Tools</span></>}
        />

        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="glass p-6 rounded-2xl border border-border/40 hover:border-primary/30 transition-colors relative overflow-hidden group"
            >
              {/* Top gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${category.color} opacity-60 group-hover:opacity-100 transition-opacity`} />

              <motion.h3
                className="text-xl font-semibold mb-6 flex items-center gap-2"
              >
                <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.color} inline-block`} />
                {category.title}
              </motion.h3>

              <div className="space-y-5">
                {category.skills.map((skill, i) => (
                  <SkillBar
                    key={skill.name}
                    {...skill}
                    color={category.color}
                    index={i}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
