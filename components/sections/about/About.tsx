import React from "react";
// Components
import Title from "../Title";
// ---------------------- //
import { goToSection } from "../../../utils/goToSection";

const About = () => {
  return (
    <section
      id="about"
      className={`h-screen w-full p-8 pt-24 flex flex-col items-center gap-8`}
    >
      {<Title number={"01"} title={"à propo de moi"} />}

      <p className={`text-2xl font-medium font-Lexend`}>
        Salut je suis Téo goulois ! <br />
        <br />
        Un développeur front-end / fullstack. Passioné pars l’univers tech,
        j’aime développer tout types de sites.
        <br />
        <br />
        Toujours curieux d&apos;en apprendre plus, Je suis actuellement à
        la recherche d&apos;une alternance en tant que développeur web. 
        <br />
        <br />Des questions ? n&apos;hésitez pas à me contacter !
      </p>
      <div
        onClick={() => goToSection("#contact")}
        className="flex items-center gap-6 cursor-pointer self-start mt-6"
      >
        <div className="relative rounded-md animate-xDeplacement border border-white w-8 h-0 after:content-[''] after:absolute after:translate-x-[75%] after:-translate-y-2/4 after:rotate-45 after:border-t-2 after:border-r-2  after:w-4 after:h-4 after:bg-transparent "></div>
        <p className="font-Lexend-Zetta uppercase font-bold outlineText text-2xl">
          Contact
        </p>
      </div>
    </section>
  );
};

export default About;
