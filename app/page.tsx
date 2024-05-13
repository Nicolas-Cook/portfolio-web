"use client";
import About from "@/components/english/about";
import Intro from "@/components/english/intro";
import SectionDivider from "@/components/section-divider";
import IntroES from "@/components/spanish/introES";
import AboutES from "@/components/spanish/aboutES";
import Projects from "@/components/english/projects";
import ProjectsES from "@/components/spanish/projectsES";
import Skills from "@/components/english/skills";
import SkillsES from "@/components/spanish/skillsES";
import Experience from "@/components/english/experience";
import ExperienceES from "@/components/spanish/experienceES";
import Contact from "@/components/english/contact";
import ContactES from "@/components/spanish/contactES";
import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";

export default function Home() {
  const { spanish } = useContext(LanguageContext);
  if (spanish) {
    return (
      <main className="flex flex-col items-center px-4">
        <IntroES />
        <SectionDivider />
        <AboutES />
        <SectionDivider />
        <ProjectsES />
        <SectionDivider />
        <SkillsES />
        <SectionDivider />
        <ExperienceES />
        <ContactES />
      </main>
    );
  } else {
    return (
      <main className="flex flex-col items-center px-4">
        <Intro />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Experience />
        <Contact />
      </main>
    );
  }
}
