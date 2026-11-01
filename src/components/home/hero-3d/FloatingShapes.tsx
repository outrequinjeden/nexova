"use client";

import { useMemo, useRef, type RefObject } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { glowVertexShader, glowFragmentShader } from "./shaders";

interface ShapeConfig {
  id: number;
  geometry: "box" | "octahedron";
  position: [number, number, number];
  scale: number;
  rotSpeed: [number, number];
  color: string;
  depthLayer: 0 | 1 | 2;
  driftPhase: number;
}

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const LAYOUTS: [number, number, number][] = [
  [-5.5, 1.6, -3],
  [5.2, -0.8, -5],
  [-3.8, -1.8, -7],
  [4.6, 2.4, -8],
  [0.2, 3.1, -10],
  [-6.2, -0.4, -9],
  [6.5, 0.6, -11],
  [1.8, -2.4, -6],
];

function buildShapes(count: number): ShapeConfig[] {
  return LAYOUTS.slice(0, count).map((position, i) => ({
    id: i,
    geometry: i % 2 === 0 ? "box" : "octahedron",
    position,
    scale: 0.5 + seededRandom(i * 3.7) * 0.7,
    rotSpeed: [0.08 + seededRandom(i * 5.1) * 0.12, 0.06 + seededRandom(i * 7.3) * 0.1],
    color: i % 3 === 0 ? "#ffffff" : "#a78bfa",
    depthLayer: (i % 3) as 0 | 1 | 2,
    driftPhase: seededRandom(i * 2.2) * Math.PI * 2,
  }));
}

const DEPTH_PARALLAX = [0.9, 0.5, 0.22];

type MouseRef = RefObject<{ x: number; y: number }>;

function Shape({ config, mouse }: { config: ShapeConfig; mouse: MouseRef }) {
  const linesRef = useRef<THREE.LineSegments>(null);
  const groupRef = useRef<THREE.Group>(null);

  const geometry = useMemo(() => {
    const base =
      config.geometry === "box"
        ? new THREE.BoxGeometry(1, 1, 1)
        : new THREE.OctahedronGeometry(0.8);
    return new THREE.EdgesGeometry(base);
  }, [config.geometry]);

  const glowUniforms = useMemo(
    () => ({
      uColor: { value: new THREE.Color(config.color) },
      uSize: { value: 6 },
    }),
    [config.color]
  );

  useFrame((state, delta) => {
    if (linesRef.current) {
      linesRef.current.rotation.x += delta * config.rotSpeed[0];
      linesRef.current.rotation.y += delta * config.rotSpeed[1];
    }
    if (groupRef.current) {
      const t = state.clock.elapsedTime;
      const drift = Math.sin(t * 0.25 + config.driftPhase) * 0.3;
      const parallax = DEPTH_PARALLAX[config.depthLayer];
      const targetX = config.position[0] + mouse.current.x * parallax;
      const targetY = config.position[1] + drift + mouse.current.y * parallax * 0.6;
      groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.04;
      groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.04;
    }
  });

  return (
    <group ref={groupRef} position={config.position}>
      <lineSegments ref={linesRef} geometry={geometry} scale={config.scale}>
        <lineBasicMaterial color={config.color} transparent opacity={0.55} />
      </lineSegments>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[new Float32Array([0, 0, 0]), 3]} />
        </bufferGeometry>
        <shaderMaterial
          vertexShader={glowVertexShader}
          fragmentShader={glowFragmentShader}
          uniforms={glowUniforms}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </points>
    </group>
  );
}

export function FloatingShapes({ count, mouse }: { count: number; mouse: MouseRef }) {
  const shapes = useMemo(() => buildShapes(count), [count]);
  return (
    <>
      {shapes.map((config) => (
        <Shape key={config.id} config={config} mouse={mouse} />
      ))}
    </>
  );
}
