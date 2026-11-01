import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/layout/Reveal";
import type { OpeningHoursEntry } from "@/types/demo";
import { Clock, MapPin } from "lucide-react";

export function LocationHours({
  title,
  entries,
  address,
}: {
  title: string;
  entries: OpeningHoursEntry[];
  address?: string;
}) {
  return (
    <section id="hours" className="bg-current/[0.03] py-24">
      <Container className="max-w-2xl">
        <Reveal className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {title}
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-12 grid gap-8 sm:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center gap-2 text-sm font-medium">
              <Clock className="size-4 text-[var(--demo-primary)]" />
              Opening hours
            </div>
            <ul className="space-y-2 text-sm">
              {entries.map((entry) => (
                <li key={entry.day} className="flex justify-between">
                  <span className="opacity-70">{entry.day}</span>
                  <span className="font-medium">{entry.hours}</span>
                </li>
              ))}
            </ul>
          </div>
          {address && (
            <div>
              <div className="mb-4 flex items-center gap-2 text-sm font-medium">
                <MapPin className="size-4 text-[var(--demo-primary)]" />
                Location
              </div>
              <p className="text-sm opacity-70">{address}</p>
            </div>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
