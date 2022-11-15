import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { useState } from "react";
import { DoubleSide, RepeatWrapping } from "three/src/constants";
import { GhostModel } from "./GhostModel";

export function Scene() {
  const texture = useTexture("/textures/space-texture.jpeg");
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.x = 10;
  texture.repeat.y = 10;
  texture.rotation = 0;

  const texture2 = useTexture("/textures/planet-texture-3.jpeg");
  texture2.wrapS = RepeatWrapping;
  texture2.wrapT = RepeatWrapping;
  texture2.repeat.x = 1;
  texture2.repeat.y = 1;
  texture2.rotation = 0;

  const texture3 = useTexture("/textures/planet-texture-5.jpeg");
  texture3.wrapS = RepeatWrapping;
  texture3.wrapT = RepeatWrapping;
  texture3.repeat.x = 1;
  texture3.repeat.y = 1;
  texture3.rotation = 0;

  //input
  //data
  const [isHoveringGhost, setIsHoveringGhost] = useState(false);

  //ui

  return (
    <>
      {/* <ambientLight color="#ffffff" intensity={0.5} /> */}
      {/* <hemisphereLight color="red" groundColor="blue" intensity={1} /> */}
      <Environment background files="/hdrs/studio021.hdr" />

      <motion.group animate={{ x: -100, y: 300, z: 30 }}>
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
      <mesh receiveShadow position={[0, 0, 10]}>
        <sphereGeometry args={[3, 30]} />
        <meshPhysicalMaterial
          color="#blue"
          metalness={0.9}
          roughness={0.05}
          envMapIntensity={0.9}
          clearcoat={0}
          transparent={true}
          opacity={0.2}
          reflectivity={0.2}
          ior={0.9}
          side={DoubleSide}
        />
      </mesh>
      <mesh castShadow position={[0, 0, 10]}>
        <sphereGeometry args={[3, 30]}></sphereGeometry>
        <meshStandardMaterial map={texture2} metalness={0} roughness={1} />
      </mesh>

      <mesh castShadow position={[0, 0, 50]}>
        <sphereGeometry args={[5, 30]}></sphereGeometry>
        <meshStandardMaterial map={texture3} metalness={0} roughness={1} />
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
