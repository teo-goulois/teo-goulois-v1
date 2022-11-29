import React, {
  Suspense,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import dynamic from "next/dynamic";
import Link from "next/link";

import LocomotiveScroll from "locomotive-scroll";

// Images
import PeaceImg from "../../../assets/images/peace.png";
import TypescriptIcon from "../../../assets/icons/TypescriptIcon";
// Components
import Title from "../Title";
/* import Scene from "./Scene";
 */
const Scene = dynamic(() => import("./Scene"), { ssr: false });
import { Loader } from "@react-three/drei";

// Icons

// Data
import ProjectsData from "../../../data/projects.json";
import { IProject } from "../../../types/typing";
import { Context } from "../../../context/Context";

const Projects = () => {
  const { meshProps, setMeshProps } = useContext(Context);

  const onMouseOver = (item: IProject) => {
    console.log('onmousehover');
    
    setMeshProps((prev) => ({
      ...prev,
      id: item.id,
      isHover: true,
    }));
  };

  const onMouseLeave = () => {
    console.log('onmouseleave');
    
    setMeshProps((prev) => ({
      ...prev,
      id: -2,
      isHover: false,
    }));
  };

  return (
    <section
      data-scroll-section
      id="projects"
      className={`h-screen w-full p-8 pt-24 flex flex-col items-center gap-8 relative`}
    >
      <Title number={"02"} title={"mes projets"} />

      <div data-scroll className="flex flex-col w-full gap-4">
        {ProjectsData.map((item, index) => {
          return (
            <div
              onMouseOver={(e) => {
                console.log("hover");

                onMouseOver(item);
              }}
             /*  onMouseEnter={(e) => {
                console.log("enter");

                onMouseOver(item);
              }} */
              onMouseLeave={(e) => {
                console.log("leave");

                onMouseLeave()
              }}
              key={item.title}
              className={`relative group z-[2] hover:z-10 min-h-[100px] menu__item px-6 py-2 flex flex-col lg:flex-row lg:items-center `}
            >
              <h1 className="text-2xl font-Lexend-Zetta font-bold tracking-widest uppercase outlineText group-hover:text-white whitespace-pre-wrap ">
                {item.title}{" "}
              </h1>
              <div
                className={`${
                  item.id === meshProps.id ? "scale-y-100" : "scale-y-0"
                } origin-top transition-transform mt-2 `}
              >
                <p className="slashAnimation">{item.description} </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
