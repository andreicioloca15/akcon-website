import { useStaggeredAnimation } from '../hooks/useScrollAnimation';
import vilaAlbaIulia from '../content/portfolio/vila-premium-alba-iulia.json';
import renovareSebes from '../content/portfolio/renovare-completa-sebes.json';
import mansardareAiud from '../content/portfolio/mansardare-premium-aiud.json';
import casaBlaj from '../content/portfolio/casa-moderna-blaj.json';
import renovareCugir from '../content/portfolio/renovare-vila-cugir.json';
import acoperisOcnaMures from '../content/portfolio/acoperis-nou-ocna-mures.json';

interface PortfolioProject {
  title: string;
  location: string;
  type: string;
  area: string;
  duration: string;
  image: string;
  description: string;
  clientQuote: string;
  clientName: string;
  order: number;
  featured?: boolean;
  beforeAfter?: {
    before: string;
    after: string;
  };
}

export default function Portfolio() {
  const portfolioData: PortfolioProject[] = [
    vilaAlbaIulia,
    renovareSebes,
    mansardareAiud,
    casaBlaj,
    renovareCugir,
    acoperisOcnaMures
  ];

  const gradients = [
    'from-navy to-navy-light',
    'from-navy-light to-gray-600',
    'from-gray-600 to-navy',
    'from-navy to-gray-600',
    'from-navy-light to-navy',
    'from-gray-600 to-navy-light'
  ];

  const projects = portfolioData
    .filter(p => p.featured !== false)
    .sort((a, b) => a.order - b.order)
    .slice(0, 6)
    .map((p, index) => ({
      title: p.title,
      details: `${p.type} • ${p.area} • ${p.duration}`,
      quote: p.clientQuote,
      gradient: gradients[index % gradients.length],
      image: p.image
    }));

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const { elementRef, visibleItems } = useStaggeredAnimation(projects.length, 100);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white" id="portofoliu">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet lg:text-h2-desktop font-bold text-gray-700 mb-4 hover:text-gold transition-colors duration-300">
            Transformări de Care Suntem Mândri
          </h2>
          <p className="font-open-sans text-base md:text-lg text-gray-600 leading-body max-w-2xl mx-auto">
            Portofoliul nostru de acoperișuri premium realizate în județul Alba
          </p>
        </div>

        <div ref={elementRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative rounded-lg shadow-lg cursor-pointer h-80 image-zoom-container ${
                visibleItems.has(index)
                  ? 'opacity-100 hover:shadow-2xl'
                  : 'opacity-0'
              }`}
              style={{
                transform: visibleItems.has(index)
                  ? 'translate3d(0, 0, 0) scale3d(1, 1, 1)'
                  : 'translate3d(0, 20px, 0) scale3d(1.04, 1.04, 1)',
                transition: 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                willChange: visibleItems.has(index) ? 'auto' : 'transform, opacity',
              }}
            >
              <div
                className="image-zoom w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/50 to-transparent opacity-60 group-hover:opacity-95 transition-all duration-500"></div>
              <div className="absolute inset-0 flex items-end p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div>
                  <h3 className="font-montserrat text-xl font-semibold mb-2 group-hover:text-glow-white transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="font-open-sans text-sm mb-3 leading-body opacity-90">
                    {project.details}
                  </p>
                  <p className="font-open-sans text-sm italic opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-body">
                    "{project.quote}"
                  </p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-gold text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Vezi Detalii
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 fade-in-up delay-300">
          <button
            onClick={scrollToContact}
            className="bg-gold text-white px-8 py-4 rounded-lg font-montserrat text-lg font-semibold hover:bg-gold-hover transition-all duration-300 hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold relative overflow-hidden group"
          >
            <span className="relative z-10">Solicită Ofertă Gratuită</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold-hover to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
