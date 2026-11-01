"use client";

import { useFrame, useThree } from "@react-three/fiber";
import type { RefObject } from "react";

export function CameraRig({ mouse }: { mouse: RefObject<{ x: number; y: number }> }) {
  const { camera } = useThree();

  useFrame(() => {
    const targetX = mouse.current.x * 0.6;
    const targetY = 1.1 + mouse.current.y * 0.35;
    // react-hooks/immutability doesn't know about R3F's imperative model:
    // mutating the live three.js camera inside useFrame is the documented,
    // intended way to drive it every frame — not a React state violation.
    // eslint-disable-next-line react-hooks/immutability
    camera.position.x += (targetX - camera.position.x) * 0.03;
    camera.position.y += (targetY - camera.position.y) * 0.03;
    camera.lookAt(0, -0.6, -6);
  });

  return null;
}
