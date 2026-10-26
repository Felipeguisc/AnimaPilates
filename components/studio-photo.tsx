import Image, { type StaticImageData } from "next/image";

import { cn } from "@/lib/utils";

type StudioPhotoProps = {
  src: StaticImageData;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  imageClassName?: string;
};

export function StudioPhoto({
  src,
  alt,
  sizes,
  priority = false,
  className,
  imageClassName,
}: StudioPhotoProps) {
  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-3xl bg-muted shadow-sm ring-1 ring-foreground/10",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        placeholder="blur"
        className={cn("object-cover", imageClassName)}
      />
    </figure>
  );
}
