import { BrandLogo } from "@/components/brand-logo";
import { fullAddress, mapsUrl, site, telUrl } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <a href="#conteudo" className="inline-block">
            <BrandLogo className="h-14 w-auto max-w-[240px]" />
          </a>
          <p className="mt-3 text-sm text-muted-foreground">
            {site.practitioner}
          </p>
          <a
            className="mt-1 block text-sm text-muted-foreground hover:underline"
            href={mapsUrl()}
            rel="noopener noreferrer"
            target="_blank"
          >
            {fullAddress()}
          </a>
        </div>
        <nav aria-label="Contato no rodapé" className="flex flex-col gap-2 text-sm">
          <a className="hover:underline" href={telUrl()}>
            {site.phoneDisplay}
          </a>
          <a
            className="hover:underline"
            href={site.instagramUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Instagram @{site.instagramHandle}
          </a>
        </nav>
      </div>
      <p className="border-t border-border/70 px-4 py-4 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {site.name}. Fisioterapia e Pilates em{" "}
        {site.city}, {site.region}.
      </p>
    </footer>
  );
}
