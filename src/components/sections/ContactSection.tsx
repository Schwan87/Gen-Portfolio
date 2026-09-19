"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, Sparkles } from "lucide-react";
import { SiWhatsapp, SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer, fadeUp, scaleIn } from "@/lib/animations";
import { toast } from "sonner";

const socialLinks = [
  {
    label: "Email",
    href: "mailto:mgenta999@gmail.com",
    icon: <Mail className="h-5 w-5" />,
    color: "from-red-500 to-orange-400",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/6289668561950",
    icon: <SiWhatsapp className="h-5 w-5" />,
    color: "from-green-500 to-teal-400",
  },
  {
    label: "GitHub",
    href: "https://github.com/Schwan87",
    icon: <SiGithub className="h-5 w-5" />,
    color: "from-gray-500 to-gray-700",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    icon: <FaLinkedinIn className="h-5 w-5" />,
    color: "from-blue-500 to-blue-700",
  },
];

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    const whatsappNumber = "6289668561950";
    const text = `Hello Genta, my name is ${name}.\nMy email: ${email}\n\nMessage:\n${message}`;
    const encodedText = encodeURIComponent(text);

    setTimeout(() => {
      setIsSubmitting(false);
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedText}`, "_blank");
      toast.success("Redirecting to WhatsApp...", {
        description: "Please continue sending your message via WhatsApp.",
      });
      (e.target as HTMLFormElement).reset();
    }, 500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background — static, no JS animation */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl -z-10 animate-glow-pulse" />
      <div
        className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-3xl -z-10 animate-glow-pulse"
        style={{ animationDelay: "4s" }}
      />

      <div className="container mx-auto px-4 md:px-8">
        <SectionHeading
          label="Let's Connect"
          title={<>Get In <span className="text-gradient">Touch</span></>}
        />

        <div className="max-w-2xl mx-auto space-y-6">
          {/* Social links */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                whileHover={{ scale: 1.08, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r ${link.color} text-white text-sm font-medium shadow-lg hover:shadow-xl transition-shadow`}
              >
                {link.icon}
                {link.label}
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ boxShadow: "0 20px 60px rgba(59,130,246,0.1)" }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              <Card className="glass p-8 rounded-3xl border-border/50 shadow-lg relative overflow-hidden">
                {/* Animated top shimmer */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  style={{ originX: 0 }}
                  className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500"
                />

                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-center mb-8"
                >
                  <div className="inline-block mb-3 hover:rotate-12 transition-transform duration-300">
                    <Sparkles className="h-6 w-6 text-cyan-400 mx-auto" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Let&apos;s Work Together</h3>
                  <p className="text-muted-foreground">
                    Got a web project in mind, a collaboration idea, or just want to connect? Drop a message below and it will send directly to my WhatsApp!
                  </p>
                </motion.div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name field */}
                  <motion.div
                    animate={focused === "name" ? { scale: 1.01 } : { scale: 1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="space-y-2"
                  >
                    <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                      <Mail className="h-3.5 w-3.5 text-muted-foreground" />
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      className="bg-background/50 border-border/50 focus-visible:ring-primary/50 focus-visible:border-primary/50 transition-colors"
                    />
                  </motion.div>

                  {/* Email field */}
                  <motion.div
                    animate={focused === "email" ? { scale: 1.01 } : { scale: 1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="space-y-2"
                  >
                    <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                      <Mail className="h-3.5 w-3.5 text-muted-foreground" />
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      className="bg-background/50 border-border/50 focus-visible:ring-primary/50 focus-visible:border-primary/50 transition-colors"
                    />
                  </motion.div>

                  {/* Message field */}
                  <motion.div
                    animate={focused === "message" ? { scale: 1.01 } : { scale: 1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                    className="space-y-2"
                  >
                    <label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                      <MessageSquare className="h-3.5 w-3.5 text-muted-foreground" />
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Hi Genta, I'd like to discuss..."
                      onFocus={() => setFocused("message")}
                      onBlur={() => setFocused(null)}
                      className="min-h-[120px] bg-background/50 border-border/50 focus-visible:ring-primary/50 focus-visible:border-primary/50 transition-colors"
                    />
                  </motion.div>

                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      className="w-full rounded-full gap-2 shadow-[0_0_20px_rgba(0,182,212,0.3)] transition-all hover:shadow-[0_0_30px_rgba(0,182,212,0.5)] relative overflow-hidden group"
                      disabled={isSubmitting}
                    >
                      <motion.div
                        initial={{ x: "-100%", skewX: -20 }}
                        whileHover={{ x: "200%" }}
                        transition={{ duration: 0.6 }}
                        className="absolute inset-0 bg-white/10 pointer-events-none"
                      />
                      {isSubmitting ? (
                        <motion.span
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        >
                          Redirecting to WhatsApp...
                        </motion.span>
                      ) : (
                        <>
                          Send Message
                          <div className="group-hover:translate-x-1 transition-transform duration-200">
                            <Send className="h-4 w-4" />
                          </div>
                        </>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
