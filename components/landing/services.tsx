import {
  ActivityIcon,
  HandHeartIcon,
  PersonStandingIcon,
} from "lucide-react";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    icon: PersonStandingIcon,
    title: "Pilates com olhar clínico",
    description:
      "Sessões de Pilates conduzidas por fisioterapeuta, ajustadas à sua história: coluna, joelho, ombro, pós-operatório ou o desejo de se mover com mais segurança.",
  },
  {
    icon: HandHeartIcon,
    title: "Massagem miofascial",
    description:
      "Trabalho nas fáscias para soltar tensões, ganhar amplitude e preparar o corpo para o movimento do dia a dia e das sessões de Pilates.",
  },
  {
    icon: ActivityIcon,
    title: "Fisioterapia",
    description:
      "Avaliação e tratamento de dores, lesões e limitações funcionais, com plano claro, progressão honesta e acompanhamento próximo em Lages.",
  },
];

export function Services() {
  return (
    <section
      id="servicos"
      aria-labelledby="servicos-heading"
      className="scroll-mt-20 border-b border-border"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          Serviços
        </p>
        <h2
          id="servicos-heading"
          className="font-heading mt-2 max-w-xl text-3xl text-balance sm:text-4xl"
        >
          Cuidado que combina força, alívio e consciência corporal
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Anielle atende quem precisa reabilitar, prevenir ou simplesmente
          voltar a se sentir em casa no próprio corpo. Os três caminhos
          abaixo podem ser combinados no mesmo plano.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="bg-card">
              <CardHeader>
                <service.icon
                  aria-hidden
                  className="mb-3 size-6 text-primary"
                />
                <CardTitle className="font-heading text-xl">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
