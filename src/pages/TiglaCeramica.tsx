import ServicePage from './ServicePage';

export default function TiglaCeramica() {
  return (
    <ServicePage
      slug="tigla-ceramica"
      title="Țiglă Ceramică Premium"
      description="Montaj profesional țiglă ceramică pentru acoperișuri care durează generații. Branduri premium Tondach, Creaton cu garanție 100+ ani. Izolație termică și fonică superioară, rezistență la îngheț-dezgheț excepțională. Investiția perfectă pentru case de lux și vile în județul Alba."
      metaTitle="Țiglă Ceramică Alba Iulia | Tondach, Creaton | Durabilitate 100+ Ani"
      metaDescription="Montaj țiglă ceramică premium Alba Iulia. Tondach, Creaton. Durabilitate 100+ ani, izolație superioară. Echipă specializată. ☎ 0XXX-XXX-XXX. Consultație gratuită!"
      keywords={[
        'țiglă ceramică Alba Iulia',
        'Tondach Alba Iulia',
        'țiglă Creaton Alba',
        'acoperiș ceramică premium',
        'montaj țiglă ceramică'
      ]}
      heroTitle="Țiglă Ceramică Premium - Acoperișuri pentru Generații"
      heroSubtitle="Eleganță intemporală și durabilitate excepțională. Țigla ceramică Tondach și Creaton rezistă peste 100 ani, oferind izolație superioară și aspect aristocratic casei tale."
      benefits={[
        'Durabilitate excepțională - peste 100 ani garanție producător',
        'Rezistență perfectă la îngheț-dezgheț (important pentru clima Alba)',
        'Izolație termică superioară - menține temperatura constantă',
        'Izolație fonică excelentă - liniște deplină în casă',
        'Rezistență la UV și decolorare - culori vibrante decenii',
        'Material ecologic 100% natural (argilă arsă)',
        'Varietate mare de modele și culori',
        'Crește semnificativ valoarea proprietății'
      ]}
      processSteps={[
        {
          title: 'Consultanță Personalizată',
          description: 'Alegere model și culoare, calcul necesar, estimare cost'
        },
        {
          title: 'Pregătire Structură',
          description: 'Verificare capacitate portantă, ajustări necesare'
        },
        {
          title: 'Montaj Contrapantă',
          description: 'Șipci, membrane, ventilație corespunzătoare'
        },
        {
          title: 'Instalare Țiglă',
          description: 'Montaj profesional conform normelor producătorului'
        }
      ]}
      faq={[
        {
          question: 'De ce să aleg țiglă ceramică în loc de metalică?',
          answer: 'Țigla ceramică oferă durabilitate superioară (100+ ani vs 50 ani), izolație termică și fonică mai bună, aspect premium și menține valoarea în timp. E investiția perfectă pentru case de lux.'
        },
        {
          question: 'Cât costă țigla ceramică?',
          answer: 'Prețul complet (materiale + manoperă) variază între 80-120 EUR/mp în funcție de model. E mai scumpă inițial decât metalica, dar pe termen lung se amortizează prin durabilitate excepțională.'
        },
        {
          question: 'Ce modele Tondach recomandați?',
          answer: 'Pentru case clasice: Tondach Figaro sau Romantica. Pentru stil modern: Tondach Bolero sau Stodo. Pentru vile de lux: Tondach Alegra. Oferim consultanță pentru alegerea perfectă.'
        }
      ]}
      caseStudy={{
        title: 'Vila Premium Sebeș - Țiglă Ceramică Tondach Figaro Deluxe',
        clientName: 'Dr. Maria Ionescu',
        clientLocation: 'Sebeș',
        projectDate: 'Iulie 2024',
        duration: 4,
        area: 240,
        materials: 'Țiglă ceramică Tondach Figaro Deluxe roșu antic, Șarpantă lemn masiv, Izolație Rockwool 20cm',
        problemDescription: 'Dr. Ionescu construia o vilă de lux și dorea cel mai bun acoperiș posibil - fără compromisuri la calitate. Căuta durabilitate maximă, izolație perfectă și aspect aristocratic.',
        solutionDescription: 'Am recomandat Tondach Figaro Deluxe în roșu antic - vârful gamei de țiglă ceramică. Izolație dublă Rockwool 20cm pentru performanță termică maximă. Montaj realizat de specialiști cu 15+ ani experiență în țiglă ceramică.',
        resultsDescription: 'Vila arată spectaculos - un adevărat statement arhitectural în Sebeș. Izolația termică depășește standardele A++. Proprietara a raportat costuri cu încălzirea cu 50% mai mici decât estimările inițiale.',
        testimonial: 'Am făcut cea mai bună alegere cu Tondach și Akcon. Acoperișul este o capodoperă - elegant, robust și eficient. Știu că va dura generații întregi. Investiția perfectă!',
        investmentValue: '28.800 EUR'
      }}
    />
  );
}
