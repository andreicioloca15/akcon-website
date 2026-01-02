import { Phone, CheckCircle, Shield, Clock, Award } from 'lucide-react';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';
import Breadcrumbs from '../components/Breadcrumbs';
import CaseStudy from '../components/CaseStudy';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

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
      />
      <Breadcrumbs items={[{ label: 'Servicii', path: '/#servicii' }, { label: title }]} />

      <section className="relative py-20 bg-gradient-to-br from-navy via-navy-light to-navy text-white overflow-hidden">
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
                className="bg-gold text-white px-8 py-4 rounded-lg font-montserrat text-lg font-semibold hover:bg-gold-hover transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold"
              >
                Solicită Ofertă Gratuită
              </button>
              <a
                href="tel:+40749616796"
                className="bg-white text-navy px-8 py-4 rounded-lg font-montserrat text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <Phone className="w-5 h-5 mr-2" />
                Sună Acum
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet lg:text-h2-desktop font-bold text-gray-700 mb-6">
                De Ce {title} cu Akcon?
              </h2>
              <p className="font-open-sans text-lg text-gray-600 leading-body mb-8">
                {description}
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-gold mr-3 flex-shrink-0 mt-1" />
                    <p className="font-open-sans text-gray-600 leading-body">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-navy text-white p-6 rounded-lg text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <Shield className="w-12 h-12 mx-auto mb-3 text-gold" />
                <p className="font-montserrat text-3xl font-bold mb-2">15</p>
                <p className="font-open-sans text-sm opacity-90 leading-body">Ani Garanție Manoperă</p>
              </div>
              <div className="bg-gold text-white p-6 rounded-lg text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <Clock className="w-12 h-12 mx-auto mb-3" />
                <p className="font-montserrat text-3xl font-bold mb-2">24h</p>
                <p className="font-open-sans text-sm opacity-90 leading-body">Răspuns la Solicitări</p>
              </div>
              <div className="bg-gold text-white p-6 rounded-lg text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <Award className="w-12 h-12 mx-auto mb-3" />
                <p className="font-montserrat text-3xl font-bold mb-2">500+</p>
                <p className="font-open-sans text-sm opacity-90 leading-body">Proiecte Finalizate</p>
              </div>
              <div className="bg-navy text-white p-6 rounded-lg text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <CheckCircle className="w-12 h-12 mx-auto mb-3 text-gold" />
                <p className="font-montserrat text-3xl font-bold mb-2">100%</p>
                <p className="font-open-sans text-sm opacity-90 leading-body">Clienți Mulțumiți</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ProcessStepsSection processSteps={processSteps} />

      {caseStudy && <CaseStudy {...caseStudy} />}

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet lg:text-h2-desktop font-bold text-gray-700 mb-12 text-center">
            Întrebări Frecvente
          </h2>
          <div className="space-y-6">
            {faq.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border-l-4 border-gold hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <h3 className="font-montserrat text-h3-mobile md:text-h3-tablet font-semibold text-gray-700 mb-3">
                  {item.question}
                </h3>
                <p className="font-open-sans text-gray-600 leading-body">
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

function ProcessStepsSection({ processSteps }: { processSteps: { title: string; description: string }[] }) {
  const { elementRef, visibleItems } = useStaggeredAnimation(processSteps.length, 100);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet lg:text-h2-desktop font-bold text-gray-700 mb-12 text-center">
          Procesul Nostru de Lucru
        </h2>
        <div ref={elementRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className={`bg-white p-6 rounded-lg shadow-md card-animate ${
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
              <div className="w-12 h-12 bg-gold text-white rounded-full flex items-center justify-center font-montserrat text-xl font-bold mb-4">
                {index + 1}
              </div>
              <h3 className="font-montserrat text-h3-mobile md:text-h3-tablet font-semibold text-gray-700 mb-2">
                {step.title}
              </h3>
              <p className="font-open-sans text-sm text-gray-600 leading-body">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
