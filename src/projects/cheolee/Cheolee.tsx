import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useMouse } from "react-use";
import "./Cheolee.css";

export const Cheolee: React.FC = () => {
  // input
  const ref = useRef(null);
  const { elX, elY } = useMouse(ref);

  // data

  // ui
  return (
    <div ref={ref} className="cheolee-container">
      <motion.div
        className="dice"
        animate={{
          x: elX,
          y: elY,
        }}
        // whileHover={{
        //   scale: 1.5,
        //   skewX: 10,
        //   background: "blue",
        // }}
        whileTap={{
          scale: 0.9,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
          mass: 1,
        }}
      >
        <div className="number">숫자 1</div>
        <div className="emoji-container">
          <div className="emoji">👁</div>
        </div>
      </motion.div>
    </div>
  );
};
