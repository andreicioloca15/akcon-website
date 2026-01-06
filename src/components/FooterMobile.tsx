import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import companyData from '../content/company.json';

export default function FooterMobile() {
  return (
    <footer className="footer-mobile">
      <div className="footer-logo">AKCON</div>

      <p className="footer-description">
        Specialist în acoperișuri pentru Alba Iulia, Aiud, Teius, Sebes, Blaj și împrejurimi
      </p>

      <div className="footer-section">
        <h4 className="footer-section-title">Contact</h4>
        <div className="footer-item">
          <Phone />
          <a href={`tel:+40${companyData.phone.replace(/\s/g, '').replace(/^0/, '')}`}>
            {companyData.phone}
          </a>
        </div>
        <div className="footer-item">
          <Mail />
          <a href="mailto:contact@akcon.ro">contact@akcon.ro</a>
        </div>
        <div className="footer-item">
          <MapPin />
          <span>Alba Iulia, Romania</span>
        </div>
      </div>

      <div className="footer-section">
        <h4 className="footer-section-title">Program</h4>
        <div className="footer-item">
          <Clock />
          <span>Luni-Vineri: 08:00-18:00</span>
        </div>
        <div className="footer-item">
          <Clock />
          <span>Sâmbătă: 09:00-14:00</span>
        </div>
      </div>

      <div className="footer-section">
        <h4 className="footer-section-title">Legături Rapide</h4>
        <div className="footer-item">
          <Link to="/despre-noi">Despre Noi</Link>
        </div>
        <div className="footer-item">
          <Link to="/politica-confidentialitate">Politica de Confidențialitate</Link>
        </div>
        <div className="footer-item">
          <Link to="/termeni-conditii">Termeni și Condiții</Link>
        </div>
      </div>

      <div className="footer-copyright">
        &copy; {new Date().getFullYear()} AKCON. Toate drepturile rezervate.
      </div>
    </footer>
  );
}
