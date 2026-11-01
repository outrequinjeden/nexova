import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/layout/Reveal";
import type { CertificationItem } from "@/types/demo";

export function CertificationBadges({
  title,
  items,
}: {
  title: string;
  items: CertificationItem[];
}) {
  return (
    <section className="bg-current/[0.03] py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal
              key={item.name}
              delay={i * 0.06}
              className="flex flex-col items-center gap-3 rounded-2xl border border-current/10 px-4 py-6 text-center"
            >
              <span className="text-2xl">{item.icon}</span>
              <p className="font-medium">{item.name}</p>
              <p className="text-xs opacity-60">{item.issuer}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
