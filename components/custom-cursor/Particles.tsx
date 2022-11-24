import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";

const Particles = () => {
  const requestRef = useRef<number | null>(null);

  const [dots, setDots] = useState(
    new Array(10).fill(0).map((a, index) => ({
      x: 0,
      y: 0,
      r: 85,
      fill: "hsl(100%, 100%, 100%, 50%)",
      index: index,
    }))
  );

  const inputRefs = useMemo(
    () => dots.map((i) => React.createRef<SVGCircleElement>()),
    [dots]
  );

  // cursor postion
  const endX = useRef(0);
  const endY = useRef(0);

  const mouseMoveEvent = (e: MouseEvent) => {
    console.log("move");

    endX.current = e.pageX;
    endY.current = e.pageY;
  };

  const animate = useCallback(() => {
    let x = endX.current;
    let y = endY.current;

    dots.forEach((dot, index, dots) => {
      var nextDot = dots[index + 1] || dots[0];
      // set dot attribute
      dot.x = x;
      dot.y = y;

      inputRefs[dot.index].current?.setAttribute("cx", dot.x.toString());

      inputRefs[dot.index].current?.setAttribute("cy", dot.y.toString());
      // change color
      const hue = (index / dots.length) * 90 + 180;
      inputRefs[dot.index].current?.setAttribute(
        "fill",
        `hsl(${hue}, 100%, 50%)`
      );
      //Change radius function of index
      inputRefs[dot.index].current?.setAttribute(
        "r",
        (dot.r * (1 - index / (dots.length * 3.4))).toString()
      );

      x += (nextDot.x - dot.x) * 0.3;
      y += (nextDot.y - dot.y) * 0.3;
    });
    requestRef.current = requestAnimationFrame(animate);
  }, [dots, inputRefs]);

  useEffect(() => {
    document.addEventListener("mousemove", mouseMoveEvent);
    animate();

    return () => {
      document.removeEventListener("mousemove", mouseMoveEvent);
      requestRef.current && cancelAnimationFrame(requestRef.current);
    };
  }, [animate]);

  return (
    <svg
      width={window.innerWidth}
      height={window.innerHeight}
      viewBox={`0 0 ${window.innerWidth} ${window.innerHeight}`}
      className="absolute w-screen h-screen top-0 left-0 pointer-events-none overflow-visible z-[1] "
    >
      <defs>
        <filter id="f1" x="-50%" y="-50%" width={"1150%"} height={"550%"}>
          <feGaussianBlur in="SourceGraphic" stdDeviation="16" />
        </filter>
      </defs>
      <g
        fill="rgb(19, 210, 216)"
        fillOpacity={1}
        strokeWidth="5"
        filter="url(#f1)"
      >
        {[...dots].reverse().map((dot, index) => {
          return (
            <circle
              key={dot.index}
              ref={
                inputRefs[dot.index]
              } /*  cy={dot.y} cx={dot.x} r={dot.r} fill={dot.fill}  */
            />
          );
        })}
      </g>
    </svg>
  );
};

export default Particles;
