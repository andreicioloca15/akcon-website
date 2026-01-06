import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import vilaAlbaIulia from '../content/portfolio/vila-premium-alba-iulia.json';
import renovareSebes from '../content/portfolio/renovare-completa-sebes.json';
import mansardareAiud from '../content/portfolio/mansardare-premium-aiud.json';
import casaBlaj from '../content/portfolio/casa-moderna-blaj.json';
import renovareCugir from '../content/portfolio/renovare-vila-cugir.json';
import acoperisOcnaMures from '../content/portfolio/acoperis-nou-ocna-mures.json';

interface Project {
  title: string;
  location: string;
  image: string;
}

export default function ProjectCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
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
          <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-8 text-white">
            <h3 className="font-montserrat text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2 text-glow-white">
              {project.title}
            </h3>
            <p className="font-open-sans text-sm md:text-base lg:text-lg opacity-90">{project.location}</p>
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
