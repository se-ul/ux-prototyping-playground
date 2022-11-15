import { Environment, OrbitControls, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { useRef, useState } from "react";
import { DoubleSide, RepeatWrapping } from "three";
import { GhostModel } from "./GhostModel";

export function Scene() {
  //input

  //data
  const [isHoveringGhost, setIsHoveringGhost] = useState(false);

  //ui
  const texture = useTexture("/textures/galaxy-pattern.jpeg");
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.x = 1.5;
  texture.repeat.y = 1.5;
  texture.offset.x = 0.5;
  texture.rotation = 45;

  const sphereRef = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    if (sphereRef.current === undefined) {
      return;
    }

    sphereRef.current.rotation.y += (Math.PI / 4) * delta;
  });

  return (
    <>
      <ambientLight color="#ffffff" intensity={0.1} />
      <hemisphereLight color="red" groundColor="blue"></hemisphereLight>

      <Environment background files="/hdrs/studio021.hdr" />

      <mesh ref={sphereRef} castShadow position={[-5, 0, 5]}>
        <sphereGeometry args={[1.5, 30]}></sphereGeometry>
        <meshPhysicalMaterial
          map={texture}
          color="#ffffff"
          metalness={0.5}
          roughness={0.5}
          envMapIntensity={0.9}
          clearcoat={0.8}
          transparent={true}
          opacity={0.6}
          reflectivity={0.2}
          ior={0.9}
          side={DoubleSide}
        />
      </mesh>

      {/*빛*/}
      <motion.group animate={{ x: 2, y: 3, z: 5 }}>
        <directionalLight castShadow color="#00ff00" />
        <mesh>
          <sphereGeometry />
          <meshStandardMaterial />
        </mesh>
      </motion.group>

      {/*빛*/}
      <motion.group animate={{ x: 4, y: 8, z: 7 }}>
        <spotLight castShadow color="#ff0000" />
        <mesh>
          <sphereGeometry />
          <meshStandardMaterial />
        </mesh>
      </motion.group>

      {/*빛*/}
      <motion.group animate={{ x: -10, y: 8, z: 7 }}>
        <spotLight castShadow color="#0000ff" />
        <mesh>
          <sphereGeometry />
          <meshStandardMaterial />
        </mesh>
      </motion.group>

      {/*벽*/}
      {/* <mesh receiveShadow position={[0, 0, -2]}>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial map={texture} />
      </mesh> */}

      <motion.group
        animate={{
          scale: isHoveringGhost ? 2 : 1,
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

      <OrbitControls />
    </>
  );
}

{
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
}
