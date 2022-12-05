import React from "react";
// gsap
import gsap from "gsap";
import { useEffect } from "react";

const Presentation = () => {
  useEffect(() => {
    gsap.to("#header", {
      duration: 1,
      y: "-25%",
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
      delay: 2
    });
  }, []);

  return (
    <section
      id="presentation"
      className={`flex h-screen w-screen flex-col items-center justify-center`}
    >
      <p
        id="header"
        className={`relative z-[1] mx-auto w-4/5 translate-y-5 text-center text-4xl font-black uppercase opacity-0 lg:text-5xl`}
      >
        Hey, Je suis{" "}
        <span className="animate-gradient bg-gradient-to-r from-cyan-500 to-violet-500 bg-[length:400%_400%] bg-clip-text text-transparent">
          téo goulois
        </span>{" "}
        je suis web développeur front-end
      </p>
    </section>
  );
};

export default Presentation;
