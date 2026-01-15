import { MapPin } from 'lucide-react';
import serviceAreaData from '../content/service-area.json';

export default function ServiceArea() {
  const localities = serviceAreaData.localities
    .sort((a, b) => a.order - b.order)
    .map(l => l.name);

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet lg:text-h2-desktop font-bold text-gray-700 mb-4">
            {serviceAreaData.title}
          </h2>
          <p className="font-open-sans text-base md:text-lg text-gray-600 leading-body max-w-2xl mx-auto">
            {serviceAreaData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="rounded-lg overflow-hidden shadow-lg min-h-[400px] lg:min-h-[500px] hover:shadow-card-hover transition-all duration-300">
              <iframe
                src="https://maps.google.com/maps?q=Strada+Primăverii+42,+Teiuș+515900,+Alba,+Romania&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="500"
                className="w-full h-full min-h-[400px] lg:min-h-[500px]"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Locația AKCON - Strada Primăverii 42, Teiuș"
              />
            </div>
            <a
              href="https://maps.google.com/?q=Strada+Primăverii+42,+Teiuș+515900,+Alba,+Romania"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center mt-4 text-navy hover:text-gold transition-colors duration-300 font-open-sans text-sm font-medium"
            >
              <MapPin className="w-4 h-4 mr-2" />
              Deschide în Google Maps
            </a>
          </div>

          <div>
            <h3 className="font-montserrat text-h3-mobile md:text-h3-tablet font-semibold text-gray-700 mb-6">
              {serviceAreaData.listTitle}
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {localities.map((locality, index) => (
                <div key={index} className="flex items-center">
                  <MapPin className="w-5 h-5 text-gold mr-2 flex-shrink-0" />
                  <span className="font-open-sans text-gray-700 leading-body">{locality}</span>
                </div>
              ))}
            </div>
            <p className="font-open-sans text-gray-600 leading-body mt-6 italic">
              {serviceAreaData.footerNote}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
