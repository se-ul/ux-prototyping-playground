import { OrbitControls } from "@react-three/drei";
import { Canvas, GroupProps } from "@react-three/fiber";
import { motion } from "framer-motion-3d";
import { useRef, useState } from "react";
import { GhostModel } from "./GhostModel";

export function Kangsr3D() {
  const [isHoveringGhost, setIsHoveringGhost] = useState(false);
  const ghostRef = useRef<GroupProps>(null);

  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ zoom: 1, position: [0, 0, 5], fov: 10 }}
    >
      <ambientLight color="white" intensity={0.02} />
      <ambientLight color="blue" intensity={0.1} />
      <motion.group animate={{ x: 0, y: 3, z: 5 }}>
        <directionalLight castShadow color="white" />
        <mesh>
          <sphereGeometry />
          <meshStandardMaterial />
        </mesh>
      </motion.group>

      {/* <mesh castShadow>
        <boxGeometry></boxGeometry>
        <meshStandardMaterial color="#ffffff" metalness={0.5} />
      </mesh> */}

      <mesh receiveShadow position={[0, 0, -20]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="white" />
      </mesh>

      <motion.group
        animate={{
          scale: isHoveringGhost ? 2 : 1,
          rotateX: isHoveringGhost ? -Math.PI / 4 : 0,
        }}
        onPointerEnter={() => {
          setIsHoveringGhost(true);
        }}
        onPointerLeave={() => {
          setIsHoveringGhost(false);
        }}
      >
        <GhostModel scale={0.03} position={[0, 0, 5]} />
      </motion.group>
      <OrbitControls />
    </Canvas>
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
