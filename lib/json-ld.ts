import { site } from "@/lib/site";

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HealthAndBeautyBusiness", "MedicalBusiness"],
    "@id": `${site.url}/#business`,
    name: site.name,
    description: site.description,
    url: site.url,
    telephone: site.phoneTel,
    image: `${site.url}/opengraph-image`,
    inLanguage: "pt-BR",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.street,
      addressLocality: site.city,
      addressRegion: site.regionCode,
      addressCountry: site.country,
    },
    areaServed: {
      "@type": "City",
      name: `${site.city}, ${site.regionCode}`,
    },
    founder: {
      "@type": "Person",
      name: site.practitioner,
      jobTitle: "Fisioterapeuta",
      knowsAbout: ["Pilates", "Massagem miofascial", "Fisioterapia"],
    },
    employee: {
      "@type": "Person",
      name: site.practitioner,
      jobTitle: "Fisioterapeuta",
    },
    sameAs: [site.instagramUrl],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Serviços AnimaPilates",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pilates com olhar clínico",
            description:
              "Sessões de Pilates conduzidas por fisioterapeuta em Lages, SC.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Massagem miofascial",
            description:
              "Trabalho nas fáscias para aliviar tensões e ganhar mobilidade.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fisioterapia",
            description:
              "Avaliação e tratamento de dores, lesões e limitações funcionais.",
          },
        },
      ],
    },
  };
}
