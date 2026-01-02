import { useEffect, useState, useRef } from 'react';
import { Calendar, Trophy, Shield, Smile, LucideIcon } from 'lucide-react';
import companyData from '../content/company.json';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
}

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  Icon: LucideIcon;
}

function CountUp({ end, duration = 2500, suffix = '' }: CountUpProps) {
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

    const easeOutQuart = (t: number): number => 1 - Math.pow(1 - t, 4);

    const animate = (currentTime: number): void => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = easeOutQuart(progress);

      if (progress < 1) {
        setCount(Math.floor(end * easedProgress));
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
  const stats: StatItem[] = [
    { value: companyData.yearsExperience, suffix: '+', label: 'Ani Experiență', Icon: Calendar },
    { value: companyData.projectsCompleted, suffix: '+', label: 'Proiecte Finalizate', Icon: Trophy },
    { value: 15, suffix: '', label: 'Ani Garanție', Icon: Shield },
    { value: companyData.satisfiedClients, suffix: '%', label: 'Clienți Mulțumiți', Icon: Smile }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gold via-gold-hover to-gold text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => {
            const Icon = stat.Icon;
            return (
              <div
                key={index}
                className="group transition-all duration-500 hover:-translate-y-3 hover:scale-105"
                style={{
                  animation: 'fadeInUp 0.8s ease-out forwards',
                  animationDelay: `${index * 100}ms`,
                  opacity: 0
                }}
              >
                <div
                  className="mb-4 inline-flex items-center justify-center w-16 h-16 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{
                    animation: 'floating 3s ease-in-out infinite',
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  <Icon className="w-12 h-12" />
                </div>
                <CountUp end={stat.value} suffix={stat.suffix} />
                <div className="font-open-sans text-base md:text-lg opacity-95 mt-3 transition-opacity duration-300 group-hover:opacity-100">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
    </section>
  );
}
