import "../styles/globals.scss";
import type { AppProps } from "next/app";

// COntext
import { ContextProvider } from "../context/Context";
import { useEffect, useLayoutEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

export default function App({ Component, pageProps }: AppProps) {
  /* useEffect(() => window.dispatchEvent(new Event("resize")), [Component]); */

  useEffect(() => {
    let scroll: LocomotiveScroll;
    import("locomotive-scroll").then((locomotiveModule) => {
      scroll = new locomotiveModule.default({
        el: document.querySelector("[data-scroll-container]") as HTMLElement,
        smooth: true,
        resetNativeScroll: true,
        smartphone: {
          smooth: true,
          direction: "vertical",
        },
      });
    });

    // `useEffect`'s cleanup phase
    return () => {
      if (scroll) scroll.destroy();
    };
  });

  return (
    <ContextProvider>
      <main  data-scroll-container data-scroll-speed="2" >
        <Component {...pageProps} />
      </main>
    </ContextProvider>
  );
}
