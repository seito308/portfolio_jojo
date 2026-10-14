import React from 'react';
import { HeroSection, AboutSection } from '../components/HeroAbout';
import { ProjectsSection, InteractiveTerminalSection } from '../components/ProjectsAndTerminal';
import {
  SkillsSection,
  GitHubActivitySection,
  ExperienceSection,
  ContactSection,
} from '../components/SectionsRest';

export const HomePage: React.FC = () => {
  return (
    <main id="main-content">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <InteractiveTerminalSection />
      <SkillsSection />
      <GitHubActivitySection />
      <ExperienceSection />
      <ContactSection />
    </main>
  );
};
