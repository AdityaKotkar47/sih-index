'use client';

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import ThemeToggle from '../components/ThemeToggle';
import { ProjectTimeline } from '../components/ProjectTimeline';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-background">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <section id="timeline" className="py-20">
        <ProjectTimeline />
      </section>
      <AboutSection />
      <ThemeToggle />
    </main>
  );
}
