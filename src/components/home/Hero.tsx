"use client";

import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { homeContent } from "@/data/home/content";
import type { Locale } from "@/i18n/routing";
import { LogoEmblem } from "./LogoEmblem";

export function Hero({ locale }: { locale: Locale }) {
  const { hero } = homeContent[locale];

  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] items-center overflow-hidden py-24 text-white md:py-32"
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto max-w-3xl text-center"
        >
          <LogoEmblem className="mx-auto mb-6 w-40 md:w-48" />
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-glow-shadow md:text-6xl">
            {hero.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-white/70 text-glow-shadow">
            {hero.body}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-violet-500 text-white hover:bg-violet-400"
              nativeButton={false}
              render={<a href="#contact" />}
            >
              {hero.ctaPrimary}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:text-white"
              nativeButton={false}
              render={<a href="#demos" />}
            >
              {hero.ctaSecondary}
            </Button>
          </div>

          <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {hero.bullets.map((bullet, i) => (
              <motion.div
                key={bullet.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                className="flex flex-col items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-3 py-4 text-sm backdrop-blur-sm"
              >
                <span className="text-xl">{bullet.icon}</span>
                <span className="text-white/70">{bullet.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
