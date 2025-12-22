export default function Process() {
  const steps = [
    {
      number: 1,
      title: 'Consultație Gratuită',
      description: 'Venim la dumneavoastră, evaluăm acoperișul actual și ascultăm nevoile specifice. Consultația este 100% gratuită, fără obligații.'
    },
    {
      number: 2,
      title: 'Ofertă Detaliată',
      description: 'Propunere transparentă cu materiale recomandate, termene clare și preț fix. Explicăm fiecare componentă a proiectului.'
    },
    {
      number: 3,
      title: 'Pregătire Șantier',
      description: 'Protejăm proprietatea cu prelate și bariere de siguranță. Organizăm accesul pentru materiale și echipament.'
    },
    {
      number: 4,
      title: 'Execuție Profesională',
      description: 'Echipa noastră certificată lucrează cu precizie și grijă. Respectăm programul stabilit și menținem șantierul curat.'
    },
    {
      number: 5,
      title: 'Inspecție Calitate',
      description: 'Verificare în multiple puncte înainte de finalizare. Testăm etanșeitatea și calitatea montajului în detaliu.'
    },
    {
      number: 6,
      title: 'Predare și Garanție',
      description: 'Walkthrough final cu clientul. Documentație completă, certificat de garanție 15 ani, instrucțiuni de întreținere.'
    }
  ];

  return (
    <section className="py-20 bg-white" id="proces">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet lg:text-h2-desktop font-bold text-gray-700 mb-4">
            Cum Lucrăm
          </h2>
          <p className="font-open-sans text-base md:text-lg text-gray-600 leading-body max-w-2xl mx-auto">
            Un proces clar și transparent, de la consultație până la garanție activată
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center font-montserrat text-xl font-bold text-white">
                  {step.number}
                </div>
                <div className="ml-4">
                  <h3 className="font-montserrat text-h3-mobile md:text-h3-tablet font-semibold text-gray-700 mb-2">
                    {step.title}
                  </h3>
                  <p className="font-open-sans text-gray-600 leading-body">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
