import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useMouse } from "react-use";
import "./Hyoni.css";

export const Hyoni: React.FC = () => {
  const ref = useRef(null);
  const { elX, elY } = useMouse(ref);

  // input

  // data

  // ui
  return (
    <div ref={ref} className="hyoni-playground-container">
      <motion.div
        className="hyoni-background-filter"
        initial={{
          clipPath: `polygon(
          50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%
        )`,
        }}
        whileHover={{
          clipPath: `polygon(
          20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%
        )`,
        }}
      ></motion.div>
      {/* {elX} {elY} */}
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
            "linear-gradient(90deg, rgba(179,255,172,1) 0%, rgba(184,237,238,1) 100%)",
        }}
        whileTap={{
          scale: 0.9,
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
    </div>
  );
};
