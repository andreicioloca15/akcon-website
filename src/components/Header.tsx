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
          <button onClick={() => scrollToSection('despre')} className="text-gray-700 hover:text-gold transition-all duration-300 font-open-sans focus:outline-none focus:text-gold relative group">
            Despre Noi
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
          </button>
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
              <div className="absolute top-full left-0 mt-2 bg-white/95 backdrop-blur-md shadow-2xl rounded-lg py-2 w-64 border border-gray-100 animate-in fade-in slide-in-from-top-2 duration-200">
                {services.map((service, index) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block px-4 py-3 text-gray-700 hover:bg-gold/10 hover:text-gold transition-all duration-300 font-open-sans text-sm focus:outline-none focus:bg-gold/10 focus:text-gold hover:translate-x-1"
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

        <div className="flex items-center space-x-4">
          <a href={`tel:+40${companyData.phone.replace(/\s/g, '')}`} className="hidden lg:flex items-center text-navy font-semibold font-open-sans focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 rounded hover:scale-105 transition-transform duration-300">
            <Phone className="w-5 h-5 mr-2 hover:rotate-12 transition-transform duration-300" />
            <span>{companyData.phone}</span>
          </a>
          <button onClick={() => scrollToSection('contact')} className="bg-gold text-white px-8 py-4 rounded-lg font-semibold font-montserrat hover:bg-gold-hover transition-all duration-300 hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 relative overflow-hidden group">
            <span className="relative z-10">Ofertă Gratuită</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-hover to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden focus:outline-none focus:ring-2 focus:ring-gold rounded p-2">
          {mobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col p-4 space-y-4">
            <button onClick={() => scrollToSection('despre')} className="text-gray-700 hover:text-gold transition font-open-sans text-left py-2 focus:outline-none focus:text-gold">
              Despre Noi
            </button>
            <div>
              <p className="text-gray-700 font-semibold font-open-sans mb-3">Servicii</p>
              <div className="pl-4 space-y-3">
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-gray-600 hover:text-gold transition font-open-sans text-sm py-2 focus:outline-none focus:text-gold"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <button onClick={() => scrollToSection('portofoliu')} className="text-gray-700 hover:text-gold transition font-open-sans text-left py-2 focus:outline-none focus:text-gold">
              Portofoliu
            </button>
            <button onClick={() => scrollToSection('proces')} className="text-gray-700 hover:text-gold transition font-open-sans text-left py-2 focus:outline-none focus:text-gold">
              Cum Lucrăm
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-gold transition font-open-sans text-left py-2 focus:outline-none focus:text-gold">
              Contact
            </button>
            <a href={`tel:+40${companyData.phone.replace(/\s/g, '')}`} className="flex items-center text-navy font-semibold font-open-sans py-2 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 rounded">
              <Phone className="w-5 h-5 mr-2" />
              <span>{companyData.phone}</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
