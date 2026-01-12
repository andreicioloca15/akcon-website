import { Star, MapPin, Ruler, Clock, Award, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface RealProject {
  id: string;
  clientName: string;
  location: string;
  projectType: string;
  area?: string;
  duration?: string;
  image: string;
  description: string;
  badge: string;
  isFeatured?: boolean;
  rating: number;
}

const realProjects: RealProject[] = [
  {
    id: 'gheorghe-gerea',
    clientName: 'Gheorghe Gerea',
    location: 'Alba Iulia',
    projectType: 'Montaj Acoperiș Nou - Țiglă Metalică',
    image: '/screenshot.jpg',
    description: 'Unul dintre cele mai frumoase acoperișuri realizate de AKCON. Țiglă metalică gri antracit cu finisaje impecabile și atenție maximă la detalii.',
    badge: 'Cel Mai Frumos Acoperiș',
    isFeatured: true,
    rating: 5,
  },
  {
    id: 'dragos-man',
    clientName: 'Drăgoș Man',
    location: 'Garbova, Alba',
    projectType: 'Renovare Acoperiș',
    area: '300mp',
    duration: '2 săptămâni',
    image: '/renovare_garbova_-_dragos_man.jpg',
    description: 'Renovare completă acoperiș 300mp în Garbova. Transformare de la acoperiș vechi la țiglă metalică modernă, finalizat în doar 2 săptămâni.',
    badge: 'Proiect Finalizat',
    rating: 5,
  },
  {
    id: 'mihalt',
    clientName: 'Proiect Mihalt',
    location: 'Mihalt, Alba',
    projectType: 'Montaj Țiglă Metalică',
    area: '280mp',
    duration: '12 zile',
    image: '/mihalt.jpg',
    description: 'Montaj complet țiglă metalică roșie pentru o casă în Mihalt. 280mp realizați profesional în 12 zile.',
    badge: 'Proiect Finalizat',
    rating: 5,
  },
  {
    id: 'alex-tanea',
    clientName: 'Alex Țanea',
    location: 'Alba Iulia',
    projectType: 'Schimbare Acoperiș - Montaj Țiglă Metalică',
    duration: '5 zile',
    image: '/alex_tanea.jpg',
    description: 'Experiență excelentă! Finalizat în 5 zile, montaj impecabil țiglă metalică, echipă profesionistă și comunicare clară. Client extrem de mulțumit!',
    badge: 'Proiect Finalizat',
    rating: 5,
  },
  {
    id: 'proiect-akcon',
    clientName: 'Proiect AKCON',
    location: 'Alba Iulia',
    projectType: 'Montaj Acoperiș Metalic',
    duration: '15 zile',
    image: '/no_details.jpeg',
    description: 'Montaj profesional acoperiș metalic realizat în 15 zile. Lucrare de calitate executată de echipa AKCON.',
    badge: 'Proiect Finalizat',
    rating: 5,
  },
  {
    id: 'alba-iulia-blue',
    clientName: 'Proiect Alba Iulia',
    location: 'Alba Iulia',
    projectType: 'Acoperiș Metalic cu Falt',
    area: '240mp',
    duration: '6 zile',
    image: '/acoperis_albastru_-_alba_iulia.jpeg',
    description: 'Acoperiș metalic cu falt, 240mp, finalizat în doar 6 zile în Alba Iulia. Construcție rapidă și profesională de la AKCON.',
    badge: 'Proiect Finalizat',
    rating: 5,
  },
  {
    id: 'cabane-tip-a',
    clientName: 'Proiect AKCON',
    location: 'Județul Alba',
    projectType: 'Cabane Tip A - Acoperiș Metalic',
    image: '/dji_fly_20250909_160218_261_1767899902514_photo copy.jpg',
    description: 'Proiect AKCON - acoperișuri metalice gri pentru cabane tip A. Fotografie aeriană profesională.',
    badge: 'Proiect Finalizat',
    rating: 5,
  },
];

export default function ProudTransformations() {
  const headingRef = useScrollAnimation<HTMLDivElement>({ distance: 50 });
  const featuredRef = useScrollAnimation<HTMLDivElement>({ distance: 50, delay: 100 });
  const card1Ref = useScrollAnimation<HTMLDivElement>({ distance: 50, delay: 200 });
  const card2Ref = useScrollAnimation<HTMLDivElement>({ distance: 50, delay: 300 });

  const featuredProject = realProjects[0];
  const otherProjects = realProjects.slice(1);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <div ref={headingRef} className="text-center mb-16">
          <div className="inline-block bg-gold text-white px-6 py-3 rounded-full font-montserrat font-semibold text-sm mb-6">
            Proiecte Reale AKCON
          </div>
          <h2 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6">
            Transformări de Care Suntem Mândri
          </h2>
          <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Proiecte reale finalizate cu atenție la detalii și rezultate excepționale
          </p>
        </div>

        <div ref={featuredRef} className="mb-8">
          <div className="group relative bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-6 right-6 z-20">
              <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 backdrop-blur-sm">
                <Award className="w-5 h-5" />
                <span className="font-montserrat text-sm font-bold">{featuredProject.badge}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-80 lg:h-[500px] overflow-hidden">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.clientName}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent lg:hidden"></div>
              </div>

              <div className="p-8 md:p-10 lg:p-12 flex flex-col justify-center">
                <div className="mb-4 flex items-center gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="font-montserrat text-lg font-bold text-navy ml-2">5/5</span>
                </div>

                <h3 className="font-montserrat text-3xl md:text-4xl font-bold text-navy mb-4">
                  {featuredProject.projectType}
                </h3>

                <div className="flex flex-col gap-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="bg-navy/5 p-2 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-gold" />
                    </div>
                    <span className="font-open-sans text-lg">
                      <span className="font-semibold text-navy">Client:</span> {featuredProject.clientName}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-700">
                    <div className="bg-navy/5 p-2 rounded-lg">
                      <MapPin className="w-5 h-5 text-gold" />
                    </div>
                    <span className="font-open-sans text-lg">{featuredProject.location}</span>
                  </div>
                </div>

                <p className="font-open-sans text-lg text-gray-700 leading-relaxed mb-6 border-l-4 border-gold pl-4 italic">
                  "{featuredProject.description}"
                </p>

                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gold to-yellow-600 text-white px-6 py-3 rounded-lg font-montserrat font-semibold text-base shadow-md">
                  <Award className="w-5 h-5" />
                  Proiect Premium
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {otherProjects.map((project, index) => {
            const ref = index === 0 ? card1Ref : card2Ref;
            return (
              <div
                key={project.id}
                ref={ref}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.clientName}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/70 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-gold text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2 backdrop-blur-sm">
                      <CheckCircle className="w-4 h-4" />
                      <span className="font-montserrat text-xs font-bold">{project.badge}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3 flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="font-montserrat text-base font-bold text-navy ml-2">5/5</span>
                  </div>

                  <h3 className="font-montserrat text-2xl font-bold text-navy mb-2">
                    {project.projectType}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-gray-700">
                      <CheckCircle className="w-4 h-4 text-gold flex-shrink-0" />
                      <span className="font-open-sans text-sm">
                        <span className="font-semibold">Client:</span> {project.clientName}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <MapPin className="w-4 h-4 text-gold flex-shrink-0" />
                      <span className="font-open-sans text-sm">{project.location}</span>
                    </div>
                    {project.area && (
                      <div className="flex items-center gap-2 text-gray-700">
                        <Ruler className="w-4 h-4 text-gold flex-shrink-0" />
                        <span className="font-open-sans text-sm">{project.area}</span>
                      </div>
                    )}
                    {project.duration && (
                      <div className="flex items-center gap-2 text-gray-700">
                        <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                        <span className="font-open-sans text-sm">{project.duration}</span>
                      </div>
                    )}
                  </div>

                  <p className="font-open-sans text-base text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
