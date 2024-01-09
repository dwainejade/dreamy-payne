import React, { memo } from "react";
import Floor from "./components/Floor";
import { Physics } from "@react-three/rapier";
import Lights from "./components/Lights";
import Ball from "./components/Ball";
import {
  Grid,
  Center,
  GizmoHelper,
  GizmoViewport,
  AccumulativeShadows,
  RandomizedLight,
  Environment,
} from "@react-three/drei";

const Scene = () => {
  const gridConfig = {
    cellSize: 0.6,
    cellThickness: 1,
    cellColor: "#6f6f6f",
    sectionSize: 3.3,
    sectionThickness: 1.5,
    sectionColor: "#9d4b4b",
    fadeDistance: 60,
    fadeStrength: 1,
    followCamera: false,
    infiniteGrid: true,
  };

  return (
    <Physics gravity={[0, -9.81, 0]} debug>
      {/* <Lights /> */}
      <Ball position={[6, 4, 0]} color="orange" name="ball-1" mass={1} />
      <Ball
        position={[-6, 4, 0]}
        color="mediumorchid"
        name="ball-2"
        mass={10000}
      />
      <Floor scale={2} />
      {/* <Grid position={[0, -0.01, 0]} args={[10.5, 10.5]} {...gridConfig} /> */}

      <Environment preset="sunset" />
      <Shadows />
    </Physics>
  );
};

export default Scene;

const Shadows = memo(() => (
  <AccumulativeShadows
    temporal
    frames={100}
    color="#9d4b4b"
    colorBlend={0.5}
    alphaTest={0.9}
    scale={20}
  >
    <RandomizedLight amount={8} radius={4} position={[5, 5, -10]} />
  </AccumulativeShadows>
));
