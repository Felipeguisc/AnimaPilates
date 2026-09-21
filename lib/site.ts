export const site = {
  name: "AnimaPilates",
  practitioner: "Anielle Pereira",
  profession: "Fisioterapeuta especializada em Pilates",
  city: "Lages",
  region: "Santa Catarina",
  regionCode: "SC",
  country: "BR",
  phoneDisplay: "(49) 99999-9999",
  phoneTel: "+5549999999999",
  instagramHandle: "animapilates",
  instagramUrl: "https://instagram.com/animapilates",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://127.0.0.1:43127",
  locale: "pt-BR",
  tagline: "Movimento com presença, no seu ritmo",
  description:
    "AnimaPilates é o estúdio de Anielle Pereira em Lages, SC: fisioterapia especializada em Pilates, com massagem miofascial e atendimento fisioterapêutico.",
} as const;

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
