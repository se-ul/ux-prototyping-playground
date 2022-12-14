import { useBox, usePlane } from "@react-three/cannon";
import { OrbitControls, useTexture } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import { RepeatWrapping } from "three";

export function Scene() {
  const texture = useTexture("/textures/hardwood-floor.jpg");
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.x = 1.5;
  texture.repeat.y = 1.5;

  const [boxRef]: any = useBox(() => ({ mass: 1 }));
  const [planeRef]: any = usePlane(() => ({ mass: 0 }));

  return (
    <>
      <ambientLight intensity={0.1} />
      <motion.group animate={{ x: 0, y: 0, z: 2 }}>
        <mesh>
          <sphereGeometry args={[0.3, 30]} />
          <meshToonMaterial />
        </mesh>
        <directionalLight castShadow color="#ffff00" />
      </motion.group>
      <mesh ref={boxRef} castShadow>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial metalness={0.5} color="#ff1000" />
      </mesh>
      <mesh ref={planeRef} receiveShadow position={[0, 0, -5]}>
        <motion.planeGeometry args={[10, 10]} />
        <meshStandardMaterial map={texture} />
      </mesh>
      <OrbitControls />
    </>
  );
}
