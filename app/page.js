'use client';

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import ThemeToggle from '../components/ThemeToggle';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-background">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ThemeToggle />
    </main>
  );
}
