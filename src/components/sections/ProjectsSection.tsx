"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import Link from "next/link";
import Image from "next/image";

const projectCardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number,number,number,number] },
  },
  hover: {
    opacity: 1, y: -8, scale: 1,
    transition: { type: "spring" as const, stiffness: 200, damping: 22 },
  },
};

const categories = ["All", "Web App", "Landing Page", "Interactive Web", "Dashboard"];

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  category: string;
  displayCategory?: string;
  tech: string[];
  live: string;
  github?: string | null;
  image: string;
  status: string;
}

const projects: ProjectItem[] = [
  {
    id: 1,
    title: "Rental Mobilku",
    description:
      "Website rental mobil berbasis web yang dibuat untuk menampilkan informasi kendaraan dan mendukung proses pemesanan rental secara online.",
    category: "Web App",
    displayCategory: "Web Application / Full Stack",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    live: "https://rental-mobilku-beta.vercel.app/",
    github: "https://github.com/schwan87/Rental_Mobilku",
    image: "/rental-mobilku.png",
    status: "Completed",
  },
  {
    id: 2,
    title: "SaveDuls — Video Downloader",
    description:
      "Website downloader yang saya buat untuk membantu pengguna mengunduh media dari platform yang didukung. Website memiliki antarmuka sederhana dan proses pengunduhan yang dibuat agar mudah digunakan.",
    category: "Web App",
    displayCategory: "Web Application / Backend & API",
    tech: ["Python", "FastAPI", "HTML5", "CSS3", "JavaScript"],
    live: "https://web-production-c77d8.up.railway.app/",
    github: null,
    image: "/saveduls.png",
    status: "Completed",
  },
  {
    id: 3,
    title: "Bubble Sort Spider-Man",
    description:
      "Website interaktif untuk memvisualisasikan algoritma Bubble Sort menggunakan konsep Spider-Man. Animasi memperlihatkan proses perbandingan dan pertukaran elemen secara visual sehingga proses algoritma lebih menarik dan mudah dipahami.",
    category: "Interactive Web",
    displayCategory: "Interactive Web / Algorithm Visualization",
    tech: ["HTML5", "CSS3", "JavaScript", "SVG", "Algorithm Visualization"],
    live: "https://schwan87.github.io/bubble-sort-spiderman/",
    github: "https://github.com/schwan87/bubble-sort-spiderman",
    image: "/spiderman-bubblesort.png",
    status: "Completed",
  },
  {
    id: 4,
    title: "Company Profile CV Arcindo Perkasa",
    description:
      "Official company profile website for CV Arcindo Perkasa. Built with responsive design, smooth animations, and a clean UI to highlight their manufacturing brand online.",
    category: "Landing Page",
    displayCategory: "Landing Page",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    live: "https://cv-arcindo-perkasa.my.id/",
    github: null,
    image: "/arcindo.jpg",
    status: "Completed",
  },
  {
    id: 5,
    title: "Hanya Karena Satu Foto",
    description:
      "A romantic digital experience crafted as a personal gift. Features animated flower blooms, floating hearts, sparkle particles, and glassmorphism cards — all built with pure HTML, CSS, and JavaScript.",
    category: "Landing Page",
    displayCategory: "Landing Page",
    tech: ["HTML", "CSS", "JavaScript", "Canvas API"],
    live: "https://schwan87.github.io/Buat-Nanda-2.0/",
    github: null,
    image: "/nanda2.png",
    status: "Completed",
  },
  {
    id: 6,
    title: "Tempat Kecil Kita",
    description:
      "A heartfelt digital love letter website — a personal gift celebrating every ordinary day made extraordinary. Features GSAP scroll animations, custom cursor glow, confetti effects, and a full multi-screen storytelling flow.",
    category: "Landing Page",
    displayCategory: "Landing Page",
    tech: ["HTML", "CSS", "GSAP", "Typed.js", "Confetti"],
    live: "https://schwan87.github.io/Buat-Nanda/",
    github: null,
    image: "/nanda1.png",
    status: "Completed",
  },
];

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = projects.filter((project) =>
    activeCategory === "All" ? true : project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-secondary/30 -z-10" />
      <motion.div
        animate={{ x: [0, 40, -20, 0], y: [0, -30, 15, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{ x: [0, -30, 20, 0], y: [0, 40, -20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl -z-10"
      />

      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          label="Featured Work"
          title={<>Featured <span className="text-gradient">Projects</span></>}
        />

        {/* Filter Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((cat, i) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, type: "spring", stiffness: 300 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant={activeCategory === cat ? "default" : "outline"}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full transition-all ${
                  activeCategory === cat
                    ? "shadow-[0_0_20px_rgba(34,211,238,0.4)] scale-105"
                    : "glass hover:bg-primary/10"
                }`}
              >
                {cat}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={projectCardVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.2 } }}
                whileHover="hover"
              >
                <Card
                  onClick={() => {
                    if (project.live && project.live !== "#") {
                      window.open(project.live, "_blank", "noopener,noreferrer");
                    }
                  }}
                  className="glass overflow-hidden h-full flex flex-col group border-border/50 hover:border-primary/50 transition-colors relative cursor-pointer"
                >
                  {/* Shimmer top border on hover */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    style={{ originX: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-400 z-10"
                  />

                  {/* Project Image */}
                  <div className="h-48 w-full relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Hover Overlay — reacts to parent card hover via variant */}
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, pointerEvents: "none" as const },
                        visible: { opacity: 0, pointerEvents: "none" as const },
                        hover: { opacity: 1, pointerEvents: "auto" as const, transition: { duration: 0.2 } },
                      }}
                      className="absolute inset-0 bg-background/85 backdrop-blur-sm flex items-center justify-center p-4"
                    >
                      <motion.div
                        variants={{
                          hidden: { scale: 0, y: 16 },
                          visible: { scale: 0, y: 16 },
                          hover: {
                            scale: 1,
                            y: 0,
                            transition: { type: "spring", stiffness: 300, damping: 20, delay: 0.05 },
                          },
                        }}
                        className="flex flex-wrap items-center justify-center gap-3"
                      >
                        {project.live && (
                          <Link
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold text-xs shadow-lg hover:shadow-blue-500/40 hover:scale-105 transition-all"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                            Live Demo
                          </Link>
                        )}
                        {project.github && (
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary hover:bg-secondary/80 text-foreground font-semibold text-xs shadow-md hover:scale-105 transition-all border border-border"
                          >
                            <FaGithub className="h-3.5 w-3.5" />
                            GitHub
                          </Link>
                        )}
                      </motion.div>
                    </motion.div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start gap-2 mb-4">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 text-xs py-0.5">
                        {project.displayCategory || project.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full shrink-0">
                        {project.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-6 flex-1 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto pt-2">
                      {project.tech.map((t, i) => (
                        <motion.span
                          key={t}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.06, type: "spring" }}
                          whileHover={{ scale: 1.1, y: -1 }}
                          className="text-xs font-medium text-foreground bg-secondary px-2 py-1 rounded-md cursor-default"
                        >
                          {t}
                        </motion.span>
                      ))}
                    </div>

                    {/* Bottom Link Bar */}
                    <div className="flex items-center justify-between gap-2 mt-4 pt-4 border-t border-border/40">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-cyan-400 transition-colors"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          Live Demo
                        </a>
                      )}
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <FaGithub className="h-3.5 w-3.5" />
                          GitHub Repo
                        </a>
                      ) : (
                        <span className="text-[11px] text-muted-foreground/60 italic">Private Repo</span>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

