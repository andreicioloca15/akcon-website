import { Home, RefreshCw, Wrench, Package, Layers, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesMobile() {
  const services = [
    {
      icon: Home,
      title: 'Montaj Acoperișuri Noi',
      description: 'Construim acoperișuri noi cu materiale premium și execuție perfectă.',
      link: '/montaj-acoperisuri'
    },
    {
      icon: RefreshCw,
      title: 'Renovare Acoperișuri',
      description: 'Renovăm și modernizăm acoperișuri existente pentru o viață lungă.',
      link: '/renovare-acoperisuri'
    },
    {
      icon: Wrench,
      title: 'Reparații Acoperișuri',
      description: 'Intervenții rapide pentru orice tip de deteriorare a acoperișului.',
      link: '/reparatii-acoperisuri'
    },
    {
      icon: Package,
      title: 'Țiglă Ceramică',
      description: 'Montăm țiglă ceramică de cea mai înaltă calitate și durabilitate.',
      link: '/tigla-ceramica'
    },
    {
      icon: Layers,
      title: 'Țiglă Metalică',
      description: 'Soluții moderne cu țiglă metalică rezistentă și estetică.',
      link: '/tigla-metalica'
    },
    {
      icon: TrendingUp,
      title: 'Mansardări',
      description: 'Transformăm mansardele în spații locuibile funcționale și moderne.',
      link: '/mansardari'
    }
  ];

  return (
    <section className="services-section">
      <h2 className="section-title">Serviciile Noastre</h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <Link to={service.link} key={index} className="service-card">
            <service.icon className="service-icon" />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
