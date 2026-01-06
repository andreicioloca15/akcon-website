import { Phone, Mail } from 'lucide-react';
import companyData from '../content/company.json';

export default function CTASection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="cta-section">
      <h2>Solicită o Ofertă Gratuită</h2>
      <p>
        Contactează-ne astăzi pentru o evaluare gratuită a acoperișului tău. Oferim consultanță
        profesionistă și soluții personalizate.
      </p>

      <div className="cta-buttons">
        <a
          href={`tel:+40${companyData.phone.replace(/\s/g, '').replace(/^0/, '')}`}
          className="btn-primary"
          style={{ background: 'white', color: 'var(--gold-accent)' }}
        >
          <Phone className="w-5 h-5 mr-2" style={{ display: 'inline', verticalAlign: 'middle' }} />
          Sună Acum: {companyData.phone}
        </a>
        <button
          onClick={scrollToContact}
          className="btn-secondary"
        >
          <Mail className="w-5 h-5 mr-2" style={{ display: 'inline', verticalAlign: 'middle' }} />
          Trimite Mesaj
        </button>
      </div>
    </section>
  );
}
