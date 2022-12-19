import { ARCanvas, ARMarker } from "@artcom/react-three-arjs";
import "@react-three/fiber";

export const ARExample: React.FC = () => {
  return (
    <ARCanvas
      camera={{ position: [0, 0, 0] }}
      onCreated={({ gl }) => {
        gl.setSize(window.innerWidth, window.innerHeight);
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 0]} />
      <mesh>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"green"} />
      </mesh>
      <ARMarker type={"pattern"} patternUrl={"/patt.hiro"}>
        <mesh>
          <boxBufferGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={"green"} />
        </mesh>
      </ARMarker>
    </ARCanvas>
  );
};
