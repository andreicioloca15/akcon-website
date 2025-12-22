import { Users, ShieldCheck, MapPin } from 'lucide-react';

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: null,
      number: '15',
      title: 'Garanție 15 Ani Manoperă',
      description: 'Cea mai extinsă garanție din regiunea Alba. Materiale premium cu garanție producător 30-50 ani.'
    },
    {
      icon: Users,
      title: 'Echipă Proprie Certificată',
      description: 'Nu subcontractăm. Fiecare proiect supervizat personal. Muncitori calificați cu certificări internaționale.'
    },
    {
      icon: ShieldCheck,
      title: 'Materiale Premium Verificate',
      description: 'Folosim doar branduri cu garanție 30-50 ani: Lindab, Velux, Bilka, Fakro, Wetterbest. Nu facem compromisuri.'
    },
    {
      icon: MapPin,
      title: 'Local în Județul Alba',
      description: 'Suntem aici, nu la sute de kilometri distanță. Intervenții rapide. Relație pe termen lung cu clienții noștri.'
    }
  ];

  return (
    <section className="py-20 bg-navy text-white" id="despre">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet lg:text-h2-desktop mb-6">
            De Ce Clienții Aleg Akcon
          </h2>
          <p className="font-open-sans text-base md:text-lg opacity-90 max-w-2xl mx-auto leading-body">
            Patru motive pentru care suntem alegerea clară pentru acoperișuri premium în Alba Iulia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 transition-transform hover:scale-110 duration-300">
                {pillar.number ? (
                  <span className="font-montserrat text-4xl font-bold">{pillar.number}</span>
                ) : pillar.icon && (
                  (() => {
                    const Icon = pillar.icon;
                    return <Icon className="w-10 h-10 text-white" />;
                  })()
                )}
              </div>
              <h3 className="font-montserrat text-xl font-semibold mb-4">
                {pillar.title}
              </h3>
              <p className="font-open-sans text-base opacity-90 leading-body">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
