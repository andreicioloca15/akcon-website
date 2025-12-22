import { useEffect, useState, useRef } from 'react';
import companyData from '../content/company.json';

function CountUp({ end, duration = 2500, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  return (
    <div ref={ref} className="font-montserrat text-4xl md:text-5xl font-bold">
      {count}{suffix}
    </div>
  );
}

export default function Stats() {
  const stats = [
    { value: companyData.yearsExperience, suffix: '+', label: 'Ani Experiență' },
    { value: companyData.projectsCompleted, suffix: '+', label: 'Proiecte Finalizate' },
    { value: 15, suffix: '', label: 'Ani Garanție' },
    { value: companyData.satisfiedClients, suffix: '%', label: 'Clienți Mulțumiți' }
  ];

  return (
    <section className="py-20 bg-gold text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <CountUp end={stat.value} suffix={stat.suffix} />
              <div className="font-open-sans text-base md:text-lg opacity-95 mt-3">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
