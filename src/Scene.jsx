import React, { useState } from "react";
import Floor from "./components/Floor";
import { Physics } from "@react-three/rapier";
import Lights from "./components/Lights";
import Ball from "./components/Ball";
import {
  Grid,
  Center,
  GizmoHelper,
  GizmoViewport,
  Sky,
  Environment,
} from "@react-three/drei";
import { useStore } from "./store/store";

const Scene = () => {
  const { ballOneMass, ballTwoMass } = useStore();
  console.log(ballOneMass, ballTwoMass);
  return (
    <>
      <Physics gravity={[0, -9.81, 0]}>
        <Ball
          position={[6, 4, 0]}
          color="orange"
          name="ball-1"
          mass={ballOneMass}
        />
        <Ball
          position={[-6, 4, 0]}
          color="mediumorchid"
          name="ball-2"
          mass={ballTwoMass}
        />
        <Floor scale={2} />

        <Environment preset="city" />

        <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
          <GizmoViewport
            axisColors={["#9d4b4b", "#2f7f4f", "#3b5b9d"]}
            labelColor="white"
          />
        </GizmoHelper>
      </Physics>
      <Sky />
    </>
  );
};

export default Scene;
