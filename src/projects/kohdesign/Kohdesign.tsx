import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useMouse } from "react-use";
import "./Kohdesign.css";

export const Kohdesign: React.FC = () => {
  // input
  const ref = useRef(null);
  const { elX, elY } = useMouse(ref);

  // data

  // ui
  return (
    <div ref={ref} className="kohdesign-container">
      <motion.div
        className="kohdesign-dice"
        animate={{
          x: elX,
          y: elY,
        }}
        whileHover={{
          scale: 1.8,
          skewX: 10,
          skewY: 15,
          background: "black",
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          mass: 1,
        }}
      >
        <div className="kohdesign-text">개자이너1일차</div>
        <div className="kohdesign-emoji-container">
          <div className="kohdesign-emoji">🫠</div>
          <div className="kohdesign-emoji">❤️</div>
          <div className="kohdesign-emoji">🍏</div>
        </div>
      </motion.div>
    </div>
  );
};
