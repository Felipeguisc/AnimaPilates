import { fullAddress, mapsUrl, site, telUrl } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/40">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-heading text-2xl">{site.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">
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
