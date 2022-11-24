import Head from "next/head";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";

import Image from "next/image";
import NoiseBG from "../components/NoiseBG";
import { Suspense } from "react";
import Presentation from "../components/sections/presentation/Presentation";
import About from "../components/sections/about/About";
/* import Particles from "../components/custom-cursor/Particles"; */

const Particles = dynamic(
  () => import("../components/custom-cursor/Particles"),
  { ssr: false }
);
const Navbar = dynamic(() => import("../components/navbar/Navbar"), {
  suspense: true,
});


export default function Home() {
  return (
    <>
      <NextSeo
        title="Téo Goulois"
        description="Bienvenue sur mon portfolio !"
        canonical="https://www.{canonical}.fr/"
      />
      <Suspense fallback={"Loadinge"}>
        <div
          className={`min-h-screen bg-transparent relative flex flex-col items-center text-primary z-10`}
        >
          <NoiseBG />
          <Navbar />

          <Presentation />
          <About />
        </div>
        <Particles />
      </Suspense>
    </>
  );
}
