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

const Skills = () => {
  return (
    <section
      id="skills"
      className={`h-screen w-full p-8 pt-24 flex flex-col items-center gap-8`}
    >
      <Title number={"03"} title={"mes compétences"} />

      <div className="z-[2] ">
        <div className="flex group items-center gap-4 font-bold text-4xl bg-bg p-6 rounded-lg border border-primary  transition-colors">
          <div className="h-8 group-hover:bg-white group-hover:text-blue-500 textblue bg-bg transition-all">
            <TypescriptIcon />
          </div>
          <div className="relative">
            <p
              className={` relative   z-10`}
            >
              TypeScript
            </p>
            {/* <div
              className={`bg-red-400 absolute bg-[length:20px_10px] bg-center top-1 left-0  h-full w-[100%]  z-[9]`}
            ></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
