import { site } from "@/lib/site";

export function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-heading"
      className="scroll-mt-20 border-b border-border bg-secondary/35"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            Sobre
          </p>
          <h2
            id="sobre-heading"
            className="font-heading mt-2 text-3xl text-balance sm:text-4xl"
          >
            {site.practitioner}, fisioterapeuta em {site.city}
          </h2>
        </div>
        <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            O {site.name} nasceu da união entre a prática clínica e o Pilates:
            um espaço para cuidar do corpo sem pressa, com técnica e escuta.
            Anielle Pereira atende presencialmente em {site.city},{" "}
            {site.region}.
          </p>
          <p>
            Além do Pilates, o estúdio oferece massagem miofascial e
            fisioterapia para quem chega com dor, rigidez, uma lesão recente
            ou a vontade de se fortalecer com acompanhamento profissional.
          </p>
          <p>
            Cada sessão parte do que o seu corpo pede naquele dia — não de um
            protocolo genérico. O objetivo é que você saia com mais clareza,
            estabilidade e confiança para o movimento.
          </p>
        </div>
      </div>
    </section>
  );
}
