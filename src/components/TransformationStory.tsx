import { useState } from 'react';
import { CheckCircle, ChevronRight, Phone, Mail } from 'lucide-react';

interface TransformationPhase {
  title: string;
  description: string;
  details: string[];
}

export default function TransformationStory() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const phases: TransformationPhase[] = [
    {
      title: "Demontare și Pregătire",
      description: "Îndepărtarea structurii vechi și pregătirea terenului",
      details: [
        "Îndepărtarea țiglei ceramice vechi",
        "Evaluarea și pregătirea structurii existente",
        "Planificarea detaliilor tehnice"
      ]
    },
    {
      title: "Construcție Șarpantă Nouă",
      description: "Crearea unei structuri solide și durabile",
      details: [
        "Montaj șarpantă profesională din lemn tratat",
        "Structură complexă adaptată designului multi-vale",
        "Consolidare și verificare rezistență"
      ]
    },
    {
      title: "Izolație și Protecție",
      description: "Aplicarea sistemului complet de izolație",
      details: [
        "Aplicare folie hidroizolantă",
        "Montaj izolație termică premium",
        "Instalare contralatelelor pentru ventilație"
      ]
    },
    {
      title: "Montaj Țiglă Metalică",
      description: "Instalarea finisajului exterior premium",
      details: [
        "Instalare țiglă metalică gri antracit",
        "Profil modular pentru aspect elegant",
        "Fixare precisă conform normelor tehnice",
        "Verificare etanșeitate la toate îmbinările"
      ]
    },
    {
      title: "Finisaje",
      description: "Detaliile care fac diferența",
      details: [
        "Montaj jgheaburi și burlane",
        "Finisaje la coamă cu elemente speciale",
        "Detalii la streașină și racorduri",
        "Curățare și predare către client"
      ]
    }
  ];

  const results = [
    "Transformare completă de la vechi la modern",
    "Acoperiș nou durabil cu garanție 15 ani manoperă",
    "Aspect premium care crește valoarea proprietății",
    "Izolație termică superioară - reducere costuri încălzire",
    "Etanșeitate perfectă - zero infiltrații",
    "Client extrem de mulțumit cu rezultatul final"
  ];

  const impactPoints = [
    "Renovări complete de acoperișuri",
    "Construcție șarpante complexe",
    "Montaj țiglă metalică la standarde premium",
    "Finisaje impecabile și atenție la detalii",
    "Proiecte finalizate la timp cu rezultate garantate"
  ];

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const scrollToContact = (): void => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-navy">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-gold/20 backdrop-blur-sm border border-gold/30 text-gold px-6 py-2 rounded-full text-sm font-semibold mb-6">
            Transformare Completă AKCON
          </div>
          <h2 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Transformări Reale
          </h2>
          <p className="font-open-sans text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            De la vechi la modern - Vezi calitatea lucrărilor noastre
          </p>
        </div>

        <div className="bg-gradient-to-br from-navy-light to-navy rounded-2xl overflow-hidden shadow-2xl mb-16">
          <div className="p-6 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start mb-12">
              <div>
                <h3 className="font-montserrat text-2xl md:text-3xl font-bold text-white mb-6">
                  Proiect Real Stremț
                </h3>
                <p className="font-open-sans text-gray-300 leading-relaxed mb-6">
                  Acest proiect din Stremț demonstrează expertiza echipei AKCON în renovări complete de acoperișuri.
                  Am transformat un acoperiș vechi din țiglă ceramică roșie într-un acoperiș modern din țiglă metalică premium.
                </p>

                <div className="bg-navy/50 rounded-xl p-6 mb-6 border border-gold/20">
                  <h4 className="font-montserrat text-xl font-bold text-gold mb-4">Provocarea</h4>
                  <p className="font-open-sans text-gray-300 leading-relaxed mb-3">
                    Proprietarul din Stremț avea un acoperiș vechi din țiglă ceramică roșie care:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start text-gray-300 font-open-sans">
                      <ChevronRight className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                      Era deteriorat și necesita înlocuire completă
                    </li>
                    <li className="flex items-start text-gray-300 font-open-sans">
                      <ChevronRight className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                      Avea probleme de etanșeitate
                    </li>
                    <li className="flex items-start text-gray-300 font-open-sans">
                      <ChevronRight className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                      Aspect învechit care diminua valoarea proprietății
                    </li>
                    <li className="flex items-start text-gray-300 font-open-sans">
                      <ChevronRight className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                      Necesita o soluție modernă și durabilă
                    </li>
                  </ul>
                </div>

                <div className="bg-gold/10 rounded-xl p-6 border border-gold/30">
                  <h4 className="font-montserrat text-xl font-bold text-gold mb-4">Soluția AKCON</h4>
                  <p className="font-open-sans text-gray-300 leading-relaxed">
                    Echipa noastră a realizat o renovare completă care a inclus demontare completă a acoperișului vechi,
                    construcție șarpantă nouă din lemn de calitate, aplicare folie de protecție și izolație termică modernă,
                    montaj țiglă metalică premium cu profil modular și finisaje profesionale la coamă, streașină și jgheaburi.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-navy/50 rounded-xl p-6 border border-gold/20">
                  <h4 className="font-montserrat text-lg font-bold text-white mb-4">Specificații Tehnice</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-gold font-semibold text-sm">Locație</p>
                      <p className="text-white font-open-sans">Stremț, Alba</p>
                    </div>
                    <div>
                      <p className="text-gold font-semibold text-sm">Material Vechi</p>
                      <p className="text-white font-open-sans">Țiglă ceramică roșie (deteriorată)</p>
                    </div>
                    <div>
                      <p className="text-gold font-semibold text-sm">Material Nou</p>
                      <p className="text-white font-open-sans">Țiglă metalică profil modular - gri antracit</p>
                    </div>
                    <div>
                      <p className="text-gold font-semibold text-sm">Complexitate</p>
                      <p className="text-white font-open-sans">Acoperiș complex cu văi multiple și geometrie variată</p>
                    </div>
                    <div>
                      <p className="text-gold font-semibold text-sm">Garanție</p>
                      <p className="text-white font-open-sans">15 ani manoperă + garanție materiale producător</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gold to-yellow-600 rounded-xl p-6 shadow-lg">
                  <h4 className="font-montserrat text-xl font-bold text-white mb-4">Rezultate</h4>
                  <div className="space-y-3">
                    {results.map((result, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-white mr-3 flex-shrink-0 mt-0.5" />
                        <p className="font-open-sans text-white text-sm">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div
              className="relative w-full h-[400px] md:h-[600px] rounded-xl overflow-hidden cursor-ew-resize select-none mb-12"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={handleMouseDown}
              onTouchEnd={handleMouseUp}
              onTouchMove={handleTouchMove}
            >
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg z-20">
                <p className="font-montserrat font-bold text-navy text-sm">ÎNAINTE</p>
              </div>
              <div className="absolute top-4 right-4 bg-gold/90 backdrop-blur-sm px-4 py-2 rounded-lg z-20">
                <p className="font-montserrat font-bold text-white text-sm">DUPĂ</p>
              </div>

              <div className="absolute inset-0">
                <img
                  src="/00a8129e-d3fd-43a3-a9e5-49704438504e.jpg"
                  alt="După renovare - țiglă metalică gri antracit"
                  className="w-full h-full object-cover"
                />
              </div>

              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src="/4ac47dd7-66b7-4dd6-88d1-f4239a53e6e2_(1).jpg"
                  alt="Înainte de renovare - țiglă ceramică roșie veche"
                  className="w-full h-full object-cover"
                />
              </div>

              <div
                className="absolute top-0 bottom-0 w-1 bg-white z-30"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <div className="flex gap-1">
                    <ChevronRight className="w-5 h-5 text-navy -rotate-180" />
                    <ChevronRight className="w-5 h-5 text-navy" />
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full z-20">
                <p className="font-open-sans text-white text-xs md:text-sm">Glisează pentru comparație</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="rounded-xl overflow-hidden shadow-lg group">
                <img
                  src="/ceaf613f-3ff1-4440-a8a4-8d5427638a14.jpg"
                  alt="În timpul lucrării - șarpantă nouă cu izolație"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="bg-navy-light p-4">
                  <h4 className="font-montserrat font-bold text-white mb-2">În Timpul Lucrării - Șarpantă Nouă</h4>
                  <p className="font-open-sans text-gray-300 text-sm">
                    Construcție șarpantă profesională cu structură complexă și izolație termică modernă
                  </p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg group">
                <img
                  src="/4ac47dd7-66b7-4dd6-88d1-f4239a53e6e2_(1) copy.jpg"
                  alt="În timpul lucrării - detalii structură"
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="bg-navy-light p-4">
                  <h4 className="font-montserrat font-bold text-white mb-2">În Timpul Lucrării - Detalii Structură</h4>
                  <p className="font-open-sans text-gray-300 text-sm">
                    Precizie în execuție - fiecare detaliu contează pentru durabilitate
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-navy/50 rounded-xl p-8 border border-gold/30 mb-12">
              <h3 className="font-montserrat text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                Procesul de Lucru
              </h3>
              <div className="space-y-6">
                {phases.map((phase, index) => (
                  <div key={index} className="bg-gray-900/50 rounded-xl p-6 border border-gold/10 hover:border-gold/30 transition-all duration-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-gold to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-montserrat text-white font-bold text-lg">{index + 1}</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-montserrat text-xl font-bold text-white mb-2">{phase.title}</h4>
                        <p className="font-open-sans text-gray-300 mb-3">{phase.description}</p>
                        <ul className="space-y-2">
                          {phase.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-start text-gray-400 font-open-sans text-sm">
                              <ChevronRight className="w-4 h-4 text-gold mr-2 flex-shrink-0 mt-0.5" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-gold to-yellow-600 rounded-xl p-8 text-center mb-8">
              <h3 className="font-montserrat text-2xl md:text-3xl font-bold text-white mb-6">
                Această transformare demonstrează experiența echipei AKCON în:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {impactPoints.map((point, index) => (
                  <div key={index} className="flex items-center justify-center text-white font-open-sans">
                    <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-navy to-navy-light rounded-2xl p-8 md:p-12 text-center shadow-2xl">
          <h3 className="font-montserrat text-3xl md:text-4xl font-bold text-white mb-4">
            Vrei și Tu o Transformare Similară?
          </h3>
          <p className="font-open-sans text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Echipa AKCON poate transforma și acoperișul tău. De la demolarea vechiului acoperiș până la montajul țiglei metalice noi,
            ne ocupăm de fiecare detaliu cu profesionalism și experiență de peste 45 de ani.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-gold text-white px-8 py-4 rounded-lg font-montserrat text-lg font-semibold hover:bg-gold-hover transition-all duration-300 shadow-lg hover:shadow-gold/50 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold"
            >
              Solicită Evaluare Gratuită
            </button>
            <a
              href="tel:+40749616796"
              className="bg-white text-navy px-8 py-4 rounded-lg font-montserrat text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:scale-105 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gold"
            >
              <Phone className="w-5 h-5 mr-2" />
              Sună Acum: 0749 616 796
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
