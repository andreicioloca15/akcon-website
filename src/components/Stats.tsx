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
    <div ref={ref} className="font-montserrat text-4xl md:text-5xl font-bold text-glow-white transition-all duration-300">
      {count}{suffix}
    </div>
  );
}

export default function Stats() {
  const stats = [
    { value: companyData.yearsExperience, suffix: '+', label: 'Ani Experiență', icon: '📅' },
    { value: companyData.projectsCompleted, suffix: '+', label: 'Proiecte Finalizate', icon: '🏆' },
    { value: 15, suffix: '', label: 'Ani Garanție', icon: '✓' },
    { value: companyData.satisfiedClients, suffix: '%', label: 'Clienți Mulțumiți', icon: '😊' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gold via-gold-hover to-gold text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="fade-in-up hover-lift" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="text-5xl mb-4 floating" style={{ animationDelay: `${index * 200}ms` }}>{stat.icon}</div>
              <CountUp end={stat.value} suffix={stat.suffix} />
              <div className="font-open-sans text-base md:text-lg opacity-95 mt-3">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
