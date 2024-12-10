'use client';

import Image from 'next/image';
import { FiPlus } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-background px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-4 sm:space-x-12 mb-8 sm:mb-12">
          <div className="relative w-[120px] h-[120px] sm:w-[200px] sm:h-[200px]">
            <Image 
              src="/assets/images/sih_logo.png"
              alt="Smart India Hackathon Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <FiPlus className="w-8 h-8 sm:w-12 sm:h-12 text-gray-500 dark:text-muted-foreground" />
          <div className="relative w-[120px] h-[120px] sm:w-[200px] sm:h-[200px]">
            <Image
              src="/assets/images/pravaah_logo.png" 
              alt="Pravaah Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-foreground mb-4 px-2">
          Welcome to Pravaah
        </h1>
        <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-500 dark:text-muted-foreground sm:mt-5 max-w-xl mx-auto px-2">
          Pravaah is a comprehensive navigation solution for railway stations, developed as part of the Smart India Hackathon. 
          It aims to assist passengers in locating various facilities and destinations within the station premises, 
          enhancing their overall experience and ensuring timely travel connections.
        </p>
      </div>
    </section>
  );
};

export default HeroSection; 