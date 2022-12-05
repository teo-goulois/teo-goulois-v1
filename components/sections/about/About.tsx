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

  const ref = useRef<HTMLDivElement>(null);
  const ScrollingRef = useRef(null);

  useLayoutEffect(() => {
    let element = ref.current;
    let scrollingElement = ScrollingRef.current;

    setTimeout(() => {
      gsap.set(".text", {
        transform: "translateY(20px)",
        opacity: 0,
      });
      gsap.to(".text", {
        scrollTrigger: {
          start: "top 80%+=100px",
          trigger: ref.current,
          end: "bottom +=400",
          scroller: "#main-container", // locomotive element
          //markers: true,
          toggleActions: 'restart pause resume restart'
        },
        duration: 1,
        transform: "translateY(0)",
        opacity: 1,
        stagger: 0.1,
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
      className={`flex w-full h-screen flex-col items-center gap-8 p-8`}
    >
      <Title number={"01"} title={"à propo de moi"} />

      <div className="flex flex-col gap-12 text-lg font-medium lg:text-4xl">
        <p>Salut je suis Téo goulois !</p>
        <p>
          {" "}
          Un développeur front-end / fullstack. Passioné pars l’univers tech,
          j’aime développer tout types de sites.
        </p>
        <p>
          Toujours curieux d&apos;en apprendre plus, Je suis actuellement à la
          recherche d&apos;une alternance en tant que développeur web.
        </p>
        <p >Des questions ? n&apos;hésitez pas à me contacter !</p>
      </div>
      <div>
        <div
        ref={ref}
          className="outlineText textcontainer flex cursor-pointer items-center gap-2 text-2xl font-bold uppercase"
        >
          {"contact".split("").map((item, index) => {
            return (
              <div key={index} className="text">
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
