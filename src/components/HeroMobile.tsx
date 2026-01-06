import { Phone } from 'lucide-react';
import companyData from '../content/company.json';

export default function HeroMobile() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-mobile">
      <h1>Acoperișuri Profesionale Alba Iulia</h1>
      <p>
        Specialist în construcție, renovare și reparații acoperișuri cu garanție 15 ani manoperă
      </p>

      <div className="hero-buttons">
        <button onClick={scrollToContact} className="btn-primary">
          Solicită Ofertă Gratuită
        </button>
        <a
          href={`tel:+40${companyData.phone.replace(/\s/g, '').replace(/^0/, '')}`}
          className="btn-phone"
        >
          <Phone className="w-5 h-5 mr-2" />
          Sună: {companyData.phone}
        </a>
      </div>
    </section>
  );
}
