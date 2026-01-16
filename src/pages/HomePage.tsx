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
        title="AKCON - Acoperișuri Alba Iulia | Montaj, Renovare, Reparații Profesionale"
        description="AKCON - Firma specializată în acoperișuri Alba Iulia. Montaj țiglă metalică, renovare acoperiș, reparații, mansardări. Garanție 15 ani. ☎ 0749 616 796"
        keywords={[
          'acoperisuri alba iulia',
          'montaj tigla metalica alba iulia',
          'renovare acoperis alba iulia',
          'reparatii acoperis alba iulia',
          'firma acoperisuri alba iulia',
          'constructii acoperisuri alba iulia',
          'mansardare alba iulia',
          'tigla ceramica alba iulia',
          'tabla faltuita alba iulia',
          'acoperisuri profesionale alba iulia'
        ]}
        canonical="https://akcon.ro/"
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
