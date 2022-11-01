import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { useState } from "react";
import { RepeatWrapping } from "three";
import { GhostModel } from "./GhostModel";

export function Scene() {
  const texture = useTexture("/textures/gradient-textures.jpeg");
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.x = 1;
  texture.repeat.y = 1;
  const [isHoveringGhost, setIsHoveringGhost] = useState(false);

  return (
    <>
      <ambientLight color="#ffffff" intensity={0.1} />
      <Environment background files="/textures/studio021.hdr" />
      <mesh castShadow position={[0, 0, 0]}>
        <sphereGeometry args={[5, 100]} />
        <meshPhysicalMaterial
          color="#ffffff"
          metalness={0.8}
          roughness={0.05}
          envMapIntensity={0.8}
          clearcoat={1}
          transparent={true}
          opacity={0.5}
          reflectivity={0.2}
          ior={0.9}
        />
      </mesh>

      <motion.group animate={{ x: 0, y: 10, z: 10 }}>
        <spotLight castShadow color="#ffffff" />
        <mesh>
          <sphereGeometry />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
      </motion.group>

      <mesh receiveShadow position={[0, 0, -2]}>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial map={texture} />
      </mesh>

      <motion.group
        animate={{ scale: isHoveringGhost ? 1.2 : 1 }}
        onPointerEnter={() => {
          setIsHoveringGhost(true);
        }}
        onPointerLeave={() => {
          setIsHoveringGhost(false);
        }}
      >
        <GhostModel scale={0.01} position={[0, 0, 5]} />
        <GhostModel scale={0.01} position={[0, 0, 10]} />
        <GhostModel scale={0.01} position={[0, 0, 15]} />
        <GhostModel scale={0.01} position={[0, 0, 20]} />
        <GhostModel scale={0.01} position={[0, 0, 25]} />
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
