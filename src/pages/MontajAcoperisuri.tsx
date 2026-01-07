import ServicePage from './ServicePage';
import serviceData from '../content/service-pages/montaj-acoperisuri.json';

export default function MontajAcoperisuri() {
  const keywords = typeof serviceData.keywords === 'string'
    ? serviceData.keywords.split(', ')
    : serviceData.keywords;

  return (
    <ServicePage
      {...serviceData}
      keywords={keywords}
      showTransformationStory={true}
    />
  );
}
