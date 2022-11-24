import React from "react";

const Presentation = () => {
  return (
    <section
      id="canvas-container"
      className={`h-screen w-full flex flex-col items-center justify-center`}
    >
      <p
        className={`font-Lexend relative z-[1] p-12 uppercase font-black text-5xl text-center -translate-y-[30%]`}
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
