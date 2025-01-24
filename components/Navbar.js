'use client';

import useScroll from './hooks/useScroll';
import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const { scrollTo } = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'Projects', id: 'projects' },
    { name: 'Timeline', id: 'timeline' },
    { name: 'About', id: 'about' },
  ];

  const handleNavClick = (id) => {
    scrollTo(id);
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-50 border-b transition-colors duration-200 ${
        scrolled 
          ? 'bg-white border-gray-200 dark:bg-background dark:border-border' 
          : 'bg-white/80 border-transparent dark:bg-background/80'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center justify-center flex-1">
            <div className="flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="group relative px-3 py-2 transition-colors"
                >
                  <span className="relative text-sm text-gray-600 dark:text-muted-foreground group-hover:text-black dark:group-hover:text-foreground transition-colors">
                    {item.name}
                  </span>
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-black/0 via-black/40 to-black/0 dark:from-white/0 dark:via-white/20 dark:to-white/0 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-black dark:text-muted-foreground dark:hover:text-foreground transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <FiX className="h-5 w-5" />
              ) : (
                <FiMenu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`sm:hidden border-b border-gray-200 dark:border-border absolute top-full left-0 w-full bg-white dark:bg-background transform transition-all duration-200 ${
          isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-4 py-3 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="w-full text-left px-3 py-2 text-sm text-gray-600 dark:text-muted-foreground hover:text-black dark:hover:text-foreground transition-colors"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 