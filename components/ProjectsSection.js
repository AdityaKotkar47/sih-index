'use client';

import Image from 'next/image';
import { useState } from 'react';

const projects = [
  {
    name: 'Kiosk',
    description: 'Indoor maps for kiosk based on station layout',
    technologies: ['React', 'Vite', 'Tailwind CSS'],
    link: 'https://kiosk.pravaah.xyz',
  },
  {
    name: '3D Model Viewer',
    description: '3D model viewer with amenities',
    technologies: ['Three.js', 'React', 'Vite'],
    link: 'https://3d.pravaah.xyz',
  },
  {
    name: 'Crowd Counting',
    description: 'API backend for crowd counting',
    technologies: ['Python', 'FastAPI', 'Ultralytics'],
    link: 'https://crowd.pravaah.xyz',
  },
  {
    name: 'API Backend',
    description: 'API backend connected with the database',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    link: 'https://api.pravaah.xyz',
  },
  {
    name: 'Woosmap Integration',
    description: 'Woosmap integrated static map',
    technologies: ['Woosmap API', 'React', 'Vite'],
    link: 'https://woosmap.pravaah.xyz',
  },
  {
    name: 'Database',
    description: 'Adding dummy data to the database',
    technologies: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB'],
    link: 'https://db.pravaah.xyz',
  },
  {
    name: 'SVG Mapper',
    description: 'Creating vertices and edges JSON from SVG files',
    technologies: ['React', 'Tailwind CSS'],
    link: 'https://svg-mapper.pravaah.xyz',
  },
  {
    name: '3D Mapper',
    description: 'Marking amenities on 3D models',
    technologies: ['Three.js', 'React', 'Vite'],
    link: 'https://3d-mapper.pravaah.xyz',
  },
];

function ProjectCard({ project }) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      {/* Image Container */}
      <a 
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block relative w-full aspect-[16/9] overflow-hidden"
      >
        {/* Loading Skeleton */}
        {isLoading && (
          <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
        )}

        {/* Image */}
        <Image
          src={`/assets/images/projects/${project.name.toLowerCase().replace(/\s+/g, '-')}.png`}
          alt={`${project.name} preview`}
          fill
          className={`object-cover transform transition-transform duration-500 group-hover:scale-105 ${
            isLoading ? 'opacity-0' : 'opacity-100'
          }`}
          onLoad={() => setIsLoading(false)}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </a>

      {/* Content */}
      <div className="p-6 flex flex-col h-[180px]">
        {/* Title */}
        <a 
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-2"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-200">
            {project.name}
          </h3>
        </a>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-auto line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-full
                bg-indigo-50 text-indigo-600 
                dark:bg-indigo-900/30 dark:text-indigo-300
                ring-1 ring-indigo-500/10 dark:ring-indigo-400/20"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">
            Projects
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Pravaah Ecosystem
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 