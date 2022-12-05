import {
  createRef,
  lazy,
  Suspense,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";
import { AnimatePresence } from "framer-motion";

// Components
import NoiseBG from "../components/NoiseBG";

import Navbar from "../components/navbar/Navbar";
const NavbarLazy = dynamic(() => import("../components/navbar/Navbar"), {
  suspense: true,
});

import Presentation from "../components/sections/presentation/Presentation";
const PresentationLazy = dynamic(
  () => import("../components/sections/presentation/Presentation"),
  { suspense: true }
);
const PresentationLazyReact = lazy(
  () => import("../components/sections/presentation/Presentation"),
);

import About from "../components/sections/about/About";

import Contact from "../components/sections/contact/Contact";
import Skills from "../components/sections/skills/Skills";
import Projects from "../components/sections/projects/Projects";
/* import Scene from "../components/sections/projects/Scene"; */
// Gsap
// Locomotive scroll
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
// ScrollTrigger
import ScrollTriggerProxy from "../components/ScrollTriggerProxy";
import SectionLayout from "../components/layouts/SectionLayout";
import Loader from "../components/Loader";

const Particles = dynamic(
  () => import("../components/custom-cursor/Particles"),
  { ssr: false }
);

export default function Home() {
  const [preloader, setPreloader] = useState(true);
  //useLocoScroll(!preloader);
  const containerRef = useRef(null);

  /*  const [timer, setTimer] = useState(1);

  useEffect(() => {
    if (timer > 0) {
      const timerID = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearTimeout(timerID);
    }
  }, [timer]);

  useEffect(() => {
    timer === 0 && setPreloader(false);
  }, [timer]); */
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 2000);
  }, []);

  return (
    <>
      <NextSeo
        title="Téo Goulois"
        description="Bienvenue sur mon portfolio !"
        canonical="https://www.{canonical}.fr/"
      />
      <>
        <NoiseBG />
        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
            smartphone: {
              smooth: true,
            },
            tablet: {
              smooth: true,
            },
          }}
          watch={[]}
          containerRef={containerRef}
        >
          <AnimatePresence>{!loaded ? <Loader /> : null}</AnimatePresence>
          <ScrollTriggerProxy />
          <AnimatePresence>
            <div className="flex w-screen justify-center">
              <Suspense fallback={<></>}>
                <NavbarLazy
                  sections={[
                    {
                      title: "à propos",
                      id: "#about",
                    },
                    {
                      title: "projets",
                      id: "#projects",
                    },
                    {
                      title: "compétences",
                      id: "#skills",
                    },
                    {
                      title: "contact",
                      id: "#contact",
                    },
                  ]}
                />
              </Suspense>
            </div>
            <main
              id="main-container"
              className={`max-w-screen relative z-10 flex min-h-screen flex-col items-center bg-transparent font-Lexend text-primary`}
              data-scroll-container
              ref={containerRef}
            >
              <Suspense fallback={<></>}>
                <PresentationLazyReact />
              </Suspense>
              <About />
            </main>
          </AnimatePresence>
        </LocomotiveScrollProvider>

        <Particles />
      </>
    </>
  );
}
