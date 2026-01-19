import { Phone, CheckCircle } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import Contact from '../components/Contact';
import SEO from '../components/SEO';
import RealProjectCard from '../components/RealProjectCard';
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

      <RealProjectCard
        projectName="Schimbare Acoperiș - Casă Modernă"
        clientName="Alex Țanea"
        location="Alba Iulia, Alba"
        projectType="Schimbare Acoperiș - Țiglă Metalică"
        badge="Client Mulțumit"
        rating={5}
        description="Am avut plăcerea de a colabora cu echipa AKCON pentru schimbarea acoperișului casei mele, iar experiența a fost una excelentă. De la primul contact, echipa s-a dovedit foarte profesionistă, promptă și atentă la detalii. Lucrările au fost executate impecabil, în termenul stabilit, și calitatea materialelor folosite a depășit așteptările mele."
        testimonial="Am avut plăcerea de a colabora cu echipa AKCON pentru schimbarea acoperișului casei mele, iar experiența a fost una excelentă. De la primul contact, echipa s-a dovedit foarte profesionistă, promptă și atentă la detalii. Lucrările au fost executate impecabil, în termenul stabilit, și calitatea materialelor folosite a depășit așteptările mele. Apreciez mult seriozitatea și dedicarea cu care au abordat proiectul, oferindu-mi constant informații și asigurându-se că totul decurge conform planului. Recomand cu încredere AKCON pentru oricine caută servicii de construcții de calitate!"
        images={['/alex_tanea copy.jpg']}
        imageLayout="hero"
      />

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
