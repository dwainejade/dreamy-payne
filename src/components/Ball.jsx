import { RigidBody } from "@react-three/rapier";
import { useRef, useEffect } from "react";

export default function Ball({ name, mass = 1, position, color }) {
  const ballRef = useRef();
  // console.log({ name, mass, position, color });
  // console.log("Initial Ball mass:", ballRef.current.mass());

  useEffect(() => {
    if (ballRef.current) {
      // Log the mass after the component updates
      console.log("Updated Ball mass:", ballRef.current);
    }
  }, [ballRef.current]); // Dependency on the ref's current value

  const handleClick = () => {
    if (ballRef.current) {
      const upwardImpulse = { x: 300, y: 0, z: 0 };
      ballRef.current.applyImpulse(upwardImpulse);
    }
  };

  return (
    <RigidBody
      ref={ballRef}
      colliders="ball"
      type="dynamic"
      name={name}
      mass={mass}
      position={position}
      friction={1}
      linearDamping={1}
      angularDamping={0.5}
      restitution={0.8}
      canSleep={false}
      onClick={handleClick}
    >
      <mesh>
        <sphereGeometry />
        <meshStandardMaterial color={color} />
      </mesh>
    </RigidBody>
  );
}
