"use client";

import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/layout/Reveal";
import type { BeforeAfterEntry } from "@/types/demo";

export function BeforeAfter({
  title,
  subtitle,
  entries,
}: {
  title: string;
  subtitle?: string;
  entries: BeforeAfterEntry[];
}) {
  return (
    <section className="py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-[var(--demo-surface-foreground)]/70">
              {subtitle}
            </p>
          )}
        </Reveal>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {entries.map((entry, i) => (
            <Reveal key={entry.label} delay={i * 0.08}>
              <div className="grid grid-cols-2 gap-1 overflow-hidden rounded-2xl">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={entry.before.src}
                    alt={entry.before.alt}
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                  <span className="absolute left-2 top-2 rounded-full bg-black/70 px-2 py-0.5 text-xs font-medium text-white">
                    Before
                  </span>
                </div>
                <div className="relative aspect-[4/3]">
                  <Image
                    src={entry.after.src}
                    alt={entry.after.alt}
                    fill
                    sizes="25vw"
                    className="object-cover"
                  />
                  <span className="absolute right-2 top-2 rounded-full bg-[var(--demo-primary)] px-2 py-0.5 text-xs font-medium text-[var(--demo-primary-foreground)]">
                    After
                  </span>
                </div>
              </div>
              <p className="mt-3 text-center text-sm font-medium">
                {entry.label}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
