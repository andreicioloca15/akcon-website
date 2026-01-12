import { useEffect, useRef } from 'react';
import { Star, MapPin, Calendar, Clock, Award, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SEO from '../components/SEO';

export default function GheorgheGereaCaseStudy() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useScrollAnimation<HTMLDivElement>({ distance: 50, delay: 200 });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay prevented:', error);
      });
    }
  }, []);

  return (
    <>
      <SEO
        title="Montaj Acoperiș Nou - Țiglă Metalică | Gheorghe Gerea, Stremț"
        description="Proiect realizat de AKCON: Montaj acoperiș nou cu țiglă metalică gri antracit în Stremț, Alba. Unul dintre cele mai frumoase acoperișuri realizate."
        keywords="montaj acoperis Stremt, tigla metalica Stremt, AKCON acoperisuri, proiect verificat"
        image="/screenshot.jpg"
      />

      {/* Video Hero Section */}
      <section className="relative w-full h-[70vh] min-h-[500px] max-h-[800px] overflow-hidden">
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/Vid3.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Content Overlay */}
        <div className="relative z-20 h-full flex items-center justify-center px-4">
          <div className="text-center text-white max-w-4xl">
            {/* Stars */}
            <div className="flex justify-center items-center gap-2 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-7 h-7 fill-yellow-400 text-yellow-400 drop-shadow-lg" />
              ))}
              <span className="font-montserrat text-xl font-bold ml-2 drop-shadow-lg">5/5</span>
            </div>

            {/* Title */}
            <h1 className="font-montserrat text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-2xl">
              Montaj Acoperiș Nou - Țiglă Metalică
            </h1>

            {/* Location */}
            <div className="flex items-center justify-center gap-3 text-xl md:text-2xl mb-4">
              <MapPin className="w-6 h-6 text-gold drop-shadow-lg" />
              <span className="font-open-sans drop-shadow-lg">Stremț, Alba</span>
            </div>

            {/* Client */}
            <div className="flex items-center justify-center gap-3 text-lg md:text-xl mb-6">
              <CheckCircle className="w-5 h-5 text-gold drop-shadow-lg" />
              <span className="font-open-sans drop-shadow-lg">
                <span className="font-semibold">Client:</span> Gheorghe Gerea
              </span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-6 py-3 rounded-full shadow-2xl">
              <Award className="w-5 h-5" />
              <span className="font-montserrat text-sm font-bold">Cel Mai Frumos Acoperiș</span>
            </div>
          </div>
        </div>

        {/* Mobile Poster Fallback */}
        <style>{`
          @media (max-width: 768px) {
            video {
              display: block;
            }
          }
        `}</style>
      </section>

      {/* Project Details Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Project Overview */}
              <div className="bg-gradient-to-br from-navy/5 to-gold/5 border-l-4 border-gold p-8 rounded-r-lg">
                <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-navy mb-6">
                  Despre Proiect
                </h2>
                <p className="font-open-sans text-lg text-gray-700 leading-relaxed mb-6">
                  Unul dintre cele mai frumoase acoperișuri realizate de AKCON. Acest proiect din Stremț, Alba,
                  reprezintă standardul nostru de excelență în montajul de acoperișuri noi cu țiglă metalică.
                </p>
                <p className="font-open-sans text-lg text-gray-700 leading-relaxed">
                  Țiglă metalică premium în nuanța gri antracit, aleasă cu grijă pentru a se integra perfect
                  cu arhitectura casei. Execuție impecabilă, atenție maximă la detalii și finisaje de cea mai
                  înaltă calitate.
                </p>
              </div>

              {/* Project Images */}
              <div className="space-y-6">
                <h3 className="font-montserrat text-2xl md:text-3xl font-bold text-navy">
                  Galerie Foto
                </h3>
                <div className="grid grid-cols-1 gap-6">
                  <div className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                    <img
                      src="/screenshot.jpg"
                      alt="Montaj acoperiș nou Stremț - vedere aeriană"
                      className="w-full h-[500px] object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6">
                      <p className="font-montserrat text-white font-semibold text-xl">
                        Vedere Aeriană - Proiect Finalizat
                      </p>
                      <p className="font-open-sans text-white/90">
                        Țiglă metalică gri antracit - Stremț, Alba
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Details */}
              <div className="bg-blue-50 border-l-4 border-navy p-8 rounded-r-lg">
                <h3 className="font-montserrat text-2xl md:text-3xl font-bold text-navy mb-6 flex items-center">
                  <span className="w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center mr-4">
                    <CheckCircle className="w-6 h-6" />
                  </span>
                  Detalii Tehnice
                </h3>
                <div className="space-y-4 font-open-sans text-gray-700">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                    <p className="text-lg">
                      <span className="font-semibold">Tip acoperiș:</span> Montaj complet țiglă metalică premium
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                    <p className="text-lg">
                      <span className="font-semibold">Material:</span> Țiglă metalică gri antracit cu acoperire PVDF
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                    <p className="text-lg">
                      <span className="font-semibold">Finisaje:</span> Margini profilate, învelitoare laterală completă
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                    <p className="text-lg">
                      <span className="font-semibold">Garanție:</span> 15 ani manoperă, 30 ani material
                    </p>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="bg-green-50 border-l-4 border-green-600 p-8 rounded-r-lg">
                <h3 className="font-montserrat text-2xl md:text-3xl font-bold text-navy mb-6">
                  Rezultatul Final
                </h3>
                <p className="font-open-sans text-lg text-gray-700 leading-relaxed mb-4">
                  Rezultatul final vorbește de la sine: un acoperiș modern, elegant și durabil care
                  îmbină estetica cu funcționalitatea. Culoarea gri antracit oferă o notă de rafinament
                  și se integrează perfect cu arhitectura locuinței.
                </p>
                <p className="font-open-sans text-lg text-gray-700 leading-relaxed">
                  Clientul nostru, domnul Gheorghe Gerea, este extrem de mulțumit de rezultatul final.
                  Acoperișul a fost realizat conform celor mai înalte standarde de calitate AKCON.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-navy text-white p-8 rounded-lg lg:sticky lg:top-24 shadow-xl">
                <h3 className="font-montserrat text-2xl font-semibold mb-6">
                  Detalii Proiect
                </h3>
                <div className="space-y-5 font-open-sans">
                  <div>
                    <div className="flex items-center gap-2 opacity-75 mb-2">
                      <CheckCircle className="w-4 h-4" />
                      <p className="text-sm">Client</p>
                    </div>
                    <p className="font-semibold text-lg">Gheorghe Gerea</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 opacity-75 mb-2">
                      <MapPin className="w-4 h-4" />
                      <p className="text-sm">Locație</p>
                    </div>
                    <p className="font-semibold text-lg">Stremț, Alba</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 opacity-75 mb-2">
                      <Calendar className="w-4 h-4" />
                      <p className="text-sm">Tip Lucrare</p>
                    </div>
                    <p className="font-semibold text-lg">Montaj Acoperiș Nou</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 opacity-75 mb-2">
                      <Clock className="w-4 h-4" />
                      <p className="text-sm">Material</p>
                    </div>
                    <p className="font-semibold text-lg">Țiglă Metalică Premium</p>
                  </div>
                  <div className="pt-5 border-t border-white/20">
                    <div className="flex items-center gap-2 opacity-75 mb-2">
                      <Award className="w-4 h-4" />
                      <p className="text-sm">Garanție</p>
                    </div>
                    <p className="font-semibold text-lg text-gold">15 ani manoperă</p>
                    <p className="text-sm opacity-75 mt-1">30 ani material</p>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-gold to-yellow-600 text-white p-8 rounded-lg shadow-xl">
                <h4 className="font-montserrat text-xl font-bold mb-4">
                  Vrei un acoperiș similar?
                </h4>
                <p className="font-open-sans mb-6 text-white/90">
                  Contactează-ne pentru o consultație gratuită și o ofertă personalizată!
                </p>
                <a
                  href="/#contact"
                  className="block w-full bg-navy text-white text-center py-3 rounded-lg font-montserrat font-semibold hover:bg-navy/90 transition-colors"
                >
                  Solicită Ofertă
                </a>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 p-8 md:p-12 rounded-xl shadow-lg">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center shadow-lg">
                  <Star className="w-10 h-10 text-white fill-current" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <h3 className="font-montserrat text-2xl md:text-3xl font-semibold text-navy mb-4">
                  Părerea Clientului
                </h3>
                <p className="font-open-sans text-xl text-gray-700 italic leading-relaxed mb-6">
                  "Unul dintre cele mai frumoase acoperișuri realizate de AKCON. Țiglă metalică gri antracit
                  cu finisaje impecabile și atenție maximă la detalii. Sunt extrem de mulțumit de rezultatul final!"
                </p>
                <p className="font-montserrat font-semibold text-lg text-navy">
                  — Gheorghe Gerea, Stremț, Alba
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
