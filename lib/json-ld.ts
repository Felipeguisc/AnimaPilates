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
    image: `${site.url}/brand/logo-color.png`,
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
      knowsAbout: [
        "Pilates",
        "Fisioterapia",
        "Liberação miofascial",
        "Massagem",
      ],
    },
    employee: {
      "@type": "Person",
      name: site.practitioner,
      jobTitle: "Fisioterapeuta",
    },
    sameAs: [site.instagramUrl],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Serviços ${site.name}`,
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pilates",
            description:
              "O Pilates é um método de exercícios que trabalha força, flexibilidade, equilíbrio, postura, coordenação e consciência corporal. Com exercícios adaptados às necessidades de cada aluno, promove mais mobilidade, estabilidade e qualidade de vida.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Fisioterapia",
            description:
              "A fisioterapia atua na prevenção e no tratamento de disfunções, dores e limitações do movimento. Por meio de uma avaliação individualizada e de técnicas específicas, buscamos recuperar a funcionalidade, melhorar a mobilidade e favorecer uma rotina com mais autonomia e bem-estar.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Liberação miofascial",
            description:
              "A liberação miofascial é uma técnica manual que atua sobre os tecidos que envolvem os músculos, ajudando a aliviar tensões, melhorar a mobilidade e reduzir a sensação de rigidez muscular. É uma opção para quem busca mais conforto corporal e liberdade de movimento.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Massagem",
            description:
              "A massagem é uma prática de cuidado que proporciona relaxamento, alívio das tensões musculares e sensação de bem-estar. Por meio de manobras específicas, contribui para diminuir o estresse do dia a dia e promover momentos de descanso e autocuidado.",
          },
        },
      ],
    },
  };
}
