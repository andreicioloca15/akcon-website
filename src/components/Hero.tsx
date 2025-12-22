import { Phone, CheckCircle, ChevronDown } from 'lucide-react';
import companyData from '../content/company.json';
import heroData from '../content/hero.json';
import HeroVideoBackground from './HeroVideoBackground';

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const badges = heroData.badges.sort((a, b) => a.order - b.order);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <HeroVideoBackground />

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold/20 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl floating" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-30 max-w-5xl mx-auto px-4 text-center text-white">
        <h1 className="font-montserrat text-h1-mobile md:text-h1-tablet lg:text-h1-desktop mb-8 fade-in-up text-glow-white">
          {heroData.mainHeadline}
        </h1>
        <p className="font-open-sans text-lg md:text-xl lg:text-2xl mb-12 max-w-2xl mx-auto leading-body fade-in-up delay-200">
          {heroData.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16 fade-in-up delay-300">
          <button
            onClick={scrollToContact}
            className="bg-gold text-white px-8 py-4 rounded-lg font-montserrat text-lg font-semibold hover:bg-gold-hover transition-all duration-300 shadow-2xl hover:shadow-gold/50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-navy relative overflow-hidden group"
          >
            <span className="relative z-10">{heroData.primaryButtonText}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-hover to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <a
            href={`tel:+40${companyData.phone.replace(/\s/g, '')}`}
            className="bg-white text-navy px-8 py-4 rounded-lg font-montserrat text-lg font-semibold hover:bg-gold hover:text-white transition-all duration-300 shadow-2xl hover:shadow-white/50 hover:scale-105 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-navy"
          >
            <Phone className="w-5 h-5 mr-2" />
            {heroData.secondaryButtonText}: {companyData.phone}
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-base">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center fade-in-up glass-effect px-4 py-2 rounded-full hover-lift"
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <CheckCircle className="w-6 h-6 text-gold mr-3 flex-shrink-0 pulse-soft" />
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

      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce z-30 cursor-pointer hover:scale-110 transition-transform duration-300">
        <div className="relative">
          <div className="absolute inset-0 bg-white/20 rounded-full blur-lg"></div>
          <ChevronDown className="w-8 h-8 text-white relative z-10" />
        </div>
      </div>
    </section>
  );
}
