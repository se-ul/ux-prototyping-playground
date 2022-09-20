import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useMouse } from "react-use";
import "./Jihye.css";

export const Jihye: React.FC = () => {
  // input
  const ref = useRef(null);
  const { elX, elY } = useMouse(ref);

  // ui
  return (
    <div ref={ref} className="jihye-container">
      <motion.div
        className="jihye-dice"
        animate={{
          x: elX,
          y: elY,
        }}
        whileHover={{
          scale: 1.2,
          backgroundColor: "blue",
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
      >
        <div className="jihye-number">하이</div>
        <div className="jihye-emoji-container">
          <div className="jihye-emoji">🟢</div>
        </div>
      </motion.div>
    </div>
  );
};
