import { useState, FormEvent } from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Star } from 'lucide-react';
import companyData from '../content/company.json';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const form = e.target as HTMLFormElement;
      const formDataToSend = new FormData(form);

      const response = await fetch('https://formspree.io/f/xwvvpwne', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          city: '',
          service: '',
          message: ''
        });

        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="font-montserrat text-h2-mobile md:text-h2-tablet lg:text-h2-desktop font-bold text-gray-700 mb-4 hover:text-gold transition-colors duration-300">
            Solicită Ofertă Gratuită
          </h2>
          <p className="font-open-sans text-base md:text-lg text-gray-600 leading-body max-w-2xl mx-auto">
            Completează formularul și te contactăm în maxim 24 ore pentru consultație gratuită
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100 fade-in-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border-2 border-green-400 text-green-800 rounded-lg font-open-sans animate-fade-in">
                  <div className="flex items-start">
                    <ShieldCheck className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Mulțumim! Mesajul a fost trimis cu succes.</p>
                      <p className="text-sm">Vă vom contacta în maxim 24 ore pentru consultație gratuită.</p>
                    </div>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border-2 border-red-400 text-red-800 rounded-lg font-open-sans animate-fade-in">
                  <div className="flex items-start">
                    <Star className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">A apărut o eroare.</p>
                      <p className="text-sm">Vă rugăm să încercați din nou sau sunați direct la <a href={`tel:+40${companyData.phone.replace(/\s/g, '').replace(/^0/, '')}`} className="underline hover:text-red-600">{companyData.phone}</a>.</p>
                    </div>
                  </div>
                </div>
              )}

              <div>
                <label className="block font-open-sans text-gray-700 font-semibold mb-2">
                  Nume Complet *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg font-open-sans text-base hover:border-gold/50"
                  placeholder="ex: Ion Popescu"
                  autoComplete="name"
                  required
                />
              </div>

              <div>
                <label className="block font-open-sans text-gray-700 font-semibold mb-2">
                  Număr de Telefon *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="form-input w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg font-open-sans text-base hover:border-gold/50"
                  placeholder="ex: 0749 616 796"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                />
              </div>

              <div>
                <label className="block font-open-sans text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg font-open-sans text-base hover:border-gold/50"
                  placeholder="ex: ion.popescu@email.com"
                  autoComplete="email"
                  inputMode="email"
                />
              </div>

              <div>
                <label className="block font-open-sans text-gray-700 font-semibold mb-2">
                  Localitate *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="form-input w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg font-open-sans hover:border-gold/50"
                  placeholder="ex: Alba Iulia"
                  required
                />
              </div>

              <div>
                <label className="block font-open-sans text-gray-700 font-semibold mb-2">
                  Tip Serviciu *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="form-input w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg font-open-sans hover:border-gold/50"
                  required
                >
                  <option value="">Selectează serviciul</option>
                  <option value="acoperis-nou">Acoperiș Nou</option>
                  <option value="renovare">Renovare Acoperiș</option>
                  <option value="reparatii">Reparații Urgente</option>
                  <option value="mansardare">Mansardare</option>
                  <option value="consultatie">Doar Consultație</option>
                </select>
              </div>

              <div>
                <label className="block font-open-sans text-gray-700 font-semibold mb-2">
                  Mesaj (opțional)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input w-full px-4 py-3.5 border-2 border-gray-200 rounded-lg font-open-sans hover:border-gold/50"
                  rows={4}
                  placeholder="Detalii despre proiect..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gold text-white px-4 xs:px-6 md:px-8 py-4 rounded-lg font-montserrat text-base xs:text-lg font-semibold hover:bg-gold-hover transition-all duration-300 hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gold relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="relative z-10">
                  {isSubmitting ? 'Se trimite...' : 'Trimite Cererea'}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold-hover to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <p className="text-sm text-gray-600 text-center font-open-sans leading-body">
                Răspundem în maxim 24 ore • Consultația este 100% gratuită
              </p>
            </form>
          </div>

          <div className="fade-in-right">
            <div className="bg-gradient-to-br from-navy to-navy-light text-white p-8 rounded-lg mb-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-3xl"></div>
              <h3 className="font-montserrat text-h3-mobile md:text-h3-tablet font-semibold mb-6 relative z-10">
                Informații de Contact
              </h3>

              <div className="space-y-6 relative z-10">
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-gold mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-montserrat font-semibold mb-1">Telefon</div>
                    <a href={`tel:+40${companyData.phone.replace(/\s/g, '').replace(/^0/, '')}`} className="font-open-sans leading-body hover:text-gold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold">
                      {companyData.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-gold mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-montserrat font-semibold mb-1">Email</div>
                    <a href={`mailto:${companyData.email}`} className="font-open-sans leading-body hover:text-gold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold">
                      {companyData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-gold mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-montserrat font-semibold mb-1">Adresă</div>
                    <p className="font-open-sans leading-body">
                      {companyData.streetAddress}<br />
                      {companyData.cityAddress} {companyData.postalCode}<br />
                      Județul {companyData.county}, România
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="w-6 h-6 text-gold mr-4 flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-montserrat font-semibold mb-1">Program</div>
                    <p className="font-open-sans leading-body whitespace-pre-line">
                      {companyData.workingHours}
                      {'\n'}Duminică: Închis
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
                <ShieldCheck className="w-8 h-8 text-gold mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="font-montserrat font-semibold text-gray-700 text-sm">
                  Licențiat & Asigurat
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
                <Star className="w-8 h-8 text-gold mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                <div className="font-montserrat font-semibold text-gray-700 text-sm">
                  Garanție 15 Ani
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
