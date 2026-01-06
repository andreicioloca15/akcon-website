import { useState, useEffect } from 'react';
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import companyData from '../content/company.json';
import montajAcoperisuri from '../content/services/montaj-acoperisuri.json';
import renovareAcoperisuri from '../content/services/renovare-acoperisuri.json';
import reparatiiAcoperisuri from '../content/services/reparatii-acoperisuri.json';
import tiglaCeramica from '../content/services/tigla-ceramica.json';
import tiglaMetalica from '../content/services/tigla-metalica.json';
import mansardari from '../content/services/mansardari.json';

interface Service {
  title: string;
  description: string;
  icon: string;
  link?: string;
  order: number;
}

interface MappedHeaderService {
  name: string;
  path: string;
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = (): void => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string): void => {
    if (location.pathname !== '/') {
      window.location.href = `/#${id}`;
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    }
  };

  const servicesData: Service[] = [
    montajAcoperisuri,
    renovareAcoperisuri,
    reparatiiAcoperisuri,
    tiglaCeramica,
    tiglaMetalica,
    mansardari
  ];

  const services: MappedHeaderService[] = servicesData
    .sort((a, b) => a.order - b.order)
    .filter(s => s.link)
    .map(s => ({
      name: s.title,
      path: s.link || '#'
    }));

  return (
    <header className={`fixed top-0 w-full z-50 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-white shadow-md py-4'
    }`} style={{
      transition: 'background-color 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1), padding 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
    }}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="font-montserrat text-2xl font-bold text-navy focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 rounded">
            AKCON
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8 items-center">
          <Link to="/despre-noi" className="text-gray-700 hover:text-gold transition-all duration-300 font-open-sans focus:outline-none focus:text-gold relative group">
            Despre Noi
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button className="text-gray-700 hover:text-gold transition-all duration-300 font-open-sans flex items-center focus:outline-none focus:text-gold relative group">
              Servicii
              <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-300 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </button>
            {servicesDropdownOpen && (
              <div
                className="servicii-dropdown absolute top-full left-0 mt-2 rounded-lg py-3 w-64"
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #e5e7eb',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                  zIndex: 99999,
                  backdropFilter: 'none',
                  WebkitBackdropFilter: 'none'
                }}
              >
                {services.map((service, index) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block px-6 py-3 text-navy hover:bg-gray-50 hover:text-gold transition-all duration-200 font-open-sans text-sm"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <button onClick={() => scrollToSection('portofoliu')} className="text-gray-700 hover:text-gold transition-all duration-300 font-open-sans focus:outline-none focus:text-gold relative group">
            Portofoliu
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button onClick={() => scrollToSection('proces')} className="text-gray-700 hover:text-gold transition-all duration-300 font-open-sans focus:outline-none focus:text-gold relative group">
            Cum Lucrăm
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-gold transition-all duration-300 font-open-sans focus:outline-none focus:text-gold relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
          </button>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <a href={`tel:+40${companyData.phone.replace(/\s/g, '').replace(/^0/, '')}`} className="hidden lg:flex items-center text-navy font-semibold font-open-sans focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 rounded hover:scale-105 transition-transform duration-300">
            <Phone className="w-5 h-5 mr-2 hover:rotate-12 transition-transform duration-300" />
            <span>{companyData.phone}</span>
          </a>
          <button onClick={() => scrollToSection('contact')} className="bg-gold text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-sm md:text-base font-semibold font-montserrat hover:bg-gold-hover transition-all duration-300 hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 relative overflow-hidden group whitespace-nowrap">
            <span className="relative z-10">Ofertă Gratuită</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-hover to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden focus:outline-none focus:ring-2 focus:ring-gold rounded p-2">
          {mobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[73px] bg-white z-50 overflow-y-auto">
          <nav className="flex flex-col p-6">
            <Link
              to="/despre-noi"
              onClick={() => setMobileMenuOpen(false)}
              className="text-navy hover:text-gold transition-all duration-300 font-open-sans text-lg py-4 border-b border-gray-100 focus:outline-none focus:text-gold"
            >
              Despre Noi
            </Link>

            <div className="border-b border-gray-100">
              <p className="text-navy font-bold font-montserrat text-lg pt-4 pb-3">Servicii</p>
              <div className="pb-2">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-gray-600 hover:text-gold transition-all duration-300 font-open-sans py-3 pl-4 focus:outline-none focus:text-gold"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <button
              onClick={() => scrollToSection('portofoliu')}
              className="text-navy hover:text-gold transition-all duration-300 font-open-sans text-lg text-left py-4 border-b border-gray-100 focus:outline-none focus:text-gold"
            >
              Portofoliu
            </button>

            <button
              onClick={() => scrollToSection('proces')}
              className="text-navy hover:text-gold transition-all duration-300 font-open-sans text-lg text-left py-4 border-b border-gray-100 focus:outline-none focus:text-gold"
            >
              Cum Lucrăm
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="text-navy hover:text-gold transition-all duration-300 font-open-sans text-lg text-left py-4 border-b border-gray-100 focus:outline-none focus:text-gold"
            >
              Contact
            </button>

            <a
              href={`tel:+40${companyData.phone.replace(/\s/g, '').replace(/^0/, '')}`}
              className="flex items-center text-navy font-semibold font-open-sans text-lg py-4 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 rounded mt-2"
            >
              <Phone className="w-5 h-5 mr-3 text-gold" />
              <span>{companyData.phone}</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
