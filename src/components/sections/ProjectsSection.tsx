"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, cardVariants } from "@/lib/animations";
import Link from "next/link";
import Image from "next/image";

const categories = ["All", "Web App", "Landing Page", "Dashboard"];

const projects = [
  {
    id: 1,
    title: "Company Profile CV Arcindo Perkasa",
    description:
      "Official company profile website for CV Arcindo Perkasa. Built with responsive design, smooth animations, and a clean UI to highlight their manufacturing brand online.",
    category: "Landing Page",
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    github: "#",
    live: "https://cv-arcindo-perkasa.my.id/",
    image: "/arcindo.jpg",
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
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.2 } }}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200, damping: 22 }}
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
                    {/* Hover Overlay with parent hover animation */}
                    <motion.div
                      initial="hidden"
                      whileHover="visible"
                      variants={{
                        hidden: { opacity: 0 },
                        visible: { 
                          opacity: 1,
                          transition: { staggerChildren: 0.1 }
                        }
                      }}
                      className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-4"
                    >
                      <motion.div
                        variants={{
                          hidden: { scale: 0, y: 20 },
                          visible: { scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } }
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Link
                          href={project.github}
                          target="_blank"
                          className={buttonVariants({
                            variant: "secondary",
                            size: "icon",
                            className: "rounded-full",
                          })}
                        >
                          <SiGithub className="h-4 w-4" />
                        </Link>
                      </motion.div>
                      <motion.div
                        variants={{
                          hidden: { scale: 0, y: 20 },
                          visible: { scale: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } }
                        }}
                      >
                        <Link
                          href={project.live}
                          target="_blank"
                          className={buttonVariants({
                            variant: "default",
                            size: "icon",
                            className: "rounded-full",
                          })}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Link>
                      </motion.div>
                    </motion.div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        {project.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                        {project.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-6 flex-1 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
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
