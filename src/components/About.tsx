import { useAnimatedCounter } from '../hooks/useScrollAnimation';
import { Target, Eye, Shield, Users, Award, TrendingUp, CheckCircle, Building2 } from 'lucide-react';
import ProjectCarousel from './ProjectCarousel';
import companyData from '../content/company.json';

export default function About() {
  const { count: yearsCount, elementRef: yearsRef } = useAnimatedCounter(companyData.yearsExperience);
  const { count: projectsCount, elementRef: projectsRef } = useAnimatedCounter(companyData.projectsCompleted);
  const { count: warrantyCount, elementRef: warrantyRef } = useAnimatedCounter(15);
  const { count: satisfactionCount, elementRef: satisfactionRef } = useAnimatedCounter(companyData.satisfiedClients);

  const values = [
    {
      icon: Shield,
      title: 'Calitate',
      description: 'Folosim exclusiv materiale certificate de la producători internaționali recunoscuți precum Lindab, Velux, Bilka și Tondach. Fiecare proiect este supravegheat de ingineri certificați care asigură respectarea standardelor de calitate.'
    },
    {
      icon: Users,
      title: 'Profesionalism',
      description: 'Echipa noastră este formată din specialiști cu experiență vastă în domeniu. Fiecare membru trece prin traininguri periodice și certificări pentru a fi la curent cu cele mai noi tehnici și tehnologii din industrie.'
    },
    {
      icon: Award,
      title: 'Garanție',
      description: 'Oferim cea mai extinsă garanție din județul Alba - 15 ani pentru manoperă. Materialele vin cu garanție producător de 30-50 ani. În caz de problemă, intervenim gratuit în maxim 48 ore.'
    },
    {
      icon: TrendingUp,
      title: 'Transparență',
      description: 'Comunicare clară și prețuri corecte, fără costuri ascunse. Primești o ofertă detaliată cu specificații exacte. Respectăm bugetul și termenele stabilite, cu penalizări dacă întârziem.'
    }
  ];

  return (
    <div id="despre">
      <section className="relative py-20 bg-gradient-to-br from-navy via-navy-light to-navy text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gold/20 rounded-full blur-3xl floating"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-white/10 rounded-full blur-3xl floating" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="fade-in-left">
              <h2 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-glow-white">
                Despre AKCON
              </h2>
              <p className="font-open-sans text-xl mb-6 opacity-95 leading-body">
                Cu peste {companyData.yearsExperience} ani de experiență în domeniul construcțiilor și acoperișurilor, <span className="text-gold font-semibold">AKCON</span> s-a impus ca lider pe piața din Alba Iulia și județele limitrofe.
              </p>
              <p className="font-open-sans text-lg mb-8 opacity-90 leading-body">
                Am finalizat peste {companyData.projectsCompleted} de proiecte de succes, de la case particulare la construcții comerciale complexe. Satisfacția clienților noștri este cea mai bună dovadă a calității serviciilor noastre.
              </p>
            </div>
            <div className="relative fade-in-right">
              <div className="absolute inset-0 bg-gold/20 rounded-lg transform translate-x-6 translate-y-6 -z-10"></div>
              <img
                src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="AKCON - Experți în Acoperișuri"
                className="rounded-lg shadow-2xl w-full h-auto object-cover relative z-10 hover:shadow-gold/50 transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-br from-gold via-gold-hover to-gold text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="fade-in-up hover-lift">
              <div className="text-6xl mb-4 floating">📅</div>
              <div ref={yearsRef} className="font-montserrat text-5xl md:text-6xl font-bold mb-2 text-glow-white">
                {yearsCount}+
              </div>
              <div className="font-open-sans text-base md:text-lg opacity-95">
                Ani Experiență
              </div>
            </div>
            <div className="fade-in-up delay-100 hover-lift">
              <div className="text-6xl mb-4 floating" style={{ animationDelay: '0.2s' }}>🏆</div>
              <div ref={projectsRef} className="font-montserrat text-5xl md:text-6xl font-bold mb-2 text-glow-white">
                {projectsCount}+
              </div>
              <div className="font-open-sans text-base md:text-lg opacity-95">
                Proiecte Finalizate
              </div>
            </div>
            <div className="fade-in-up delay-200 hover-lift">
              <div className="text-6xl mb-4 floating" style={{ animationDelay: '0.4s' }}>✓</div>
              <div ref={warrantyRef} className="font-montserrat text-5xl md:text-6xl font-bold mb-2 text-glow-white">
                {warrantyCount}
              </div>
              <div className="font-open-sans text-base md:text-lg opacity-95">
                Ani Garanție
              </div>
            </div>
            <div className="fade-in-up delay-300 hover-lift">
              <div className="text-6xl mb-4 floating" style={{ animationDelay: '0.6s' }}>😊</div>
              <div ref={satisfactionRef} className="font-montserrat text-5xl md:text-6xl font-bold mb-2 text-glow-white">
                {satisfactionCount}%
              </div>
              <div className="font-open-sans text-base md:text-lg opacity-95">
                Satisfacție Clienți
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-gold hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 fade-in-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl group-hover:bg-gold/10 transition-all duration-500"></div>
              <Target className="w-16 h-16 text-gold mb-6 relative z-10" />
              <h3 className="font-montserrat text-2xl md:text-3xl font-bold text-gray-700 mb-4 relative z-10">
                Misiunea Noastră
              </h3>
              <p className="font-open-sans text-lg text-gray-600 leading-body relative z-10">
                Oferim soluții complete de acoperișuri, de la consultanță și proiectare până la execuție și mentenanță. Fiecare proiect este tratat cu maximă atenție la detalii, folosind doar materiale premium de la producători recunoscuți internațional. Obiectivul nostru este să construim acoperișuri care protejează și frumusețează casele clienților noștri pentru generații întregi.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-navy hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 fade-in-right relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-navy/5 rounded-full blur-3xl group-hover:bg-navy/10 transition-all duration-500"></div>
              <Eye className="w-16 h-16 text-navy mb-6 relative z-10" />
              <h3 className="font-montserrat text-2xl md:text-3xl font-bold text-gray-700 mb-4 relative z-10">
                Viziunea Noastră
              </h3>
              <p className="font-open-sans text-lg text-gray-600 leading-body relative z-10">
                Să devenim cel mai de încredere partener în domeniul acoperișurilor din Transilvania, recunoscut pentru excelență în execuție, inovație în soluții și devotament față de satisfacția clientului. Vizăm să setăm noi standarde de calitate în industrie și să inspirăm încredere prin fiecare proiect realizat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-gray-700 mb-6">
              Valorile Noastre
            </h2>
            <p className="font-open-sans text-xl text-gray-600 max-w-2xl mx-auto leading-body">
              Principiile fundamentale care ghidează fiecare decizie și acțiune a companiei noastre
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-3 hover:border-gold transition-all duration-300 border-2 border-transparent group fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold-hover rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="font-montserrat text-2xl font-bold text-gray-700 mb-4 text-center group-hover:text-gold transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="font-open-sans text-gray-600 leading-body text-center">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold text-gray-700 mb-6">
              Proiectele Noastre
            </h2>
            <p className="font-open-sans text-xl text-gray-600 max-w-2xl mx-auto leading-body">
              Transformări de care suntem mândri - acoperișuri premium realizate în județul Alba
            </p>
          </div>
          <div className="fade-in-up delay-200">
            <ProjectCarousel />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-navy via-navy-light to-navy text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="font-montserrat text-4xl md:text-5xl font-bold mb-6 text-glow-white">
              De Ce Clienții Ne Aleg
            </h2>
            <p className="font-open-sans text-xl opacity-95 max-w-3xl mx-auto leading-body">
              Peste {companyData.satisfiedClients}% dintre clienții noștri ne recomandă prietenilor și familiei
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: 'Garanție Extinsă',
                description: '15 ani garanție manoperă - cea mai mare din județul Alba'
              },
              {
                icon: Users,
                title: 'Echipă Proprie',
                description: 'Nu subcontractăm niciodată - controlăm calitatea fiecărei lucrări'
              },
              {
                icon: Award,
                title: 'Materiale Premium',
                description: 'Doar producători certificați: Lindab, Velux, Bilka, Tondach'
              },
              {
                icon: CheckCircle,
                title: 'Respect Termenelor',
                description: 'Respectăm deadlines - penalizări dacă întârziem'
              },
              {
                icon: TrendingUp,
                title: 'Consultanță Gratuită',
                description: 'Evaluare tehnică și proiectare gratuită pentru fiecare proiect'
              },
              {
                icon: Building2,
                title: 'Local & Rapid',
                description: 'Sediu în Alba Iulia - intervenție rapidă în tot județul'
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="glass-effect p-6 rounded-lg hover:bg-white/20 transition-all duration-300 fade-in-up hover-lift"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Icon className="w-12 h-12 text-gold mb-4" />
                  <h3 className="font-montserrat text-xl font-bold mb-3">
                    {item.title}
                  </h3>
                  <p className="font-open-sans opacity-90 leading-body">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
