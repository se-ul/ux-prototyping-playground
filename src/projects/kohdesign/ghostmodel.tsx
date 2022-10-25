/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from "@react-three/drei";

export function GhostModel(props) {
  const { nodes, materials } = useGLTF("/ghost-10.gltf");
  return (
    <group {...props} dispose={null}>
      <group position={[-4.35, -37.9, -323.68]} rotation={[0.1, -0.43, 0.04]}>
        <group position={[0, -16.52, -23.1]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Body_1.geometry}
            material={materials.body}
            position={[15.85, 94.66, 0.89]}
            rotation={[-0.09, 0, 0]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.모자.geometry}
            material={nodes.모자.material}
            position={[15.85, 94.66, 0.89]}
            rotation={[-0.09, 0, 0]}
          />
          <group position={[0, 9.27, -5.25]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Capsule.geometry}
              material={materials.eye}
              position={[26.34, 75.28, 84.79]}
              rotation={[1.09, 0.18, -0.3]}
            />
          </group>
        </group>
        <group position={[0, 22.8, 34.79]} rotation={[1.31, -1.57, 0]}>
          <group position={[0, 28.4, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Capsule1_1.geometry}
              material={materials.tongue}
            />
          </group>
        </group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.wand.geometry}
          material={materials.wand}
          position={[131.18, 48.38, 50.5]}
          rotation={[0.2, -0.12, -0.61]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/ghost-10.gltf");
