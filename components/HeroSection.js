'use client';

import Image from 'next/image';

const HeroSection = () => {
  return (
    <section id="hero" className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center space-x-8 mb-8">
          <Image 
            src="/assets/images/sih_logo.png"
            alt="Smart India Hackathon Logo"
            width={150}
            height={150}
          />
          <Image
            src="/assets/images/indian_railways_logo.png" 
            alt="Indian Railways Logo"
            width={150}
            height={150}
          />
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