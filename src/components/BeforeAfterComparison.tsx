import { ArrowRight, ArrowDown } from 'lucide-react';

interface BeforeAfterComparisonProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeCaption?: string;
  afterCaption?: string;
  title?: string;
  subtitle?: string;
}

export default function BeforeAfterComparison({
  beforeImage,
  afterImage,
  beforeLabel = 'ÎNAINTE',
  afterLabel = 'DUPĂ',
  beforeCaption = 'Acoperiș vechi deteriorat',
  afterCaption = 'Acoperiș nou premium',
  title = 'Transformare Completă - Proiect Stremț',
  subtitle = 'Vedere aeriană - Înainte și După'
}: BeforeAfterComparisonProps) {
  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h3 className="font-montserrat text-2xl md:text-3xl font-bold text-navy mb-2">
          {title}
        </h3>
        <p className="font-open-sans text-lg text-gray-600">
          {subtitle}
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center">
        <div className="w-full lg:w-1/2 max-w-xl">
          <div className="relative group">
            <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-red-500 to-orange-500 px-6 py-3 rounded-lg shadow-lg">
              <span className="font-montserrat font-bold text-white text-lg uppercase">
                {beforeLabel}
              </span>
            </div>
            <img
              src={beforeImage}
              alt={beforeLabel}
              className="w-full h-auto rounded-xl shadow-2xl group-hover:shadow-3xl transition-all duration-300"
            />
          </div>
          <p className="text-center mt-4 font-open-sans text-gray-700 text-base">
            {beforeCaption}
          </p>
        </div>

        <div className="flex items-center justify-center">
          <div className="hidden lg:block">
            <ArrowRight className="w-16 h-16 text-gold" strokeWidth={3} />
          </div>
          <div className="block lg:hidden">
            <ArrowDown className="w-16 h-16 text-gold" strokeWidth={3} />
          </div>
        </div>

        <div className="w-full lg:w-1/2 max-w-xl">
          <div className="relative group">
            <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-green-500 to-gold px-6 py-3 rounded-lg shadow-lg">
              <span className="font-montserrat font-bold text-white text-lg uppercase">
                {afterLabel}
              </span>
            </div>
            <img
              src={afterImage}
              alt={afterLabel}
              className="w-full h-auto rounded-xl shadow-2xl group-hover:shadow-3xl transition-all duration-300"
            />
          </div>
          <p className="text-center mt-4 font-open-sans text-gray-700 text-base">
            {afterCaption}
          </p>
        </div>
      </div>

      <div className="mt-8 p-6 bg-gradient-to-br from-gold/10 to-gold/5 rounded-xl border-l-4 border-gold">
        <p className="font-open-sans text-gray-700 text-center leading-relaxed">
          Acest proiect demonstrează transformarea completă de la un acoperiș vechi deteriorat
          la un acoperiș modern premium. Vezi diferența dramatică în aspect și calitate!
        </p>
      </div>
    </div>
  );
}
