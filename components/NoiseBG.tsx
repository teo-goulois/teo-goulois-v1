import Image from "next/image";
import React from "react";
import NoiseImg from "../assets/images/noise.png";

const NoiseBG = () => {
  return (
    <div
      className={`h-screen left-0 top-0 opacity-70 pointer-events-none fixed w-screen z-[0] animate-noise-animation bg-fixed bg-repeat bg-auto`}
      style={{
        backgroundImage: `url(${NoiseImg.src})`,
      }}
    />
  );
};

export default NoiseBG;
