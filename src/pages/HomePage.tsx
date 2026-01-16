import Hero from '../components/Hero';
import BrandPartners from '../components/BrandPartners';
import About from '../components/About';
import Services from '../components/Services';
import Stats from '../components/Stats';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import ProudTransformations from '../components/ProudTransformations';
import ServiceArea from '../components/ServiceArea';
import LocationServices from '../components/LocationServices';
import Contact from '../components/Contact';
import SEO from '../components/SEO';
import SchemaOrg from '../components/SchemaOrg';

export default function HomePage() {
  return (
    <>
      <SEO
        title="Acoperișuri Premium Alba | Montaj & Renovare cu Garanție | AKCON"
        description="Echipă locală din Teiuș cu experiență în montaj acoperișuri, renovări și construcții. Lucrări la cheie cu garanție scrisă. Solicită ofertă gratuită."
        keywords={[
          'acoperișuri alba',
          'montaj acoperiș teiuș',
          'firma construcții alba iulia',
          'renovare acoperiș',
          'construcții alba',
          'acoperiș cu garanție',
          'AKCON'
        ]}
        ogImage="/screenshot.jpg"
        canonical="https://akcon.ro/"
        author="AKCON"
        geoRegion="RO-AB"
        geoPlacename="Teiuș"
      />
      <SchemaOrg type="LocalBusiness" />
      <Hero />
      <BrandPartners />
      <About />
      <Services />
      <Stats />
      <Process />
      <Testimonials />
      <ProudTransformations />
      <ServiceArea />
      <LocationServices />
      <Contact />
    </>
  );
}
