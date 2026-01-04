'use client';

import { createContext, useContext, useEffect, useState } from 'react';

interface SectionActivationContextType {
  progress: number; // scroll progress 0 → 1
}

const SectionActivationContext = createContext<SectionActivationContextType>({
  progress: 0,
});

export const SectionActivationProvider = ({ children }: { children: React.ReactNode }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(Math.min(scrollY / maxScroll, 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <SectionActivationContext.Provider value={{ progress }}>
      {children}
    </SectionActivationContext.Provider>
  );
};

export const useSectionActivation = () => useContext(SectionActivationContext);
