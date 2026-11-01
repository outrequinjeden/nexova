export const waveVertexShader = /* glsl */ `
  uniform float uTime;
  attribute float aRandom;
  varying float vHeight;

  void main() {
    vec3 pos = position;
    float wave =
      sin(pos.x * 0.15 + uTime * 0.6) * 0.6 +
      sin(pos.z * 0.22 - uTime * 0.45) * 0.5 +
      sin((pos.x + pos.z) * 0.08 + uTime * 0.3) * 0.35;
    pos.y += wave;
    vHeight = wave;

    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_PointSize = (0.35 + aRandom * 0.45) * (60.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

export const waveFragmentShader = /* glsl */ `
  uniform vec3 uColorLow;
  uniform vec3 uColorHigh;
  varying float vHeight;

  void main() {
    vec2 uv = gl_PointCoord - vec2(0.5);
    float d = length(uv);
    if (d > 0.5) discard;
    float alpha = smoothstep(0.5, 0.0, d);
    float t = clamp(vHeight * 0.7 + 0.5, 0.0, 1.0);
    vec3 color = mix(uColorLow, uColorHigh, t);
    gl_FragColor = vec4(color, alpha * 0.85);
  }
`;

export const beamVertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const beamFragmentShader = /* glsl */ `
  uniform vec3 uColor;
  uniform float uOpacity;
  varying vec2 vUv;
  void main() {
    float edge = smoothstep(0.0, 0.5, vUv.x) * smoothstep(1.0, 0.5, vUv.x);
    float vertical = smoothstep(0.0, 0.25, vUv.y) * smoothstep(1.0, 0.7, vUv.y);
    gl_FragColor = vec4(uColor, edge * vertical * uOpacity);
  }
`;

export const glowVertexShader = /* glsl */ `
  uniform float uSize;
  void main() {
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_PointSize = uSize * (80.0 / -mvPosition.z);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

export const glowFragmentShader = /* glsl */ `
  uniform vec3 uColor;
  void main() {
    vec2 uv = gl_PointCoord - vec2(0.5);
    float d = length(uv);
    if (d > 0.5) discard;
    float alpha = smoothstep(0.5, 0.0, d);
    gl_FragColor = vec4(uColor, alpha);
  }
`;

export const streakVertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

export const streakFragmentShader = /* glsl */ `
  uniform vec3 uColor;
  uniform float uTime;
  uniform float uSpeed;
  varying vec2 vUv;

  void main() {
    // TubeGeometry: vUv.x runs along the path length, vUv.y around it.
    float d = abs(fract(vUv.x - uTime * uSpeed + 0.5) - 0.5);
    float pulse = smoothstep(0.22, 0.0, d);
    float alpha = 0.08 + pulse * 0.8;
    gl_FragColor = vec4(uColor, alpha);
  }
`;
