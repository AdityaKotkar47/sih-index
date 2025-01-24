"use client";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function ProjectTimeline() {
  const data = [
    {
      title: "Phase 1",
      image: "/assets/images/timeline/phase1.jpg",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Initial Research and Planning
          </p>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              📝 Conducted market research
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              📊 Analyzed user needs
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Phase 2",
      image: "/assets/images/timeline/phase2.jpg",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Development and Testing
          </p>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🛠️ Built core features
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🧪 Conducted user testing
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "2024 Q1",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Project Inception and Initial Development
          </p>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Project conceptualization and planning
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Tech stack selection (Next.js, TailwindCSS)
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Initial repository setup and project structure
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Development",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Core Features Implementation
          </p>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Responsive navigation system
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Modern UI components integration
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              ✅ Timeline feature implementation
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Future",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Upcoming Features and Enhancements
          </p>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🔄 Water management dashboard
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🔄 Real-time data visualization
            </div>
            <div className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              🔄 Advanced analytics features
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="timeline" className="bg-white dark:bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
            Timeline
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Our Development Journey
          </p>
        </div>
        <Timeline data={data} />
      </div>
    </section>
  );
} 