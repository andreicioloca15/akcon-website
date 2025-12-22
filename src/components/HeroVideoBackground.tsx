import { useEffect, useState } from 'react';
import vilaAlbaIulia from '../content/portfolio/vila-premium-alba-iulia.json';
import renovareSebes from '../content/portfolio/renovare-completa-sebes.json';
import mansardareAiud from '../content/portfolio/mansardare-premium-aiud.json';
import casaBlaj from '../content/portfolio/casa-moderna-blaj.json';
import renovareCugir from '../content/portfolio/renovare-vila-cugir.json';
import acoperisOcnaMures from '../content/portfolio/acoperis-nou-ocna-mures.json';

interface PortfolioProject {
  title: string;
  image: string;
  featured?: boolean;
  order: number;
}

export default function HeroVideoBackground() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const portfolioData: PortfolioProject[] = [
    vilaAlbaIulia,
    renovareSebes,
    mansardareAiud,
    casaBlaj,
    renovareCugir,
    acoperisOcnaMures
  ];

  const featuredProjects = portfolioData
    .filter(p => p.featured !== false)
    .sort((a, b) => a.order - b.order)
    .slice(0, 6);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % featuredProjects.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [featuredProjects.length]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {featuredProjects.map((project, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-2000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            transitionDuration: '2000ms',
          }}
        >
          <div
            className="w-full h-full bg-cover bg-center animate-ken-burns"
            style={{
              backgroundImage: `url(${project.image})`,
              animation: `kenBurns${(index % 3) + 1} 15s ease-in-out infinite`,
            }}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-br from-navy/90 via-navy/80 to-navy-light/90 z-10" />
      <div className="absolute inset-0 bg-navy/40 z-20" />

      <style>
        {`
          @keyframes kenBurns1 {
            0%, 100% {
              transform: scale(1) translate(0, 0);
            }
            50% {
              transform: scale(1.15) translate(-3%, -2%);
            }
          }

          @keyframes kenBurns2 {
            0%, 100% {
              transform: scale(1.1) translate(-2%, -2%);
            }
            50% {
              transform: scale(1) translate(2%, 3%);
            }
          }

          @keyframes kenBurns3 {
            0%, 100% {
              transform: scale(1) translate(2%, 0);
            }
            50% {
              transform: scale(1.12) translate(-2%, -3%);
            }
          }
        `}
      </style>
    </div>
  );
}
