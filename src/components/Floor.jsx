import { RigidBody } from "@react-three/rapier";

export default function Floor(props) {
  return (
    <RigidBody
      type="fixed"
      rotation-x={Math.PI * -0.5}
      restitution={0.25}
      friction={0}
      {...props}
    >
      <mesh receiveShadow>
        <boxGeometry args={[500, 500, 0.5]} />
        <meshStandardMaterial transparent color="grey" opacity={0.8} />
      </mesh>
    </RigidBody>
  );
}
