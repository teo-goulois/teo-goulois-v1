import React, {
  useState,
  Suspense,
  useRef,
  useEffect,
  useContext,
} from "react";

import { Canvas, useLoader, extend, useFrame } from "@react-three/fiber";

// Image
import Img1Mobile from "../../../assets/tweeter/1-mobile.jpeg";
import Img1Desktop from "../../../assets/tweeter/1-desktop.jpeg";

import Img2Mobile from "../../../assets/weather/1-mobile.jpeg";
import Img2Desktop from "../../../assets/weather/1-desktop.jpeg";

import Img3Mobile from "../../../assets/country-quiz/1-mobile.jpeg";
import Img3Desktop from "../../../assets/country-quiz/1-desktop.jpeg";

import TestImg from "../../../assets/images/test.png";
import { StaticImageData } from "next/image";
const Mesh = dynamic(() => import("./Mesh"), { suspense: true });

/* import Mesh from "./Mesh";
 */ import { Loader } from "@react-three/drei";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Texture } from "three";
import dynamic from "next/dynamic";
import { Context } from "../../../context/Context";

const Scene = () => {
  const { meshProps, setMeshProps } = useContext(Context);

/*   useEffect(() => {
    const { id, isHover } = meshProps;
    if (isHover && id) {
      switch (id) {
        case 1:
          if (window.innerWidth > 1024) {
            setMeshProps((prev) => ({
              ...prev,
              imgSize: {
                x: Img1Desktop.width,
                y: Img1Desktop.height,
              },
            }));
          } else {
            setMeshProps((prev) => ({
              ...prev,
              imgSize: {
                x: Img1Mobile.width,
                y: Img1Mobile.height,
              },
            }));
          }
          break;
        case 2:
          if (window.innerWidth > 1024) {
            setMeshProps((prev) => ({
              ...prev,
              imgSize: {
                x: Img2Mobile.width,
                y: Img2Mobile.height,
              },
            }));
          } else {
            setMeshProps((prev) => ({
              ...prev,
              imgSize: {
                x: Img2Mobile.width,
                y: Img2Mobile.height,
              },
            }));
          }
          break;
        case 3:
          if (window.innerWidth > 1024) {
            setMeshProps((prev) => ({
              ...prev,
              imgSize: {
                x: Img3Mobile.width,
                y: Img3Mobile.height,
              },
            }));
          } else {
            setMeshProps((prev) => ({
              ...prev,
              imgSize: {
                x: Img3Mobile.width,
                y: Img3Mobile.height,
              },
            }));
          }
          break;
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [meshProps]); */

  const CanvasRef = useRef<HTMLCanvasElement>(null);


  return (
    <div
      style={/* meshProps.id !== 0 ? { zIndex: meshProps.id + 1 } : */ { zIndex: -1 }}
      className="fixed  top-0 left-0 h-screen w-screen "
    >
      <Canvas
        ref={CanvasRef}
        camera={{ fov: 40, near: 0.1, far: 1000, position: [0, 0, 3] }}
      >
        <Suspense fallback={null}>
          <Mesh />
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  );
};

export default Scene;
