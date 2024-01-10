import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Scene from "./Scene";
import { Perf } from "r3f-perf";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Canvas
        id="Canvas"
        dpr={[1, 2]}
        camera={{ fov: 50, position: [50, 50, 50], near: 0.1, far: 1000 }}
      >
        <Perf position="bottom-left" />
        <OrbitControls />
        <Scene />
      </Canvas>
    </div>
  );
}

export default App;
