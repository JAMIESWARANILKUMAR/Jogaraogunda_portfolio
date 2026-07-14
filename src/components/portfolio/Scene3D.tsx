import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles, Environment } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh, Group } from "three";

function Knot() {
  const ref = useRef<Mesh>(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * 0.15;
    ref.current.rotation.y += delta * 0.2;
  });
  return (
    <mesh ref={ref} position={[0, 0, 0]} scale={1.35}>
      <torusKnotGeometry args={[1, 0.32, 220, 32]} />
      <MeshDistortMaterial
        color="#e0b060"
        emissive="#8a5a1a"
        emissiveIntensity={0.35}
        metalness={0.85}
        roughness={0.18}
        distort={0.28}
        speed={1.4}
      />
    </mesh>
  );
}

function Orbits() {
  const g = useRef<Group>(null);
  useFrame((_, d) => {
    if (g.current) g.current.rotation.z += d * 0.06;
  });
  return (
    <group ref={g}>
      {[2.4, 3.0, 3.7].map((r, i) => (
        <mesh key={i} rotation={[Math.PI / 2 + i * 0.2, i * 0.4, 0]}>
          <torusGeometry args={[r, 0.006, 8, 128]} />
          <meshBasicMaterial color="#c99a4a" transparent opacity={0.35} />
        </mesh>
      ))}
    </group>
  );
}

export function Scene3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[4, 5, 3]} intensity={1.2} color="#ffe6b0" />
          <pointLight position={[-4, -3, -2]} intensity={0.6} color="#5a7cff" />
          <Float speed={1.2} rotationIntensity={0.6} floatIntensity={0.8}>
            <Knot />
          </Float>
          <Orbits />
          <Sparkles count={80} scale={[8, 6, 4]} size={2.2} speed={0.3} color="#f4d38a" />
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
}