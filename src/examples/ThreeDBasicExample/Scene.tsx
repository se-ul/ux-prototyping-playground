import { OrbitControls, useTexture } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { RepeatWrapping } from "three";

export function Scene() {
  const texture = useTexture("/textures/hardwood-floor.jpg");
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.x = 1.5;
  texture.repeat.y = 1.5;

  return (
    <>
      <ambientLight intensity={0.1} />
      <motion.group animate={{ x: 0, y: 0, z: 2 }}>
        <mesh>
          <sphereGeometry args={[0.3, 30]} />
          <meshPhongMaterial />
        </mesh>
        <directionalLight castShadow color="#ffff00" />
      </motion.group>
      <mesh castShadow>
        <boxGeometry args={[2, 2, 2]} />
        <meshLambertMaterial color="#ff1000" />
      </mesh>
      <mesh receiveShadow position={[0, 0, -5]}>
        <motion.planeGeometry args={[10, 10]} />
        <meshStandardMaterial map={texture} />
      </mesh>
      <OrbitControls />
    </>
  );
}
