"use client";

import Link from "next/link";
import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="#home" className="text-2xl font-bold text-gradient mb-4 block">
              Genta<span className="text-foreground">.</span>
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Information Systems student &amp; Frontend Developer building fast, modern web applications.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
              </li>
              <li>
                <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link>
              </li>
              <li>
                <Link href="#experience" className="text-muted-foreground hover:text-primary transition-colors">Experience</Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
 
          <div>
            <h3 className="font-semibold text-lg mb-4">Social Media</h3>
            <div className="flex gap-4">
              <Link href="https://github.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <FaGithub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <FaLinkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://www.instagram.com/genta6184?igsh=cTJzcDZnYzQ1N21y" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                <FaInstagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="mailto:contact@email.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} Muhammad Genta Dwiputra. All rights reserved.
          </p>
          <Button variant="outline" size="icon" onClick={scrollToTop} className="rounded-full">
            <ArrowUp className="h-4 w-4" />
            <span className="sr-only">Back to top</span>
          </Button>
        </div>
      </div>
    </footer>
  );
}
