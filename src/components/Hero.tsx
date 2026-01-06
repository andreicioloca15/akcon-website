import { Phone, CheckCircle, ChevronDown } from 'lucide-react';
import companyData from '../content/company.json';
import heroData from '../content/hero.json';
import HeroVideoBackground from './HeroVideoBackground';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Hero() {
  const headingRef = useScrollAnimation<HTMLHeadingElement>({ distance: 60, delay: 0 });
  const subtitleRef = useScrollAnimation<HTMLParagraphElement>({ distance: 60, delay: 150 });
  const buttonsRef = useScrollAnimation<HTMLDivElement>({ distance: 60, delay: 300 });

  const scrollToContact = (): void => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const badges = heroData.badges.sort((a, b) => a.order - b.order);

  return (
    <section className="hero hero-section relative h-screen flex items-center justify-center overflow-hidden">
      <HeroVideoBackground />

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold/20 rounded-full blur-3xl floating"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl floating" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-30 max-w-5xl mx-auto px-4 text-center text-white">
        <h1 ref={headingRef} className="hero-title font-montserrat text-h1-xs xs:text-h1-mobile md:text-h1-tablet lg:text-h1-desktop mb-6 xs:mb-8 text-glow-white">
          {heroData.mainHeadline}
        </h1>
        <p ref={subtitleRef} className="hero-subtitle font-open-sans text-base xs:text-lg md:text-xl lg:text-2xl mb-10 xs:mb-12 max-w-2xl mx-auto leading-body">
          {heroData.subtitle}
        </p>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row justify-center gap-4 xs:gap-6 mb-12 xs:mb-16">
          <button
            onClick={scrollToContact}
            className="cta-button btn bg-gold text-white px-4 xs:px-6 md:px-8 py-3 xs:py-4 rounded-lg font-montserrat text-base xs:text-lg font-semibold hover:bg-gold-hover transition-all duration-300 shadow-2xl hover:shadow-gold/50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-navy relative overflow-hidden group"
          >
            <span className="relative z-10">{heroData.primaryButtonText}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-hover to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <a
            href={`tel:+40${companyData.phone.replace(/\s/g, '').replace(/^0/, '')}`}
            className="cta-button btn bg-white text-navy px-4 xs:px-6 md:px-8 py-3 xs:py-4 rounded-lg font-montserrat text-base xs:text-lg font-semibold hover:bg-gold hover:text-white transition-all duration-300 shadow-2xl hover:shadow-white/50 hover:scale-105 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-navy"
          >
            <Phone className="w-4 h-4 xs:w-5 xs:h-5 mr-2" />
            {heroData.secondaryButtonText}: {companyData.phone}
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-4 xs:gap-6 md:gap-8 text-sm xs:text-base">
          {badges.map((badge, index) => {
            const BadgeItem = () => {
              const badgeRef = useScrollAnimation<HTMLDivElement>({ distance: 50, delay: 450 + index * 100 });
              return (
                <div
                  ref={badgeRef}
                  className="flex items-center glass-effect px-3 xs:px-4 py-2 rounded-full hover-lift"
                >
              <CheckCircle className="w-6 h-6 text-gold mr-3 flex-shrink-0 pulse-soft" />
              <span className="font-open-sans">
                {badge.usesCompanyData
                  ? `${companyData[badge.companyField as keyof typeof companyData]}+ ${badge.text}`
                  : badge.text
                }
              </span>
            </div>
              );
            };
            return <BadgeItem key={index} />;
          })}
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
