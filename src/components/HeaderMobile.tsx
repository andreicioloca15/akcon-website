import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import companyData from '../content/company.json';

export default function HeaderMobile() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header className="header-mobile md:hidden">
        <div className="header-container">
          <Link to="/" className="header-logo" onClick={() => setMenuOpen(false)}>
            AKCON
          </Link>
          <button
            className="hamburger-btn"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu md:hidden">
          <div className="mobile-menu-header">
            <Link to="/" className="header-logo" onClick={toggleMenu}>
              AKCON
            </Link>
            <button
              className="hamburger-btn"
              onClick={toggleMenu}
              aria-label="Close menu"
            >
              <X />
            </button>
          </div>

          <nav className="mobile-menu-nav">
            <Link to="/" className="mobile-menu-item" onClick={toggleMenu}>
              Acasă
            </Link>
            <Link to="/despre-noi" className="mobile-menu-item" onClick={toggleMenu}>
              Despre Noi
            </Link>
            <Link to="/montaj-acoperisuri" className="mobile-menu-item" onClick={toggleMenu}>
              Montaj Acoperișuri
            </Link>
            <Link to="/renovare-acoperisuri" className="mobile-menu-item" onClick={toggleMenu}>
              Renovare Acoperișuri
            </Link>
            <Link to="/reparatii-acoperisuri" className="mobile-menu-item" onClick={toggleMenu}>
              Reparații Acoperișuri
            </Link>
            <Link to="/tigla-ceramica" className="mobile-menu-item" onClick={toggleMenu}>
              Țiglă Ceramică
            </Link>
            <Link to="/tigla-metalica" className="mobile-menu-item" onClick={toggleMenu}>
              Țiglă Metalică
            </Link>
            <Link to="/mansardari" className="mobile-menu-item" onClick={toggleMenu}>
              Mansardări
            </Link>

            <div className="mobile-menu-phone">
              <a
                href={`tel:+40${companyData.phone.replace(/\s/g, '').replace(/^0/, '')}`}
                className="btn-phone"
              >
                <Phone className="w-5 h-5 mr-2" />
                {companyData.phone}
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
