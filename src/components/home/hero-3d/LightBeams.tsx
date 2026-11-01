"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { beamVertexShader, beamFragmentShader } from "./shaders";

function Beam({ x, z, phase }: { x: number; z: number; phase: number }) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const uniforms = useMemo(
    () => ({
      uColor: { value: new THREE.Color("#c4b5fd") },
      uOpacity: { value: 0.16 },
    }),
    []
  );

  useFrame((state) => {
    if (materialRef.current) {
      const t = state.clock.elapsedTime;
      materialRef.current.uniforms.uOpacity.value = 0.1 + Math.sin(t * 0.3 + phase) * 0.06 + 0.06;
    }
  });

  return (
    <mesh position={[x, 2, z]}>
      <planeGeometry args={[0.35, 14]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={beamVertexShader}
        fragmentShader={beamFragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export function LightBeams({ count }: { count: number }) {
  const beams = useMemo(() => {
    const spread = 22;
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: (i / (count - 1) - 0.5) * spread,
      z: -12 - (i % 3) * 2,
      phase: i * 0.7,
    }));
  }, [count]);

  return (
    <>
      {beams.map((b) => (
        <Beam key={b.id} x={b.x} z={b.z} phase={b.phase} />
      ))}
    </>
  );
}
