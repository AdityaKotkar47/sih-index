'use client';

import { useCallback } from 'react';

const useScroll = () => {
  const scrollTo = useCallback((elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, []);

  return { scrollTo };
};

export default useScroll; 