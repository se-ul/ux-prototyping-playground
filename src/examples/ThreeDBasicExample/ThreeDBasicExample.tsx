import { Canvas } from "@react-three/fiber";
import { Scene } from "./Scene";

export function ThreeDBasicExample() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ zoom: 1, position: [5, 5, 5], fov: 90 }}
    >
      <Scene />
    </Canvas>
  );
}
