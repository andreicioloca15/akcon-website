import { MapPin, Clock, Calendar, Star, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { getImagePath } from '../utils/imageMap';

interface RealProjectCardProps {
  projectName: string;
  clientName?: string;
  location: string;
  area?: string;
  duration?: string;
  projectType: string;
  badge: string;
  rating: number;
  description?: string;
  testimonial?: string;
  images: string[];
  imageLayout?: 'hero' | 'grid';
}

export default function RealProjectCard({
  projectName,
  clientName,
  location,
  area,
  duration,
  projectType,
  badge,
  rating,
  description,
  testimonial,
  images,
  imageLayout = 'hero'
}: RealProjectCardProps) {
  const headerRef = useScrollAnimation<HTMLDivElement>({ distance: 40 });
  const imageRef = useScrollAnimation<HTMLDivElement>({ distance: 50, delay: 100 });
  const contentRef = useScrollAnimation<HTMLDivElement>({ distance: 50, delay: 200 });
  const testimonialRef = useScrollAnimation<HTMLDivElement>({ distance: 50, delay: 300 });

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div ref={headerRef} className="mb-12">
          <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
            {projectName}
          </h2>
          <div className="flex flex-wrap gap-6 text-sm font-open-sans text-gray-600">
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-gold mr-2" />
              <span>{location}</span>
            </div>
            {area && (
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-gold mr-2" />
                <span>{area}</span>
              </div>
            )}
            {duration && (
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-gold mr-2" />
                <span>{duration}</span>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          <div className="lg:col-span-2 space-y-8">
            <div ref={imageRef}>
              {imageLayout === 'hero' && images.length > 0 ? (
                <div className="space-y-6">
                  <div className="relative rounded-xl overflow-hidden shadow-2xl group">
                    <img
                      src={getImagePath(images[0])}
                      alt={`${projectType} - ${location}`}
                      className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 right-4 bg-gold px-6 py-3 rounded-lg shadow-lg">
                      <span className="font-montserrat font-bold text-white text-sm uppercase tracking-wide">
                        {badge}
                      </span>
                    </div>
                  </div>
                  {images.length > 1 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {images.slice(1).map((image, index) => (
                        <div key={index} className="relative rounded-xl overflow-hidden shadow-lg group">
                          <img
                            src={getImagePath(image)}
                            alt={`${projectType} detail ${index + 1}`}
                            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {images.map((image, index) => (
                    <div key={index} className="relative rounded-xl overflow-hidden shadow-xl group">
                      <img
                        src={getImagePath(image)}
                        alt={`${projectType} ${index + 1}`}
                        className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      {index === 0 && (
                        <div className="absolute top-4 right-4 bg-gold px-6 py-3 rounded-lg shadow-lg">
                          <span className="font-montserrat font-bold text-white text-sm uppercase tracking-wide">
                            {badge}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {description && (
              <div ref={contentRef} className="bg-gradient-to-br from-navy to-navy-light text-white p-8 rounded-xl shadow-lg">
                <h3 className="font-montserrat text-2xl font-bold mb-4">
                  Despre Proiect
                </h3>
                <p className="font-open-sans text-gray-100 leading-relaxed text-base">
                  {description}
                </p>
              </div>
            )}
          </div>

          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-navy text-white p-8 rounded-xl shadow-xl">
              <h3 className="font-montserrat text-2xl font-bold mb-6">
                Detalii Proiect
              </h3>
              <div className="space-y-6 text-sm font-open-sans">
                {clientName && (
                  <div>
                    <p className="opacity-75 mb-2 text-xs uppercase tracking-wide">Client</p>
                    <p className="font-semibold text-lg text-gold">{clientName}</p>
                  </div>
                )}
                <div>
                  <p className="opacity-75 mb-2 text-xs uppercase tracking-wide">Tip Proiect</p>
                  <p className="font-semibold text-base">{projectType}</p>
                </div>
                <div>
                  <p className="opacity-75 mb-2 text-xs uppercase tracking-wide">Locație</p>
                  <p className="font-semibold text-base">{location}</p>
                </div>
                {area && (
                  <div>
                    <p className="opacity-75 mb-2 text-xs uppercase tracking-wide">Suprafață</p>
                    <p className="font-semibold text-lg">{area}</p>
                  </div>
                )}
                {duration && (
                  <div>
                    <p className="opacity-75 mb-2 text-xs uppercase tracking-wide">Durată</p>
                    <p className="font-semibold text-lg">{duration}</p>
                  </div>
                )}
                <div className="pt-6 border-t border-white/20">
                  <p className="opacity-75 mb-2 text-xs uppercase tracking-wide">Garanție</p>
                  <p className="font-semibold text-gold text-lg">15 ani manoperă</p>
                </div>
                <div className="pt-6 border-t border-white/20">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-5 h-5 ${i < rating ? 'text-gold fill-current' : 'text-gray-500'}`} />
                    ))}
                  </div>
                  <p className="font-semibold">{rating}/5 Evaluare Client</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {testimonial && (
          <div ref={testimonialRef} className="bg-gradient-to-r from-gray-50 to-white p-8 md:p-12 rounded-xl shadow-lg border-l-4 border-gold">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                  <Star className="w-8 h-8 text-white fill-current" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-montserrat text-2xl md:text-3xl font-bold text-navy mb-4">
                  Părerea Clientului
                </h3>
                <p className="font-open-sans text-gray-700 text-base md:text-lg italic leading-relaxed mb-4">
                  "{testimonial}"
                </p>
                {clientName && (
                  <p className="font-montserrat font-semibold text-navy text-lg">
                    — {clientName}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
