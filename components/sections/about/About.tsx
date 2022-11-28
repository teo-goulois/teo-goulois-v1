import React, { useEffect } from "react";
import gsap from "gsap";
// Components
import Title from "../Title";
// ---------------------- //
import { goToSection } from "../../../utils/goToSection";
import ScrollTrigger from "gsap/ScrollTrigger";

const About = () => {
  useEffect(() => {
    /*  gsap.to("#contact", {
      scrollTrigger: "#contact-button", // start the animation when ".box" enters the viewport (once)
      x: 500,
    }); */
    ScrollTrigger.create({
      trigger: "#contact-button",
      start: "top 80%+=50px",
      toggleClass: "activeTextAnimation",
    });
    ScrollTrigger.create({
      trigger: "#arrow",
      start: "top 80%+=50px",
      toggleClass: "activeTextAnimation",
    });
  }, []);
  return (
    <section
      id="about"
      className={`h-screen w-full p-8 pt-24 flex flex-col items-center gap-8`}
    >
      <Title number={"01"} title={"à propo de moi"} />

      <p className={` text-lg lg:text-2xl font-medium`}>
        Salut je suis Téo goulois ! <br />
        <br />
        Un développeur front-end / fullstack. Passioné pars l’univers tech,
        j’aime développer tout types de sites.
        <br />
        <br />
        Toujours curieux d&apos;en apprendre plus, Je suis actuellement à la
        recherche d&apos;une alternance en tant que développeur web.
        <br />
        <br />
        Des questions ? n&apos;hésitez pas à me contacter !
      </p>
      <div
        onClick={() => goToSection("#contact")}
        className="flex items-center gap-6 cursor-pointer self-start mt-6"
      >
        <div
          id="arrow"
          className=" transition-opacity opacity-0 relative rounded-md animate-xDeplacement border border-white w-8 h-0 after:content-[''] after:absolute after:translate-x-[75%] after:-translate-y-2/4 after:rotate-45 after:border-t-2 after:border-r-2  after:w-4 after:h-4 after:bg-transparent "
        ></div>
        <p
          id="contact-button"
          className="uppercase font-bold opacity-0 tracking-[-20px] outlineText text-2xl"
        >
          Contact
        </p>
      </div>
    </section>
  );
};

export default About;
