import { ArrowRight, ArrowDown } from 'lucide-react';

interface BeforeAfterComparisonProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  beforeCaption?: string;
  afterCaption?: string;
}

export default function BeforeAfterComparison({
  beforeImage,
  afterImage,
  beforeLabel = 'CONSTRUCȚIE ÎN PROGRES',
  afterLabel = 'REZULTAT FINAL',
  beforeCaption = 'Șarpantă nouă cu structură complexă și izolație modernă',
  afterCaption = 'Acoperiș finalizat - țiglă metalică gri antracit, aspect premium'
}: BeforeAfterComparisonProps) {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center">
      <div className="w-full lg:flex-1 max-w-2xl">
        <div className="relative group">
          <div className="absolute top-4 left-4 z-10 bg-gold px-6 py-3 rounded-lg shadow-lg">
            <span className="font-montserrat font-bold text-white text-sm uppercase tracking-wide">
              {beforeLabel}
            </span>
          </div>
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="w-full h-auto rounded-xl shadow-2xl group-hover:shadow-3xl transition-all duration-300"
          />
        </div>
        <p className="text-center mt-4 font-open-sans text-gray-600 text-base leading-relaxed">
          {beforeCaption}
        </p>
      </div>

      <div className="flex items-center justify-center flex-shrink-0">
        <div className="hidden lg:block">
          <ArrowRight className="w-16 h-16 text-gold" strokeWidth={3} />
        </div>
        <div className="block lg:hidden">
          <ArrowDown className="w-16 h-16 text-gold" strokeWidth={3} />
        </div>
      </div>

      <div className="w-full lg:flex-1 max-w-2xl">
        <div className="relative group">
          <div className="absolute top-4 left-4 z-10 bg-gold px-6 py-3 rounded-lg shadow-lg">
            <span className="font-montserrat font-bold text-white text-sm uppercase tracking-wide">
              {afterLabel}
            </span>
          </div>
          <img
            src={afterImage}
            alt={afterLabel}
            className="w-full h-auto rounded-xl shadow-2xl group-hover:shadow-3xl transition-all duration-300"
          />
        </div>
        <p className="text-center mt-4 font-open-sans text-gray-600 text-base leading-relaxed">
          {afterCaption}
        </p>
      </div>
    </div>
  );
}
