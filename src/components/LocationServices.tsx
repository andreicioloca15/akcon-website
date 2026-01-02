import { MapPin, Clock, CheckCircle } from 'lucide-react';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';

interface LocationCardProps {
  city: string;
  region: string;
  distance: string;
  travelTime: string;
  services: string[];
  projectsCount: number;
  index: number;
  isVisible: boolean;
}

function LocationCard({ city, region, distance, travelTime, services, projectsCount, isVisible }: LocationCardProps) {
  return (
    <div
      className={`bg-white p-6 rounded-lg shadow-md border-l-4 border-gold card-animate ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        transform: isVisible
          ? 'translate3d(0, 0, 0) scale3d(1, 1, 1)'
          : 'translate3d(0, 16px, 0) scale3d(1.03, 1.03, 1)',
        transition: 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: isVisible ? 'auto' : 'transform, opacity',
      }}
    >
      <div className="flex items-start mb-4">
        <MapPin className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" />
        <div>
          <h3 className="font-montserrat text-h3-mobile md:text-h3-tablet font-semibold text-gray-700">
            Servicii de Acoperișuri în {city}
          </h3>
          <p className="font-open-sans text-sm text-gray-500 mt-1">{region}</p>
        </div>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center text-gray-600">
          <Clock className="w-4 h-4 mr-2 text-gold" />
          <span className="font-open-sans text-sm">
            {distance} • Timp intervenție: {travelTime}
          </span>
        </div>
        <div className="flex items-center text-gray-600">
          <CheckCircle className="w-4 h-4 mr-2 text-gold" />
          <span className="font-open-sans text-sm font-semibold">
            {projectsCount}+ proiecte finalizate în {city}
          </span>
        </div>
      </div>

      <div className="border-t pt-4">
        <p className="font-open-sans text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
          Servicii disponibile:
        </p>
        <div className="flex flex-wrap gap-2">
          {services.map((service, idx) => (
            <span
              key={idx}
              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full font-open-sans text-xs"
            >
              {service}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function LocationServices() {
  const locations = [
    {
      city: 'Alba Iulia',
      region: 'Capitala județului Alba',
      distance: '25 km de sediu',
      travelTime: '25-30 min',
      services: ['Montaj acoperișuri', 'Renovare', 'Reparații urgente', 'Mansardări', 'Țiglă ceramică', 'Țiglă metalică'],
      projectsCount: 150,
    },
    {
      city: 'Aiud',
      region: 'Municipiu în județul Alba',
      distance: '15 km de sediu',
      travelTime: '15-20 min',
      services: ['Montaj acoperișuri', 'Renovare', 'Reparații', 'Țiglă metalică'],
      projectsCount: 80,
    },
    {
      city: 'Teiuș',
      region: 'Sediul central AKCON',
      distance: '0 km',
      travelTime: 'Imediat',
      services: ['Toate serviciile disponibile', 'Intervenții urgente 24/7'],
      projectsCount: 120,
    },
    {
      city: 'Sebeș',
      region: 'Municipiu în județul Alba',
      distance: '35 km de sediu',
      travelTime: '30-35 min',
      services: ['Montaj acoperișuri', 'Renovare', 'Reparații', 'Mansardări'],
      projectsCount: 65,
    },
    {
      city: 'Blaj',
      region: 'Municipiu în județul Alba',
      distance: '20 km de sediu',
      travelTime: '20-25 min',
      services: ['Montaj acoperișuri', 'Renovare', 'Reparații', 'Țiglă ceramică'],
      projectsCount: 55,
    },
    {
      city: 'Câmpeni',
      region: 'Oraș în județul Alba',
      distance: '65 km de sediu',
      travelTime: '55-60 min',
      services: ['Montaj acoperișuri', 'Renovare', 'Reparații'],
      projectsCount: 30,
    },
  ];

  const { elementRef, visibleItems } = useStaggeredAnimation(locations.length, 100);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet lg:text-h2-desktop font-bold text-gray-700 mb-4">
            Acoperișuri Premium în Tot Județul Alba
          </h2>
          <p className="font-open-sans text-lg text-gray-600 leading-body max-w-3xl mx-auto">
            Deservim Alba Iulia, Aiud, Teiuș și toate localitățile din Alba cu servicii complete de construcție, renovare și reparații acoperișuri.
            Sediul central în Teiuș ne permite intervenții rapide în întregul județ.
          </p>
        </div>

        <div ref={elementRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <LocationCard
              key={location.city}
              {...location}
              index={index}
              isVisible={visibleItems.has(index)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-open-sans text-gray-600 leading-body mb-6">
            <strong>Acoperim întregul județ Alba:</strong> Cugir, Ocna Mureș, Zlatna, Abrud, și peste 50 de alte localități.
            <br />
            Suntem singura firmă premium cu sediu local în județ - pentru noi, fiecare client din Alba este prioritate.
          </p>
          <div className="inline-block bg-gold/10 border-2 border-gold rounded-lg p-6">
            <p className="font-montserrat text-lg font-semibold text-gray-700 mb-2">
              Intervenții Rapide în Tot Județul Alba
            </p>
            <p className="font-open-sans text-gray-600 leading-body">
              Timp de răspuns: <strong>maxim 24 ore</strong> pentru oferte • <strong>maxim 48 ore</strong> pentru reparații urgente
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
