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
