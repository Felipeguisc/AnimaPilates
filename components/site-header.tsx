"use client";

import { useState } from "react";
import { MenuIcon } from "lucide-react";

import { BrandLogo } from "@/components/brand-logo";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { booking, nav, whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-[4.5rem] w-full max-w-6xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6">
        <a href="#conteudo" className="flex shrink-0 items-center">
          <BrandLogo
            priority
            className="h-12 w-auto max-w-[220px] sm:h-14 sm:max-w-[260px]"
          />
        </a>

        <nav
          aria-label="Seções da página"
          className="hidden items-center gap-7 md:flex"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href={booking.enabled ? booking.href : whatsappUrl()}
            className={cn(buttonVariants({ size: "lg" }), "h-10 px-4")}
          >
            {booking.label}
          </a>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label="Abrir menu"
              />
            }
          >
            <MenuIcon />
          </SheetTrigger>
          <SheetContent side="right" className="px-5 py-6">
            <SheetHeader className="px-0">
              <SheetTitle className="text-left">
                <BrandLogo className="h-12 w-auto max-w-[220px]" />
              </SheetTitle>
            </SheetHeader>
            <nav aria-label="Menu móvel" className="mt-4 flex flex-col gap-1">
              {nav.map((item) => (
                <SheetClose
                  key={item.href}
                  render={
                    <a
                      href={item.href}
                      className="rounded-lg px-2 py-3 text-base text-foreground hover:bg-muted"
                    />
                  }
                >
                  {item.label}
                </SheetClose>
              ))}
            </nav>
            <a
              href={whatsappUrl()}
              className={cn(buttonVariants({ size: "lg" }), "mt-4 h-11 w-full")}
              onClick={() => setOpen(false)}
            >
              {booking.label}
            </a>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
