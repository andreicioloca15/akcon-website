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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-navy via-navy-light to-gray-600 p-12 flex items-center justify-center min-h-[400px] hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
            <div className="text-center text-white">
              <MapPin className="w-24 h-24 mx-auto mb-4 text-gold" />
              <p className="font-montserrat text-2xl font-semibold">{serviceAreaData.mapTitle}</p>
              <p className="font-open-sans text-lg mt-2 opacity-90 leading-body">{serviceAreaData.mapSubtitle}</p>
            </div>
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
