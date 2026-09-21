import { booking } from "@/lib/site";

const steps = [
  {
    n: "01",
    title: "Primeiro contato",
    body: "Chame no WhatsApp ou ligue. Conte o que está sentindo, se já fez Pilates e o que espera do atendimento.",
  },
  {
    n: "02",
    title: "Avaliação",
    body: "Anielle observa movimento, histórico e objetivos. É nesse encontro que se define o caminho — Pilates, massagem miofascial, fisioterapia ou a combinação dos três.",
  },
  {
    n: "03",
    title: "Plano no seu ritmo",
    body: "Você recebe um plano claro, com frequência e foco alinhados à sua rotina em Lages. Nada de aula genérica para todo mundo.",
  },
  {
    n: "04",
    title: "Acompanhamento",
    body: "As sessões acontecem presencialmente. O agendamento online será integrado a esta página; até lá, o horário se confirma no contato direto.",
  },
];

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      aria-labelledby="como-heading"
      className="scroll-mt-20 border-b border-border"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          Como funciona
        </p>
        <h2
          id="como-heading"
          className="font-heading mt-2 max-w-xl text-3xl text-balance sm:text-4xl"
        >
          Do primeiro recado à sessão, sem burocracia
        </h2>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2">
          {steps.map((step) => (
            <li
              key={step.n}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <span className="font-heading text-3xl text-primary">{step.n}</span>
              <h3 className="mt-3 font-heading text-xl">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-sm text-muted-foreground">{booking.note}</p>
      </div>
    </section>
  );
}
