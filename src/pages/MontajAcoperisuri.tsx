import ServicePage from './ServicePage';
import serviceData from '../content/service-pages/montaj-acoperisuri.json';

export default function MontajAcoperisuri() {
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
