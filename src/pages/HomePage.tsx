import Hero from '../components/Hero';
import BrandPartners from '../components/BrandPartners';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Stats from '../components/Stats';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Portfolio from '../components/Portfolio';
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
      <WhyChooseUs />
      <Stats />
      <Process />
      <Testimonials />
      <Portfolio />
      <ServiceArea />
      <LocationServices />
      <Contact />
    </>
  );
}
