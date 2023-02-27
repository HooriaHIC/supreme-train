import React, { useRef } from "react";
import { useGLTF, useAnimations, Html } from "@react-three/drei";
import * as THREE from "three"
import { useFrame } from "@react-three/fiber";
import BaseBox from "../prefabs/box";

export function Shoor(props) {
  const group = useRef();
  const { scene, animations } = useGLTF("/assets/model/npcs/osama-compres.glb");
  
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
        <BaseBox text={false} position={[8, 0, -4]} args={[1.5, 5, 1.5]} color={"yellow"} />

        <Html distanceFactor={10} position={[8, 0, -4]}>
          <div className={"tooltip"}>
            <h1>Shoor Shuda</h1>
          </div>
        </Html>
    </group>
  );
}

useGLTF.preload("/assets/model/npcs/osama-compres.glb");