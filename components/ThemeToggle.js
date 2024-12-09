'use client';

import { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
    document.documentElement.classList.toggle('dark', newDarkMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="fixed bottom-4 right-4 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white p-2 rounded-full shadow-lg"
      aria-label="Toggle dark mode"
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle; 