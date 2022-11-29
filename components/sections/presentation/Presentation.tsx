import React from "react";

const Presentation = () => {
  return (
    <section
      data-scroll-section
      id="presentation"
      className={`h-screen w-screen flex flex-col items-center justify-center`}
    >
      <p
        className={`relative z-[1] w-4/5 mx-auto uppercase font-black text-4xl lg:text-5xl text-center -translate-y-[25%]`}
      >
        Hey, Je suis{" "}
        <span className="text-transparent bg-gradient-to-r from-cyan-500 to-violet-500 bg-clip-text bg-[length:400%_400%] animate-gradient">
          téo goulois
        </span>{" "}
        je suis web développeur front-end
      </p>
    </section>
  );
};

export default Presentation;
