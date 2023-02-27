import React, { useRef } from "react";
import { useGLTF, useAnimations, Html } from "@react-three/drei";
import * as THREE from "three"
import { useFrame } from "@react-three/fiber";
import BaseBox from "../prefabs/box";

export function Malaika(props) {
  const group = useRef();
  const { scene, animations } = useGLTF("/assets/model/npcs/malaika.glb");
  
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
        <BaseBox text={false} position={[-8, 0, -2]} args={[2, 5, 2]} color={"yellow"} />
        <Html distanceFactor={10} position={[-8.5, 0, -3]}>
          <div className={"tooltip"}>
            <h1>Malaika Kekra</h1>
          </div>
        </Html>
    </group>
  );
}

useGLTF.preload("/assets/model/npcs/malaika.glb");