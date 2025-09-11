export const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://totperfira.es/#business",
      "name": "Tot Per Fira",
      "alternateName": "TOT PER FIRA",
      "url": "https://totperfira.es",
      "logo": {
        "@type": "ImageObject",
        "url": "https://totperfira.es/images/LOGO_Rectangular.svg",
        "width": 400,
        "height": 200
      },
      "image": [
        "https://totperfira.es/images/pexels-kampus-6760884.jpg"
      ],
      "description": "Tot Per Fira ofrece soluciones completas para fiestas, eventos y celebraciones en Onda y provincia de Castellón. Especialistas en alquiler de equipos de sonido, congeladores, botelleros, grifos de cerveza y organización de barras con más de 10 años de experiencia.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Onda",
        "addressRegion": "Castellón",
        "addressCountry": "ES"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 39.9687,
        "longitude": -0.2625
      },
      "areaServed": [
        {
          "@type": "City",
          "name": "Onda"
        },
        {
          "@type": "City", 
          "name": "Betxí"
        },
        {
          "@type": "City",
          "name": "l'Alcora"
        },
        {
          "@type": "City",
          "name": "Vila-Real"
        },
        {
          "@type": "City",
          "name": "Nules"
        },
        {
          "@type": "City",
          "name": "Tales"
        },
        {
          "@type": "City",
          "name": "Artesa"
        },
        {
          "@type": "City",
          "name": "Sueras"
        },
        {
          "@type": "City",
          "name": "Fanzara"
        }
      ],
      "serviceType": [
        "Alquiler de equipos de sonido",
        "Organización de eventos",
        "Alquiler de congeladores",
        "Alquiler de botelleros", 
        "Grifos de cerveza",
        "Suministro de hielo",
        "Montaje y desmontaje",
        "Personal de barra",
        "Organización de barras"
      ],
      "priceRange": "$$",
      "foundingDate": "2014",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "80"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Servicios Tot Per Fira",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Alquiler de Sistemas de Sonido",
              "description": "Alquiler de sistemas de sonido de diferentes potencias para todo tipo de evento"
            }
          },
          {
            "@type": "Offer", 
            "itemOffered": {
              "@type": "Service",
              "name": "Alquiler de Congeladores y Botelleros",
              "description": "Alquiler de congeladores con o sin hielo y botelleros para eventos"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Grifos de Cerveza y Barriles",
              "description": "Alquiler de grifos de cerveza y venta de barriles"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Suministro de Materiales",
              "description": "Suministro de hielo, vasos y otros materiales para fiestas"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Montaje y Desmontaje",
              "description": "Servicio completo de montaje y desmontaje de todo el material"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Personal de Barra",
              "description": "Servicio de personal especializado para barra"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Organización de Barras",
              "description": "Organización completa de barras para fiestas, peñas o eventos"
            }
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://totperfira.es/#website",
      "url": "https://totperfira.es",
      "name": "Tot Per Fira",
      "description": "Alquiler de sonido y organización de eventos en Onda, Castellón",
      "publisher": {
        "@id": "https://totperfira.es/#business"
      },
      "inLanguage": "es-ES",
      "potentialAction": [
        {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://totperfira.es/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://totperfira.es/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://totperfira.es"
        }
      ]
    }
  ]
};

export const getStructuredData = (additionalData?: any) => {
  return {
    ...structuredData,
    "@graph": [
      ...structuredData["@graph"],
      ...(additionalData ? [additionalData] : [])
    ]
  };
}; 