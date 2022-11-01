import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { useState } from "react";
import { GhostModel } from "./GhostModel";

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
      <ambientLight color="#ffffff" intensity={0.1} />
      <motion.group animate={{ x: -1, y: 3, z: 3 }}>
        <spotLight castShadow color="#006fff" intensity={0.5} />
        <mesh>
          {/* <sphereGeometry /> */}
          <meshStandardMaterial />
        </mesh>
      </motion.group>
      <motion.group animate={{ x: 1, y: 3, z: 3 }}>
        <spotLight castShadow color="#cdff00" intensity={0.5} />
        <mesh>
          {/* <sphereGeometry /> */}
          <meshStandardMaterial />
        </mesh>
      </motion.group>

      <mesh receiveShadow position={[0, 0, -5]}>
        <planeGeometry args={[3000, 3000]} />
        <meshStandardMaterial />
      </mesh>
      <motion.group
        animate={{
          scale: isHoveringGhost ? 1.2 : 1,
          rotateY: isHoveringGhost ? 1 : -1,
          moveY: isHoveringGhost ? 30 : 0,
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
    </Canvas>
  );
}

// <Canvas
//   shadows
//   dpr={[1, 2]}
//   camera={{ zoom: 1, position: [5, 5, 5], fov: 90 }}
// >
//   <ambientLight intensity={0.1} />
//   <motion.group animate={{ x: 0, y: 0, z: 2 }}>
//     <mesh>
//       <sphereGeometry args={[0.3, 30]} />
//       <meshStandardMaterial />
//     </mesh>
//     <directionalLight castShadow color="#ffff00" />
//   </motion.group>
//   <mesh castShadow>
//     <boxGeometry args={[2, 2, 2]} />
//     <meshStandardMaterial metalness={0.5} color="#ff1000" />
//   </mesh>
//   <mesh receiveShadow position={[0, 0, -5]}>
//     <motion.planeGeometry args={[10, 10]} />
//     <meshStandardMaterial attach="material" color="white" />
//   </mesh>
//   <OrbitControls />
// </Canvas>;
