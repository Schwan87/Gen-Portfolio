"use client";

import { motion, type Variants } from "framer-motion";
import { Code2, LayoutDashboard, Megaphone, Wrench, TestTube, Rocket } from "lucide-react";

const services = [
  {
    number: "01",
    icon: <Code2 className="h-5 w-5" />,
    title: "Frontend Development",
    description:
      "Clean, responsive web apps built with modern frameworks. From simple landing pages to full-scale production systems.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    color: "from-blue-500 to-cyan-400",
    glow: "group-hover:shadow-blue-500/20",
  },
  {
    number: "02",
    icon: <LayoutDashboard className="h-5 w-5" />,
    title: "Dashboard & Admin Panels",
    description:
      "Data-rich dashboards that turn complex information into clear, actionable views. Built for usability and speed.",
    tags: ["Charts", "Tables", "Filters", "Supabase"],
    color: "from-violet-500 to-blue-500",
    glow: "group-hover:shadow-violet-500/20",
  },
  {
    number: "03",
    icon: <Megaphone className="h-5 w-5" />,
    title: "Landing Pages",
    description:
      "High-converting, visually striking landing pages crafted for products, campaigns, and brand launches.",
    tags: ["SEO", "Animation", "Performance", "CRO"],
    color: "from-cyan-400 to-teal-400",
    glow: "group-hover:shadow-cyan-500/20",
  },
  {
    number: "04",
    icon: <Wrench className="h-5 w-5" />,
    title: "API Integration",
    description:
      "Seamlessly connecting frontends to backends — REST APIs, third-party services, and real-time databases.",
    tags: ["REST API", "Firebase", "Supabase", "Auth"],
    color: "from-blue-400 to-indigo-500",
    glow: "group-hover:shadow-indigo-500/20",
  },
  {
    number: "05",
    icon: <TestTube className="h-5 w-5" />,
    title: "UI/UX Implementation",
    description:
      "Turning Figma designs into pixel-perfect, interactive interfaces that actually feel good to use.",
    tags: ["Figma", "Responsive", "Micro-animations", "A11y"],
    color: "from-pink-500 to-violet-500",
    glow: "group-hover:shadow-pink-500/20",
  },
  {
    number: "06",
    icon: <Rocket className="h-5 w-5" />,
    title: "Deployment & Optimization",
    description:
      "Getting your project live and keeping it fast. CI/CD pipelines, Vercel deployments, and performance tuning.",
    tags: ["Vercel", "GitHub Actions", "Lighthouse", "CDN"],
    color: "from-orange-400 to-pink-500",
    glow: "group-hover:shadow-orange-500/20",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] },
  },
};

export function ServicesSection() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Header: two-column like reference */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16 items-end">
          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p
              variants={textVariants}
              className="text-xs text-cyan-500 uppercase tracking-widest font-medium mb-4 flex items-center gap-2"
            >
              <span className="w-8 h-px bg-cyan-500 inline-block" />
              Services
            </motion.p>
            <motion.h2
              variants={textVariants}
              className="text-4xl md:text-5xl font-bold leading-tight"
            >
              How I can{" "}
              <span className="text-gradient italic font-bold">help you.</span>
            </motion.h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-muted-foreground text-base md:text-lg leading-relaxed md:mb-2 self-end"
          >
            Not just a developer — a thinking partner. I bring technical depth
            and creative sensibility to every project, whether it&apos;s a weekend
            sprint or a long-term build.
          </motion.p>
        </div>

        {/* Service cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {services.map((service) => (
            <motion.div
              key={service.number}
              variants={cardVariants}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 24 }}
              className={`group relative glass border border-border/50 rounded-2xl p-6 overflow-hidden cursor-default shadow-lg hover:shadow-xl ${service.glow} transition-shadow duration-300`}
            >
              {/* Shimmer top accent */}
              <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Large number watermark */}
              <span className={`absolute top-4 right-5 text-5xl font-black bg-gradient-to-br ${service.color} bg-clip-text text-transparent opacity-15 select-none`}>
                {service.number}
              </span>

              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400 }}
                className={`inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br ${service.color} bg-opacity-10 text-white mb-5`}
                style={{ background: "rgba(255,255,255,0.05)" }}
              >
                <span className={`bg-gradient-to-br ${service.color} bg-clip-text text-transparent`}>
                  {service.icon}
                </span>
              </motion.div>

              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-1 rounded-full border border-border/60 text-muted-foreground bg-secondary/40 hover:border-primary/40 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 glass border border-border/50 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 pointer-events-none" />
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-blue-500/40 via-cyan-400/40 to-transparent" />
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-1">Have a project in mind?</h3>
            <p className="text-muted-foreground text-sm">Let&apos;s explore what we can build together.</p>
          </div>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold text-sm shadow-lg hover:shadow-blue-500/30 transition-shadow"
          >
            Start a Conversation
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
