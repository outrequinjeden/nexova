"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { streakVertexShader, streakFragmentShader } from "./shaders";

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

interface StreakConfig {
  id: number;
  curve: THREE.CatmullRomCurve3;
  radius: number;
  color: string;
  speed: number;
}

function buildStreaks(count: number): StreakConfig[] {
  return Array.from({ length: count }).map((_, i) => {
    const yOffset = -3 + seededRandom(i * 5.4) * 8;
    const zOffset = -6 - seededRandom(i * 8.2) * 10;
    const bow = 2 + seededRandom(i * 3.1) * 3;
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-16, yOffset - bow * 0.3, zOffset + 2),
      new THREE.Vector3(-7, yOffset + bow * 0.4, zOffset),
      new THREE.Vector3(2, yOffset + bow, zOffset - 2),
      new THREE.Vector3(11, yOffset + bow * 0.5, zOffset - 4),
      new THREE.Vector3(19, yOffset - bow * 0.2, zOffset - 7),
    ]);
    return {
      id: i,
      curve,
      radius: 0.02 + seededRandom(i * 6.6) * 0.025,
      color: i % 3 === 0 ? "#f5f3ff" : "#a78bfa",
      speed: 0.08 + seededRandom(i * 2.9) * 0.1,
    };
  });
}

function Streak({ config }: { config: StreakConfig }) {
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  const geometry = useMemo(
    () => new THREE.TubeGeometry(config.curve, 80, config.radius, 8, false),
    [config.curve, config.radius]
  );
  const uniforms = useMemo(
    () => ({
      uColor: { value: new THREE.Color(config.color) },
      uTime: { value: 0 },
      uSpeed: { value: config.speed },
    }),
    [config.color, config.speed]
  );

  useFrame((_, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value += delta;
    }
  });

  return (
    <mesh geometry={geometry}>
      <shaderMaterial
        ref={materialRef}
        vertexShader={streakVertexShader}
        fragmentShader={streakFragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

export function FlowingStreaks({ count }: { count: number }) {
  const streaks = useMemo(() => buildStreaks(count), [count]);
  return (
    <>
      {streaks.map((config) => (
        <Streak key={config.id} config={config} />
      ))}
    </>
  );
}
