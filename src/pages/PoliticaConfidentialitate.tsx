import { useScrollAnimation } from '../hooks/useScrollAnimation';
import Breadcrumbs from '../components/Breadcrumbs';
import SEO from '../components/SEO';
import companyData from '../content/company.json';

export default function PoliticaConfidentialitate() {
  const headingRef = useScrollAnimation<HTMLHeadingElement>({ distance: 60, delay: 0 });
  const contentRef = useScrollAnimation<HTMLDivElement>({ distance: 60, delay: 150 });

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <SEO
        title="Politică de Confidențialitate - Akcon | Protecția Datelor GDPR"
        description="Politica de confidențialitate Akcon în conformitate cu GDPR. Aflați cum colectăm, utilizăm și protejăm datele dvs. personale."
        keywords={['politica confidentialitate', 'protectia datelor', 'GDPR', 'privacy policy akcon']}
        ogType="article"
      />
      <Breadcrumbs items={[{ label: 'Politică de Confidențialitate' }]} />

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h1 ref={headingRef} className="font-montserrat text-h1-mobile md:text-h1-tablet lg:text-h1-desktop font-bold text-gray-700 mb-12">
            Politică de Confidențialitate
          </h1>

          <div ref={contentRef} className="prose prose-lg max-w-none">
            <div className="bg-white p-8 rounded-lg shadow-md mb-8">
              <p className="font-open-sans text-gray-600 leading-body mb-6">
                Ultima actualizare: 2 ianuarie 2025
              </p>

              <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet font-semibold text-gray-700 mt-8 mb-4">
                1. Informații Generale
              </h2>
              <p className="font-open-sans text-gray-600 leading-body mb-4">
                {companyData.name} ("{companyData.name}", "noi", "al nostru") respectă confidențialitatea datelor dumneavoastră personale și se angajează să le protejeze în conformitate cu Regulamentul General privind Protecția Datelor (GDPR) și legislația românească aplicabilă.
              </p>

              <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet font-semibold text-gray-700 mt-8 mb-4">
                2. Ce Date Colectăm
              </h2>
              <p className="font-open-sans text-gray-600 leading-body mb-4">
                Colectăm următoarele tipuri de informații:
              </p>
              <ul className="font-open-sans text-gray-600 leading-body mb-4 list-disc pl-6">
                <li>Date de identificare: nume, prenume</li>
                <li>Date de contact: număr de telefon, adresă de email</li>
                <li>Date de localizare: localitatea în care solicitați serviciile</li>
                <li>Informații despre proiect: tipul serviciului solicitat, mesajul dumneavoastră</li>
              </ul>

              <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet font-semibold text-gray-700 mt-8 mb-4">
                3. Cum Utilizăm Datele
              </h2>
              <p className="font-open-sans text-gray-600 leading-body mb-4">
                Utilizăm datele dumneavoastră personale pentru:
              </p>
              <ul className="font-open-sans text-gray-600 leading-body mb-4 list-disc pl-6">
                <li>Procesarea și răspunsul la solicitările dumneavoastră de ofertă</li>
                <li>Comunicarea cu dumneavoastră privind serviciile noastre</li>
                <li>Îmbunătățirea serviciilor noastre</li>
                <li>Respectarea obligațiilor legale</li>
              </ul>

              <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet font-semibold text-gray-700 mt-8 mb-4">
                4. Partajarea Datelor
              </h2>
              <p className="font-open-sans text-gray-600 leading-body mb-4">
                Nu vindem, nu închiriem și nu partajăm datele dumneavoastră personale cu terțe părți în scopuri de marketing. Putem partaja datele doar cu:
              </p>
              <ul className="font-open-sans text-gray-600 leading-body mb-4 list-disc pl-6">
                <li>Furnizori de servicii care ne ajută să operăm site-ul web</li>
                <li>Autorități publice, când este cerut de lege</li>
              </ul>

              <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet font-semibold text-gray-700 mt-8 mb-4">
                5. Drepturile Dumneavoastră
              </h2>
              <p className="font-open-sans text-gray-600 leading-body mb-4">
                Conform GDPR, aveți următoarele drepturi:
              </p>
              <ul className="font-open-sans text-gray-600 leading-body mb-4 list-disc pl-6">
                <li>Dreptul de acces la datele personale</li>
                <li>Dreptul de rectificare a datelor inexacte</li>
                <li>Dreptul la ștergerea datelor ("dreptul de a fi uitat")</li>
                <li>Dreptul de a restricționa prelucrarea</li>
                <li>Dreptul la portabilitatea datelor</li>
                <li>Dreptul de a obiect la prelucrare</li>
              </ul>

              <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet font-semibold text-gray-700 mt-8 mb-4">
                6. Securitatea Datelor
              </h2>
              <p className="font-open-sans text-gray-600 leading-body mb-4">
                Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele dumneavoastră personale împotriva accesului neautorizat, modificării, divulgării sau distrugerii.
              </p>

              <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet font-semibold text-gray-700 mt-8 mb-4">
                7. Cookies
              </h2>
              <p className="font-open-sans text-gray-600 leading-body mb-4">
                Site-ul nostru utilizează cookies pentru a îmbunătăți experiența utilizatorului. Cookies sunt fișiere mici de text stocate pe dispozitivul dumneavoastră. Puteți configura browser-ul să refuze cookies-urile, dar acest lucru poate afecta funcționalitatea site-ului.
              </p>

              <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet font-semibold text-gray-700 mt-8 mb-4">
                8. Modificări ale Politicii
              </h2>
              <p className="font-open-sans text-gray-600 leading-body mb-4">
                Ne rezervăm dreptul de a actualiza această politică de confidențialitate. Vă vom notifica despre orice modificări semnificative prin publicarea noii politici pe site-ul nostru.
              </p>

              <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet font-semibold text-gray-700 mt-8 mb-4">
                9. Contact
              </h2>
              <p className="font-open-sans text-gray-600 leading-body mb-4">
                Pentru orice întrebări referitoare la această politică de confidențialitate sau pentru a vă exercita drepturile, vă rugăm să ne contactați:
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
