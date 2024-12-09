'use client';

import useScroll from './hooks/useScroll';

const Navbar = () => {
  const { scrollTo } = useScroll();

  return (
    <nav className="bg-white dark:bg-gray-800 shadow fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16">
          <div className="flex items-center space-x-8">
            <button
              onClick={() => scrollTo('hero')}
              className="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-100 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo('projects')}
              className="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-100 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-100 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="border-transparent text-gray-500 dark:text-gray-300 hover:border-gray-300 hover:text-gray-700 dark:hover:text-gray-100 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium cursor-pointer"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 