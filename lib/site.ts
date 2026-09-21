export const site = {
  name: "AnimaPilates",
  practitioner: "Anielle Pereira",
  profession: "Fisioterapeuta especializada em Pilates",
  street: "Rua Fauta Rath, 69",
  city: "Lages",
  region: "Santa Catarina",
  regionCode: "SC",
  country: "BR",
  phoneDisplay: "(49) 99948-4290",
  phoneTel: "+5549999484290",
  instagramHandle: "animapilates",
  instagramUrl: "https://instagram.com/animapilates",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://127.0.0.1:43127",
  locale: "pt-BR",
  tagline: "Movimento que transforma",
  description:
    "AnimaPilates é o estúdio de Anielle Pereira na Rua Fauta Rath, 69, em Lages, SC: fisioterapia especializada em Pilates, com massagem miofascial e atendimento fisioterapêutico.",
} as const;

export function fullAddress() {
  return `${site.street} — ${site.city}, ${site.regionCode}`;
}

export function mapsUrl() {
  const query = `${site.street}, ${site.city}, ${site.region}, Brasil`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

/** Contact-only until the appointment module exists. Swap href to /agendar later. */
export const booking = {
  enabled: false,
  href: "#contato",
  label: "Agendar avaliação",
  note: "O agendamento online entra nesta mesma jornada. Por enquanto, o contato é direto.",
} as const;

export const nav = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
] as const;

export function whatsappUrl(message?: string) {
  const text = encodeURIComponent(
    message ??
      "Olá, Anielle! Vim pelo site da AnimaPilates e gostaria de saber mais sobre uma avaliação.",
  );
  return `https://wa.me/${site.phoneTel.replace("+", "")}?text=${text}`;
}

export function telUrl() {
  return `tel:${site.phoneTel}`;
}
