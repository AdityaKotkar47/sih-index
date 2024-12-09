'use client';

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import ThemeToggle from '../components/ThemeToggle';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <ThemeToggle />
    </main>
  );
}
