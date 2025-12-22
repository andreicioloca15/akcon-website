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
    .sort((a, b) => a.order - b.order)
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

  return (
    <section className="py-20 bg-white" id="portofoliu">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet lg:text-h2-desktop font-bold text-gray-700 mb-4">
            Transformări de Care Suntem Mândri
          </h2>
          <p className="font-open-sans text-base md:text-lg text-gray-600 leading-body max-w-2xl mx-auto">
            Portofoliul nostru de acoperișuri premium realizate în județul Alba
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer h-80 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
              <div className={`w-full h-full bg-gradient-to-br ${project.gradient}`}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-navy to-transparent opacity-0 group-hover:opacity-90 transition-all duration-300 flex items-end">
                <div className="p-6 text-white">
                  <h3 className="font-montserrat text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="font-open-sans text-sm mb-2 leading-body">
                    {project.details}
                  </p>
                  <p className="font-open-sans text-sm italic opacity-90 leading-body">
                    "{project.quote}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={scrollToContact}
            className="bg-gold text-white px-8 py-4 rounded-lg font-montserrat text-lg font-semibold hover:bg-gold-hover transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold"
          >
            Solicită Ofertă Gratuită
          </button>
        </div>
      </div>
    </section>
  );
}
