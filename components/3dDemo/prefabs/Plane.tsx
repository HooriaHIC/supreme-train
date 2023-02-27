import React from "react";
import { usePlane } from "@react-three/cannon";

export const Plane = () => {
  const [ref, api] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, 0.6, 0],
    material: {
      friction: 0.1
    }
  }));

  return (
    <mesh ref={ref} receiveShadow={true} scale={[9, 9, 9]}>
      <planeBufferGeometry />
      <meshPhongMaterial color={"skyblue"} opacity={0} transparent />
    </mesh>
  );
};
