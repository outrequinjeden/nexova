import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/layout/Reveal";
import type { TeamMember } from "@/types/demo";

export function TeamGrid({
  title,
  subtitle,
  members,
}: {
  title: string;
  subtitle?: string;
  members: TeamMember[];
}) {
  return (
    <section id="team" className="bg-current/[0.03] py-24">
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

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member, i) => (
            <Reveal key={member.id} delay={i * 0.08} className="text-center">
              <div className="relative mx-auto aspect-square w-40 overflow-hidden rounded-full">
                <Image
                  src={member.photo.src}
                  alt={member.photo.alt}
                  fill
                  sizes="160px"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-[var(--demo-primary)]">{member.role}</p>
              <p className="mt-2 text-sm text-[var(--demo-surface-foreground)]/70">
                {member.bio}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
