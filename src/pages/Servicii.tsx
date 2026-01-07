import { Link } from 'react-router-dom';
import { Wrench, Home, Hammer, Droplet, Shield, Building } from 'lucide-react';
import SEO from '../components/SEO';
import Breadcrumbs from '../components/Breadcrumbs';
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

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  'home': Home,
  'wrench': Wrench,
  'hammer': Hammer,
  'droplet': Droplet,
  'shield': Shield,
  'building': Building,
};

export default function Servicii() {
  const servicesData: Service[] = [
    montajAcoperisuri,
    renovareAcoperisuri,
    reparatiiAcoperisuri,
    tiglaCeramica,
    tiglaMetalica,
    mansardari
  ];

  const services = servicesData
    .sort((a, b) => a.order - b.order)
    .filter(s => s.link);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <SEO
        title="Servicii Acoperișuri - Montaj, Renovare, Reparații | AKCON"
        description="Servicii complete de acoperișuri în județul Alba: montaj acoperișuri noi, renovare, reparații urgente, mansardări, țiglă ceramică și metalică. Garanție 15 ani."
        keywords={['servicii acoperisuri', 'montaj acoperis', 'renovare acoperis', 'reparatii acoperis', 'tigla ceramica', 'tigla metalica', 'mansardari']}
        ogType="website"
      />

      <Breadcrumbs items={[{ label: 'Servicii' }]} />

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6">
              Serviciile Noastre
            </h1>
            <p className="font-open-sans text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Oferim servicii complete de acoperișuri în județul Alba, cu experiență de peste 15 ani,
              materiale premium și garanție extinsă. Descoperă cum te putem ajuta.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Home;

              return (
                <div
                  key={service.link}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  style={{
                    animation: 'fadeInUp 0.6s ease-out forwards',
                    animationDelay: `${index * 100}ms`,
                    opacity: 0
                  }}
                >
                  <div className="p-8">
                    <div className="flex justify-center mb-6">
                      <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center group-hover:bg-gold/20 transition-all duration-300">
                        <IconComponent className="w-8 h-8 text-gold" />
                      </div>
                    </div>

                    <h3 className="font-montserrat text-xl md:text-2xl font-bold text-navy mb-4 text-center">
                      {service.title}
                    </h3>

                    <p className="font-open-sans text-gray-600 leading-relaxed mb-6 text-center">
                      {service.description}
                    </p>

                    <Link
                      to={service.link || '#'}
                      className="block w-full bg-gold text-white px-6 py-3 rounded-lg font-montserrat font-semibold text-center hover:bg-gold-hover transition-all duration-300 hover:shadow-lg hover:scale-105"
                    >
                      Vezi Detalii
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="bg-navy rounded-xl p-8 md:p-12 text-white">
              <h2 className="font-montserrat text-2xl md:text-3xl font-bold mb-4">
                Nu ești sigur ce serviciu ai nevoie?
              </h2>
              <p className="font-open-sans text-lg mb-6 opacity-90">
                Contactează-ne pentru o consultație gratuită și o evaluare profesională a acoperiș ului tău.
              </p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/#contact';
                  }
                }}
                className="inline-block bg-gold text-white px-8 py-4 rounded-lg font-montserrat font-semibold hover:bg-gold-hover transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Solicită Consultație Gratuită
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
