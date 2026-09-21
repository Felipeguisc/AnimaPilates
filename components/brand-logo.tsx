import Image from "next/image";

import { cn } from "@/lib/utils";

const alt = "Ânima Pilates by Anielle Pereira";

type BrandLogoProps = {
  className?: string;
  variant?: "horizontal" | "color" | "stacked";
  priority?: boolean;
};

const variants = {
  horizontal: {
    src: "/brand/logo-horizontal.png",
    width: 900,
    height: 302,
  },
  color: {
    src: "/brand/logo-color.png",
    width: 1112,
    height: 1112,
  },
  stacked: {
    src: "/brand/logo-stacked.png",
    width: 1080,
    height: 1080,
  },
} as const;

export function BrandLogo({
  className,
  variant = "horizontal",
  priority = false,
}: BrandLogoProps) {
  const asset = variants[variant];
  return (
    <Image
      src={asset.src}
      alt={alt}
      width={asset.width}
      height={asset.height}
      priority={priority}
      className={cn("h-auto w-auto", className)}
    />
  );
}
