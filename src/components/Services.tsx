import * as LucideIcons from 'lucide-react';
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

export default function Services() {
  const servicesData: Service[] = [
    montajAcoperisuri,
    renovareAcoperisuri,
    reparatiiAcoperisuri,
    tiglaCeramica,
    tiglaMetalica,
    mansardari
  ];

  const getIconComponent = (iconName: string) => {
    const Icon = (LucideIcons as any)[iconName];
    return Icon || LucideIcons.Home;
  };

  const services = servicesData
    .sort((a, b) => a.order - b.order)
    .map(s => ({
      icon: getIconComponent(s.icon),
      title: s.title,
      description: s.description,
      link: s.link
    }));

  const scrollToContact = () => {
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
                className="bg-white p-8 rounded-lg shadow-card hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 border border-gray-100 hover:border-gold/50 relative overflow-hidden fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl transform translate-x-16 -translate-y-16 group-hover:bg-gold/10 transition-all duration-500"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-hover rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
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
