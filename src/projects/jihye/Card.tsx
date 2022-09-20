import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useMouse } from "react-use";

export const Card: React.FC = () => {
  // input
  const ref = useRef(null);
  const { elX, elY } = useMouse(ref);

  // ui
  return (
    <motion.div
      className="jihye-card"
      // animate={{
      //   x: elX,
      //   y: elY,
      // }}
      initial={{
        background:
          "linear-gradient(20deg, rgba(0,111,255,1) 0%, rgba(0,255,218,1) 100%)",
        // clipPath: "circle(50% at 50% 50%)",
      }}
      whileHover={{
        // scale: 1.05,
        // translateY: -80,
        // translateX: 50,

        background:
          "linear-gradient(120deg, rgba(0,111,255,1) 0%, rgba(0,255,218,1) 100%)",
        // clipPath: "circle(50% at 50% 50%)",
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
    ></motion.div>
  );
};
