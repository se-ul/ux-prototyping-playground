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
      <motion.div className="jihye-background-filter">jihye</motion.div>
      <motion.div
        className="jihye-dice"
        // animate={{
        //   x: elX,
        //   y: elY,
        // }}
        initial={{
          background:
            "linear-gradient(20deg, rgba(0,111,255,1) 0%, rgba(0,255,218,1) 100%)",
          clipPath: `polygon(
            50% 0%,
            90% 20%,
            100% 60%,
            75% 100%,
            25% 100%,
            0% 60%,
            10% 20%
          )`,
        }}
        whileHover={{
          scale: 1.2,
          background:
            "linear-gradient(120deg, rgba(0,111,255,1) 0%, rgba(0,255,218,1) 100%)",
          clipPath: "circle(50% at 50% 50%)",
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
      >
        <div className="jihye-number"></div>
        <div className="jihye-emoji-container">
          <div className="jihye-emoji">🦋</div>
        </div>
      </motion.div>
    </div>
  );
};
