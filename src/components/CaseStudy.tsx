import { Calendar, MapPin, Clock, TrendingUp, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { getImagePath } from '../utils/imageMap';

interface CaseStudyProps {
  title: string;
  clientName: string;
  clientLocation: string;
  clientProfession?: string;
  projectDate: string;
  duration: number;
  area: number;
  materials: string;
  problemDescription: string;
  solutionDescription: string;
  resultsDescription: string;
  testimonial: string;
  beforeImages?: string[];
  duringImages?: string[];
  afterImages?: string[];
  investmentValue?: string;
}

export default function CaseStudy({
  title,
  clientName,
  clientLocation,
  clientProfession,
  projectDate,
  duration,
  area,
  materials,
  problemDescription,
  solutionDescription,
  resultsDescription,
  testimonial,
  duringImages,
  afterImages,
  investmentValue
}: CaseStudyProps) {
  const headerRef = useScrollAnimation<HTMLDivElement>({ distance: 40 });
  const problemRef = useScrollAnimation<HTMLDivElement>({ distance: 50 });
  const imagesRef = useScrollAnimation<HTMLDivElement>({ distance: 50, delay: 100 });
  const solutionRef = useScrollAnimation<HTMLDivElement>({ distance: 50, delay: 200 });
  const resultsRef = useScrollAnimation<HTMLDivElement>({ distance: 50, delay: 300 });
  const sidebarRef = useScrollAnimation<HTMLDivElement>({ distance: 50, delay: 100 });
  const testimonialRef = useScrollAnimation<HTMLDivElement>({ distance: 40 });

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div ref={headerRef} className="mb-8 md:mb-12">
          <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet lg:text-h2-desktop font-bold text-gray-700 mb-4">
            {title}
          </h2>
          <div className="flex flex-wrap gap-3 md:gap-6 text-xs md:text-sm font-open-sans">
            <div className="flex items-center text-gray-600">
              <MapPin className="w-5 h-5 text-gold mr-2" />
              <span className="leading-body">{clientLocation}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Calendar className="w-5 h-5 text-gold mr-2" />
              <span className="leading-body">{projectDate}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="w-5 h-5 text-gold mr-2" />
              <span className="leading-body">{duration < 20 ? `${duration} zile` : `${duration} săptămâni`}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <TrendingUp className="w-5 h-5 text-gold mr-2" />
              <span className="leading-body">{area} mp</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <div ref={problemRef} className="bg-[#fef3e7] border-l-4 border-gold p-6 rounded-r-lg hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-montserrat text-h3-mobile md:text-h3-tablet font-semibold text-gray-700 mb-3 flex items-center">
                <span className="w-8 h-8 bg-gold text-white rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                Situația Inițială: Provocarea
              </h3>
              <p className="font-open-sans text-gray-600 leading-body">
                {problemDescription}
              </p>
            </div>

            <div ref={imagesRef} className="space-y-6">
              {duringImages && duringImages.length > 0 && (
                <div className="space-y-4">
                  <h4 className="font-montserrat text-xl font-semibold text-navy">
                    În Lucru: Montaj Acoperiș
                  </h4>
                  <div className="relative bg-white p-6 rounded-xl shadow-md">
                    <div className="max-w-[700px] mx-auto">
                      <div className="relative rounded-xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)] transition-all duration-300">
                        <img
                          src={getImagePath(duringImages[0])}
                          alt={`Montaj acoperiș ${clientLocation} - în lucru`}
                          className="w-full h-[400px] lg:h-[450px] object-cover"
                          loading="lazy"
                        />
                        <div className="absolute top-4 right-4 bg-navy px-5 py-2 rounded-lg shadow-lg">
                          <span className="font-montserrat font-bold text-white text-sm uppercase tracking-wide">
                            În Lucru
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {duringImages.length > 1 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                      {duringImages.slice(1).map((image, index) => (
                        <div key={index} className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                          <img
                            src={getImagePath(image)}
                            alt={`Montaj ${clientLocation} - detaliu ${index + 1}`}
                            className="w-full h-48 object-cover"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {afterImages && afterImages.length > 0 && (
                <div className="space-y-4">
                  <h4 className="font-montserrat text-xl font-semibold text-navy">
                    După: Proiect Finalizat
                  </h4>
                  <div className="relative bg-white p-6 rounded-xl shadow-md">
                    <div className="max-w-[700px] mx-auto">
                      <div className="relative rounded-xl overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.2)] transition-all duration-300">
                        <img
                          src={getImagePath(afterImages[0])}
                          alt={`Acoperiș ${clientLocation} - proiect finalizat`}
                          className="w-full h-[400px] lg:h-[450px] object-cover"
                          loading="lazy"
                        />
                        <div className="absolute top-4 right-4 bg-gold px-5 py-2 rounded-lg shadow-lg">
                          <span className="font-montserrat font-bold text-white text-sm uppercase tracking-wide">
                            Proiect Finalizat
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {afterImages.length > 1 && (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                      {afterImages.slice(1).map((image, index) => (
                        <div key={index} className="relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                          <img
                            src={getImagePath(image)}
                            alt={`Acoperiș ${clientLocation} - detaliu ${index + 1}`}
                            className="w-full h-48 object-cover"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {(!duringImages || duringImages.length === 0) && (!afterImages || afterImages.length === 0) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-[#e53e3e] to-[#c53030] h-64 rounded-lg flex items-center justify-center text-white hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                    <div className="text-center">
                      <p className="font-montserrat text-lg font-semibold mb-2">ÎNAINTE</p>
                      <p className="font-open-sans text-sm opacity-90 leading-body">Foto proiect înainte</p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-[#38a169] to-[#2f855a] h-64 rounded-lg flex items-center justify-center text-white hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                    <div className="text-center">
                      <p className="font-montserrat text-lg font-semibold mb-2">DUPĂ</p>
                      <p className="font-open-sans text-sm opacity-90 leading-body">Foto proiect finalizat</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div ref={solutionRef} className="bg-[#e6f7ff] border-l-4 border-navy p-6 rounded-r-lg hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-montserrat text-h3-mobile md:text-h3-tablet font-semibold text-gray-700 mb-3 flex items-center">
                <span className="w-8 h-8 bg-navy text-white rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                Soluția Noastră: Ce Am Implementat
              </h3>
              <p className="font-open-sans text-gray-600 leading-body mb-4">
                {solutionDescription}
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="font-montserrat text-sm font-semibold text-gray-700 mb-2">
                  Materiale Utilizate:
                </p>
                <p className="font-open-sans text-gray-600 text-sm leading-body">
                  {materials}
                </p>
              </div>
            </div>

            <div ref={resultsRef} className="bg-[#e6f9f0] border-l-4 border-[#38a169] p-6 rounded-r-lg hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-montserrat text-h3-mobile md:text-h3-tablet font-semibold text-gray-700 mb-3 flex items-center">
                <span className="w-8 h-8 bg-[#38a169] text-white rounded-full flex items-center justify-center mr-3 text-sm">3</span>
                Rezultatul Final: Transformarea
              </h3>
              <p className="font-open-sans text-gray-600 leading-body">
                {resultsDescription}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div ref={sidebarRef} className="bg-navy text-white p-8 rounded-xl shadow-xl lg:sticky lg:top-24 hover:shadow-2xl transition-all duration-300">
              <h3 className="font-montserrat text-h3-mobile md:text-h3-tablet font-semibold mb-4">
                Detalii Proiect
              </h3>
              <div className="space-y-4 text-sm font-open-sans">
                <div>
                  <p className="opacity-75 mb-1 leading-body">Client</p>
                  <p className="font-semibold leading-body">{clientName}</p>
                  {clientProfession && <p className="text-xs opacity-75 leading-body">{clientProfession}</p>}
                </div>
                <div>
                  <p className="opacity-75 mb-1 leading-body">Locație</p>
                  <p className="font-semibold leading-body">{clientLocation}</p>
                </div>
                <div>
                  <p className="opacity-75 mb-1 leading-body">Durată Execuție</p>
                  <p className="font-semibold leading-body">{duration < 20 ? `${duration} zile lucrătoare` : `${duration} săptămâni`}</p>
                </div>
                <div>
                  <p className="opacity-75 mb-1 leading-body">Suprafață</p>
                  <p className="font-semibold leading-body">{area} metri pătrați</p>
                </div>
                {investmentValue && (
                  <div>
                    <p className="opacity-75 mb-1 leading-body">Valoare Investiție</p>
                    <p className="font-semibold leading-body">{investmentValue}</p>
                  </div>
                )}
                <div className="pt-4 border-t border-white/20">
                  <p className="opacity-75 mb-1 leading-body">Garanție</p>
                  <p className="font-semibold text-gold leading-body">15 ani manoperă</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={testimonialRef} className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 rounded-lg hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-white fill-current" />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="font-montserrat text-h3-mobile md:text-h3-tablet font-semibold text-gray-700 mb-3">
                Părerea Clientului
              </h3>
              <p className="font-open-sans text-gray-600 text-lg italic leading-body mb-4">
                "{testimonial}"
              </p>
              <p className="font-montserrat font-semibold text-gray-700 leading-body">
                — {clientName}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
