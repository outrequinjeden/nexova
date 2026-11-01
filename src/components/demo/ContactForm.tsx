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
import type { DemoContent } from "@/types/demo";

export function ContactForm({ content }: { content: DemoContent["contact"] }) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24">
      <Container className="max-w-2xl">
        <Reveal className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            {content.title}
          </h2>
          <p className="mt-4 text-[var(--demo-surface-foreground)]/70">
            {content.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <Card className="border-current/10">
            <CardContent className="p-6 sm:p-8">
              {submitted ? (
                <div className="py-10 text-center">
                  <p className="text-lg font-medium">Thank you — message sent.</p>
                  <p className="mt-2 text-sm opacity-70">
                    We&apos;ll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid gap-5">
                  {content.fields.map((field) => (
                    <div key={field.name} className="grid gap-2">
                      <label htmlFor={field.name} className="text-sm font-medium">
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

                  <Button
                    type="submit"
                    size="lg"
                    className="mt-2 bg-[var(--demo-primary)] text-[var(--demo-primary-foreground)] hover:opacity-90"
                  >
                    {content.submitLabel}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          <div className="mt-6 grid gap-1 text-center text-sm opacity-70">
            <p>{content.address}</p>
            <p>
              {content.phone} · {content.email}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
