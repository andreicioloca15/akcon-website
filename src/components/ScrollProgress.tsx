import { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = (scrollTop / docHeight) * 100;
      setProgress(Math.min(scrollProgress, 100));
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 h-1 bg-transparent transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ pointerEvents: 'none' }}
    >
      <div
        className="h-full bg-gradient-to-r from-gold via-gold-hover to-gold shadow-lg transition-all duration-150 ease-out"
        style={{
          width: `${progress}%`,
          willChange: 'width'
        }}
      />
    </div>
  );
}
