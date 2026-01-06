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
    <section className="py-16 md:py-20 bg-gradient-to-br from-gold via-yellow-600 to-gold text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => {
            const Icon = stat.Icon;
            return (
              <div
                key={index}
                className="group fade-in-up transition-all duration-500 hover:-translate-y-3 hover:scale-105"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div
                  className="mb-4 inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{
                    animation: 'floating 3s ease-in-out infinite',
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  <Icon className="w-10 h-10 md:w-12 md:h-12" />
                </div>
                <CountUp end={stat.value} suffix={stat.suffix} />
                <div className="font-open-sans text-sm md:text-base lg:text-lg opacity-95 mt-2 md:mt-3 transition-opacity duration-300 group-hover:opacity-100 leading-snug">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
