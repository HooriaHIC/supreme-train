import React, { useRef } from "react";
import { useGLTF, useAnimations, Html } from "@react-three/drei";
import * as THREE from "three"
import { useFrame } from "@react-three/fiber";
import BaseBox from "../prefabs/box";

export function Guest(props) {
  const group = useRef();
  const { scene, animations } = useGLTF("/assets/model/npcs/guest.glb");
  
  let mixer = new THREE.AnimationMixer(scene);

    animations.forEach((clip) => {
        const action = mixer.clipAction(clip);
        action.play();
    });

    useFrame((state, delta) => {
        mixer.update(delta);
    });

  return (
    <group>
        <primitive ref={group} object={scene} castshadow dispose={null} {...props} />
        <Html distanceFactor={5} position={[1.7, -1.1, -4.7]}>
          <div className={"tooltip"}>
            <h1>Pandooria</h1>
          </div>
        </Html>
    </group>
  );
}

useGLTF.preload("/assets/model/npcs/guest.glb");