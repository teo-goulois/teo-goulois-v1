import React from "react";
import TypescriptIcon from "../../../assets/icons/TypescriptIcon";
// Components
import Title from "../Title";

// Icons

/* 
ts: 56.12%
js: 23.05%
scss: 12.47%
HTML: 5.24%
css: 3.12%

*/

const Technos: string[] = [
  "html5/Css3",
  "javascript",
  "typescript",
  "react/nextjs",
  "tailwind",
  "responsive design",
  "git",
  "mongodb",
  "supabase/prisma",
  "threejs",
  "gsap",
];

const Skills = () => {
  return (
    <section
      data-scroll-section
      id="skills"
      className={`h-screen w-full p-8 pt-24 flex flex-col items-center gap-8 relative  `}
    >
      <Title number={"03"} title={"compétences"} />

      {
        <div className="flex flex-col gap-4 w-full">
          {Technos.map((item) => {
            return <p key={item} className="outlineText uppercase font-bold tracking-wide leading-[33px]"> {item} </p>;
          })}
        </div>
      }
    </section>
  );
};

export default Skills;
