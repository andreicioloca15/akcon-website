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
    <section className="py-20 bg-white" id="servicii">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet lg:text-h2-desktop text-gray-700 mb-6">
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
              <div key={index} className="bg-gray-50 p-8 rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 group hover:-translate-y-1">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-gold-hover transition-all duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-montserrat text-h3-mobile md:text-h3-tablet text-gray-700 mb-4">
                  {service.title}
                </h3>
                <p className="font-open-sans text-gray-600 mb-6 leading-body">
                  {service.description}
                </p>
                <button
                  onClick={scrollToContact}
                  className="text-gold font-semibold hover:text-gold-hover font-open-sans transition-colors focus:outline-none focus:text-gold-hover"
                >
                  Solicită detalii →
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
