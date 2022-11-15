import { Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";

export function ThreeDPhysicsExample() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ zoom: 1, position: [5, 5, 5], fov: 90 }}
    >
      <Physics gravity={[0, 0, -9.81]}>
        <Scene />
      </Physics>
    </Canvas>
  );
}
