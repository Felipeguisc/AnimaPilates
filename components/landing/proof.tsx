import { buttonVariants } from "@/components/ui/button";
import { site, telUrl, whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

export function Proof() {
  return (
    <section
      id="depoimentos"
      aria-labelledby="depoimentos-heading"
      className="scroll-mt-20 border-b border-border bg-secondary/35"
    >
      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          Depoimentos
        </p>
        <h2
          id="depoimentos-heading"
          className="font-heading mt-2 max-w-xl text-3xl text-balance sm:text-4xl"
        >
          Os relatos dos alunos ainda estão a caminho
        </h2>
        <div className="mt-8 max-w-2xl rounded-2xl border border-dashed border-primary/30 bg-card p-6 sm:p-8">
          <p className="text-base leading-relaxed text-muted-foreground">
            Ainda não publicamos depoimentos neste site. Quando vierem, serão
            de pessoas reais, com autorização e nome — sem frases inventadas
            para preencher a página.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Enquanto isso, a melhor referência é conversar com a{" "}
            {site.practitioner}. Ela responde pessoalmente pelo WhatsApp, pelo
            telefone {site.phoneDisplay} ou pelo Instagram @{site.instagramHandle}.
          </p>
          <a
            href={whatsappUrl(
              "Olá, Anielle! Gostaria de conhecer o AnimaPilates e tirar dúvidas antes de agendar.",
            )}
            className={cn(buttonVariants({ size: "lg" }), "mt-6 h-11 px-5")}
          >
            Conversar agora
          </a>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">
          Prefere ligar?{" "}
          <a className="underline-offset-4 hover:underline" href={telUrl()}>
            {site.phoneDisplay}
          </a>
        </p>
      </div>
    </section>
  );
}
