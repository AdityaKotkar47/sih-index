'use client';

import Image from 'next/image';
import { FiPlus } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-12 mb-12">
          <div className="relative w-[200px] h-[200px]">
              <Image
                src="/assets/images/sih_logo.png" 
                alt="Smart India Hackathon Logo"
                fill
                className="object-contain"
              />
          </div>
          <FiPlus className="w-12 h-12 text-gray-500 dark:text-gray-400" />
          <div className="relative w-[200px] h-[200px]">
            <Image 
              src="/assets/images/pravaah_logo.png"
              alt="Pravaah Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
          Welcome to Pravaah
        </h1>
        <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl">
          Pravaah is a comprehensive navigation solution for railway stations, developed as part of the Smart India Hackathon. 
          It aims to assist passengers in locating various facilities and destinations within the station premises, 
          enhancing their overall experience and ensuring timely travel connections.
        </p>
      </div>
    </section>
  );
};

export default HeroSection; 