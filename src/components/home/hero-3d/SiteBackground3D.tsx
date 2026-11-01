"use client";

import { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { ParticleWave } from "./ParticleWave";
import { FloatingShapes } from "./FloatingShapes";
import { LightBeams } from "./LightBeams";
import { FlowingStreaks } from "./FlowingStreaks";
import { CameraRig } from "./CameraRig";
import { useDeviceTier, type DeviceTier } from "./useDeviceTier";

const TIERS = {
  desktop: {
    waveX: 140,
    waveZ: 70,
    shapes: 8,
    beams: 7,
    streaks: 6,
    dpr: [1, 2] as [number, number],
  },
  mobile: {
    waveX: 60,
    waveZ: 34,
    shapes: 4,
    beams: 3,
    streaks: 3,
    dpr: [1, 1.5] as [number, number],
  },
} satisfies Record<
  "desktop" | "mobile",
  { waveX: number; waveZ: number; shapes: number; beams: number; streaks: number; dpr: [number, number] }
>;

function StaticFallback() {
  // No WebGL, no animation frames — genuinely static for
  // prefers-reduced-motion and as a safe floor on very low-end devices.
  return (
    <div className="fixed inset-0 -z-50 bg-[#0a0a0f]">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 45% at 50% 28%, rgba(139,92,246,0.28), transparent 70%), radial-gradient(55% 55% at 50% 95%, rgba(167,139,250,0.18), transparent 70%)",
        }}
      />
    </div>
  );
}

function Scene({ tier }: { tier: "desktop" | "mobile" }) {
  const mouse = useRef({ x: 0, y: 0 });
  const config = TIERS[tier];

  useEffect(() => {
    function handlePointerMove(event: PointerEvent) {
      mouse.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -((event.clientY / window.innerHeight) * 2 - 1);
    }
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div className="fixed inset-0 -z-50">
      <Canvas
        dpr={config.dpr}
        gl={{ antialias: false, powerPreference: "high-performance", alpha: false }}
        camera={{ position: [0, 1.1, 4], fov: 55, near: 0.1, far: 60 }}
      >
        <color attach="background" args={["#0a0a0f"]} />
        <fog attach="fog" args={[new THREE.Color("#0a0a0f").getHex(), 8, 26]} />
        <CameraRig mouse={mouse} />
        <LightBeams count={config.beams} />
        <FlowingStreaks count={config.streaks} />
        <ParticleWave countX={config.waveX} countZ={config.waveZ} />
        <FloatingShapes count={config.shapes} mouse={mouse} />
      </Canvas>
    </div>
  );
}

function resolvedTier(tier: DeviceTier): "desktop" | "mobile" {
  return tier === "mobile" ? "mobile" : "desktop";
}

/**
 * Mounted once at the page level (not per-section). Fixed to the viewport
 * so it reads as one continuous animated backdrop behind every section as
 * the page scrolls, rather than a hero-only effect.
 */
export function SiteBackground3D() {
  const tier = useDeviceTier();

  // Not yet mounted on the client — render the same dark base the scene
  // starts from, so there's no flash/mismatch once it resolves.
  if (tier === null) {
    return <div className="fixed inset-0 -z-50 bg-[#0a0a0f]" />;
  }

  if (tier === "reduced-motion") {
    return <StaticFallback />;
  }

  return (
    <>
      <Scene tier={resolvedTier(tier)} />
      {/* Light overall darkening only — heavier uniform darkening flattened
          the scene almost entirely. Per-heading text-shadow (see
          text-glow-shadow in globals.css) carries most of the contrast
          work for text sitting directly on the animation. */}
      <div className="pointer-events-none fixed inset-0 -z-40 bg-black/20" />
    </>
  );
}
