import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { CertificatesSection } from "@/components/sections/CertificatesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <CertificatesSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </>
  );
}
