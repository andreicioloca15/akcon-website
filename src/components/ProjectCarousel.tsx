import { useState, useEffect } from 'react';
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

  const projects: Project[] = [
    vilaAlbaIulia,
    renovareSebes,
    mansardareAiud,
    casaBlaj,
    renovareCugir,
    acoperisOcnaMures
  ];

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

  return (
    <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-2xl group">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${project.image})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h3 className="font-montserrat text-3xl font-bold mb-2 text-glow-white">
              {project.title}
            </h3>
            <p className="font-open-sans text-lg opacity-90">{project.location}</p>
          </div>
        </div>
      ))}

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
              index === currentIndex
                ? 'bg-gold w-8'
                : 'bg-white/50 hover:bg-white/80'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
