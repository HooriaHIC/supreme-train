import { PointerLockControls } from "@react-three/drei"
import { Player } from "../prefabs/Player"

import { Physics } from "@react-three/cannon";
import React, { useEffect, useRef, useState } from "react";
import { useThree, extend, useFrame, useLoader } from "@react-three/fiber";
import { Plane } from "../prefabs/Plane";
import { Skybox } from "../prefabs/Skybox";
import { CollisionMesh } from "../prefabs/Collision";
import { Model } from "../prefabs/Model";
import { Areeba } from "../npcs/areeba";
import { Malaika } from "../npcs/malaika";
import { Guest } from "../npcs/guest";
import { GuestTwo } from "../npcs/guestTwo";
import { Mama } from "../npcs/mama";
import { Shoor } from "../npcs/shoor";

import * as THREE from 'three'

function Sound({ url }) {
  const sound: any = useRef()
  const { camera } = useThree()
  const [listener] = useState(() => new THREE.AudioListener())
  const buffer = useLoader(THREE.AudioLoader, url)
  useEffect(() => {
    sound.current.setBuffer(buffer)
    sound.current.setRefDistance(1)
    sound.current.setLoop(true)
    sound.current.play()
    camera.add(listener)
    return () => camera.remove(listener)
  }, [])
  return <positionalAudio ref={sound} args={[listener]} />
}

const DefaultScene = (props) => {
  const { camera, gl } = useThree();
  const controls: any = useRef();

  useEffect(() => {
    camera.layers.enable(0);
    camera.layers.enable(1);
  }, [camera]);

  useEffect(() => {
    const handleFocus = () => {
      controls.current.lock();
    };
    document.addEventListener("click", handleFocus);

    return () => {
      document.removeEventListener("click", handleFocus);
    };
  }, [gl]);

    return (
        <>
          <Skybox />
          <PointerLockControls 
            ref={controls} 
            args={[camera, gl.domElement]}       
            addEventListener={undefined}
            hasEventListener={undefined}
            removeEventListener={undefined}
            dispatchEvent={undefined}/>
          
          <pointLight position={[0, 2, 0]} intensity={0.3} color={"red"} />
          <pointLight position={[0, 0, 2]} intensity={0.3} color={"blue"} />

          <ambientLight intensity={1} color={"#faead7"} />
          <Sound url="/assets/music/song.mp3" />

          <Physics
            gravity={[0, -14, 0]}
          >
            <Plane />
            <Model scale={0.8} position={[-1.5, -2.5, 2.5]} />
            <Areeba scale={1.5} position={[2, -2, 5]} />
            <Malaika scale={2} position={[-8, -2, -3]} />
            <Guest scale={2} position={[1.7, -1.1, -4.7]} />
            <GuestTwo scale={1.5} position={[-2.4, -1.8, 0.9]} />
            <Mama scale={1.8} position={[-3.8, -2.2, 0.2]} />
            <Shoor scale={1.9} position={[8, -2, -4]} rotation={[0, Math.PI / -2, 0]} />
            <Player position={[0, 1, 3]} args={[0.3, 1, 0.3]} color="yellow" />
            <CollisionMesh scale={2} />
          </Physics>
        </>
    )
}

export default DefaultScene