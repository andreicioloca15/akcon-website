import { Phone, Mail } from 'lucide-react';
import ServicePage from './ServicePage';
import serviceData from '../content/service-pages/mansardari.json';
import companyData from '../content/company.json';

export default function Mansardari() {
  const keywords = typeof serviceData.keywords === 'string'
    ? serviceData.keywords.split(', ')
    : serviceData.keywords;

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <ServicePage
        {...serviceData}
        keywords={keywords}
        caseStudy={undefined}
      />

      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
            <div className="text-center mb-8">
              <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-navy mb-4">
                Proiecte de Mansardare Personalizate
              </h2>
              <p className="font-open-sans text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Fiecare mansardare este unică și necesită proiectare personalizată în funcție de structura casei tale.
              </p>
            </div>

            <div className="text-center mb-8">
              <h3 className="font-montserrat text-2xl font-bold text-navy mb-6">
                Vrei să transformi podul în spațiu locabil?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <button
                  onClick={scrollToContact}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gold text-white font-montserrat font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <Mail className="w-6 h-6" />
                  Solicită Consultanță Gratuită
                </button>
                <a
                  href={`tel:+40${companyData.phone.replace(/\s/g, '').replace(/^0/, '')}`}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-navy border-2 border-navy font-montserrat font-semibold text-lg rounded-lg shadow-lg hover:bg-navy hover:text-white transition-all duration-300"
                >
                  <Phone className="w-6 h-6" />
                  Sună: {companyData.phone}
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-navy to-navy-light text-white rounded-xl p-8">
              <h3 className="font-montserrat text-xl font-bold mb-6 flex items-center gap-2">
                <Phone className="w-6 h-6 text-gold" />
                Servicii Complete Mansardare:
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-gold font-bold">✓</span>
                  <p className="font-open-sans">Consultanță și proiectare gratuită</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold font-bold">✓</span>
                  <p className="font-open-sans">Evaluare structurală completă</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold font-bold">✓</span>
                  <p className="font-open-sans">Autorizații și documentație</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold font-bold">✓</span>
                  <p className="font-open-sans">Execuție la cheie</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-gold font-bold">✓</span>
                  <p className="font-open-sans">Garanție 15 ani manoperă</p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-gold font-bold">✓</span>
                    <p>Răspuns în 24 ore</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-gold font-bold">✓</span>
                    <p>Consultanță gratuită</p>
                  </div>
                  <div className="flex items-center gap-2 sm:col-span-2">
                    <span className="text-gold font-bold">✓</span>
                    <p>Experiență 20+ ani mansardări</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
