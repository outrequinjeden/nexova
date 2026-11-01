import { Container } from "@/components/layout/Container";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { Header } from "@/components/home/Header";
import { Footer } from "@/components/home/Footer";
import { CONTACT_EMAIL } from "@/data/home/content";
import { legalEntity } from "@/data/legal/entity";
import { publisherLabels, type LegalDoc } from "@/data/legal/content";
import type { Locale } from "@/i18n/routing";

function Publisher({ locale }: { locale: Locale }) {
  const labels = publisherLabels[locale];
  const rows: [string, string][] = [
    ["Nexova", ""],
    ...(Object.keys(legalEntity) as (keyof typeof legalEntity)[])
      .filter((k) => legalEntity[k])
      .map((k) => [labels[k], legalEntity[k] as string] as [string, string]),
    [labels.email, CONTACT_EMAIL],
  ];
  return (
    <dl className="grid gap-x-8 gap-y-2 sm:grid-cols-[12rem_1fr]">
      {rows.map(([k, v]) =>
        v ? (
          <div key={k} className="contents">
            <dt className="text-stone">{k}</dt>
            <dd>{k === labels.email ? <a className="underline underline-offset-4" href={`mailto:${v}`}>{v}</a> : v}</dd>
          </div>
        ) : (
          <dd key={k} className="font-display text-2xl sm:col-span-2">{k}</dd>
        ),
      )}
    </dl>
  );
}

export function LegalPage({
  locale,
  doc,
  path,
}: {
  locale: Locale;
  doc: LegalDoc;
  path: "/privacy" | "/legal";
}) {
  return (
    <>
      <Header locale={locale} home={false} path={path} />
      <main className="flex-1 bg-paper pb-24 pt-36 text-ink md:pb-40 md:pt-48">
        <Container className="max-w-3xl">
          <SectionLabel className="text-royal">
            {doc.updatedLabel} — {doc.updated}
          </SectionLabel>
          <h1 className="mt-8 font-display text-[clamp(2.6rem,6vw,4.8rem)] leading-[1.02] tracking-[-0.015em]">
            {doc.title}
          </h1>
          <p className="mt-8 text-lg leading-relaxed text-stone">{doc.intro}</p>

          <div className="mt-16 space-y-12">
            {doc.sections.map((s) => (
              <section key={s.heading}>
                <h2 className="font-display text-3xl leading-tight">{s.heading}</h2>
                <div className="mt-4 space-y-4 leading-relaxed text-ink/80">
                  {s.paragraphs?.map((p) =>
                    p === "__PUBLISHER__" ? <Publisher key={p} locale={locale} /> : <p key={p}>{p}</p>,
                  )}
                  {s.list && (
                    <ul className="list-disc space-y-3 pl-5 marker:text-royal">
                      {s.list.map((li) => (
                        <li key={li}>{li}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </main>
      <Footer locale={locale} home={false} />
    </>
  );
}
