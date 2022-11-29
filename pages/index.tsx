import { Suspense, useEffect, useLayoutEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

import { NextSeo } from "next-seo";

// Components
import NoiseBG from "../components/NoiseBG";

import Presentation from "../components/sections/presentation/Presentation";
import About from "../components/sections/about/About";
import Contact from "../components/sections/contact/Contact";
// Gsap
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Skills from "../components/sections/skills/Skills";
import Projects from "../components/sections/projects/Projects";
/* import Scene from "../components/sections/projects/Scene"; */
import LocomotiveScroll from 'locomotive-scroll';

const Particles = dynamic(
  () => import("../components/custom-cursor/Particles"),
  { ssr: false }
);
const Navbar = dynamic(() => import("../components/navbar/Navbar"), {
  suspense: true,
});
const Scene = dynamic(() => import("../components/sections/projects/Scene"), {
  /* ssr: false, */
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
        <NoiseBG />
        <div
          className={`min-h-screen font-Lexend bg-transparent max-w-screen relative flex flex-col items-center text-primary z-10`}
        >
          <Navbar />

          <Presentation />
          <About />
          <Projects />
          <Skills />
          <Contact />
          {/*  <Scene /> */}
        </div>
        <Particles />
      </Suspense>
    </>
  );
}
