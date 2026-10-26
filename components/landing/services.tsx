import {
  ActivityIcon,
  HandHeartIcon,
  LayersIcon,
  PersonStandingIcon,
} from "lucide-react";

import { StudioPhoto } from "@/components/studio-photo";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { photos } from "@/lib/photos";

const services = [
  {
    icon: PersonStandingIcon,
    title: "Pilates",
    description:
      "O Pilates é um método de exercícios que trabalha força, flexibilidade, equilíbrio, postura, coordenação e consciência corporal. Com exercícios adaptados às necessidades de cada aluno, promove mais mobilidade, estabilidade e qualidade de vida.",
  },
  {
    icon: ActivityIcon,
    title: "Fisioterapia",
    description:
      "A fisioterapia atua na prevenção e no tratamento de disfunções, dores e limitações do movimento. Por meio de uma avaliação individualizada e de técnicas específicas, buscamos recuperar a funcionalidade, melhorar a mobilidade e favorecer uma rotina com mais autonomia e bem-estar.",
  },
  {
    icon: LayersIcon,
    title: "Liberação miofascial",
    description:
      "A liberação miofascial é uma técnica manual que atua sobre os tecidos que envolvem os músculos, ajudando a aliviar tensões, melhorar a mobilidade e reduzir a sensação de rigidez muscular. É uma opção para quem busca mais conforto corporal e liberdade de movimento.",
  },
  {
    icon: HandHeartIcon,
    title: "Massagem",
    description:
      "A massagem é uma prática de cuidado que proporciona relaxamento, alívio das tensões musculares e sensação de bem-estar. Por meio de manobras específicas, contribui para diminuir o estresse do dia a dia e promover momentos de descanso e autocuidado.",
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
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-sm font-medium tracking-wide text-primary uppercase">
              Serviços
            </p>
            <h2
              id="servicos-heading"
              className="font-heading mt-2 max-w-xl text-3xl text-balance sm:text-4xl"
            >
              Pilates, fisioterapia, liberação miofascial e massagem
            </h2>
          </div>
          <StudioPhoto
            src={photos.barril.src}
            alt={photos.barril.alt}
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="aspect-[3/4] w-full"
            imageClassName="object-[center_55%]"
          />
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
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
