export default function BrandPartners() {
  const brands = [
    { name: 'VELUX' },
    { name: 'LINDAB' },
    { name: 'BILKA' },
    { name: 'FAKRO' },
    { name: 'WETTERBEST' }
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h3 className="font-montserrat text-h3-mobile md:text-h3-tablet text-center text-gray-700 mb-12">
          Parteneri Oficiali ai Celor Mai Bune Branduri din Industrie
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center justify-items-center">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="font-montserrat text-xl md:text-2xl font-bold text-gray-600 opacity-60 hover:opacity-100 hover:text-gold transition-all duration-300 cursor-pointer"
            >
              {brand.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
