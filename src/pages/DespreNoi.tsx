import { useState, TouchEvent } from 'react';
import { Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import companyData from '../content/company.json';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SEO from '../components/SEO';

interface TabContent {
  id: string;
  title: string;
  content: JSX.Element;
  image: string;
  imageAlt: string;
}

export default function DespreNoi() {
  const [activeTab, setActiveTab] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const contentRef = useScrollAnimation<HTMLDivElement>({ distance: 60 });

  const minSwipeDistance = 50;

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && activeTab < tabs.length - 1) {
      setActiveTab(activeTab + 1);
    }
    if (isRightSwipe && activeTab > 0) {
      setActiveTab(activeTab - 1);
    }
  };

  const tabs: TabContent[] = [
    {
      id: 'despre-akcon',
      title: 'Despre AKCON',
      content: (
        <div>
          <h2 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-glow-white">
            Construim Case, Construim Încredere
          </h2>
          <p className="font-open-sans text-xl mb-6 opacity-95 leading-body">
            Cu experiență <span className="text-gold font-semibold">din 1977</span> în domeniul construcțiilor și acoperișurilor, <span className="text-gold font-semibold">AKCON</span> s-a impus ca lider pe piața din Alba Iulia și județele limitrofe.
          </p>
          <p className="font-open-sans text-lg mb-8 opacity-90 leading-body">
            Am finalizat peste {companyData.projectsCompleted} de proiecte de succes, de la case particulare la construcții comerciale complexe. Satisfacția clienților noștri este cea mai bună dovadă a calității serviciilor noastre.
          </p>
        </div>
      ),
      image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200',
      imageAlt: 'AKCON - Experți în Acoperișuri'
    },
    {
      id: 'despre-proprietar',
      title: 'Despre Proprietar',
      content: (
        <div>
          <h2 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-glow-white">
            Cristian - CEO & Proprietar AKCON
          </h2>
          <p className="font-open-sans text-xl mb-6 opacity-95 leading-body">
            La doar <span className="text-gold font-semibold">25 de ani</span>, Cristian conduce AKCON cu o pasiune moștenită și o viziune modernă. Cu 10 ani de experiență practică în domeniul acoperișurilor și construcțiilor, Cristian a transformat provocările într-o oportunitate de inovație.
          </p>
          <p className="font-open-sans text-lg mb-6 opacity-90 leading-body">
            <span className="text-gold font-semibold">Provocările Tânărului Antreprenor:</span><br />
            Când a preluat conducerea, Cristian s-a confruntat cu volume mari de lucrări și așteptări înalte moștenite din generațiile anterioare. În loc să aplice metode "clasice", a adus ceva nou: soluții testate și dovedite pentru case moderne.
          </p>
          <div className="font-open-sans text-lg mb-6 opacity-90 leading-body">
            <p className="text-gold font-semibold mb-3">Avantajul AKCON:</p>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start">
                <span className="text-gold mr-2">✓</span>
                <span>Design-uri impecabile care combină estetica cu funcționalitatea</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">✓</span>
                <span>Tehnici moderne pentru eficiență energetică</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">✓</span>
                <span>Execuție rapidă fără compromis la calitate</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">✓</span>
                <span>Soluții personalizate pentru fiecare proiect</span>
              </li>
            </ul>
          </div>
          <blockquote className="font-open-sans text-lg italic opacity-95 border-l-4 border-gold pl-6 py-2 mb-4">
            "Nu construim ca în anii '80. Construim pentru viitorul caselor tale - eficiente, durabile, frumoase."
          </blockquote>
          <p className="font-open-sans text-sm opacity-75">
            — Cristian, Proprietar & CEO AKCON
          </p>
        </div>
      ),
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1200',
      imageAlt: 'Cristian - Proprietar și CEO AKCON'
    },
    {
      id: 'echipa-noastra',
      title: 'Echipa Noastră',
      content: (
        <div>
          <h2 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-glow-white">
            Meșteri cu 30+ Ani Experiență
          </h2>
          <p className="font-open-sans text-xl mb-6 opacity-95 leading-body">
            Secretul succesului AKCON? O echipă unică care combină experiența veteranilor cu viziunea profesioniștilor tineri.
          </p>

          <div className="space-y-6 mb-6">
            <div>
              <p className="font-open-sans text-lg font-semibold text-gold mb-3">
                Meșteri Certificați cu 30+ Ani Experiență:
              </p>
              <ul className="font-open-sans text-base opacity-90 leading-body space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Cunoștințe profunde în construcții tradiționale</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Precizie și atenție la detalii perfecționate în decenii</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Tehnici dovedite de-a lungul generațiilor</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-open-sans text-lg font-semibold text-gold mb-3">
                Viziune Modernă:
              </p>
              <ul className="font-open-sans text-base opacity-90 leading-body space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Soluții contemporane pentru case moderne</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Materiale și tehnici de ultimă generație</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">•</span>
                  <span>Eficiență și rapiditate în execuție</span>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-open-sans text-lg font-semibold text-gold mb-3">
                Certificări și Calificări:
              </p>
              <ul className="font-open-sans text-base opacity-90 leading-body space-y-2 ml-4">
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>Meșteri autorizați în construcții</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>Certificări pentru lucru la înălțime</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>Expertiză în sisteme de acoperișuri moderne</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-2">✓</span>
                  <span>Formare continuă în tehnologii noi</span>
                </li>
              </ul>
            </div>
          </div>

          <p className="font-open-sans text-lg opacity-90 leading-body">
            <span className="text-gold font-semibold">Rezultatul?</span> Lucrări executate profesional, rapid, cu garanție de durabilitate și satisfacția completă a clienților.
          </p>
        </div>
      ),
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1200',
      imageAlt: 'Echipa AKCON - Meșteri Certificați'
    },
    {
      id: 'mostenirea-noastra',
      title: 'Moștenirea Noastră',
      content: (
        <div>
          <h2 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-glow-white">
            4 Generații de Excelență
          </h2>
          <p className="font-open-sans text-xl mb-6 opacity-95 leading-body">
            Povestea AKCON începe în <span className="text-gold font-semibold">1977</span>, când bunicii lui Cristian au pus bazele unei tradiții de construcții de calitate în județul Alba.
          </p>

          <div className="space-y-4 mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="font-open-sans text-lg font-semibold text-gold mb-2">
                📅 1977-1990: Fundația
              </p>
              <p className="font-open-sans text-base opacity-90 leading-body">
                Reputație pentru meșteșug tradițional în Alba Iulia și împrejurimi.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="font-open-sans text-lg font-semibold text-gold mb-2">
                📅 1990-2015: Expansiunea
              </p>
              <p className="font-open-sans text-base opacity-90 leading-body">
                Profesionalizare și relații de lungă durată cu clienții.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="font-open-sans text-lg font-semibold text-gold mb-2">
                📅 2015-Prezent: Inovația
              </p>
              <p className="font-open-sans text-base opacity-90 leading-body">
                Cristian, CEO, combină viziune modernă cu valori familiale.
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
            <p className="font-montserrat text-2xl font-bold text-gold mb-4">
              50 de Ani de Experiență
            </p>
            <ul className="font-open-sans text-base opacity-90 leading-body space-y-2">
              <li className="flex items-start">
                <span className="text-gold mr-2">✅</span>
                <span>{companyData.projectsCompleted}+ proiecte finalizate cu {companyData.satisfiedClients}% satisfacție clienți</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">✅</span>
                <span>Generații de familii servite</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">✅</span>
                <span>Evoluție constantă</span>
              </li>
              <li className="flex items-start">
                <span className="text-gold mr-2">✅</span>
                <span>Aceeași promisiune de calitate</span>
              </li>
            </ul>
          </div>

          <p className="font-open-sans text-lg opacity-90 leading-body">
            <span className="text-gold font-semibold">Tradiție + Inovație = Încrederea Ta.</span> Respectăm înțelepciunea trecutului, dar îmbrățișăm progresul viitorului.
          </p>
        </div>
      ),
      image: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1200',
      imageAlt: 'Moștenirea AKCON - 4 Generații de Construcții'
    }
  ];

  return (
    <>
      <SEO
        title="Despre Noi - AKCON | 4 Generații, Experiență din 1977"
        description="Povestea AKCON: 4 generații, experiență din 1977 în construcții. Cunoaște echipa, proprietarul Cristian, și moștenirea noastră."
        keywords={['despre akcon', 'constructii alba iulia', 'acoperisuri alba iulia', 'echipa akcon', 'cristian akcon', 'istorie akcon']}
        canonical="https://akcon.ro/despre-noi"
      />

      <div className="min-h-screen bg-white">
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920"
              alt="AKCON - Echipa și Proiectele Noastre"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-navy/95 via-navy/85 to-navy-light/90"></div>
          </div>

          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <nav className="flex justify-center items-center mb-6 text-sm opacity-90">
              <Link to="/" className="hover:text-gold transition-colors">Acasă</Link>
              <span className="mx-2">/</span>
              <span className="text-gold">Despre Noi</span>
            </nav>

            <h1 className="font-montserrat text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-glow-white">
              Despre AKCON
            </h1>
            <p className="font-open-sans text-xl md:text-2xl mb-4 opacity-95">
              4 Generații. 50 de Ani. O Singură Promisiune: Calitate.
            </p>
            <p className="font-open-sans text-lg opacity-90 max-w-2xl mx-auto">
              Din 1977, familia AKCON construiește case și încredere în Alba Iulia și județele limitrofe.
            </p>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-white/50 rounded-full"></div>
            </div>
          </div>
        </section>

        <section className="relative py-20 bg-gradient-to-br from-navy via-navy-light to-navy text-white overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-20 left-10 w-64 h-64 bg-gold/20 rounded-full blur-3xl floating"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl floating" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="mb-12 overflow-x-auto scrollbar-hide">
              <div
                className="flex space-x-2 md:space-x-4 border-b border-white/20 min-w-max md:min-w-0 md:justify-center pb-2"
                role="tablist"
                aria-label="Despre AKCON tabs"
              >
                {tabs.map((tab, index) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(index)}
                    className={`
                      font-montserrat text-sm md:text-base lg:text-lg font-semibold px-4 py-3 whitespace-nowrap
                      transition-all duration-300 relative
                      ${activeTab === index
                        ? 'text-white'
                        : 'text-white/60 hover:text-gold'
                      }
                    `}
                    role="tab"
                    aria-selected={activeTab === index}
                    aria-controls={`panel-${tab.id}`}
                  >
                    {tab.title}
                    {activeTab === index && (
                      <span className="absolute bottom-0 left-0 w-full h-1 bg-gold rounded-full shadow-glow-gold"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            <div
              ref={contentRef}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              className="relative"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div
                  key={`content-${activeTab}`}
                  className="animate-fadeIn"
                  role="tabpanel"
                  id={`panel-${tabs[activeTab].id}`}
                  aria-labelledby={tabs[activeTab].id}
                >
                  {tabs[activeTab].content}
                </div>

                <div
                  key={`image-${activeTab}`}
                  className="relative animate-fadeIn"
                >
                  <div className="absolute inset-0 bg-gold/20 rounded-lg transform translate-x-6 translate-y-6 -z-10"></div>
                  <img
                    src={tabs[activeTab].image}
                    alt={tabs[activeTab].imageAlt}
                    className="rounded-lg shadow-2xl w-full h-auto object-cover relative z-10 hover:shadow-gold/50 transition-shadow duration-300"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="flex justify-center mt-8 space-x-2 lg:hidden">
                {tabs.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`
                      w-2 h-2 rounded-full transition-all duration-300
                      ${activeTab === index
                        ? 'bg-gold w-8'
                        : 'bg-white/40 hover:bg-white/60'
                      }
                    `}
                    aria-label={`Go to tab ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20 bg-gradient-to-br from-gold to-gold/90 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Vrei să Afli Mai Mult?
            </h2>
            <p className="font-open-sans text-lg md:text-xl mb-8 opacity-95">
              Contactează-ne astăzi pentru o consultație gratuită și descoperă cum putem transforma visul tău într-o realitate.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/#contact"
                className="btn-primary bg-white text-gold hover:bg-gray-100 inline-flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Solicită Ofertă
              </Link>
              <a
                href={`tel:+40${companyData.phone.replace(/\s/g, '')}`}
                className="btn-primary bg-navy text-white hover:bg-navy-light inline-flex items-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Sună Acum
              </a>
            </div>

            <p className="font-open-sans text-base mt-6 opacity-90">
              Răspundem în maxim 24 de ore
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
