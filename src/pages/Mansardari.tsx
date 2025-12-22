import ServicePage from './ServicePage';
import serviceData from '../content/service-pages/mansardari.json';

export default function Mansardari() {
  return (
    <ServicePage
      {...serviceData}
      keywords={serviceData.keywords.split(', ')}
      caseStudy={{
        ...serviceData.caseStudy,
        duration: parseInt(serviceData.caseStudy.duration),
        area: parseInt(serviceData.caseStudy.area)
      }}
    />
  );
}
