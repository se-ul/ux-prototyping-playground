import { motion } from "framer-motion";
import React, { useRef } from "react";
import useMouse from "react-use/lib/useMouse";
import "./Jinni.css";

export const Jinni: React.FC = () => {
  // input
  const ref = useRef(null);
  const { docX, docY, elX, elY } = useMouse(ref);

  //data

  // ui
  return (
    <div ref={ref} className="jinni-playground-container">
      {docX} {docY}
      <motion.div
        className="jinni-dice"
        animate={{
          x: elX,
          y: elY,
        }}
        // whileHover={{
        // scale: 1.1,
        // y: 50,
        // skewX: 10,
        // background: "blue"
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
        <div className="jinni-number">숫자1</div>
        <div className="jinni-emoji-container">
          <div className="jinni-emoji">👻</div>
          <div className="jinni-emoji">👉</div>
          <div className="jinni-emoji">🧿</div>
        </div>
      </motion.div>
    </div>
  );
};
