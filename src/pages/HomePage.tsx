import Hero from '../components/Hero';
import BrandPartners from '../components/BrandPartners';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Stats from '../components/Stats';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Portfolio from '../components/Portfolio';
import ServiceArea from '../components/ServiceArea';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <BrandPartners />
      <Services />
      <WhyChooseUs />
      <Stats />
      <Process />
      <Testimonials />
      <Portfolio />
      <ServiceArea />
      <Contact />
    </>
  );
}
