'use client';
import { useState, useEffect } from 'react';

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop || document.body.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      
      if (winHeightPx <= 0) { // Avoid division by zero if content is not scrollable
        setProgress(0);
        return;
      }
      
      const scrolled = (scrollPx / winHeightPx) * 100;
      setProgress(scrolled > 100 ? 100 : scrolled < 0 ? 0 : scrolled); // Cap progress between 0 and 100
    };

    window.addEventListener('scroll', updateScrollProgress);
    // Call it once to set initial state
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return progress;
}
