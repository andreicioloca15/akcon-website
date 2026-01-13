import { Phone, CheckCircle, X, Calendar, MapPin, Clock, TrendingUp, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Breadcrumbs from '../components/Breadcrumbs';
import Contact from '../components/Contact';
import SEO from '../components/SEO';
import companyData from '../content/company.json';
import serviceData from '../content/service-pages/tigla-metalica.json';

export default function TiglaMetalica() {
  const keywords = typeof serviceData.keywords === 'string'
    ? serviceData.keywords.split(', ')
    : serviceData.keywords;

  const scrollToContact = (): void => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const headerRef = useScrollAnimation<HTMLDivElement>({ distance: 40 });
  const imageRef = useScrollAnimation<HTMLDivElement>({ distance: 50, delay: 100 });
  const problemRef = useScrollAnimation<HTMLDivElement>({ distance: 50, delay: 200 });
  const solutionRef = useScrollAnimation<HTMLDivElement>({ distance: 50, delay: 300 });
  const resultsRef = useScrollAnimation<HTMLDivElement>({ distance: 50, delay: 400 });
  const testimonialRef = useScrollAnimation<HTMLDivElement>({ distance: 40 });

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={serviceData.metaTitle}
        description={serviceData.metaDescription}
        keywords={keywords}
        ogType="service"
        faq={serviceData.faq}
      />
      <Breadcrumbs items={[{ label: 'Servicii', path: '/#servicii' }, { label: serviceData.title }]} />

      <section className="relative py-20 md:py-24 bg-gradient-to-br from-navy via-navy-light to-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {serviceData.heroTitle}
            </h1>
            <p className="font-open-sans text-lg md:text-xl mb-8 opacity-95 leading-body">
              {serviceData.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-gold text-white px-8 py-4 rounded-lg font-montserrat text-lg font-semibold hover:bg-gold-hover transition-all duration-300 shadow-lg hover:shadow-gold/50 hover:scale-105"
              >
                Solicită Ofertă
              </button>
              <a
                href={`tel:+40${companyData.phone.replace(/\s/g, '').replace(/^0/, '')}`}
                className="bg-white text-navy px-8 py-4 rounded-lg font-montserrat text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105 flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Sună: {companyData.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div ref={headerRef} className="mb-12">
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-navy mb-6">
              {serviceData.caseStudy.title}
            </h2>
            <div className="flex flex-wrap gap-6 text-sm font-open-sans text-gray-600">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-gold mr-2" />
                <span>{serviceData.caseStudy.clientLocation}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-gold mr-2" />
                <span>{serviceData.caseStudy.projectDate}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-gold mr-2" />
                <span>{serviceData.caseStudy.duration}</span>
              </div>
              <div className="flex items-center">
                <TrendingUp className="w-5 h-5 text-gold mr-2" />
                <span>{serviceData.caseStudy.area}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
            <div className="lg:col-span-2 space-y-8">
              <div ref={imageRef}>
                {serviceData.caseStudy.afterImages && serviceData.caseStudy.afterImages.length > 0 && (
                  <div className="relative rounded-xl overflow-hidden shadow-2xl">
                    <img
                      src={serviceData.caseStudy.afterImages[0]}
                      alt={`Montaj țiglă metalică ${serviceData.caseStudy.clientLocation}`}
                      className="w-full h-[400px] md:h-[500px] object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-gold px-6 py-3 rounded-lg shadow-lg">
                      <span className="font-montserrat font-bold text-white text-sm uppercase tracking-wide">
                        Proiect Finalizat
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div ref={problemRef} className="bg-red-50 border-l-4 border-red-500 p-8 rounded-r-xl">
                <h3 className="font-montserrat text-2xl font-bold text-navy mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center text-lg">1</span>
                  Situația Inițială: Provocarea
                </h3>
                <p className="font-open-sans text-gray-700 leading-relaxed text-base">
                  {serviceData.caseStudy.problemDescription}
                </p>
              </div>

              <div ref={solutionRef} className="bg-blue-50 border-l-4 border-navy p-8 rounded-r-xl">
                <h3 className="font-montserrat text-2xl font-bold text-navy mb-4 flex items-center gap-3">
                  <span className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center text-lg">2</span>
                  Soluția Noastră: Ce Am Implementat
                </h3>
                <p className="font-open-sans text-gray-700 leading-relaxed text-base mb-6">
                  {serviceData.caseStudy.solutionDescription}
                </p>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <p className="font-montserrat text-sm font-semibold text-navy mb-3">
                    Materiale Utilizate:
                  </p>
                  <p className="font-open-sans text-gray-600 text-sm leading-relaxed">
                    {serviceData.caseStudy.materials}
                  </p>
                </div>
              </div>

              <div ref={resultsRef} className="bg-gradient-to-br from-gold to-gold/90 p-8 rounded-xl shadow-lg">
                <h3 className="font-montserrat text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <CheckCircle className="w-8 h-8" />
                  Rezultate Finale
                </h3>
                <div className="space-y-4">
                  {serviceData.caseStudy.resultsDescription.split('.').filter(line => line.trim()).map((result, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                      <p className="font-open-sans text-white text-base leading-relaxed">
                        {result.trim()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-24 h-fit">
              <div className="bg-navy text-white p-8 rounded-xl shadow-xl">
                <h3 className="font-montserrat text-2xl font-bold mb-6">
                  Detalii Proiect
                </h3>
                <div className="space-y-6 text-sm font-open-sans">
                  <div>
                    <p className="opacity-75 mb-2 text-xs uppercase tracking-wide">Locație</p>
                    <p className="font-semibold text-lg">{serviceData.caseStudy.clientLocation}</p>
                  </div>
                  <div>
                    <p className="opacity-75 mb-2 text-xs uppercase tracking-wide">Durată Execuție</p>
                    <p className="font-semibold text-lg">{serviceData.caseStudy.duration}</p>
                  </div>
                  <div>
                    <p className="opacity-75 mb-2 text-xs uppercase tracking-wide">Suprafață</p>
                    <p className="font-semibold text-lg">{serviceData.caseStudy.area}</p>
                  </div>
                  <div className="pt-6 border-t border-white/20">
                    <p className="opacity-75 mb-2 text-xs uppercase tracking-wide">Garanție</p>
                    <p className="font-semibold text-gold text-lg">15 ani manoperă</p>
                  </div>
                  <div className="pt-6 border-t border-white/20">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-gold fill-current" />
                      ))}
                    </div>
                    <p className="font-semibold">5/5</p>
                  </div>
                  <div className="pt-4">
                    <div className="bg-gold text-navy px-4 py-2 rounded-lg text-center font-bold">
                      {serviceData.caseStudy.badge}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div ref={testimonialRef} className="bg-gradient-to-r from-gray-50 to-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-100">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center">
                  <Star className="w-8 h-8 text-white fill-current" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-montserrat text-2xl font-bold text-navy mb-4">
                  Părerea Clientului
                </h3>
                <p className="font-open-sans text-gray-700 text-lg italic leading-relaxed mb-4">
                  "{serviceData.caseStudy.testimonial}"
                </p>
                <p className="font-montserrat font-semibold text-navy">
                  — {serviceData.caseStudy.clientLocation}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-navy mb-4">
              De Ce Țiglă Metalică cu AKCON?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceData.benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <p className="font-open-sans text-gray-700 leading-relaxed text-sm">
                    {benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-navy mb-4">
              Procesul Nostru de Lucru
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceData.processSteps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-gold text-white rounded-full flex items-center justify-center font-montserrat text-xl font-bold mb-4">
                  {index + 1}
                </div>
                <h3 className="font-montserrat text-xl font-bold text-navy mb-2">
                  {step.title}
                </h3>
                <p className="font-open-sans text-gray-600 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-navy mb-4">
              Întrebări Frecvente
            </h2>
          </div>
          <div className="space-y-4">
            {serviceData.faq.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border-l-4 border-gold shadow-md hover:shadow-lg transition-all duration-300">
                <h3 className="font-montserrat text-lg font-bold text-navy mb-2">
                  {item.question}
                </h3>
                <p className="font-open-sans text-gray-600">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}
