import React from "react";
import { useGLTF } from "@react-three/drei";
import BaseBox from "./box";

export function CollisionMesh(props) {
  return (
    <>
      <BaseBox position={[-2.8, 0, 2.5]} args={[3, 3, 1.4]} color={"red"} /> {/* couch table */}
      <BaseBox position={[-2.1, 0, 0]} args={[5.6, 3, 1.4]} color={"green"} /> {/* couch */}
      <BaseBox position={[-1.5, 0, 5]} args={[1, 2, 1.4]} color={"yellow"} /> {/* chair */}
      <BaseBox position={[-9, 0, 3.2]} args={[1, 3, 7]} color={"orange"} /> {/* dining table */}
      <BaseBox position={[-11.2, 0, -4.2]} args={[1.4, 3, 2]} color={"purple"} /> {/* side table */}
      <BaseBox  position={[-5, 0, -4.2]} args={[4, 3, 2]} color={"teal"} /> {/* cycle */}
      <BaseBox   position={[1.5, 0, -4.2]} args={[2.5, 3, 2]} color={"grey"} /> {/* cusion thing */}

      <BaseBox   position={[-5.5, 0, 5.6]} args={[0.5, 2, 0.5]} color={"pink"} /> {/* plant */}
      <BaseBox   position={[-11, 0, 9.3]} args={[0.5, 2, 0.5]} color={"pink"} /> {/* plant 2 */}

      <BaseBox   position={[5, 0, 2.5]} args={[2, 3, 3.5]} color={"cyan"} /> {/* counter */}
      <BaseBox   position={[8, 0, -6.5]} args={[3, 3, 1.5]} color={"cyan"} /> {/* study table */}
      <BaseBox   position={[3.7, 0, -9]} args={[1, 3, 1]} color={"lime"} /> {/* lamp */}
      <BaseBox   position={[10.5, 0, -2.5]} args={[2.5, 3, 1]} color={"lime"} /> {/* lamp table */}

      <BaseBox   position={[8, 0, -10]} args={[8, 8, 1]} color={"red"} /> {/* wall */}
      <BaseBox   position={[12, 0, -5]} args={[1, 8, 8]} color={"orange"} /> {/* wall */}
      <BaseBox   position={[3, 0, -8]} args={[1, 8, 4]} color={"green"} /> {/* wall */}
      <BaseBox   position={[11, 0, 4]} args={[7, 8, 12]} color={"pink"} /> {/* wall */}
      <BaseBox   position={[-4.5, 0, -5.5]} args={[16, 8, 1]} color={"purple"} /> {/* wall */}
      <BaseBox   position={[-1, 0, 10.3]} args={[22, 8, 1]} color={"black"} /> {/* wall */}
      <BaseBox   position={[-12, 0, 4]} args={[1, 8, 18]} color={"white"} /> {/* wall */}
    </>
  );
}

useGLTF.preload("assets/models/counter_collision.glb");