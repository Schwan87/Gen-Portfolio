"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Award, Trophy, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, cardVariants } from "@/lib/animations";

const certificates = [
  { id: 1, title: "Responsive Web Design", issuer: "FreeCodeCamp", date: "2023", color: "from-orange-500 to-red-500" },
  { id: 2, title: "JavaScript Algorithms", issuer: "FreeCodeCamp", date: "2023", color: "from-yellow-500 to-orange-500" },
  { id: 3, title: "React Development", issuer: "Coursera", date: "2024", color: "from-blue-500 to-cyan-400" },
  { id: 4, title: "Git & GitHub", issuer: "Dicoding", date: "2024", color: "from-gray-500 to-gray-700" },
  { id: 5, title: "SQL Database", issuer: "HackerRank", date: "2024", color: "from-green-500 to-teal-400" },
  { id: 6, title: "UI/UX Design", issuer: "Google", date: "2024", color: "from-blue-400 to-violet-500" },
];

export function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<typeof certificates[0] | null>(null);

  return (
    <section id="certificates" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30 -z-10" />
      <motion.div
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-cyan-500/5 rounded-full blur-3xl -z-10"
      />

      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          label="My Achievements"
          title={<>My <span className="text-gradient">Certificates</span></>}
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certificates.map((cert, idx) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              onClick={() => setSelectedCert(cert)}
              className="glass p-6 rounded-2xl cursor-pointer group hover:border-primary/50 transition-colors relative overflow-hidden border border-border/40"
            >
              {/* Top color accent line */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color} opacity-70 group-hover:opacity-100 transition-opacity`} />

              {/* Shimmer sweep on hover */}
              <motion.div
                initial={{ x: "-120%", skewX: -20 }}
                whileHover={{ x: "120%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
              />

              <motion.div
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 5, repeat: Infinity, delay: idx * 0.5 }}
                className={`w-12 h-12 rounded-full bg-gradient-to-br ${cert.color} opacity-20 flex items-center justify-center mb-4 group-hover:opacity-30 transition-opacity`}
              >
              </motion.div>
              <div className={`w-12 h-12 bg-gradient-to-br ${cert.color} bg-opacity-10 rounded-full flex items-center justify-center mb-4 absolute top-6 left-6`}>
                <Award className="h-6 w-6 text-white drop-shadow-sm" />
              </div>
              <div className="mt-12">
                <h3 className="font-bold text-lg mb-1 leading-tight">{cert.title}</h3>
                <p className="text-muted-foreground text-sm flex justify-between items-center">
                  <span className="flex items-center gap-1">
                    <Star className="h-3 w-3 text-yellow-500/70" />
                    {cert.issuer}
                  </span>
                  <span className="font-mono">{cert.date}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal Overlay */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
              onClick={() => setSelectedCert(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.7, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.7, y: 40 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="glass p-8 rounded-3xl max-w-lg w-full relative border border-border/50 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Top gradient from cert color */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${selectedCert.color}`} />

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 rounded-full hover:bg-destructive/10 hover:text-destructive transition-colors"
                  onClick={() => setSelectedCert(null)}
                >
                  <X className="h-5 w-5" />
                </Button>

                <motion.div
                  initial={{ scale: 0, rotate: -30 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${selectedCert.color} flex items-center justify-center mb-6 mx-auto shadow-lg`}
                >
                  <Trophy className="h-10 w-10 text-white drop-shadow-md" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="text-center"
                >
                  <h3 className="text-2xl font-bold mb-2">{selectedCert.title}</h3>
                  <p className="text-lg text-muted-foreground mb-1">{selectedCert.issuer}</p>
                  <p className="text-sm text-muted-foreground mb-8">Issued {selectedCert.date}</p>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Button className={`rounded-full w-full max-w-xs mx-auto gap-2 bg-gradient-to-r ${selectedCert.color} border-0 text-white hover:opacity-90`}>
                      <ExternalLink className="h-4 w-4" /> View Credential
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
