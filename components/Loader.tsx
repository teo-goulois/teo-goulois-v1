import React from "react";
import { motion } from "framer-motion";

const Loader = () => {
  return (
    <motion.div
      initial={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
      }}
      transition={{
        duration: .5,
      }}
      className="bg-bg absolute top-0 left-0 right-0 bottom-0 z-20 flex items-center justify-center overflow-hidden"
    >
      <p className="font-bold text-white">Loader</p>
    </motion.div>
  );
};

export default Loader;
