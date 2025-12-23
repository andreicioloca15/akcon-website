import * as LucideIcons from 'lucide-react';
import whyChooseData from '../content/why-choose-us.json';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function WhyChooseUs() {
  const headingRef = useScrollAnimation<HTMLDivElement>({ distance: 40 });

  const getIconComponent = (iconName: string | null) => {
    if (!iconName) return null;
    const Icon = (LucideIcons as any)[iconName];
    return Icon || null;
  };

  const pillars = whyChooseData.pillars
    .sort((a, b) => a.order - b.order)
    .map(p => ({
      ...p,
      iconComponent: p.icon ? getIconComponent(p.icon) : null
    }));

  return (
    <section className="py-20 bg-navy text-white" id="despre">
      <div className="max-w-7xl mx-auto px-4">
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet lg:text-h2-desktop mb-6">
            {whyChooseData.title}
          </h2>
          <p className="font-open-sans text-base md:text-lg opacity-90 max-w-2xl mx-auto leading-body">
            {whyChooseData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => {
            const PillarCard = () => {
              const cardRef = useScrollAnimation<HTMLDivElement>({ distance: 50, delay: index * 100 });
              return (
                <div ref={cardRef} className="text-center">
                  <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-6 transition-transform hover:scale-110 duration-300">
                    {pillar.number ? (
                      <span className="font-montserrat text-4xl font-bold">{pillar.number}</span>
                    ) : pillar.iconComponent && (
                      (() => {
                        const Icon = pillar.iconComponent;
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
              );
            };
            return <PillarCard key={index} />;
          })}
        </div>
      </div>
    </section>
  );
}
