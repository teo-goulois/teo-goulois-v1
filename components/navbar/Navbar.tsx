import React, { useCallback, useEffect, useRef, useState } from "react";
import HamburgerMenu from "./hamburger/Index";
// Gsap
import gsap from "gsap";
// Utils
import { scrollTo } from "../../utils/scrollToLocomotive";
// locomotive scroll
import { useLocomotiveScroll } from "react-locomotive-scroll";

type Section = {
  title: string;
  id: string;
};
type Props = {
  sections: Section[];
};

const Navbar = ({ sections }: Props) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scroll } = useLocomotiveScroll();
  const [open, setOpen] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleScrollTo = useCallback(
    (id: string) => {
      setOpen(false);
      const target = document.querySelector(id);
      scroll.scrollTo(target);
    },
    [scroll]
  );

  useEffect(() => {
    gsap.to(ref.current, {
      duration: 1,
      opacity: 1,
      ease: "power2",
      delay: 2
    });
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={(e) => {
        setIsHovered(true);
      }}
      className={`fixed top-8 z-[12] mx-auto  flex max-h-[300px] w-screen flex-col items-center overflow-hidden bg-gray px-4 py-2  text-light-gray opacity-0 backdrop-blur-[80px]  ${
        open
          ? "h-2/4 w-screen -translate-y-8 animate-navbarIn  justify-start rounded-none  border-0 "
          : "h-[58px] w-[70%] animate-navbarOut rounded-lg border border-gray"
      } ${!isHovered ? "preload" : ""} `}
    >
      <div className={`flex w-full items-center justify-between`}>
        <div className={`flex items-center text-4xl`}>
          <div>T</div>
          <div className={`w-full overflow-hidden`}>
            <div className={`relative animate-logo text-base`}>eo Goulois</div>
          </div>
        </div>

        <div
          onClick={() => setOpen((prev) => !prev)}
          className={`group flex cursor-pointer  items-center transition-transform hover:scale-110 `}
        >
          <p className="text-xl">Menu</p>
          <HamburgerMenu active={open} />
        </div>
      </div>

      <div
        className={`flex w-full flex-col gap-4 py-6 px-2 font-Lexend-Zetta text-lg ${
          open ? "translate-x-0 scale-x-100" : "-translate-x-full scale-x-0"
        } origin-top-left transition-transform duration-500`}
      >
        {sections.map((section) => (
          <span
            key={section.title}
            className="cursor-pointer capitalize hover:underline"
            onClick={() => handleScrollTo(section.id)}
          >
            {section.title}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
