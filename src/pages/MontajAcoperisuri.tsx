import ServicePage from './ServicePage';
import serviceData from '../content/service-pages/montaj-acoperisuri.json';

export default function MontajAcoperisuri() {
  const keywords = typeof serviceData.keywords === 'string'
    ? serviceData.keywords.split(', ')
    : serviceData.keywords;

  const { caseStudy, ...restData } = serviceData;

  return (
    <ServicePage
      {...restData}
      keywords={keywords}
      showTransformationStory={true}
    />
  );
}
