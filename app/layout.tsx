import type { Metadata } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";

import { JsonLd } from "@/components/json-ld";
import { site } from "@/lib/site";

import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "AnimaPilates | Fisioterapia e Pilates em Lages, SC",
    template: "%s | AnimaPilates",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Pilates Lages",
    "fisioterapia Lages",
    "Anielle Pereira",
    "AnimaPilates",
    "massagem miofascial Lages",
    "Pilates Santa Catarina",
  ],
  authors: [{ name: site.practitioner }],
  creator: site.practitioner,
  publisher: site.name,
  formatDetection: {
    telephone: true,
    email: false,
    address: true,
  },
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: site.name,
    title: "AnimaPilates | Fisioterapia e Pilates em Lages, SC",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "AnimaPilates | Fisioterapia e Pilates em Lages, SC",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "health",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${sourceSans.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
