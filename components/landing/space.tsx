import { StudioPhoto } from "@/components/studio-photo";
import { photos } from "@/lib/photos";
import { site } from "@/lib/site";

export function Space() {
  return (
    <section
      id="espaco"
      aria-labelledby="espaco-heading"
      className="scroll-mt-20 border-b border-border"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          O espaço
        </p>
        <h2
          id="espaco-heading"
          className="font-heading mt-2 max-w-xl text-3xl text-balance sm:text-4xl"
        >
          O estúdio na {site.street}, em {site.city}
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Atendimento presencial com aparelhos de Pilates — Cadillac, reformer e
          barril — e espaço para fisioterapia, liberação miofascial e massagem.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <StudioPhoto
            src={photos.visaoGeral.src}
            alt={photos.visaoGeral.alt}
            sizes="(max-width: 640px) 100vw, (max-width: 1152px) 50vw, 560px"
            className="aspect-[3/4]"
            imageClassName="object-[center_72%]"
          />
          <StudioPhoto
            src={photos.reformer.src}
            alt={photos.reformer.alt}
            sizes="(max-width: 640px) 100vw, (max-width: 1152px) 50vw, 560px"
            className="aspect-[3/4]"
            imageClassName="object-[center_68%]"
          />
        </div>
      </div>
    </section>
  );
}
