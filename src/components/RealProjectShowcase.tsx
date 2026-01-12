import { ArrowRight, ArrowDown } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface RealProjectShowcaseProps {
  beforeImage: string;
  afterImage: string;
  duringImage?: string;
  beforeLabel?: string;
  afterLabel?: string;
  duringLabel?: string;
  title?: string;
  description?: string;
}

export default function RealProjectShowcase({
  beforeImage,
  afterImage,
  duringImage,
  beforeLabel = "Construcție în Progres",
  afterLabel = "Rezultat Final",
  duringLabel = "În Lucru",
  title = "Transformarea Completă",
  description
}: RealProjectShowcaseProps) {
  const titleRef = useScrollAnimation<HTMLHeadingElement>({ distance: 40, delay: 0 });
  const beforeRef = useScrollAnimation<HTMLDivElement>({ distance: 60, delay: 100 });
  const arrowRef = useScrollAnimation<HTMLDivElement>({ distance: 40, delay: 200 });
  const afterRef = useScrollAnimation<HTMLDivElement>({ distance: 60, delay: 300 });
  const duringRef = useScrollAnimation<HTMLDivElement>({ distance: 60, delay: 150 });

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 ref={titleRef} className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4">
            {title}
          </h2>
          {description && (
            <p className="font-open-sans text-lg text-gray-600 max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>

        {duringImage ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div ref={beforeRef} className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={beforeImage}
                  alt={beforeLabel}
                  className="w-full h-80 md:h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block bg-gold text-white px-4 py-2 rounded-lg font-montserrat font-semibold text-sm shadow-lg">
                    {beforeLabel}
                  </span>
                </div>
              </div>
            </div>

            <div ref={duringRef} className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={duringImage}
                  alt={duringLabel}
                  className="w-full h-80 md:h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block bg-navy text-white px-4 py-2 rounded-lg font-montserrat font-semibold text-sm shadow-lg">
                    {duringLabel}
                  </span>
                </div>
              </div>
            </div>

            <div ref={afterRef} className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={afterImage}
                  alt={afterLabel}
                  className="w-full h-80 md:h-96 object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block bg-gold text-white px-4 py-2 rounded-lg font-montserrat font-semibold text-sm shadow-lg">
                    {afterLabel}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div ref={beforeRef} className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={beforeImage}
                  alt={beforeLabel}
                  className="w-full h-80 md:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block bg-gold text-white px-6 py-3 rounded-lg font-montserrat font-semibold text-lg shadow-lg">
                    {beforeLabel}
                  </span>
                </div>
              </div>
            </div>

            <div ref={arrowRef} className="flex justify-center items-center">
              <div className="hidden md:block">
                <ArrowRight className="w-16 h-16 text-gold animate-pulse" strokeWidth={3} />
              </div>
              <div className="md:hidden">
                <ArrowDown className="w-16 h-16 text-gold animate-pulse" strokeWidth={3} />
              </div>
            </div>

            <div ref={afterRef} className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <img
                  src={afterImage}
                  alt={afterLabel}
                  className="w-full h-80 md:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="inline-block bg-gold text-white px-6 py-3 rounded-lg font-montserrat font-semibold text-lg shadow-lg">
                    {afterLabel}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
