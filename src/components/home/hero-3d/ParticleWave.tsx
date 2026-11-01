"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { waveVertexShader, waveFragmentShader } from "./shaders";

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

export function ParticleWave({ countX, countZ }: { countX: number; countZ: number }) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const { positions, randoms } = useMemo(() => {
    const width = 46;
    const depth = 30;
    const positions = new Float32Array(countX * countZ * 3);
    const randoms = new Float32Array(countX * countZ);
    let i = 0;
    for (let xi = 0; xi < countX; xi++) {
      for (let zi = 0; zi < countZ; zi++) {
        const x = (xi / (countX - 1) - 0.5) * width;
        const z = -(zi / (countZ - 1)) * depth;
        positions[i * 3] = x;
        positions[i * 3 + 1] = 0;
        positions[i * 3 + 2] = z;
        randoms[i] = seededRandom(i * 12.9898);
        i++;
      }
    }
    return { positions, randoms };
  }, [countX, countZ]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uColorLow: { value: new THREE.Color("#4c1d95") },
      uColorHigh: { value: new THREE.Color("#c4b5fd") },
    }),
    []
  );

  useFrame((_, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta;
    }
  });

  return (
    <group position={[0, -4.4, -6]} rotation={[-0.32, 0, 0]}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-aRandom" args={[randoms, 1]} />
        </bufferGeometry>
        <shaderMaterial
          ref={materialRef}
          vertexShader={waveVertexShader}
          fragmentShader={waveFragmentShader}
          uniforms={uniforms}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}
