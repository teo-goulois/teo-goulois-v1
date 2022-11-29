import React, { useRef, useEffect, useContext, useState } from "react";

import { Canvas, useLoader, extend, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";

import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";

import glsl from "glslify";
import { Mesh as MeshType } from "three";

import gsap, { Power4 } from "gsap";

// Image
import Img1Mobile from "../../../assets/tweeter/1-mobile.jpeg";
import Img1Desktop from "../../../assets/tweeter/1-desktop.jpeg";

import Img2Mobile from "../../../assets/weather/1-mobile.jpeg";
import Img2Desktop from "../../../assets/weather/1-desktop.jpeg";

import Img3Mobile from "../../../assets/country-quiz/1-mobile.jpeg";
import Img3Desktop from "../../../assets/country-quiz/1-desktop.jpeg";

import { Context } from "../../../context/Context";

const ColorShiftMaterial = shaderMaterial(
  {
    uTexture: new THREE.Texture(),
    uOffset: new THREE.Vector2(0.0, 0.0),
    uAlpha: 1,
  },
  // vertex shader
  glsl`
  uniform vec2 uOffset;
  varying vec2 vUv;

  vec3 deformationCurve(vec3 position, vec2 uv, vec2 offset) {
    float M_PI = 3.1415926535897932384626433832795;
    position.x = position.x + (sin(uv.y * M_PI) * offset.x);
    position.y = position.y + (sin(uv.x * M_PI) * offset.y);
    return position;
  }

  void main() {
    vUv = uv;
    vec3 newPosition = position;
    newPosition = deformationCurve(position,uv,uOffset);
    gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );
  }
      `,
  // fragment shader
  glsl`
  uniform sampler2D uTexture;
  uniform float uAlpha;
  uniform vec2 uOffset;

  varying vec2 vUv;

  vec3 rgbShift(sampler2D uTexture, vec2 vUv, vec2 uOffset) {
    float r = texture2D(uTexture,vUv + uOffset).r;
    vec2 gb = texture2D(uTexture,vUv).gb;
    return vec3(r,gb);
  }

  void main() {
    vec3 color = rgbShift(uTexture,vUv,uOffset);
    gl_FragColor = vec4(color,uAlpha);
  }
      `
);

extend({ ColorShiftMaterial });

const Mesh = () => {
  const [
    img1Mobile,
    img1Desktop,
    img2Mobile,
    img2Desktop,
    img3Mobile,
    img3Desktop,
  ] = useLoader(TextureLoader, [
    Img1Mobile.src,
    Img1Desktop.src,
    Img2Mobile.src,
    Img2Desktop.src,
    Img3Mobile.src,
    Img3Desktop.src,
  ]);

  const { meshProps } = useContext(Context);
  const { isHover, id } = meshProps;
  const [imageRatio, setImageRatio] = useState<number>();
  // Load texture and set texture when finished loaded
  useEffect(() => {
    if (!isHover) return;
    const getTexture = () => {
      switch (id) {
        case 1:
          if (window.innerWidth > 1024) {
            setImageRatio(Img1Desktop.width / Img1Desktop.height);
            return img1Desktop;
          }
          setImageRatio(Img1Mobile.width / Img1Mobile.height);
          return img1Mobile;
        case 2:
          if (window.innerWidth > 1024) {
            setImageRatio(Img2Desktop.width / Img2Desktop.height);
            return img2Desktop;
          }
          setImageRatio(Img2Mobile.width / Img2Mobile.height);
          return img2Mobile;
        case 3:
          if (window.innerWidth > 1024) {
            setImageRatio(Img3Desktop.width / Img3Desktop.height);
            return img3Desktop;
          }
          setImageRatio(Img3Mobile.width / Img3Mobile.height);
          return img3Mobile;
        default:
          return img1Desktop;
      }
    };
    const texture = getTexture();
    if (texture !== undefined) {
      uniformRef.current.uTexture = texture;
    } else {
      uniformRef.current.uTexture = img1Desktop;
    }
  }, [
    id,
    img1Desktop,
    img1Mobile,
    img2Desktop,
    img2Mobile,
    img3Desktop,
    img3Mobile,
    meshProps,
    isHover,
  ]);

  // ref
  const planeRef = useRef<MeshType>(null);
  const endX = useRef(0);
  const endY = useRef(0);

  const uniformRef = useRef({
    uAlpha: 1,
    uOffset: { x: 0, y: 0 },
    uTexture: img1Mobile,
  });

  // Manage opacity
  useEffect(() => {
    if (isHover) {
      gsap.to(uniformRef.current, {
        uAlpha: 1,
        duration: 0.5,
        ease: Power4.easeOut,
      });
    } else {
      gsap.to(uniformRef.current, {
        uAlpha: 0,
        duration: 0.5,
        ease: Power4.easeOut,
      });
    }
  }, [isHover]);

  // manage position of mesh

  useFrame(({}) => {
    const position = new THREE.Vector3(endX.current, endY.current, 0);
    if (planeRef.current) {
      let offset = planeRef.current.position
        .clone()
        .sub(position)
        .multiplyScalar(-0.15);

      uniformRef.current.uOffset = offset;
    }
  });

  /* const getViewSize = () => {
    let distance = 3;
    let vFov = (40 * Math.PI) / 180;
    let height = 2 * Math.tan(vFov / 2) * distance;
    let width = (height * window.innerWidth) / window.innerHeight;
    return { width, height, vFov };
  }; */

  /*   const normalizedValue = (
    x: number,
    in_min: number,
    in_max: number,
    out_min: number,
    out_max: number
  ) => {
    return ((x - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  }; */

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!planeRef.current || planeRef.current === undefined) return;

      // mouse coordinate
      let x = (e.clientX / window.innerWidth) * 2 - 1;
      /* (normalizedValue(
          e.clientX,
          -1,
          1,
          -getViewSize().width / 2,
          getViewSize().width / 2
        ) /
          window.innerWidth) *
          2 -
        1; */

      let y = -(e.clientY / window.innerHeight) * 2 + 1;
      endX.current = x;
      endY.current = y;
      // change position of the mesh
      gsap.to(planeRef.current?.position, {
        duration: 1,
        x,
        y,
        ease: Power4.easeOut,
      });
    };
    document.addEventListener("mousemove", onMouseMove);

    return () => document.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <mesh ref={planeRef} scale={new THREE.Vector3(imageRatio, 1, 1)}>
      <planeBufferGeometry args={[0.5, 0.5, 32, 32]} />
      {/* @ts-ignore */}
      <colorShiftMaterial
        ref={uniformRef}
        key={ColorShiftMaterial.key}
        transparent={true}
      />
    </mesh>
  );
};

export default Mesh;
