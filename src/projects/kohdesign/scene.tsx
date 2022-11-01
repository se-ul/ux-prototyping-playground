import { OrbitControls, useTexture } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { useState } from "react";
import { RepeatWrapping } from "three";
import { GhostModel } from "./GhostModel";

export function Scene() {
  const texture = useTexture("/textures/gradient-textures.jpeg");
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.x = 1.5;
  texture.repeat.y = 1.5;
  const [isHoveringGhost, setIsHoveringGhost] = useState(false);

  return (
    <>
      <ambientLight color="#ffffff" intensity={0.1} />
      <motion.group animate={{ x: 0, y: 10, z: 10 }}>
        <spotLight castShadow color="#ffffff" />
        <mesh>
          <sphereGeometry />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      </motion.group>

      <mesh receiveShadow position={[0, 0, -2]}>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial map={texture} />
      </mesh>

      <motion.group
        animate={{ scale: isHoveringGhost ? 2 : 1 }}
        onPointerEnter={() => {
          setIsHoveringGhost(true);
        }}
        onPointerLeave={() => {
          setIsHoveringGhost(false);
        }}
      >
        <GhostModel scale={0.01} position={[0, 0, 5]} />
      </motion.group>

      <OrbitControls />
    </>
  );
}

/* <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ zoom: 1, position: [5, 5, 5], fov: 90 }}
    >
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
    </Canvas> */
