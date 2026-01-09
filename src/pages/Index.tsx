import { CustomCursor } from "@/components/CustomCursor";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { WorkSection } from "@/components/WorkSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ApproachSection } from "@/components/ApproachSection";
import { PrinciplesSection } from "@/components/PrinciplesSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="grid-texture">
      <CustomCursor />
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <WorkSection />
        <ProjectsSection />
        <ApproachSection />
        <PrinciplesSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
