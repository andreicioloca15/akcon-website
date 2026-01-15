import { LucideIcon, Home, Wrench, Settings, Grid3x3, Sparkles, Square } from 'lucide-react';
import montajAcoperisuri from '../content/services/montaj-acoperisuri.json';
import renovareAcoperisuri from '../content/services/renovare-acoperisuri.json';
import reparatiiAcoperisuri from '../content/services/reparatii-acoperisuri.json';
import tiglaCeramica from '../content/services/tigla-ceramica.json';
import tiglaMetalica from '../content/services/tigla-metalica.json';
import mansardari from '../content/services/mansardari.json';

interface Service {
  title: string;
  description: string;
  icon: string;
  link?: string;
  order: number;
}

interface MappedService {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

const iconMap: Record<string, LucideIcon> = {
  Home,
  Wrench,
  Settings,
  Grid3x3,
  Sparkles,
  Square
};

export default function Services() {
  const servicesData: Service[] = [
    montajAcoperisuri,
    renovareAcoperisuri,
    reparatiiAcoperisuri,
    tiglaCeramica,
    tiglaMetalica,
    mansardari
  ];

  const getIconComponent = (iconName: string): LucideIcon => {
    return iconMap[iconName] || Home;
  };

  const services: MappedService[] = servicesData
    .sort((a, b) => a.order - b.order)
    .map(s => ({
      icon: getIconComponent(s.icon),
      title: s.title,
      description: s.description,
      link: s.link
    }));

  const scrollToContact = (): void => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="servicii">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet lg:text-h2-desktop text-gray-700 mb-6 hover:text-gold transition-colors duration-300">
            Serviciile Noastre
          </h2>
          <p className="font-open-sans text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-body">
            Soluții complete pentru acoperișuri premium. Fiecare proiect realizat cu atenție la detalii și materiale de cea mai înaltă calitate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-lg border border-gray-100 hover:border-gray-200 relative overflow-hidden fade-in-up group"
                style={{
                  animationDelay: `${index * 100}ms`,
                  transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                  willChange: 'transform',
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLDivElement>): void => {
                  e.currentTarget.style.transform = 'translate3d(0, -4px, 0)';
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0, 0, 0, 0.12)';
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLDivElement>): void => {
                  e.currentTarget.style.transform = 'translate3d(0, 0, 0)';
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
                }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl transform translate-x-16 -translate-y-16 group-hover:bg-gold/8 transition-all duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-hover rounded-full flex items-center justify-center mb-6 shadow-lg" style={{
                    transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-montserrat text-h3-mobile md:text-h3-tablet text-gray-700 mb-4 group-hover:text-gold transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-open-sans text-gray-600 mb-6 leading-body">
                    {service.description}
                  </p>
                  <button
                    onClick={scrollToContact}
                    className="text-gold font-semibold hover:text-gold-hover font-open-sans transition-all duration-300 flex items-center group/btn focus:outline-none focus:text-gold-hover"
                  >
                    <span>Solicită detalii</span>
                    <span className="ml-2 transform group-hover/btn:translate-x-2 transition-transform duration-300">→</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
