import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/layout/Reveal";
import type { ImageSlot } from "@/types/demo";

export function ChefSection({
  title,
  name,
  bio,
  photo,
}: {
  title: string;
  name: string;
  bio: string;
  photo: ImageSlot;
}) {
  return (
    <section id="chef" className="py-24">
      <Container className="grid items-center gap-10 md:grid-cols-2">
        <Reveal className="relative aspect-[4/5] overflow-hidden rounded-3xl">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 768px) 40vw, 90vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <span className="text-sm font-medium uppercase tracking-widest text-[var(--demo-primary)]">
            {title}
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight">{name}</h2>
          <p className="mt-4 text-[var(--demo-surface-foreground)]/70">{bio}</p>
        </Reveal>
      </Container>
    </section>
  );
}
