import React from 'react';
import { Canvas } from '@react-three/fiber';

function Animation() {
  return (
    <div className="three-container">
      <Canvas style={{ height: "400px", width: "100%" }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      </Canvas>
      <button><a href="/map">Back to Map</a></button>
    </div>
  );
}

export default Animation;
