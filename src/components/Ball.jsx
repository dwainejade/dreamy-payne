import { RigidBody } from "@react-three/rapier";
import { useRef, useEffect } from "react";

export default function Ball(props) {
  const ballRef = useRef();

  useEffect(() => {
    if (ballRef.current) {
      console.log("Ball initialized with mass:", ballRef.current.mass());
    }
  }, []);

  const handleClick = () => {
    if (ballRef.current) {
      // Apply an upward impulse
      const upwardImpulse = { x: 300, y: 0, z: 0 }; // Adjust 'y' for the strength of the jump
      ballRef.current.applyImpulse(upwardImpulse);
    }
  };

  return (
    <RigidBody
      ref={ballRef}
      colliders="ball"
      type="dynamic"
      friction={1}
      mass={100}
      linearDamping={0.5}
      angularDamping={0.5}
      restitution={0.9}
      onClick={handleClick}
      canSleep={false}
      {...props}
    >
      <mesh castShadow receiveShadow>
        <sphereGeometry />
        <meshStandardMaterial color={props.color} />
      </mesh>
    </RigidBody>
  );
}
