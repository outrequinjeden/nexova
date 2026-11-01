import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/layout/Reveal";
import type { DemoContent } from "@/types/demo";

const variantStyles: Record<
  NonNullable<DemoContent["bookingCta"]>["variant"],
  string
> = {
  reservation: "bg-[var(--demo-primary)] text-[var(--demo-primary-foreground)]",
  appointment: "bg-[var(--demo-primary)] text-[var(--demo-primary-foreground)]",
  emergency: "bg-red-600 text-white",
};

export function BookingCTA({
  cta,
}: {
  cta: NonNullable<DemoContent["bookingCta"]>;
}) {
  return (
    <section className={`py-20 ${variantStyles[cta.variant]}`}>
      <Container>
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {cta.title}
            </h2>
            <p className="mt-2 text-sm opacity-80">{cta.subtitle}</p>
          </div>
          <Button
            size="lg"
            variant="secondary"
            className="shrink-0"
            nativeButton={false} render={<a href="#contact" />}
          >
            {cta.cta}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
