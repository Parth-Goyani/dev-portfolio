import Header from "@/components/layout/Header";
import Container from "@/components/layout/Container";
import ContactSection from "@/components/sections/ContactSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0f14] text-white">
      <Header />
      <main>
        <Container size="full" padding="none" className="flex flex-col">
          <HeroSection />
          <ProjectsSection />
          <SkillsSection />
          <ExperienceSection />
          <ContactSection />
        </Container>
      </main>
    </div>
  );
}
