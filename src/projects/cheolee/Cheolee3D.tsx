import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { useState } from "react";

import { GhostModel } from "./GhostModel";

export function Cheolee3D() {
  // input

  // data
  const [isHoveringGhost, setIsHoveringGhost] = useState(false);

  // ui
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ zoom: 1, position: [0, 0, 5], fov: 90 }}
    >
      <ambientLight color="#ffffff" intensity={0.1} />

      {/* 빛 */}
      <motion.group animate={{ x: 2, y: 1, z: 5 }}>
        <directionalLight castShadow color="#00ff00" />
        {/* <mesh color="#00ff00">
          <sphereGeometry />
          <meshStandardMaterial />
        </mesh> */}
      </motion.group>

      {/* 빛 */}
      <motion.group animate={{ x: 5, y: 1, z: 2 }}>
        <spotLight castShadow color="#ff0000" />
        {/* <mesh color="#ff0000">
          <sphereGeometry />
          <meshStandardMaterial />
        </mesh> */}
      </motion.group>

      {/* 평면 */}
      <mesh receiveShadow position={[0, 0, -2]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial />
      </mesh>

      <motion.group
        animate={{
          scale: isHoveringGhost ? 2 : 1,
          rotateY: isHoveringGhost ? -Math.PI / 4 : 0,
        }}
        onPointerEnter={() => {
          setIsHoveringGhost(true);
        }}
        onPointerLeave={() => {
          setIsHoveringGhost(false);
        }}
      >
        <GhostModel scale={0.01} position={[0, 0, 5]} />
      </motion.group>

      <GhostModel scale={0.01} position={[5, 5, 5]} />
      <GhostModel scale={0.01} position={[5, 0, 5]} />

      <OrbitControls />
    </Canvas>
  );
}

{
  /* <Canvas shadows dpr={[1, 2]} camera={{ zoom: 1, position: [5, 5, 5], fov: 90 }}>
  <ambientLight intensity={0.1} />
  <motion.group animate={{ x: 0, y: 0, z: 2 }}>
    <mesh>
      <sphereGeometry args={[0.3, 30]} />
      <meshStandardMaterial />
    </mesh>
    <directionalLight castShadow color="#ffff00" />
  </motion.group>
  <mesh castShadow>
    <boxGeometry args={[2, 2, 2]} />
    <meshStandardMaterial metalness={0.5} color="#ff1000" />
  </mesh>
  <mesh receiveShadow position={[0, 0, -5]}>
    <motion.planeGeometry args={[10, 10]} />
    <meshStandardMaterial attach="material" color="white" />
  </mesh>
  <OrbitControls />
</Canvas>; */
}
