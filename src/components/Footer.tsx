import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import companyData from '../content/company.json';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-navy text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="font-montserrat text-2xl font-bold mb-6">AKCON</div>
            <p className="font-open-sans text-sm opacity-80 mb-4 leading-body">
              Acoperișuri premium pentru case excepționale. Singurul specialist cu sediu în județul Alba.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-gold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
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
                <button onClick={() => scrollToSection('despre')} className="hover:text-gold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold">
                  Despre Noi
                </button>
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
                <a href="#" className="hover:text-gold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold">
                  Politică Confidențialitate
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold">
                  Termeni și Condiții
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-montserrat font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 font-open-sans text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                <span className="leading-body">
                  Strada Primăverii 42<br />
                  Teiuș 515900, Alba
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-gold mr-2 flex-shrink-0" />
                <a href={`tel:+40${companyData.phone.replace(/\s/g, '')}`} className="hover:text-gold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold leading-body">
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
          <p className="leading-body">© 2025 Akcon. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  );
}
