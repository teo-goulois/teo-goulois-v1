import React, { useEffect, useRef, useState } from "react";
import HamburgerMenu from "./hamburger/Index";
// Gsap
import gsap from "gsap";

const Navbar = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [open, setOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleScrollTo = (id: string) => {
    setOpen(false);
    gsap.to(window, { duration: 0.5, scrollTo: id });
  };

/*   useEffect(() => {
    setTimeout(() => {
      console.log("time out");
      ref.current?.classList.add("animate-navbarOut");
    }, 1000);
  }, [open]); */

  return (
    <div
      ref={ref}
      onMouseEnter={(e) => {
        setIsHovered(true);
      }}
      className={`fixed mx-auto font-Genos  bg-gray backdrop-blur-[80px] top-8 px-4 py-2 text-light-gray flex flex-col  items-center overflow-hidden z-[2]  ${
        open
          ? "w-screen h-2/4 border-0 rounded-none  -translate-y-8 justify-start  animate-navbarIn "
          : "w-[70%] h-[58px] border border-gray rounded-lg animate-navbarOut"
      } ${!isHovered ? "preload" : ""} `}
    >
      <div className={`flex items-center justify-between w-full`}>
        <div className={`text-4xl flex items-center`}>
          <div>T</div>
          <div className={`w-full overflow-hidden`}>
            <div className={`relative text-base animate-logo`}>eo Goulois</div>
          </div>
        </div>

        <div
          onClick={() => setOpen((prev) => !prev)}
          className={`group flex items-center  hover:scale-110 transition-transform cursor-pointer `}
        >
          <p className="text-xl">Menu</p>
          <HamburgerMenu active={open} />
        </div>
      </div>

      <div
        className={`flex flex-col gap-4 w-full p-6 ${
          open ? "scale-x-100 translate-x-0" : "scale-x-0 -translate-x-full"
        } transition-transform duration-500 origin-top-left`}
      >
        <span
          onClick={() => handleScrollTo("#about")}
          className="text-2xl hover:underline cursor-pointer capitalize"
        >
          à propo
        </span>
        <span
          onClick={() => handleScrollTo("#projects")}
          className="text-2xl hover:underline cursor-pointer capitalize"
        >
          projects
        </span>
        <span
          onClick={() => handleScrollTo("#skills")}
          className="text-2xl hover:underline cursor-pointer capitalize"
        >
          compétences
        </span>
        <span
          onClick={() => handleScrollTo("#contact")}
          className="text-2xl hover:underline cursor-pointer capitalize"
        >
          contact
        </span>
      </div>
    </div>
  );
};

export default Navbar;
