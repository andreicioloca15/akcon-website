import HeroMobile from '../components/HeroMobile';
import TrustBadges from '../components/TrustBadges';
import ServicesMobile from '../components/ServicesMobile';
import WhyChooseUsMobile from '../components/WhyChooseUsMobile';
import CTASection from '../components/CTASection';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <HeroMobile />
      <TrustBadges />
      <ServicesMobile />
      <WhyChooseUsMobile />
      <CTASection />
      <Contact />
    </>
  );
}
