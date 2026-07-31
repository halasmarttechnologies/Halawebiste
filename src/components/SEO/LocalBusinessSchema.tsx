import Script from 'next/script';

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Hala Technologies",
    "image": "https://halatechnologies.com/og-image.png",
    "url": "https://halatechnologies.com",
    "telephone": "+971 58 613 9007",
    "email": "Contact@halatechnology.ae",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1803, Latifa Tower, Sheikh Zayed Road",
      "addressLocality": "Dubai",
      "addressCountry": "UAE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.21639,
      "longitude": 55.27891
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.linkedin.com/company/halatechnologies",
      "https://www.instagram.com/halatechnologies"
    ]
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
