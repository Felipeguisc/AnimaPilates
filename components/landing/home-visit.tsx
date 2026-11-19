import { HouseIcon } from "lucide-react";

import { site } from "@/lib/site";

export function HomeVisit() {
  return (
    <section
      id="domicilio"
      aria-labelledby="domicilio-heading"
      className="scroll-mt-20 border-b border-border"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h2
            id="domicilio-heading"
            className="font-heading flex items-center gap-3 text-3xl text-balance sm:text-4xl"
          >
            <HouseIcon aria-hidden className="size-7 shrink-0 text-primary" />
            {site.homeVisitTitle}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {site.homeVisit}
          </p>
        </div>
      </div>
    </section>
  );
}
