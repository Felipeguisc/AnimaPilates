import { StudioPhoto } from "@/components/studio-photo";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";

export function About() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-heading"
      className="scroll-mt-20 border-b border-border bg-secondary/35"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center">
        <StudioPhoto
          src={photos.cadillac.src}
          alt={photos.cadillac.alt}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="aspect-[3/4] w-full lg:order-first"
          imageClassName="object-[center_46%]"
        />
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
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              No Ânima Pilates, acreditamos que cada pessoa merece um cuidado
              individualizado, respeitando suas necessidades e seus objetivos.
              Oferecemos serviços voltados à saúde, ao bem-estar, à prevenção e
              à recuperação funcional, sempre com atenção e acolhimento.
            </p>
            <p>
              {site.practitioner} atende presencialmente na {site.street}, em{" "}
              {site.city}, {site.region}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
