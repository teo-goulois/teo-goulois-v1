import LocomotiveScroll from "locomotive-scroll";
import { MutableRefObject } from "react";

export const scrollTo = (id: string) => {
  window.location.hash = id;
};
