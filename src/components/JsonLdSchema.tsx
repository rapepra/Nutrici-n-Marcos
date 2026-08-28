import React from 'react';

export const JsonLdSchema: React.FC = () => {
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["MedicalBusiness", "LocalBusiness"],
        "@id": "https://marcosnutricion.es/#clinic",
        "name": "Marcos Nutrición Clínica y Deportiva Madrid",
        "image": "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1000&q=80",
        "url": "https://marcosnutricion.es",
        "telephone": "+34910000000",
        "email": "contacto@marcosnutricion.es",
        "priceRange": "$$",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Calle de Serrano, 45",
          "addressLocality": "Madrid",
          "postalCode": "28001",
          "addressRegion": "Comunidad de Madrid",
          "addressCountry": "ES"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 40.4258,
          "longitude": -3.6865
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "20:00"
          }
        ],
        "medicalSpecialty": [
          "Dietetics",
          "SportsMedicine",
          "Gastroenterology"
        ],
        "areaServed": [
          {
            "@type": "City",
            "name": "Madrid"
          },
          {
            "@type": "Neighborhood",
            "name": "Barrio de Salamanca"
          }
        ],
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Programas de Nutrición Madrid",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Programa Recomposición Integral 90 Días"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Nutrición Deportiva y Alto Rendimiento"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Consulta Salud Digestiva y SIBO Madrid"
              }
            }
          ]
        }
      },
      {
        "@type": "Person",
        "@id": "https://marcosnutricion.es/#person",
        "name": "Marcos",
        "jobTitle": "Nutricionista Clínico y Deportivo",
        "worksFor": {
          "@id": "https://marcosnutricion.es/#clinic"
        },
        "alumniOf": "Universidad Complutense de Madrid",
        "knowsAbout": [
          "Nutrición Clínica",
          "Recomposición Corporal",
          "Antropometría ISAK",
          "Salud Digestiva",
          "Deporte de Alto Rendimiento"
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};
