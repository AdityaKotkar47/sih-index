'use client';

const projects = [
  {
    name: 'Kiosk',
    description: 'Indoor maps for kiosk based on station layout',
    technologies: ['Next.js', 'Tailwind CSS'],
    link: 'https://kiosk.pravaah.xyz',
  },
  {
    name: 'Database',
    description: 'Adding dummy data to the database',
    technologies: ['Next.js', 'MongoDB'],
    link: 'https://db.pravaah.xyz',
  },
  {
    name: 'SVG Mapper',
    description: 'Creating vertices and edges JSON from SVG files',
    technologies: ['Next.js'],
    link: 'https://svg-mapper.pravaah.xyz',
  },
  {
    name: 'Crowd Counting',
    description: 'API backend for crowd counting',
    technologies: ['FastAPI', 'Python'],
    link: 'https://crowd.pravaah.xyz',
  },
  {
    name: 'API Backend',
    description: 'API backend connected with the database',
    technologies: ['FastAPI', 'MongoDB'],
    link: 'https://api.pravaah.xyz',
  },
  {
    name: '3D Model Viewer',
    description: '3D model viewer with amenities',
    technologies: ['Three.js', 'React'],
    link: 'https://3d.pravaah.xyz',
  },
  {
    name: '3D Mapper',
    description: 'Marking amenities on 3D models',
    technologies: ['Three.js', 'React'],
    link: 'https://3d-mapper.pravaah.xyz',
  },
  {
    name: 'Woosmap Integration',
    description: 'Woosmap integrated static map',
    technologies: ['Woosmap API', 'Next.js'],
    link: 'https://woosmap.pravaah.xyz',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-white dark:bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">Projects</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Pravaah Ecosystem
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {projects.map((project) => (
              <div key={project.name} className="relative">
                <dt>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white hover:underline"
                  >
                    {project.name}
                  </a>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">{project.description}</dd>
                <dd className="mt-2 ml-16 text-sm text-gray-400 dark:text-gray-500">
                  {project.technologies.join(', ')}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 