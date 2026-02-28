import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProblemSolvingSection from "@/components/ProblemSolvingSection";
import AchievementsSection from "@/components/AchievementsSection";
import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ProblemSolvingSection />
      <AchievementsSection />
      <EducationSection />
      <ContactSection />
    </div>
  );
}

