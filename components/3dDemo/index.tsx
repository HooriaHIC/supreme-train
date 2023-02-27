import { Loader } from "@react-three/drei"

import styles from "../../styles/Demo.module.css"
import $ from "jquery"

import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import DefaultScene from "./scene/DefaultScene"

const ModelLoad = () => {
  let canvas: any;

  const [down, setDown] = useState<any>()

  const [isHidden, setIsHidden] = useState(true);

  function downloadCanvas() {
    var image = canvas.toDataURL("image/png");

    console.log(image)
    setDown(image)
  }

  useEffect(() => {
    canvas = document.getElementsByTagName("canvas")[0];
    console.log("loading 3d view")
  }, [])


    return (
        <div style={{ width: "100vw", height: "100vh" }}>
            {isHidden ? 
              <div className={styles.overlay}>
                <div className={styles.content}>
                  <h1>Congrats! You&apos;re Invited to the party</h1>
                  <button onClick={() => setIsHidden(false)}>LESSSGO</button>
                </div>
                <div className={styles.playerTips}>
                    <span>Use <b>W, A, S, D</b> to move</span>
                    <span>Press <b>Space</b> to jump</span>
                    <span>Use <b>Mouse Controls</b> to look around</span>
                  </div>
              </div> : 

            <>
              <div className={styles.rowThree}>
                <Canvas shadows camera={{fov: 90 }} gl={{ preserveDrawingBuffer: true, antialising: true, alpha: true}} flat>
                    <DefaultScene />
                </Canvas>
              <Loader />
              </div>
              
              <div className={styles.infoSection}>
                <div className={styles.ssBtn}>
                  <a href={down} download='Photoshoot.png' onClick={() => downloadCanvas()}>Take A Picture</a>
                </div>
              </div>
            </>}
            
        </div>
      )
}

export default ModelLoad
