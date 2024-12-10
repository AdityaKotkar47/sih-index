'use client';

import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const TeamMember = ({ name, role, github, linkedin, image }) => (
  <motion.div 
    className="flex flex-col items-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="w-32 h-32 rounded-full overflow-hidden">
      <Image 
        src={`/assets/images/team/${image}`}
        alt={name}
        width={128}
        height={128}
        className="object-cover"
      />  
    </div>
    <h4 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">{name}</h4>
    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{role}</p>
    <div className="mt-2 flex space-x-3">
      <a href={github} target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
        <FaGithub size={20} />
      </a>
      <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
        <FaLinkedin size={20} />  
      </a>
    </div>
  </motion.div>
);

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Maitreyee Majumdaar',
      role: 'Team Leader, App Development, Frontend Development',
      github: 'https://github.com/maitreyee',
      linkedin: 'https://www.linkedin.com/in/maitreyee',
      image: 'maitreyee.jpg',
    },
    {
      name: 'Kanishka Amrutkar',
      role: 'App Development, Frontend Development',
      github: 'https://github.com/kanishka',
      linkedin: 'https://www.linkedin.com/in/kanishka',
      image: 'kanishka.jpg',
    },
    {
      name: 'Sujal Samadiya',
      role: 'App Development, Backend Development',
      github: 'https://github.com/sujal',
      linkedin: 'https://www.linkedin.com/in/sujal',
      image: 'sujal.jpg',
    },
    {
      name: 'Shridhar Hande',
      role: 'Full Stack, AR Development',
      github: 'https://github.com/shridhar',
      linkedin: 'https://www.linkedin.com/in/shridhar',
      image: 'shridhar.jpg',
    },
    {
      name: 'Krishna Tolani',
      role: 'App Development, AR Development',
      github: 'https://github.com/krishna',
      linkedin: 'https://www.linkedin.com/in/krishna',
      image: 'krishna.jpg',
    },
    {
      name: 'Aditya Kotkar',
      role: 'Backend Development',
      github: 'https://github.com/aditya',
      linkedin: 'https://www.linkedin.com/in/aditya',
      image: 'aditya.jpg',
    },
  ];

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Team</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {teamMembers.map((member) => (
          <TeamMember key={member.name} {...member} />
        ))}
      </div>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="bg-white dark:bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 dark:text-indigo-400 font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Meet the Pravaah Team
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:flex md:justify-center">
            <div className="md:w-1/2 md:pr-8">
              <Image
                src="/assets/images/team_photo.jpg"
                alt="Pravaah Team"
                width={500}
                height={500}
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-lg leading-6 font-medium text-gray-900 dark:text-white">
                Our Mission
              </h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                At Pravaah, our mission is to revolutionize the navigation experience for railway passengers. We strive to develop innovative solutions that empower travelers with seamless and efficient wayfinding within station premises.
              </p>
              <h3 className="mt-8 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                Our Vision  
              </h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                We envision a future where every railway passenger can navigate through stations with ease, confidence, and accessibility. By leveraging cutting-edge technologies, we aim to create a stress-free travel experience for all.
              </p>
              <h3 className="mt-8 text-lg leading-6 font-medium text-gray-900 dark:text-white">
                Our Values
              </h3>
              <ul className="mt-2 text-base text-gray-500 dark:text-gray-400 list-disc list-inside">
                <li>Innovation</li>
                <li>User-centricity</li>  
                <li>Collaboration</li>
                <li>Accessibility</li>
                <li>Excellence</li>
              </ul>
            </div>
          </div>
          <TeamSection />
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 