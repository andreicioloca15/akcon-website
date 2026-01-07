import { CheckCircle, X, Phone, Mail, MapPin, Building2, Hammer, Settings, Shield } from 'lucide-react';
import BeforeAfterComparison from './BeforeAfterComparison';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import companyData from '../content/company.json';

interface TransformationShowcaseProps {
  variant?: 'full' | 'compact';
  showCTA?: boolean;
}

export default function TransformationShowcase({
  variant = 'full',
  showCTA = true
}: TransformationShowcaseProps) {
  const headingRef = useScrollAnimation<HTMLDivElement>({ distance: 50 });
  const introRef = useScrollAnimation<HTMLDivElement>({ distance: 50, delay: 100 });
  const comparisonRef = useScrollAnimation<HTMLDivElement>({ distance: 50, delay: 200 });
  const detailsRef = useScrollAnimation<HTMLDivElement>({ distance: 50, delay: 300 });
  const specsRef = useScrollAnimation<HTMLDivElement>({ distance: 50, delay: 400 });
  const resultsRef = useScrollAnimation<HTMLDivElement>({ distance: 50, delay: 500 });

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (variant === 'compact') {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div ref={headingRef} className="text-center mb-12">
            <div className="inline-block bg-gold text-white px-6 py-2 rounded-full font-montserrat font-semibold text-sm mb-4">
              Proiect Real AKCON
            </div>
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-navy mb-4">
              Studiu de Caz: Renovare Completă Acoperiș
            </h2>
            <p className="font-open-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Transformare de la țiglă ceramică veche la țiglă metalică premium - Stremț, Alba
            </p>
          </div>

          <div ref={comparisonRef} className="mb-12">
            <BeforeAfterComparison
              beforeImage="/ceaf613f-3ff1-4440-a8a4-8d5427638a14 copy copy.jpg"
              afterImage="/4ac47dd7-66b7-4dd6-88d1-f4239a53e6e2 copy.jpg"
            />
          </div>

          {showCTA && (
            <div className="text-center">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-white font-montserrat font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Solicită Ofertă Gratuită
              </button>
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div ref={headingRef} className="text-center mb-12">
          <div className="inline-block bg-gold text-white px-6 py-3 rounded-full font-montserrat font-semibold text-sm mb-6">
            Proiect Real AKCON
          </div>
          <h2 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6">
            Studiu de Caz: Renovare Completă Acoperiș
          </h2>
          <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transformare de la țiglă ceramică veche la țiglă metalică premium - Stremț, Alba
          </p>
        </div>

        <div ref={introRef} className="max-w-4xl mx-auto mb-16">
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <p className="font-open-sans text-lg text-gray-700 leading-relaxed text-center">
              Acest proiect demonstrează expertiza AKCON în renovări complete de acoperișuri.
              Am transformat un acoperiș vechi deteriorat într-un acoperiș modern premium în Stremț, Alba.
            </p>
          </div>
        </div>

        <div ref={comparisonRef} className="mb-16">
          <BeforeAfterComparison
            beforeImage="/ceaf613f-3ff1-4440-a8a4-8d5427638a14 copy copy.jpg"
            afterImage="/4ac47dd7-66b7-4dd6-88d1-f4239a53e6e2 copy.jpg"
          />
        </div>

        <div ref={detailsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
            <h3 className="font-montserrat text-2xl font-bold text-navy mb-6 flex items-center gap-3">
              <X className="w-7 h-7 text-red-500" />
              Provocarea
            </h3>
            <p className="font-open-sans text-base text-gray-700 mb-6">
              Proprietarul din Stremț necesita:
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <p className="font-open-sans text-gray-700">Înlocuire completă acoperiș vechi</p>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <p className="font-open-sans text-gray-700">Soluție modernă și durabilă</p>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <p className="font-open-sans text-gray-700">Aspect premium</p>
              </div>
              <div className="flex items-start gap-3">
                <X className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                <p className="font-open-sans text-gray-700">Izolație termică superioară</p>
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
                <p className="font-open-sans text-gray-700">Demontare acoperiș vechi</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <p className="font-open-sans text-gray-700">Construcție șarpantă nouă completă</p>
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
                <p className="font-open-sans text-gray-700">Finisaje profesionale complete</p>
              </div>
            </div>
          </div>
        </div>

        <div ref={specsRef} className="max-w-4xl mx-auto mb-16">
          <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
            <h3 className="font-montserrat text-2xl font-bold text-navy mb-6 text-center">
              Specificații Tehnice
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-montserrat font-semibold text-navy mb-1">Locație</p>
                  <p className="font-open-sans text-gray-600">Stremț, Alba</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Building2 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-montserrat font-semibold text-navy mb-1">Tip</p>
                  <p className="font-open-sans text-gray-600">Renovare completă acoperiș</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Hammer className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-montserrat font-semibold text-navy mb-1">Material Nou</p>
                  <p className="font-open-sans text-gray-600">Țiglă metalică gri antracit</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Settings className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-montserrat font-semibold text-navy mb-1">Complexitate</p>
                  <p className="font-open-sans text-gray-600">Acoperiș complex multi-vale</p>
                </div>
              </div>
              <div className="flex items-start gap-4 md:col-span-2">
                <Shield className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-montserrat font-semibold text-navy mb-1">Garanție</p>
                  <p className="font-open-sans text-gray-600">15 ani manoperă + materiale</p>
                </div>
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
                  Transformare completă de la vechi la modern
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-7 h-7 text-white flex-shrink-0 mt-1" />
                <p className="font-open-sans text-lg text-white leading-relaxed">
                  Acoperiș nou durabil cu garanție 15 ani
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-7 h-7 text-white flex-shrink-0 mt-1" />
                <p className="font-open-sans text-lg text-white leading-relaxed">
                  Aspect premium - valoare proprietate crescută
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-7 h-7 text-white flex-shrink-0 mt-1" />
                <p className="font-open-sans text-lg text-white leading-relaxed">
                  Izolație termică superioară
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-7 h-7 text-white flex-shrink-0 mt-1" />
                <p className="font-open-sans text-lg text-white leading-relaxed">
                  Etanșeitate perfectă, zero infiltrații
                </p>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="w-7 h-7 text-white flex-shrink-0 mt-1" />
                <p className="font-open-sans text-lg text-white leading-relaxed">
                  Client extrem de mulțumit
                </p>
              </div>
            </div>
          </div>
        </div>

        {showCTA && (
          <div className="bg-gradient-to-br from-navy to-navy-light text-white rounded-2xl p-12 text-center shadow-xl">
            <h3 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
              Vrei și Tu o Renovare Similară?
            </h3>
            <p className="font-open-sans text-lg mb-8 opacity-95 max-w-2xl mx-auto leading-relaxed">
              Echipa AKCON poate transforma și acoperișul tău cu experiență de peste 45 de ani și garanție completă.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-white font-montserrat font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Mail className="w-6 h-6" />
                Solicită Ofertă Gratuită
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
        )}
      </div>
    </section>
  );
}
