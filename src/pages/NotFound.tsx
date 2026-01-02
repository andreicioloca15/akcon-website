import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-navy via-navy-light to-navy text-white flex items-center justify-center px-4">
      <SEO
        title="Pagina Nu A Fost Găsită - 404 | Akcon"
        description="Pagina pe care o căutați nu există. Reveniți la pagina principală Akcon pentru servicii premium de acoperișuri în Alba Iulia."
        keywords={['404', 'pagina negasita']}
      />
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="font-montserrat text-9xl md:text-[12rem] font-bold text-gold mb-4">
            404
          </h1>
          <h2 className="font-montserrat text-3xl md:text-4xl font-semibold mb-4">
            Pagina Nu A Fost Găsită
          </h2>
          <p className="font-open-sans text-lg md:text-xl opacity-90 leading-body max-w-md mx-auto">
            Ne pare rău, dar pagina pe care o căutați nu există sau a fost mutată.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="inline-flex items-center bg-gold text-white px-8 py-4 rounded-lg font-montserrat text-lg font-semibold hover:bg-gold-hover transition-all duration-300 hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-navy"
          >
            <Home className="w-5 h-5 mr-2" />
            Pagina Principală
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-lg font-montserrat text-lg font-semibold hover:bg-white/20 transition-all duration-300 hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Înapoi
          </button>
        </div>

        <div className="mt-12 pt-12 border-t border-white/10">
          <p className="font-open-sans text-base opacity-80 mb-4">
            Sau puteți naviga către:
          </p>
          <ul className="font-open-sans text-base space-y-2">
            <li>
              <Link to="/#servicii" className="text-gold hover:text-gold-hover transition-colors duration-300">
                Servicii Acoperișuri
              </Link>
            </li>
            <li>
              <Link to="/#portofoliu" className="text-gold hover:text-gold-hover transition-colors duration-300">
                Portofoliu
              </Link>
            </li>
            <li>
              <Link to="/#contact" className="text-gold hover:text-gold-hover transition-colors duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
