import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';
import companyData from '../content/company.json';

export default function TermeniConditii() {
  const headingRef = useScrollAnimation<HTMLHeadingElement>({ distance: 60, delay: 0 });
  const contentRef = useScrollAnimation<HTMLDivElement>({ distance: 60, delay: 150 });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <SEO
        title="Termeni și Condiții - Akcon | Servicii Acoperișuri Alba Iulia"
        description="Termenii și condițiile Akcon pentru servicii de montaj, renovare și reparații acoperișuri în Alba Iulia. Garanție 15 ani."
        keywords={['termeni conditii', 'garantie acoperisuri', 'contracte acoperisuri', 'akcon alba iulia']}
        ogType="article"
        breadcrumbs={[{ label: 'Termeni și Condiții' }]}
      />
      <Breadcrumbs items={[{ label: 'Termeni și Condiții' }]} />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 ref={headingRef} className="font-montserrat text-h1-mobile md:text-h1-tablet lg:text-h1-desktop font-bold text-gray-700 mb-12">
            Termeni și Condiții
          </h1>

          <div ref={contentRef} className="prose prose-lg max-w-none">
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <p className="font-open-sans text-gray-600 leading-body mb-6">
                Ultima actualizare: 2 ianuarie 2025
              </p>

              <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet font-semibold text-gray-700 mt-8 mb-4">
                1. Acceptarea Termenilor
              </h2>
              <p className="font-open-sans text-gray-600 leading-body mb-4">
                Prin accesarea și utilizarea site-ului web {companyData.name}, sunteți de acord să respectați acești termeni și condiții. Dacă nu sunteți de acord cu acești termeni, vă rugăm să nu utilizați acest site.
              </p>

              <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet font-semibold text-gray-700 mt-8 mb-4">
                2. Servicii Oferite
              </h2>
              <p className="font-open-sans text-gray-600 leading-body mb-4">
                {companyData.name} oferă servicii profesionale de:
              </p>
              <ul className="font-open-sans text-gray-600 leading-body mb-4 list-disc pl-6">
                <li>Montaj acoperișuri noi</li>
                <li>Renovare și reparații acoperișuri</li>
                <li>Instalare țiglă ceramică și metalică</li>
                <li>Mansardări</li>
                <li>Consultanță tehnică și proiectare</li>
              </ul>

              <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet font-semibold text-gray-700 mt-8 mb-4">
                3. Solicitări de Ofertă
              </h2>
              <p className="font-open-sans text-gray-600 leading-body mb-4">
                Solicitările de ofertă transmise prin formularul de contact sunt gratuite și nu vă obligă la contractare. Vă vom răspunde în maxim 24 de ore cu o ofertă preliminară. Oferta finală va fi stabilită după evaluarea tehnică la fața locului.
              </p>

              <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet font-semibold text-gray-700 mt-8 mb-4">
                4. Prețuri și Plată
              </h2>
              <ul className="font-open-sans text-gray-600 leading-body mb-4 list-disc pl-6">
                <li>Toate prețurile sunt exprimate în RON (Lei)</li>
                <li>Prețurile pot varia în funcție de specificul proiectului</li>
                <li>Plata se face conform contractului semnat</li>
                <li>Acceptăm plata în tranșe pentru proiecte mari</li>
              </ul>

              <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet font-semibold text-gray-700 mt-8 mb-4">
                5. Garanții
              </h2>
              <p className="font-open-sans text-gray-600 leading-body mb-4">
                {companyData.name} oferă:
              </p>
              <ul className="font-open-sans text-gray-600 leading-body mb-4 list-disc pl-6">
                <li>Garanție {companyData.warrantyYears} ani pentru manoperă</li>
                <li>Garanție producător pentru materiale (30-50 ani, în funcție de producător)</li>
                <li>Intervenție gratuită în perioada de garanție în maxim 48 ore</li>
              </ul>

              <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet font-semibold text-gray-700 mt-8 mb-4">
                6. Termene de Execuție
              </h2>
              <p className="font-open-sans text-gray-600 leading-body mb-4">
                Termenele de execuție sunt stabilite în contract și depind de:
              </p>
              <ul className="font-open-sans text-gray-600 leading-body mb-4 list-disc pl-6">
                <li>Complexitatea proiectului</li>
                <li>Condițiile meteorologice</li>
                <li>Disponibilitatea materialelor</li>
              </ul>
              <p className="font-open-sans text-gray-600 leading-body mb-4">
                Respectăm termenele stabilite. În cazul întârzierii din vina noastră, se aplică penalități conform contractului.
              </p>

              <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet font-semibold text-gray-700 mt-8 mb-4">
                7. Proprietate Intelectuală
              </h2>
              <p className="font-open-sans text-gray-600 leading-body mb-4">
                Conținutul acestui site (texte, imagini, logo-uri, design) este proprietatea {companyData.name} și este protejat de legile drepturilor de autor. Este interzisă reproducerea fără acordul scris al companiei.
              </p>

              <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet font-semibold text-gray-700 mt-8 mb-4">
                8. Limitarea Răspunderii
              </h2>
              <p className="font-open-sans text-gray-600 leading-body mb-4">
                {companyData.name} nu este responsabilă pentru:
              </p>
              <ul className="font-open-sans text-gray-600 leading-body mb-4 list-disc pl-6">
                <li>Întârzieri cauzate de forță majoră sau condiții meteorologice extreme</li>
                <li>Daune rezultate din nerespectarea instrucțiunilor de întreținere</li>
                <li>Probleme cauzate de modificări neautorizate ale lucrărilor executate</li>
              </ul>

              <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet font-semibold text-gray-700 mt-8 mb-4">
                9. Rezilierea Contractului
              </h2>
              <p className="font-open-sans text-gray-600 leading-body mb-4">
                Condițiile de reziliere sunt stabilite în contractul individual. În general, clientul poate renunța la contract cu notificare scrisă, cu plata lucrărilor executate până la momentul rezilierii.
              </p>

              <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet font-semibold text-gray-700 mt-8 mb-4">
                10. Soluționarea Litigiilor
              </h2>
              <p className="font-open-sans text-gray-600 leading-body mb-4">
                Orice litigiu va fi rezolvat prin negociere amiabilă. În cazul în care negocierile eșuează, litigiul va fi soluționat de instanțele competente din România.
              </p>

              <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet font-semibold text-gray-700 mt-8 mb-4">
                11. Modificări ale Termenilor
              </h2>
              <p className="font-open-sans text-gray-600 leading-body mb-4">
                {companyData.name} își rezervă dreptul de a modifica acești termeni și condiții. Modificările vor fi publicate pe acest site și vor intra în vigoare de la data publicării.
              </p>

              <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet font-semibold text-gray-700 mt-8 mb-4">
                12. Contact
              </h2>
              <p className="font-open-sans text-gray-600 leading-body mb-4">
                Pentru întrebări despre acești termeni și condiții:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-open-sans text-gray-700 leading-body">
                  <strong>{companyData.name}</strong><br />
                  {companyData.streetAddress}<br />
                  {companyData.cityAddress} {companyData.postalCode}, {companyData.county}<br />
                  Email: <a href={`mailto:${companyData.email}`} className="text-gold hover:text-gold-hover">{companyData.email}</a><br />
                  Telefon: <a href={`tel:+40${companyData.phone.replace(/\s/g, '')}`} className="text-gold hover:text-gold-hover">{companyData.phone}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
