import { Star } from 'lucide-react';
import { useStaggeredAnimation } from '../hooks/useScrollAnimation';
import alexTanea from '../content/testimonials/alex-tanea.json';
import adrianCosoveanu from '../content/testimonials/adrian-cosoveanu.json';
import emilRadu from '../content/testimonials/emil-radu.json';
import popaMircea from '../content/testimonials/popa-mircea.json';

interface Testimonial {
  name: string;
  city: string;
  profession?: string;
  service?: string;
  rating: number;
  quote: string;
  date: string;
  order: number;
  avatar?: string;
  featured?: boolean;
}

interface MappedTestimonial {
  name: string;
  location: string;
  service?: string;
  initials: string;
  text: string;
  rating: number;
  avatar?: string;
}

export default function Testimonials() {
  const testimonialsData: Testimonial[] = [
    alexTanea,
    adrianCosoveanu,
    emilRadu,
    popaMircea
  ];

  const testimonials: MappedTestimonial[] = testimonialsData
    .filter(t => t.featured !== false)
    .sort((a, b) => a.order - b.order)
    .map(t => ({
      name: t.name,
      location: t.city,
      service: t.service,
      initials: t.name.split(' ').map(n => n[0]).join(''),
      text: t.quote,
      rating: t.rating,
      avatar: t.avatar
    }));

  const { elementRef, visibleItems } = useStaggeredAnimation(testimonials.length, 100);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet lg:text-h2-desktop font-bold text-navy mb-4">
            Ce Spun Clienții Noștri
          </h2>
          <p className="font-open-sans text-base md:text-lg text-gray-600 leading-body max-w-2xl mx-auto">
            Peste 100 de clienți mulțumiți care au avut încredere în AKCON
          </p>
        </div>

        <div ref={elementRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-xl card-animate ${
                visibleItems.has(index)
                  ? 'opacity-100'
                  : 'opacity-0'
              }`}
              style={{
                transform: visibleItems.has(index)
                  ? 'translate3d(0, 0, 0) scale3d(1, 1, 1)'
                  : 'translate3d(0, 16px, 0) scale3d(1.03, 1.03, 1)',
                transition: 'opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                willChange: visibleItems.has(index) ? 'auto' : 'transform, opacity',
              }}
            >
              <div className="flex items-center mb-4">
                <div className="flex text-gold">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className={`w-5 h-5 ${star <= testimonial.rating ? 'fill-current' : ''}`} />
                  ))}
                </div>
              </div>
              <p className="font-open-sans text-gray-700 text-sm md:text-base leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>
              <div className="flex items-center pt-4 border-t-2 border-gray-100">
                {testimonial.avatar ? (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center font-montserrat font-bold text-gold">
                    {testimonial.initials}
                  </div>
                )}
                <div className="ml-4">
                  <div className="font-montserrat font-semibold text-navy text-base">
                    {testimonial.name}
                  </div>
                  <div className="font-open-sans text-sm text-gray-600">
                    {testimonial.service || testimonial.location}
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
