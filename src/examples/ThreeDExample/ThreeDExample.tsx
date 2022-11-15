import { meshBounds, Shadow, useGLTF, useTexture } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { MotionConfig } from "framer-motion";
import { motion as motion3D } from "framer-motion-3d";
import { Suspense, useState } from "react";

const transition = {
  type: "spring",
  mass: 5,
  stiffness: 1000,
  damping: 50,
  restDelta: 0.0001,
};

function Switch({ isOn, setOn }) {
  const { nodes, materials }: any = useGLTF("/gltfs/switch.glb");
  const texture = useTexture("/textures/cross.jpg");

  const lightVariants = {
    on: { color: "#888" },
    off: { color: "#000" },
  };

  return (
    <group scale={[1.25, 1.25, 1.25]} dispose={null}>
      <motion3D.mesh receiveShadow castShadow geometry={nodes.Cube.geometry}>
        <motion3D.primitive
          variants={lightVariants}
          roughness={0.5}
          metalness={0.8}
          object={materials.track}
          attach="material"
          transition={{ ...transition, damping: 100 }}
        />
      </motion3D.mesh>
      <motion3D.group
        position-y={0.85}
        variants={{
          on: { z: -1.2 },
          off: { z: 1.2 },
        }}
      >
        <motion3D.mesh
          receiveShadow
          castShadow
          raycast={meshBounds}
          variants={{
            on: { rotateX: 0 },
            off: { rotateX: Math.PI * 1.3 },
          }}
          onClick={() => setOn(!isOn)}
          whileHover={{ scale: 1.05 }}
        >
          <sphereGeometry args={[0.8, 64, 64]} />
          <motion3D.meshStandardMaterial roughness={0.5} map={texture} />
        </motion3D.mesh>
        <motion3D.pointLight
          intensity={100}
          distance={1.4}
          variants={lightVariants}
        />
        {/* @ts-ignore */}
        <Shadow
          renderOrder={-1000}
          position={[0, -1, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={[1, 1, 1]}
        />
      </motion3D.group>
    </group>
  );
}

export function ThreeDExample() {
  const [isOn, setOn] = useState(true);

  return (
    <MotionConfig transition={transition}>
      <Canvas
        orthographic
        shadows
        dpr={[1, 2]}
        camera={{ zoom: 60, position: [-5, 5, 5], fov: 90 }}
      >
        <motion3D.group initial={false} animate={isOn ? "on" : "off"}>
          <ambientLight intensity={0.1} />
          <directionalLight position={[-20, 20, 20]} intensity={1} />
          <motion3D.directionalLight
            position={[-20, -20, -20]}
            intensity={0.5}
            variants={colorVariants}
          />
          <motion3D.pointLight
            position={[0, 0, 5]}
            distance={5}
            intensity={5}
            variants={colorVariants}
          />
          <motion3D.spotLight
            variants={colorVariants}
            position={[10, 20, 20]}
            angle={0.1}
            intensity={2}
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-bias={-0.00001}
            castShadow
          />
          <Suspense fallback={null}>
            <Switch isOn={isOn} setOn={setOn} />
          </Suspense>
          <mesh
            receiveShadow
            renderOrder={1000}
            position={[0, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
          >
            <planeGeometry args={[10, 10]} />
            <motion3D.shadowMaterial
              transparent
              variants={{
                on: { opacity: 0.1 },
                off: { opacity: 0.3 },
              }}
            />
          </mesh>
        </motion3D.group>
      </Canvas>
    </MotionConfig>
  );
}

const colorVariants = {
  on: { color: "#7fffd4" },
  off: { color: "#c72f46" },
};
