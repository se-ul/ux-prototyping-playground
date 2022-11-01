import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { useState } from "react";
import { DoubleSide, RepeatWrapping } from "three/src/constants";
import { GhostModel } from "./GhostModel";

export function Scene() {
  const texture = useTexture("/textures/space-texture.jpeg");
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.x = 30;
  texture.repeat.y = 30;
  texture.rotation = 0;

  const texture2 = useTexture("/textures/planet-texture-3.jpeg");
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.x = 1;
  texture.repeat.y = 1;
  texture.rotation = 0;
  //input
  //data
  const [isHoveringGhost, setIsHoveringGhost] = useState(false);

  //ui

  return (
    <>
      <ambientLight color="#ffffff" intensity={0.8} />

      <Environment background preset="night" />

      <motion.group animate={{ x: -10, y: 30, z: 30 }}>
        <spotLight castShadow color="#006fff" intensity={1} />
        <mesh>
          {/* <sphereGeometry /> */}
          <meshStandardMaterial />
        </mesh>
      </motion.group>
      <motion.group animate={{ x: 1, y: 3, z: 3 }}>
        <spotLight castShadow color="#cdff00" intensity={1} />
        <mesh>
          {/* <sphereGeometry /> */}
          <meshStandardMaterial />
        </mesh>
      </motion.group>
      {/* <sphereGeometry> 메쉬 안에 모양지오메트리 넣기
        <mesh>
          <meshStandardMaterial color="red" />
        </mesh>
      </sphereGeometry> */}
      <mesh receiveShadow position={[0, 0, -5]}>
        <planeGeometry args={[300, 300]} />
        <meshStandardMaterial map={texture} />
      </mesh>
      <mesh receiveShadow position={[10, 0, 10]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshPhysicalMaterial
          color="#ff0000"
          metalness={0.9}
          roughness={0.05}
          envMapIntensity={0.9}
          clearcoat={1}
          transparent={true}
          opacity={0.5}
          reflectivity={0.2}
          ior={0.9}
          side={DoubleSide}
        />
      </mesh>
      <mesh castShadow position={[0, 0, 10]}>
        <sphereGeometry args={[3, 30]}></sphereGeometry>
        <meshStandardMaterial map={texture2} metalness={0} roughness={1} />
      </mesh>
      <motion.group
        animate={{
          scale: isHoveringGhost ? 1.2 : 1,
          rotateY: isHoveringGhost ? 1 : -1,
          y: isHoveringGhost ? 30 : 0,
        }}
        transition={{ type: "spring" }}
        onPointerEnter={() => {
          setIsHoveringGhost(true);
        }}
        onPointerLeave={() => {
          setIsHoveringGhost(false);
        }}
      >
        <GhostModel scale={0.01} position={[10, 0, -5]} rotateY={60} />

        <GhostModel scale={0.01} position={[30, 0, -5]} rotateY={0} />

        <GhostModel scale={0.01} position={[15, 0, -5]} rotateY={30} />
      </motion.group>
      <OrbitControls />
    </>
  );
}
