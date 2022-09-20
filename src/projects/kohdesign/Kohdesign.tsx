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
        className="kohdesign-background-filter"
        initial={{
          clipPath: `polygon(
          5% 50%,
          100% 0%,
          100% 75%,
          100% 0%,
          5% 50%
        )`,
        }}
        whileHover={{
          clipPath: "polygon(50% 30%, 20% 100%, 100% 50%, 100% 30%, 80% 50%)",
        }}
      ></motion.div>
      <motion.div
        className="kohdesign-dice"
        initial={{
          background:
            "linear-gradient(0deg, rgba(220,255,51,1) 0%, rgba(0,238,255,1) 100%)",
        }}
        animate={{
          x: elX,
          y: elY,
        }}
        // whileHover={{
        //   scale: 1.8,
        //   skewX: 4,
        //   skewY: 6,
        //   background:
        //     "linear-gradient(90deg, rgba(0,0,51,1) 0%, rgba(0,0,255,1) 100%)",
        // }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 10,
          mass: 1,
        }}
      >
        <div className="kohdesign-text">개자이너2일차</div>
        <div className="kohdesign-emoji-container">
          <div className="kohdesign-emoji">🫠</div>
          <div className="kohdesign-emoji">❤️</div>
          <div className="kohdesign-emoji">🍏</div>
        </div>
      </motion.div>
    </div>
  );
};
