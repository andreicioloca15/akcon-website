import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import companyData from '../content/company.json';
import Logo from './Logo';

export default function Footer() {
  const location = useLocation();

  const scrollToSection = (id: string): void => {
    // If we're on the home page, scroll to the section
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're on another page, navigate to home with hash
      window.location.href = `/#${id}`;
    }
  };

  return (
    <footer className="bg-navy text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <Logo variant="horizontal" width={160} height={44} />
            </div>
            <p className="font-open-sans text-sm opacity-80 mb-4 leading-body">
              Specialiști în montaj, renovare și reparații acoperișuri în județul Alba și împrejurimi.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/akcon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/akcon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-6">Servicii</h4>
            <ul className="space-y-3 font-open-sans text-sm">
              <li>
                <button onClick={() => scrollToSection('servicii')} className="hover:text-gold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold">
                  Montaj Acoperișuri
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('servicii')} className="hover:text-gold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold">
                  Renovare Acoperișuri
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('servicii')} className="hover:text-gold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold">
                  Reparații Acoperișuri
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('servicii')} className="hover:text-gold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold">
                  Țiglă Ceramică
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('servicii')} className="hover:text-gold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold">
                  Țiglă Metalică
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('servicii')} className="hover:text-gold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold">
                  Mansardări
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-6">Link-uri Rapide</h4>
            <ul className="space-y-3 font-open-sans text-sm">
              <li>
                <Link to="/despre-noi" className="hover:text-gold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold">
                  Despre Noi
                </Link>
              </li>
              <li>
                <button onClick={() => scrollToSection('portofoliu')} className="hover:text-gold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold">
                  Portofoliu
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('proces')} className="hover:text-gold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold">
                  Cum Lucrăm
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="hover:text-gold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold">
                  Contact
                </button>
              </li>
              <li>
                <Link to="/politica-confidentialitate" className="hover:text-gold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold">
                  Politică Confidențialitate
                </Link>
              </li>
              <li>
                <Link to="/termeni-conditii" className="hover:text-gold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold">
                  Termeni și Condiții
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 font-open-sans text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                <span className="leading-body">
                  {companyData.streetAddress}<br />
                  {companyData.cityAddress} {companyData.postalCode}, {companyData.county}
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-gold mr-2 flex-shrink-0" />
                <a href={`tel:+40${companyData.phone.replace(/\s/g, '').replace(/^0/, '')}`} className="hover:text-gold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold leading-body">
                  {companyData.phone}
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-gold mr-2 flex-shrink-0" />
                <a href={`mailto:${companyData.email}`} className="hover:text-gold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold leading-body">
                  {companyData.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center font-open-sans text-sm opacity-80">
          <p className="leading-body">© 2026 Akcon. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
}
