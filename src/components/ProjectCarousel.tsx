import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, CheckCircle } from 'lucide-react';
import montajTiglaAlbaIulia from '../content/portfolio/montaj-tigla-metalica-alba-iulia.json';
import vilaAlbaIulia from '../content/portfolio/vila-premium-alba-iulia.json';
import renovareSebes from '../content/portfolio/renovare-completa-sebes.json';
import mansardareAiud from '../content/portfolio/mansardare-premium-aiud.json';
import casaBlaj from '../content/portfolio/casa-moderna-blaj.json';
import renovareCugir from '../content/portfolio/renovare-vila-cugir.json';
import acoperisOcnaMures from '../content/portfolio/acoperis-nou-ocna-mures.json';

interface Project {
  title: string;
  location: string;
  type?: string;
  duration?: string;
  clientName?: string;
  image: string;
  verified?: boolean;
}

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const realProjects: Project[] = [
    {
      title: 'Montaj Acoperiș Nou - Țiglă Metalică',
      location: 'Alba Iulia',
      type: 'Țiglă Metalică',
      clientName: 'Gheorghe Gerea',
      image: '/screenshot.jpg',
      verified: true
    },
    {
      title: 'Renovare Acoperiș - Garbova',
      location: 'Garbova, Alba',
      type: 'Renovare Completă',
      duration: '2 săptămâni',
      clientName: 'Drăgoș Man',
      image: '/renovare_garbova_-_dragos_man.jpg',
      verified: true
    },
    {
      title: 'Montaj Țiglă Metalică - Mihalt',
      location: 'Mihalt, Alba',
      type: 'Țiglă Metalică Roșie',
      duration: '12 zile',
      clientName: 'Proiect Mihalt',
      image: '/mihalt.jpg',
      verified: true
    }
  ];

  const projects: Project[] = [
    ...realProjects,
    { ...montajTiglaAlbaIulia, verified: true },
    vilaAlbaIulia,
    renovareSebes,
    mansardareAiud,
    casaBlaj,
    renovareCugir,
    acoperisOcnaMures
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, projects.length]);

  const goToPrevious = (): void => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToNext = (): void => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const goToSlide = (index: number): void => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      goToNext();
    }

    if (distance < -minSwipeDistance) {
      goToPrevious();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <div
      ref={carouselRef}
      className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl group"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {projects.map((project, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-700 md:group-hover:scale-105"
            style={{ backgroundImage: `url(${project.image})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent"></div>

          {project.verified && (
            <div className="absolute top-4 right-4 md:top-6 md:right-6 z-20">
              <div className="bg-gold text-white px-3 py-2 md:px-4 md:py-2 rounded-full shadow-lg flex items-center gap-2 backdrop-blur-sm animate-pulse">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5" />
                <span className="font-montserrat text-xs md:text-sm font-bold">Proiect Verificat</span>
              </div>
            </div>
          )}

          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8 text-white">
            {project.verified && (
              <div className="mb-3 flex flex-wrap items-center gap-2 md:gap-3">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 md:w-5 md:h-5 fill-gold text-gold" />
                  ))}
                </div>
                {project.duration && (
                  <div className="bg-white/20 backdrop-blur-sm px-2 py-1 md:px-3 md:py-1 rounded-full">
                    <span className="font-open-sans text-xs md:text-sm font-semibold">
                      Finalizat în {project.duration}
                    </span>
                  </div>
                )}
              </div>
            )}

            <h3 className="font-montserrat text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2 text-glow-white">
              {project.title}
            </h3>
            <p className="font-open-sans text-sm md:text-base lg:text-lg opacity-90 mb-1">
              {project.location}
            </p>

            {project.verified && project.clientName && (
              <div className="flex items-center gap-2 mt-2">
                <div className="bg-gold/20 backdrop-blur-sm px-3 py-1 rounded-full border border-gold/40">
                  <span className="font-open-sans text-xs md:text-sm">
                    <span className="text-gold font-semibold">Client:</span> {project.clientName}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}

      <button
        onClick={goToPrevious}
        className={`absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md hover:bg-white/50 text-white p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white z-20 ${
          isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <button
        onClick={goToNext}
        className={`absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md hover:bg-white/50 text-white p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white z-20 ${
          isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
      </button>

      <div className="absolute bottom-16 md:bottom-20 lg:bottom-24 left-1/2 -translate-x-1/2 flex gap-2 z-20 bg-black/20 backdrop-blur-sm px-3 py-2 rounded-full">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
              index === currentIndex
                ? 'bg-gold w-6 md:w-8'
                : 'bg-white/60 hover:bg-white/90 w-2'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
