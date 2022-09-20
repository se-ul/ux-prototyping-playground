import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useMouse } from "react-use";

interface CardProps {
  x: number;
  y: number;
}

export const Card: React.FC = () => {
  // input
  const ref = useRef(null);
  const { elX, elY } = useMouse(ref);

  // data

  // ui
  return (
    <motion.div
      className="kohdesign-card"
      initial={{
        background:
          "linear-gradient(0deg, rgba(220,255,51,1) 0%, rgba(0,238,255,1) 100%)",
      }}
      animate={{
        x: elX,
        y: elY,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 1,
      }}
    ></motion.div>
  );
};
