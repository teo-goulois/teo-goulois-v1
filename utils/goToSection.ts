import gsap from "gsap";

const goToSection = (id: string) => {
  gsap.to(window, { duration: 0.5, scrollTo: id });
};

export { goToSection };
