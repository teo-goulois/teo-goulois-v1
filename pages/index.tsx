import { Suspense, useEffect } from "react";
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

const Particles = dynamic(
  () => import("../components/custom-cursor/Particles"),
  { ssr: false }
);
const Navbar = dynamic(() => import("../components/navbar/Navbar"), {
  suspense: true,
});

export default function Home() {
  // create smooth scroll

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
    let sections: HTMLElement[] = gsap.utils.toArray("section");
    sections.forEach((section, i) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
      });
    });
    /* ScrollTrigger.create({
      snap: 1 / (sections.length - 1), // snap whole page to the closest section!
    }); */
  }, []);
  return (
    <>
      <NextSeo
        title="Téo Goulois"
        description="Bienvenue sur mon portfolio !"
        canonical="https://www.{canonical}.fr/"
      />
      <Suspense fallback={"Loadinge"}>
        <div
          className={`min-h-screen font-Lexend bg-transparent relative flex flex-col items-center text-primary z-10`}
        >
          <NoiseBG />
          <Navbar />

          <Presentation />
          <About />

          {/*  <Skills />
          <Contact /> */}
        </div>
        <Particles />
      </Suspense>
    </>
  );
}
