import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/layout/Reveal";
import type { Testimonial } from "@/types/demo";
import { Star } from "lucide-react";

export function Testimonials({
  title,
  items,
}: {
  title: string;
  items: Testimonial[];
}) {
  return (
    <section id="reviews" className="bg-current/[0.03] py-24">
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((testimonial, i) => (
            <Reveal key={testimonial.author} delay={i * 0.06}>
              <Card className="h-full border-current/10">
                <CardContent className="p-6">
                  <div className="flex gap-0.5 text-[var(--demo-primary)]">
                    {Array.from({ length: testimonial.rating }).map((_, idx) => (
                      <Star key={idx} className="size-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-sm text-[var(--demo-surface-foreground)]/80">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <Avatar className="size-9">
                      {testimonial.avatar && (
                        <AvatarImage
                          src={testimonial.avatar.src}
                          alt={testimonial.avatar.alt}
                        />
                      )}
                      <AvatarFallback>
                        {testimonial.author.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{testimonial.author}</p>
                      <p className="text-xs opacity-60">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
