import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion-3d";

export function Kangsr3D() {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ zoom: 1, position: [0, 0, 5], fov: 300 }}
    >
      <ambientLight color="red" intensity={0.1} />
      <motion.group animate={{ x: 0, y: 3, z: 5 }}>
        <directionalLight castShadow color="blue" />
        <mesh>
          <sphereGeometry />
          <meshStandardMaterial />
        </mesh>
      </motion.group>

      <mesh castShadow>
        <boxGeometry></boxGeometry>
        <meshStandardMaterial color="#ffffff" metalness={0.5} />
      </mesh>

      <mesh receiveShadow position={[0, 0, -2]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#red" />
      </mesh>

      <mesh receiveShadow position={[0, 0, -2]}>
        <coneGeometry />
        <meshStandardMaterial />
      </mesh>

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
