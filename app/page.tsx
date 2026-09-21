import { About } from "@/components/landing/about";
import { Contact } from "@/components/landing/contact";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Proof } from "@/components/landing/proof";
import { Services } from "@/components/landing/services";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:m-3 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
      >
        Ir para o conteúdo
      </a>
      <SiteHeader />
      <main id="conteudo">
        <Hero />
        <Services />
        <About />
        <HowItWorks />
        <Proof />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
