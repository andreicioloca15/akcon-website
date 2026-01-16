import { useEffect } from 'react';
import companyData from '../content/company.json';

interface SchemaOrgProps {
  type: 'LocalBusiness' | 'Service';
  serviceName?: string;
  serviceDescription?: string;
}

export default function SchemaOrg({ type, serviceName, serviceDescription }: SchemaOrgProps): null {
  useEffect(() => {
    const schemaId = `schema-${type.toLowerCase()}`;
    let schemaTag = document.getElementById(schemaId) as HTMLScriptElement;

    if (type === 'LocalBusiness') {
      const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "RoofingContractor",
        "name": "AKCON Construcții Acoperișuri",
        "image": "https://akcon.ro/logo-horizontal.svg",
        "description": "Firma specializată în acoperișuri Alba Iulia. Montaj, renovare și reparații acoperișuri cu garanție 15 ani.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": companyData.streetAddress,
          "addressLocality": companyData.cityAddress,
          "postalCode": companyData.postalCode,
          "addressRegion": companyData.county,
          "addressCountry": "RO"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "46.0667",
          "longitude": "23.5833"
        },
        "telephone": `+40${companyData.phone.replace(/\s/g, '').replace(/^0/, '')}`,
        "email": companyData.email,
        "url": "https://akcon.ro",
        "priceRange": "$$",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "09:00",
            "closes": "14:00"
          }
        ],
        "areaServed": [
          {
            "@type": "City",
            "name": "Alba Iulia"
          },
          {
            "@type": "City",
            "name": "Aiud"
          },
          {
            "@type": "City",
            "name": "Teiuș"
          },
          {
            "@type": "City",
            "name": "Sebeș"
          },
          {
            "@type": "City",
            "name": "Blaj"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5",
          "reviewCount": "100",
          "bestRating": "5",
          "worstRating": "1"
        },
        "sameAs": [
          "https://www.facebook.com/profile.php?id=61565072249027"
        ]
      };

      if (!schemaTag) {
        schemaTag = document.createElement('script');
        schemaTag.id = schemaId;
        schemaTag.type = 'application/ld+json';
        document.head.appendChild(schemaTag);
      }
      schemaTag.textContent = JSON.stringify(localBusinessSchema);
    } else if (type === 'Service' && serviceName && serviceDescription) {
      const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": serviceName,
        "description": serviceDescription,
        "provider": {
          "@type": "RoofingContractor",
          "name": "AKCON Construcții Acoperișuri",
          "telephone": `+40${companyData.phone.replace(/\s/g, '').replace(/^0/, '')}`,
          "url": "https://akcon.ro"
        },
        "areaServed": {
          "@type": "City",
          "name": "Alba Iulia"
        },
        "offers": {
          "@type": "Offer",
          "availability": "https://schema.org/InStock",
          "priceSpecification": {
            "@type": "PriceSpecification",
            "priceCurrency": "RON"
          }
        }
      };

      if (!schemaTag) {
        schemaTag = document.createElement('script');
        schemaTag.id = schemaId;
        schemaTag.type = 'application/ld+json';
        document.head.appendChild(schemaTag);
      }
      schemaTag.textContent = JSON.stringify(serviceSchema);
    }

    return () => {
      const existingTag = document.getElementById(schemaId);
      if (existingTag) {
        existingTag.remove();
      }
    };
  }, [type, serviceName, serviceDescription]);

  return null;
}
