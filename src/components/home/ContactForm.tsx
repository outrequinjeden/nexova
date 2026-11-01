"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/layout/Reveal";
import { homeContent } from "@/data/home/content";
import type { Locale } from "@/i18n/routing";

export function ContactForm({ locale }: { locale: Locale }) {
  const { contactForm } = homeContent[locale];
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setSubmitted(true);
    } catch {
      setError(
        locale === "fr"
          ? "Une erreur est survenue. Veuillez réessayer ou nous contacter directement."
          : locale === "de"
            ? "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut."
            : "Something went wrong. Please try again or contact us directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-24">
      <Container className="max-w-2xl">
        <Reveal className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl text-glow-shadow">
            {contactForm.headline}
          </h2>
          <p className="mt-4 text-muted-foreground text-glow-shadow">{contactForm.subheader}</p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <Card>
            <CardContent className="p-6 sm:p-8">
              {submitted ? (
                <div className="py-10 text-center">
                  <p className="text-lg font-medium">{contactForm.confirmationTitle}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {contactForm.confirmationBody}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5">
                  {contactForm.fields.map((field) => (
                    <div key={field.name} className="grid gap-2">
                      <label
                        htmlFor={field.name}
                        className="text-sm font-medium"
                      >
                        {field.label}
                        {field.required && (
                          <span className="text-destructive"> *</span>
                        )}
                      </label>

                      {field.type === "textarea" ? (
                        <Textarea
                          id={field.name}
                          name={field.name}
                          required={field.required}
                          rows={5}
                        />
                      ) : field.type === "select" && field.options ? (
                        <Select name={field.name}>
                          <SelectTrigger id={field.name} className="w-full">
                            <SelectValue placeholder={field.options[0]} />
                          </SelectTrigger>
                          <SelectContent>
                            {field.options.slice(1).map((option) => (
                              <SelectItem key={option} value={option}>
                                {option}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      ) : (
                        <Input
                          id={field.name}
                          name={field.name}
                          type={field.type}
                          required={field.required}
                        />
                      )}
                    </div>
                  ))}

                  {error && (
                    <p className="text-sm text-destructive" role="alert">
                      {error}
                    </p>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="mt-2 bg-violet-500 text-white hover:bg-violet-400"
                  >
                    {isSubmitting ? "..." : contactForm.submitLabel}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}
