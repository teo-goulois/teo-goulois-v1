import React, { useEffect, useRef } from "react";
// Gsap
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// Components
import Title from "../Title";
// ---------------------- //
import useLayoutEffect from "../../../utils/useLayoutEffect";

const About = () => {
  gsap.registerPlugin(ScrollTrigger);

  const ref = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    setTimeout(() => {
      gsap.set(".text", {
        transform: "translateY(20px)",
        opacity: 0,
      });
      gsap.to(".text", {
        scrollTrigger: {
          start: "top bottom",
          trigger: ref.current,
          end: "bottom top",
          scroller: "#main-container", // locomotive element
          //markers: true,
          toggleActions: "restart pause resume restart",
        },
        delay: 0.25,
        duration: 1,
        transform: "translateY(0)",
        opacity: 1,
        stagger: 0.05,
        ease: "expo.inOut",
      });
    }, 1000);
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <section
      id="about"
      data-scroll-target
      className={`flex min-h-screen w-full flex-col items-center gap-8 p-8`}
    >
      <Title number={"01"} title={"à propo de moi"} />

      <div className="bigText flex flex-col gap-10">
        <p>Salut je suis Téo goulois !</p>
        <p>
          Un développeur front-end / fullstack. Passioné pars l&apos;univers
          tech, j&apos;aime développer tout types de sites.
        </p>
        <p>
          Toujours curieux d&apos;en apprendre plus, Je suis actuellement à la
          recherche d&apos;une alternance en tant que développeur web.
        </p>
        <p>Des questions ? n&apos;hésitez pas à me contacter !</p>
      </div>
      <button
        ref={ref}
        className="outlineText bigText btnAnimation draw flex items-center gap-1 self-start px-4 py-2 font-bold uppercase"
      >
        {"contact".split("").map((item, index) => {
          return (
            <div key={index} className="text">
              {item}
            </div>
          );
        })}
      </button>
    </section>
  );
};

export default About;
