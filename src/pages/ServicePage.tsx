import { Phone, CheckCircle, Shield, Clock, Award } from 'lucide-react';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';
import Breadcrumbs from '../components/Breadcrumbs';
import CaseStudy from '../components/CaseStudy';
import Contact from '../components/Contact';
import SEO from '../components/SEO';
import TransformationShowcase from '../components/TransformationShowcase';
import companyData from '../content/company.json';

interface FAQItem {
  question: string;
  answer: string;
}

interface ServicePageProps {
  slug: string;
  title: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroTitle: string;
  heroSubtitle: string;
  benefits: string[];
  processSteps: { title: string; description: string }[];
  faq: FAQItem[];
  showTransformation?: boolean;
  caseStudy?: {
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
    investmentValue?: string;
  };
}

export default function ServicePage({
  title,
  description,
  metaTitle,
  metaDescription,
  keywords,
  heroTitle,
  heroSubtitle,
  benefits,
  processSteps,
  faq,
  showTransformation = false,
  caseStudy
}: ServicePageProps) {
  const scrollToContact = (): void => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={metaTitle}
        description={metaDescription}
        keywords={keywords}
        ogType="service"
        faq={faq}
      />
      <Breadcrumbs items={[{ label: 'Servicii', path: '/#servicii' }, { label: title }]} />

      <section className="relative py-20 md:py-24 lg:py-28 bg-gradient-to-br from-navy via-navy-light to-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {heroTitle}
            </h1>
            <p className="font-open-sans text-lg md:text-xl mb-8 opacity-95 leading-body">
              {heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-gold text-white px-4 xs:px-6 md:px-8 py-3 xs:py-4 rounded-lg font-montserrat text-base xs:text-lg font-semibold hover:bg-gold-hover transition-all duration-300 shadow-lg hover:shadow-gold/50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold"
              >
                Solicită Ofertă Gratuită
              </button>
              <a
                href={`tel:+40${companyData.phone.replace(/\s/g, '').replace(/^0/, '')}`}
                className="bg-white text-navy px-4 xs:px-6 md:px-8 py-3 xs:py-4 rounded-lg font-montserrat text-base xs:text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <Phone className="w-4 h-4 xs:w-5 xs:h-5 mr-2" />
                Sună Acum
              </a>
            </div>
          </div>
        </div>
      </section>

      {benefits && benefits.length > 0 && (
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
                  De Ce {title} cu Akcon?
                </h2>
                <p className="font-open-sans text-base md:text-lg text-gray-600 leading-relaxed mb-8">
                  {description}
                </p>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start group">
                      <CheckCircle className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                      <p className="font-open-sans text-gray-700 leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-navy text-white p-6 md:p-8 rounded-xl text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <Shield className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 text-gold" />
                  <p className="font-montserrat text-4xl md:text-5xl font-bold mb-2">15</p>
                  <p className="font-open-sans text-xs md:text-sm opacity-90 leading-snug">Ani Garanție Manoperă</p>
                </div>
                <div className="bg-gold text-white p-6 md:p-8 rounded-xl text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <Clock className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-3" />
                  <p className="font-montserrat text-4xl md:text-5xl font-bold mb-2">24h</p>
                  <p className="font-open-sans text-xs md:text-sm opacity-90 leading-snug">Răspuns la Solicitări</p>
                </div>
                <div className="bg-gold text-white p-6 md:p-8 rounded-xl text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <Award className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-3" />
                  <p className="font-montserrat text-4xl md:text-5xl font-bold mb-2">100+</p>
                  <p className="font-open-sans text-xs md:text-sm opacity-90 leading-snug">Proiecte Finalizate</p>
                </div>
                <div className="bg-navy text-white p-6 md:p-8 rounded-xl text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <CheckCircle className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 text-gold" />
                  <p className="font-montserrat text-4xl md:text-5xl font-bold mb-2">100%</p>
                  <p className="font-open-sans text-xs md:text-sm opacity-90 leading-snug">Clienți Mulțumiți</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <ProcessStepsSection processSteps={processSteps} />

      {showTransformation && <TransformationShowcase variant="full" showCTA={false} />}

      {caseStudy && <CaseStudy {...caseStudy} />}

      {faq && faq.length > 0 && (
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4">
                Întrebări Frecvente
              </h2>
              <p className="font-open-sans text-lg text-gray-600">
                Răspunsuri la cele mai comune întrebări despre serviciile noastre
              </p>
            </div>
            <div className="space-y-6">
              {faq.map((item, index) => (
                <div key={index} className="bg-gradient-to-r from-gray-50 to-white p-6 md:p-8 rounded-xl border-l-4 border-gold shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <h3 className="font-montserrat text-lg md:text-xl font-bold text-navy mb-3">
                    {item.question}
                  </h3>
                  <p className="font-open-sans text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Contact />
    </div>
  );
}

function ProcessStepsSection({ processSteps }: { processSteps: { title: string; description: string }[] }) {
  const { elementRef, visibleItems } = useStaggeredAnimation(processSteps.length, 100);

  if (!processSteps || processSteps.length === 0) return null;

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4">
            Procesul Nostru de Lucru
          </h2>
          <p className="font-open-sans text-lg text-gray-600 max-w-2xl mx-auto">
            De la consultație până la finalizare, fiecare pas este planificat cu atenție
          </p>
        </div>
        <div ref={elementRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 card-animate ${
                visibleItems.has(index)
                  ? 'opacity-100'
                  : 'opacity-0'
              }`}
              style={{
                transform: visibleItems.has(index)
                  ? 'translate3d(0, 0, 0) scale3d(1, 1, 1)'
                  : 'translate3d(0, 16px, 0) scale3d(1.03, 1.03, 1)',
                transition: 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                willChange: visibleItems.has(index) ? 'auto' : 'transform, opacity',
              }}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-gold to-yellow-600 text-white rounded-full flex items-center justify-center font-montserrat text-2xl font-bold mb-4 shadow-lg">
                {index + 1}
              </div>
              <h3 className="font-montserrat text-xl md:text-2xl font-bold text-navy mb-3">
                {step.title}
              </h3>
              <p className="font-open-sans text-sm md:text-base text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
