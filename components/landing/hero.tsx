import { MapPinIcon } from "lucide-react";

import { BrandLogo } from "@/components/brand-logo";
import { buttonVariants } from "@/components/ui/button";
import { booking, site, whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden border-b border-border"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.82_0.06_145_/_0.35),transparent_55%),radial-gradient(ellipse_at_bottom_left,oklch(0.88_0.04_75_/_0.45),transparent_50%)]"
      />
      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-primary uppercase">
            <MapPinIcon className="size-4" aria-hidden />
            {site.city}, {site.regionCode}
          </p>
          <h1
            id="hero-heading"
            className="font-heading mt-4 max-w-xl text-4xl leading-[1.1] text-balance sm:text-5xl lg:text-6xl"
          >
            {site.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {site.name} é o espaço de {site.practitioner}, fisioterapeuta
            especializada em Pilates. Em Lages, Santa Catarina, o atendimento
            une técnica clínica e cuidado próximo — com Pilates, massagem
            miofascial e fisioterapia.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappUrl()}
              className={cn(buttonVariants({ size: "lg" }), "h-12 px-6 text-base")}
            >
              Falar no WhatsApp
            </a>
            <a
              href={booking.href}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 px-6 text-base",
              )}
            >
              {booking.label}
            </a>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Telefone{" "}
            <a className="font-medium text-foreground underline-offset-4 hover:underline" href={`tel:${site.phoneTel}`}>
              {site.phoneDisplay}
            </a>
            . Instagram{" "}
            <a
              className="font-medium text-foreground underline-offset-4 hover:underline"
              href={site.instagramUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              @{site.instagramHandle}
            </a>
            .
          </p>
        </div>

        <aside
          aria-label="Marca Ânima Pilates"
          className="overflow-hidden rounded-3xl bg-[#545648] shadow-sm ring-1 ring-foreground/10"
        >
          <BrandLogo variant="color" className="h-auto w-full" />
        </aside>
      </div>
    </section>
  );
}
