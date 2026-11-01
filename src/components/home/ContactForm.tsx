"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Mail } from "lucide-react";
import { Accent } from "@/components/brand/Accent";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/layout/Reveal";
import { SectionLabel } from "@/components/layout/SectionLabel";
import { homeContent } from "@/data/home/content";
import type { Locale } from "@/i18n/routing";
import type { FormField } from "@/types/home";
import { cn } from "@/lib/utils";

const FULL_WIDTH = new Set(["projectType", "message"]);
const LANGUAGE_BY_LOCALE: Record<Locale, string> = {
  fr: "Français",
  de: "Deutsch",
  en: "English",
};

const control =
  "w-full border-0 border-b border-ink/25 bg-transparent px-0 py-3 text-base text-ink placeholder:text-stone/60 transition-colors focus:border-royal focus:outline-none focus-visible:ring-0";

function Field({ field, locale }: { field: FormField; locale: Locale }) {
  const id = `f-${field.name}`;
  return (
    <div className={cn("flex flex-col", FULL_WIDTH.has(field.name) && "sm:col-span-2")}>
      <label htmlFor={id} className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-stone">
        {field.label}
        {field.required && <span aria-hidden="true" className="text-royal"> *</span>}
      </label>

      {field.type === "textarea" ? (
        <textarea id={id} name={field.name} required={field.required} rows={5} maxLength={4000} className={cn(control, "resize-y")} />
      ) : field.type === "select" ? (
        <select
          id={id}
          name={field.name}
          required={field.required}
          defaultValue={field.name === "preferredLanguage" ? LANGUAGE_BY_LOCALE[locale] : ""}
          className={cn(control, "cursor-pointer")}
        >
          {field.name !== "preferredLanguage" && <option value="" disabled />}
          {field.options?.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={field.name}
          type={field.type}
          required={field.required}
          autoComplete={field.autoComplete}
          placeholder={field.placeholder}
          maxLength={200}
          className={control}
        />
      )}
    </div>
  );
}

export function ContactForm({ locale }: { locale: Locale }) {
  const { contact } = homeContent[locale];
  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error" | "rateLimited" | "invalid"
  >("idle");
  const startedAt = useRef(0);
  useEffect(() => {
    startedAt.current = Date.now();
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    const payload = Object.fromEntries(new FormData(event.currentTarget).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, locale, t: Date.now() - startedAt.current }),
      });
      setStatus(
        res.ok ? "sent" : res.status === 429 ? "rateLimited" : res.status === 400 ? "invalid" : "error",
      );
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="bg-paper py-24 text-ink md:py-40">
      <Container className="grid gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <SectionLabel className="text-royal">{contact.eyebrow}</SectionLabel>
          <h2 className="mt-10 font-display text-[clamp(2.5rem,5vw,4.6rem)] leading-[1.02] tracking-[-0.015em] text-balance">
            <Accent text={contact.headline} className="italic text-royal" />
          </h2>
          <p className="mt-8 max-w-md text-lg leading-relaxed text-stone">{contact.subtitle}</p>
          <p className="mt-6 border-l-2 border-royal pl-4 text-sm font-medium">{contact.reviewNote}</p>

          <div className="mt-12 border-t border-ink/15 pt-6">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.14em] text-stone">
              {contact.emailLabel}
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="mt-3 inline-flex items-center gap-3 font-display text-2xl underline decoration-royal/40 underline-offset-8 transition-colors hover:text-royal sm:text-3xl"
            >
              <Mail aria-hidden="true" className="size-5 text-royal" strokeWidth={1.5} />
              {contact.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
          {status === "sent" ? (
            <div role="status" className="border border-ink/15 bg-white p-10 md:p-14">
              <p className="font-display text-3xl leading-tight md:text-4xl">
                {contact.confirmationTitle}
              </p>
              <p className="mt-5 leading-relaxed text-stone">{contact.confirmationBody}</p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
              {contact.fields.map((f) => (
                <Field key={f.name} field={f} locale={locale} />
              ))}

              {/* Honeypot: invisible to people, tempting to bots. */}
              <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
                <label>
                  Company site
                  <input type="text" name="hp" tabIndex={-1} autoComplete="off" />
                </label>
              </div>

              <div className="sm:col-span-2">
                {(status === "error" || status === "rateLimited" || status === "invalid") && (
                  <p role="alert" className="mb-5 border-l-2 border-red-600 pl-4 text-sm text-red-700">
                    {status === "rateLimited" ? contact.rateLimited : status === "invalid" ? contact.invalid : contact.error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex min-h-12 w-full items-center justify-center bg-ink px-8 text-[0.95rem] font-medium text-white transition-colors hover:bg-royal focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-royal disabled:opacity-60 sm:w-auto"
                >
                  {status === "sending" ? contact.sending : contact.submit}
                </button>
                <p className="mt-4 text-xs text-stone">{contact.privacyNote}</p>
              </div>
            </form>
          )}
        </Reveal>
      </Container>
    </section>
  );
}
