import { CheckCircle, X, Phone, Mail, ArrowRight, ArrowDown } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import companyData from '../content/company.json';

export default function TransformationStory() {
  const headingRef = useScrollAnimation<HTMLDivElement>({ distance: 50 });
  const introRef = useScrollAnimation<HTMLDivElement>({ distance: 50, delay: 100 });
  const comparisonRef = useScrollAnimation<HTMLDivElement>({ distance: 50, delay: 200 });
  const detailsRef = useScrollAnimation<HTMLDivElement>({ distance: 50, delay: 300 });
  const resultsRef = useScrollAnimation<HTMLDivElement>({ distance: 50, delay: 400 });

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div ref={headingRef} className="text-center mb-12">
          <h2 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6">
            Studiu de Caz: Montaj Acoperiș Nou - Construcție de la Zero
          </h2>
          <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Acoperiș complet pentru casă nouă
          </p>
        </div>

        <div ref={introRef} className="max-w-4xl mx-auto mb-16">
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <p className="font-open-sans text-lg text-gray-700 leading-relaxed text-center">
              Acest proiect demonstrează expertiza AKCON în construcția de acoperișuri noi pentru case construite de la zero. Am realizat un acoperiș complet cu șarpantă, izolație și țiglă metalică premium pentru o casă nouă.
            </p>
          </div>
        </div>

        <div ref={comparisonRef} className="mb-16">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center">
            <div className="w-full lg:flex-1 max-w-2xl">
              <div className="relative group">
                <div className="absolute top-4 left-4 z-10 bg-gold px-6 py-3 rounded-lg shadow-lg">
                  <span className="font-montserrat font-bold text-white text-sm uppercase tracking-wide">
                    CONSTRUCȚIE ȘARPANTĂ
                  </span>
                </div>
                <img
                  src="/dji_fly_20250728_174632_193_1767900924129_photo.jpg"
                  alt="Construcție șarpantă"
                  className="w-full h-auto rounded-xl shadow-2xl group-hover:shadow-3xl transition-all duration-300"
                />
              </div>
              <p className="text-center mt-4 font-open-sans text-gray-600 text-base leading-relaxed">
                Șarpantă nouă cu structură complexă - faza de construcție
              </p>
            </div>

            <div className="flex items-center justify-center flex-shrink-0">
              <div className="hidden lg:block">
                <ArrowRight className="w-16 h-16 text-gold" strokeWidth={3} />
              </div>
              <div className="block lg:hidden">
                <ArrowDown className="w-16 h-16 text-gold" strokeWidth={3} />
              </div>
            </div>

            <div className="w-full lg:flex-1 max-w-2xl">
              <div className="relative group">
                <div className="absolute top-4 left-4 z-10 bg-gold px-6 py-3 rounded-lg shadow-lg">
                  <span className="font-montserrat font-bold text-white text-sm uppercase tracking-wide">
                    ACOPERIȘ FINALIZAT
                  </span>
                </div>
                <img
                  src="/4ac47dd7-66b7-4dd6-88d1-f4239a53e6e2 copy.jpg"
                  alt="Acoperiș finalizat"
                  className="w-full h-auto rounded-xl shadow-2xl group-hover:shadow-3xl transition-all duration-300"
                />
              </div>
              <p className="text-center mt-4 font-open-sans text-gray-600 text-base leading-relaxed">
                Casă nouă cu acoperiș complet - țiglă metalică gri antracit
              </p>
            </div>
          </div>
        </div>

        <div ref={detailsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
            <h3 className="font-montserrat text-2xl font-bold text-navy mb-6 flex items-center gap-3">
              <X className="w-7 h-7 text-red-500" />
              Provocarea
            </h3>
            <p className="font-open-sans text-base text-gray-700 mb-6">
              Proiectul necesita:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <p className="font-open-sans text-gray-700">Construcție șarpantă completă pentru acoperiș complex</p>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <p className="font-open-sans text-gray-700">Izolație termică modernă</p>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <p className="font-open-sans text-gray-700">Montaj țiglă metalică premium</p>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <p className="font-open-sans text-gray-700">Finisaje profesionale pentru casă nouă</p>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <p className="font-open-sans text-gray-700">Respect total pentru planurile arhitecturale</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 shadow-sm">
            <h3 className="font-montserrat text-2xl font-bold text-navy mb-6 flex items-center gap-3">
              <CheckCircle className="w-7 h-7 text-gold" />
              Soluția AKCON
            </h3>
            <p className="font-open-sans text-base text-gray-700 mb-6">
              Am realizat:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <p className="font-open-sans text-gray-700">Construcție șarpantă nouă din lemn de calitate</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <p className="font-open-sans text-gray-700">Structură complexă cu văi multiple</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <p className="font-open-sans text-gray-700">Izolație termică premium</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <p className="font-open-sans text-gray-700">Montaj țiglă metalică gri antracit</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <p className="font-open-sans text-gray-700">Finisaje complete: coamă, streașină, jgheaburi</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <p className="font-open-sans text-gray-700">Livrare la timp pentru familie</p>
              </div>
            </div>
          </div>
        </div>

        <div ref={resultsRef} className="max-w-4xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-gold to-gold/90 rounded-xl p-10 shadow-lg">
            <h3 className="font-montserrat text-3xl font-bold text-white mb-8 text-center">
              REZULTATE PROIECT
            </h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-7 h-7 text-white flex-shrink-0 mt-1" />
                <p className="font-open-sans text-lg text-white leading-relaxed">
                  Acoperiș complet realizat pentru casă nouă
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-7 h-7 text-white flex-shrink-0 mt-1" />
                <p className="font-open-sans text-lg text-white leading-relaxed">
                  Șarpantă profesională cu structură complexă
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-7 h-7 text-white flex-shrink-0 mt-1" />
                <p className="font-open-sans text-lg text-white leading-relaxed">
                  Izolație termică premium instalată
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-7 h-7 text-white flex-shrink-0 mt-1" />
                <p className="font-open-sans text-lg text-white leading-relaxed">
                  Țiglă metalică montată impecabil
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-7 h-7 text-white flex-shrink-0 mt-1" />
                <p className="font-open-sans text-lg text-white leading-relaxed">
                  Aspect modern premium pentru locuință nouă
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-7 h-7 text-white flex-shrink-0 mt-1" />
                <p className="font-open-sans text-lg text-white leading-relaxed">
                  Finalizat la timp, garanție completă 15 ani
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-7 h-7 text-white flex-shrink-0 mt-1" />
                <p className="font-open-sans text-lg text-white leading-relaxed">
                  Proprietari extrem de mulțumiți
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-navy to-navy-light text-white rounded-2xl p-12 text-center shadow-xl">
          <h3 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
            Construiești o Casă Nouă?
          </h3>
          <p className="font-open-sans text-lg mb-8 opacity-95 max-w-2xl mx-auto leading-relaxed">
            Echipa AKCON construiește acoperișuri complete pentru case noi cu experiență de peste 45 de ani. De la șarpantă la finisaje, ne ocupăm de tot cu profesionalism și garanție completă.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToContact}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-white font-montserrat font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Mail className="w-6 h-6" />
              Solicită Ofertă pentru Casă Nouă
            </button>
            <a
              href={`tel:+40${companyData.phone.replace(/\s/g, '').replace(/^0/, '')}`}
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-navy font-montserrat font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <Phone className="w-6 h-6" />
              Sună Acum: {companyData.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
