import { Phone } from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import Contact from '../components/Contact';
import SEO from '../components/SEO';
import SchemaOrg from '../components/SchemaOrg';
import TransformationStory from '../components/TransformationStory';
import companyData from '../content/company.json';
import serviceData from '../content/service-pages/montaj-acoperisuri.json';

export default function MontajAcoperisuri() {
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
      <SchemaOrg
        type="Service"
        serviceName="Montaj Acoperișuri Noi Alba Iulia"
        serviceDescription="Montaj acoperișuri noi în Alba Iulia cu materiale premium și garanție 15 ani manoperă. Țiglă metalică, țiglă ceramică, tablă fălțuită."
      />
      <Breadcrumbs items={[{ label: 'Servicii', path: '/#servicii' }, { label: serviceData.title }]} />

      {/* Hero Section */}
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

      {/* Transformation Story */}
      <TransformationStory />

      {/* Process Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-navy mb-4">
              Cum Lucrăm
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceData.processSteps.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
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

      {/* FAQ Section */}
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
