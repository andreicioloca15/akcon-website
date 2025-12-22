import { Phone, CheckCircle, ChevronDown } from 'lucide-react';
import companyData from '../content/company.json';
import heroData from '../content/hero.json';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const badges = heroData.badges.sort((a, b) => a.order - b.order);

  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-navy via-navy-light to-gray-600"></div>
        <div className="absolute inset-0 bg-navy opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
        <h1 className="font-montserrat text-h1-mobile md:text-h1-tablet lg:text-h1-desktop mb-8">
          {heroData.mainHeadline}
        </h1>
        <p className="font-open-sans text-lg md:text-xl lg:text-2xl mb-12 max-w-2xl mx-auto leading-body">
          {heroData.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
          <button
            onClick={scrollToContact}
            className="bg-gold text-white px-8 py-4 rounded-lg font-montserrat text-lg font-semibold hover:bg-gold-hover transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-navy"
          >
            {heroData.primaryButtonText}
          </button>
          <a
            href={`tel:+40${companyData.phone.replace(/\s/g, '')}`}
            className="bg-white text-navy px-8 py-4 rounded-lg font-montserrat text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-navy"
          >
            <Phone className="w-5 h-5 mr-2" />
            {heroData.secondaryButtonText}: {companyData.phone}
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-base">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center">
              <CheckCircle className="w-6 h-6 text-gold mr-3 flex-shrink-0" />
              <span className="font-open-sans">
                {badge.usesCompanyData
                  ? `${companyData[badge.companyField as keyof typeof companyData]}+ ${badge.text}`
                  : badge.text
                }
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white opacity-75" />
      </div>
    </section>
  );
}
