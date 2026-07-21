"use client";

import { motion, type Variants } from "framer-motion";

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function AboutSection() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs text-cyan-500 uppercase tracking-widest font-medium mb-3"
          >
            Who I Am
          </motion.p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"
          />
        </motion.div>

        {/* Text only */}
        <motion.div
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.18 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-6 text-center"
        >
          <motion.h3 variants={textVariants} className="text-2xl md:text-3xl font-semibold leading-snug">
            Building smooth &amp; responsive{" "}
            <span className="text-gradient">web experiences</span>
          </motion.h3>
          {[
            "Hi! I'm Genta, an Information Systems student at Universitas Pamulang with a strong focus on Frontend Web Development. I enjoy designing and building web interfaces that look great and feel effortless to use.",
            "Alongside my studies, I work on freelance web projects and hands-on developer assignments. From tweaking designs in Figma to writing clean React and Next.js code, I handle the full process from design to deployment.",
            "I'm always curious to try new technologies and love collaborating with others. For me, coding is all about solving real problems with intuitive digital solutions.",
          ].map((text, i) => (
            <motion.p
              key={i}
              variants={textVariants}
              className="text-muted-foreground text-base md:text-lg leading-relaxed"
            >
              {text}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
