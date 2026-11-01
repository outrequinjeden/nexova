"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import type { DemoContent, ImageSlot } from "@/types/demo";

export function Hero({
  content,
  image,
}: {
  content: DemoContent["hero"];
  image: ImageSlot;
}) {
  return (
    <section id="home" className="relative flex min-h-[85vh] items-end overflow-hidden">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-32 text-white">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          {content.eyebrow && (
            <span className="mb-4 inline-block rounded-full border border-white/30 px-3 py-1 text-xs font-medium uppercase tracking-widest text-white/80">
              {content.eyebrow}
            </span>
          )}
          <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            {content.title}
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-lg text-white/80">
            {content.subtitle}
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-[var(--demo-primary)] text-[var(--demo-primary-foreground)] hover:opacity-90"
              nativeButton={false} render={<a href="#contact" />}
            >
              {content.ctaPrimary}
            </Button>
            {content.ctaSecondary && (
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
                nativeButton={false} render={<a href="#gallery" />}
              >
                {content.ctaSecondary}
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
