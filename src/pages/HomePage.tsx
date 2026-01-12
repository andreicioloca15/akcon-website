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

export default function HomePage() {
  return (
    <>
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
