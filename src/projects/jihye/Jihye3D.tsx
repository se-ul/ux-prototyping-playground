import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import { Scene } from "./Scene";

export function Jihye3D() {
  //input
  //data
  const [isHoveringGhost, setIsHoveringGhost] = useState(false);

  //ui

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
