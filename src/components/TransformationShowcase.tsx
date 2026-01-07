import { useState } from 'react';
import { CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import BeforeAfterSlider from './BeforeAfterSlider';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import companyData from '../content/company.json';

interface TransformationShowcaseProps {
  variant?: 'full' | 'compact';
  showCTA?: boolean;
}

export default function TransformationShowcase({
  variant = 'full',
  showCTA = true
}: TransformationShowcaseProps) {
  const [activeImage, setActiveImage] = useState(0);
  const headingRef = useScrollAnimation<HTMLDivElement>({ distance: 50 });
  const sliderRef = useScrollAnimation<HTMLDivElement>({ distance: 50, delay: 200 });
  const storyRef = useScrollAnimation<HTMLDivElement>({ distance: 50, delay: 300 });

  const duringImages = [
    {
      src: '/ceaf613f-3ff1-4440-a8a4-8d5427638a14.jpg',
      caption: 'Șarpantă nouă profesională cu izolație termică'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (variant === 'compact') {
    return (
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div ref={headingRef} className="text-center mb-12">
            <div className="inline-block bg-gold/10 text-gold px-6 py-2 rounded-full font-montserrat font-semibold text-sm mb-4">
              Transformare Completă AKCON
            </div>
            <h2 className="font-montserrat text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-4">
              Transformări Reale
            </h2>
            <p className="font-open-sans text-lg text-gray-600 max-w-2xl mx-auto">
              De la vechi la modern - Vezi calitatea lucrărilor noastre
            </p>
          </div>

          <div ref={sliderRef} className="mb-8">
            <BeforeAfterSlider
              beforeImage="/4ac47dd7-66b7-4dd6-88d1-f4239a53e6e2_(1).jpg"
              afterImage="/00a8129e-d3fd-43a3-a9e5-49704438504e.jpg"
              beforeLabel="ÎNAINTE"
              afterLabel="DUPĂ"
            />
          </div>

          {showCTA && (
            <div className="text-center">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-3 px-8 py-4 bg-gold text-white font-montserrat font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Vrei și Tu o Transformare Similară?
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div ref={headingRef} className="text-center mb-16">
          <div className="inline-block bg-gold/10 text-gold px-6 py-3 rounded-full font-montserrat font-semibold text-sm mb-6">
            Transformare Completă AKCON
          </div>
          <h2 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6">
            Renovare Completă Acoperiș - Stremț
          </h2>
          <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto leading-body">
            De la un acoperiș vechi din țiglă ceramică roșie la un acoperiș modern din țiglă metalică premium
          </p>
        </div>

        <div ref={sliderRef} className="mb-16">
          <BeforeAfterSlider
            beforeImage="/4ac47dd7-66b7-4dd6-88d1-f4239a53e6e2_(1).jpg"
            afterImage="/00a8129e-d3fd-43a3-a9e5-49704438504e.jpg"
            beforeLabel="ÎNAINTE"
            afterLabel="DUPĂ"
          />
        </div>

        <div ref={storyRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h3 className="font-montserrat text-3xl font-bold text-navy mb-6">
              Povestea Transformării
            </h3>
            <p className="font-open-sans text-lg text-gray-700 leading-relaxed mb-6">
              Acest proiect din Stremț demonstrează expertiza echipei AKCON în transformări complete de acoperișuri. De la demontarea acoperișului vechi până la montajul final, fiecare etapă a fost executată cu precizie și profesionalism.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-montserrat font-semibold text-navy mb-1">Demontare Acoperiș Vechi</p>
                  <p className="font-open-sans text-gray-600">Îndepărtarea completă a țiglei ceramice deteriorate</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-montserrat font-semibold text-navy mb-1">Construcție Șarpantă Nouă</p>
                  <p className="font-open-sans text-gray-600">Structură profesională din lemn de calitate superioară</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-montserrat font-semibold text-navy mb-1">Izolație Termică Modernă</p>
                  <p className="font-open-sans text-gray-600">Sistem complet de izolație pentru eficiență energetică</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                <div>
                  <p className="font-montserrat font-semibold text-navy mb-1">Montaj Țiglă Metalică Premium</p>
                  <p className="font-open-sans text-gray-600">Țiglă metalică gri antracit cu finisaje impecabile</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-navy to-navy-light text-white p-8 rounded-xl shadow-lg">
              <p className="font-montserrat text-2xl font-bold mb-4">Rezultat Final</p>
              <p className="font-open-sans text-base opacity-95 leading-relaxed">
                Un acoperiș modern, durabil, cu aspect premium care transformă complet aspectul casei. Acoperiș complex cu multiple văi, executat impecabil de echipa AKCON.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h4 className="font-montserrat text-xl font-bold text-navy mb-4">
                Specificații Tehnice
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-open-sans text-gray-600">Tip Proiect:</span>
                  <span className="font-montserrat font-semibold text-navy">Renovare Completă</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-open-sans text-gray-600">Locație:</span>
                  <span className="font-montserrat font-semibold text-navy">Stremț, Alba</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-open-sans text-gray-600">Material Vechi:</span>
                  <span className="font-montserrat font-semibold text-navy">Țiglă Ceramică Roșie</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="font-open-sans text-gray-600">Material Nou:</span>
                  <span className="font-montserrat font-semibold text-navy">Țiglă Metalică Gri Antracit</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-open-sans text-gray-600">Complexitate:</span>
                  <span className="font-montserrat font-semibold text-gold">Acoperiș Complex</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-montserrat text-xl font-bold text-navy mb-4">
                În Timpul Lucrării
              </h4>
              <div className="space-y-4">
                {duringImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative group cursor-pointer"
                    onClick={() => setActiveImage(index)}
                  >
                    <img
                      src={image.src}
                      alt={image.caption}
                      className="w-full h-64 object-cover rounded-lg shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg">
                      <p className="font-open-sans text-white text-sm">{image.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {showCTA && (
          <div className="bg-gradient-to-br from-gold to-gold/90 text-white rounded-2xl p-12 text-center shadow-2xl">
            <h3 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">
              Vrei și Tu o Transformare Similară?
            </h3>
            <p className="font-open-sans text-lg mb-8 opacity-95 max-w-2xl mx-auto">
              Contactează-ne astăzi pentru o evaluare gratuită și descoperă cum putem transforma acoperișul tău
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-gold font-montserrat font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Mail className="w-6 h-6" />
                Solicită Evaluare Gratuită
              </button>
              <a
                href={`tel:+40${companyData.phone.replace(/\s/g, '').replace(/^0/, '')}`}
                className="inline-flex items-center gap-3 px-8 py-4 bg-navy text-white font-montserrat font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <Phone className="w-6 h-6" />
                Sună Acum
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
