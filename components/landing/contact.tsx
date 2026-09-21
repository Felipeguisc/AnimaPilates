import { AtSignIcon, MapPinIcon, PhoneIcon } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { booking, mapsUrl, site, telUrl, whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Contact() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-heading"
      className="scroll-mt-20"
    >
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <div>
          <p className="text-sm font-medium tracking-wide text-primary uppercase">
            Contato
          </p>
          <h2
            id="contato-heading"
            className="font-heading mt-2 text-3xl text-balance sm:text-4xl"
          >
            {booking.label} com a Anielle
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            {booking.note} Use o WhatsApp para uma conversa rápida, o telefone
            se preferir voz, ou o Instagram para acompanhar o estúdio.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl()}
              className={cn(buttonVariants({ size: "lg" }), "h-12 px-6 text-base")}
            >
              WhatsApp
            </a>
            <a
              href={telUrl()}
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-12 px-6 text-base",
              )}
            >
              Ligar {site.phoneDisplay}
            </a>
          </div>
        </div>

        <address className="not-italic rounded-3xl border border-border bg-card p-7">
          <ul className="space-y-5 text-sm">
            <li className="flex gap-3">
              <PhoneIcon className="mt-0.5 size-4 shrink-0 text-primary" />
              <div>
                <p className="font-medium">Telefone</p>
                <a className="text-muted-foreground hover:underline" href={telUrl()}>
                  {site.phoneDisplay}
                </a>
              </div>
            </li>
            <li className="flex gap-3">
              <AtSignIcon className="mt-0.5 size-4 shrink-0 text-primary" />
              <div>
                <p className="font-medium">Instagram</p>
                <a
                  className="text-muted-foreground hover:underline"
                  href={site.instagramUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  @{site.instagramHandle}
                </a>
              </div>
            </li>
            <li className="flex gap-3">
              <MapPinIcon className="mt-0.5 size-4 shrink-0 text-primary" />
              <div>
                <p className="font-medium">Endereço</p>
                <a
                  className="text-muted-foreground hover:underline"
                  href={mapsUrl()}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {site.street}
                  <br />
                  {site.city}, {site.region}
                </a>
              </div>
            </li>
          </ul>
        </address>
      </div>
    </section>
  );
}
