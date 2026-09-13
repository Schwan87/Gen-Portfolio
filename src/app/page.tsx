import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { Toaster } from "@/components/ui/sonner";

// Below-fold sections — lazy loaded for better initial bundle size
const ServicesSection = dynamic(() =>
  import("@/components/sections/ServicesSection").then((m) => ({ default: m.ServicesSection }))
);
const SkillsSection = dynamic(() =>
  import("@/components/sections/SkillsSection").then((m) => ({ default: m.SkillsSection }))
);
const ExperienceSection = dynamic(() =>
  import("@/components/sections/ExperienceSection").then((m) => ({ default: m.ExperienceSection }))
);
const ProjectsSection = dynamic(() =>
  import("@/components/sections/ProjectsSection").then((m) => ({ default: m.ProjectsSection }))
);
const EducationSection = dynamic(() =>
  import("@/components/sections/EducationSection").then((m) => ({ default: m.EducationSection }))
);
const CertificatesSection = dynamic(() =>
  import("@/components/sections/CertificatesSection").then((m) => ({ default: m.CertificatesSection }))
);
const ContactSection = dynamic(() =>
  import("@/components/sections/ContactSection").then((m) => ({ default: m.ContactSection }))
);

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

