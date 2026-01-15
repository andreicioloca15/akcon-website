import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';
import companyData from '../content/company.json';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = companyData.whatsapp;
  const message = 'Bună ziua! Sunt interesat de serviciile dvs. de acoperișuri.';

  const handleWhatsAppClick = (): void => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-4 md:right-8 z-40 bg-white rounded-lg shadow-2xl p-6 max-w-sm animate-fade-in border border-gray-200">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center mr-3">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-['Montserrat'] font-semibold text-[#2d3748]">Akcon</h3>
              <p className="text-sm text-[#4a5568]">De obicei răspunde instant</p>
            </div>
          </div>

          <p className="font-['Open_Sans'] text-sm text-[#4a5568] mb-4">
            Salut! 👋<br />
            Cum te putem ajuta cu acoperișul tău?
          </p>

          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-[#25D366] text-white py-3 rounded-lg font-['Montserrat'] font-semibold hover:bg-[#20BA5A] transition flex items-center justify-center"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Deschide WhatsApp
          </button>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="whatsapp-float fixed bottom-6 right-4 md:right-8 z-50 w-14 h-14 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center hover:bg-[#20BA5A] transition-all hover:scale-110 hover:rotate-12 group pulse-soft"
        style={{ willChange: 'transform' }}
        aria-label="WhatsApp"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white transition-transform group-hover:rotate-90 duration-300" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white transition-transform group-hover:scale-110 duration-300" />
        )}

        {!isOpen && <div className="absolute -left-2 top-0 w-3 h-3 bg-[#25D366] rounded-full animate-ping"></div>}

        <span className="absolute right-full mr-3 bg-white text-[#2d3748] px-3 py-2 rounded-lg shadow-lg text-sm font-['Open_Sans'] font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
          Contactează-ne pe WhatsApp
        </span>
      </button>
    </>
  );
}
