import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Model(props) {
  const group = useRef();

  const { scene } = useGLTF("assets/model/model-compres.glb");
  return (
    <primitive ref={group} object={scene} castshadow dispose={null} {...props} />
  );
}

useGLTF.preload("assets/model/model-compres.glb");
