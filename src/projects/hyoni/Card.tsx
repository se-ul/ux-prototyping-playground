import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useMouse } from "react-use";

interface Cardprop {
  x: number;
  y: number;
}

export const Card: React.FC = () => {
  const ref = useRef(null);
  const { elX, elY } = useMouse(ref);

  // input

  // data

  // ui
  return (
    <motion.div
      className="hyoni-dice"
      animate={{
        x: elX,
        y: elY,
      }}
      // whileHover={{
      //   scale: 2,
      //   skewX: 10,
      //   background: "black",
      // }}
      initial={{
        background:
          "linear-gradient(90deg, rgba(179,255,172,1) 0%, rgba(184,237,238,1) 100%)",
      }}
      whileHover={{
        background:
          "linear-gradient(180deg, rgba(179,255,172,1) 0%, rgba(184,237,238,1) 100%)",
      }}
      whileTap={{
        scale: 0.9,
        background:
          "linear-gradient(230deg, rgba(179,255,172,1) 0%, rgba(184,237,238,1) 100%)",
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 10,
        mass: 1,
      }}
    >
      <div className="hyoni-number">ball</div>
      <div className="hyoni-emoji-container">
        <div className="hyoni-emoji">🎾</div>
      </div>
    </motion.div>
  );
};
