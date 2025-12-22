import { Star } from 'lucide-react';
import mariaGeorgescu from '../content/testimonials/maria-georgescu.json';
import ioanPopescu from '../content/testimonials/ioan-popescu.json';
import andreiDumitrescu from '../content/testimonials/andrei-dumitrescu.json';

interface Testimonial {
  name: string;
  city: string;
  profession?: string;
  rating: number;
  quote: string;
  date: string;
  order: number;
  avatar?: string;
  featured?: boolean;
}

export default function Testimonials() {
  const testimonialsData: Testimonial[] = [
    mariaGeorgescu,
    ioanPopescu,
    andreiDumitrescu
  ];

  const testimonials = testimonialsData
    .filter(t => t.featured !== false)
    .sort((a, b) => a.order - b.order)
    .slice(0, 3)
    .map(t => ({
      name: t.name,
      location: t.city,
      profession: t.profession,
      initials: t.name.split(' ').map(n => n[0]).join(''),
      text: t.quote,
      rating: t.rating,
      avatar: t.avatar
    }));

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet lg:text-h2-desktop font-bold text-gray-700 mb-4">
            Ce Spun Clienții Noștri
          </h2>
          <p className="font-open-sans text-base md:text-lg text-gray-600 leading-body max-w-2xl mx-auto">
            Încrederea câștigată prin lucrări impecabile și rezultate măsurabile
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center mb-4">
                <div className="flex text-gold">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className={`w-5 h-5 ${star <= testimonial.rating ? 'fill-current' : ''}`} />
                  ))}
                </div>
              </div>
              <p className="font-open-sans text-gray-600 leading-body mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                {testimonial.avatar ? (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center font-montserrat font-bold text-gray-700">
                    {testimonial.initials}
                  </div>
                )}
                <div className="ml-4">
                  <div className="font-montserrat font-semibold text-gray-700">
                    {testimonial.name}
                  </div>
                  <div className="font-open-sans text-sm text-gray-600">
                    {testimonial.profession ? `${testimonial.profession}, ${testimonial.location}` : testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
