import ServicePage from './ServicePage';
import serviceData from '../content/service-pages/tigla-metalica.json';

export default function TiglaMetalica() {
  const keywords = typeof serviceData.keywords === 'string'
    ? serviceData.keywords.split(', ')
    : serviceData.keywords;

  const duration = typeof serviceData.caseStudy.duration === 'string'
    ? parseInt(serviceData.caseStudy.duration.match(/\d+/)?.[0] || '0')
    : serviceData.caseStudy.duration;

  const area = typeof serviceData.caseStudy.area === 'string'
    ? parseInt(serviceData.caseStudy.area.match(/\d+/)?.[0] || '0')
    : serviceData.caseStudy.area;

  return (
    <ServicePage
      {...serviceData}
      keywords={keywords}
      caseStudy={{
        ...serviceData.caseStudy,
        duration,
        area,
        duringImages: serviceData.caseStudy.duringImages,
        afterImages: serviceData.caseStudy.afterImages
      }}
    />
  );
}
