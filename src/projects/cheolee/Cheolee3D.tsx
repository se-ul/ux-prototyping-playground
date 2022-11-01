import { Canvas } from "@react-three/fiber";

import { Scene } from "./Scene";

export function Cheolee3D() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ zoom: 1, position: [0, 0, 5], fov: 90 }}
    >
      <Scene />
    </Canvas>
  );
}
