"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

// The source PNG has a black background; mix-blend-mode "screen" makes
// black pixels contribute nothing, so it reads as if it had transparency
// without needing an alpha-matted asset.
export function LogoEmblem({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      animate={reduceMotion ? undefined : { y: [0, -14, 0] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
    >
      <Image
        src="/brand/nexova-logo.png"
        alt="Nexova"
        width={700}
        height={496}
        priority
        className="h-auto w-full [mix-blend-mode:screen] drop-shadow-[0_0_60px_rgba(168,85,247,0.5)]"
      />
    </motion.div>
  );
}
