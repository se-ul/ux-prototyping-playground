import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useMouse } from "react-use";
import "./Kangsr.css";

export const Kangsr: React.FC = () => {
  // input

  const ref = useRef(null);
  const { docX, docY, elX, elY } = useMouse(ref);

  // ui
  return (
    <div ref={ref} className="kangsr-container">
      {/* {elX} {elY} */}
      <motion.div
        className="kangsr-filter"
        initial={{
          clipPath: `polygon(
            20% 0%,
            0% 20%,
            30% 50%,
            0% 80%,
            20% 100%,
            50% 70%,
            80% 100%,
            100% 80%,
            70% 50%,
            100% 20%,
            80% 0%,
            50% 30%
          )`,
        }}
        whileHover={{
          scale: 1.2,
          opacity: 0.1,
          clipPath: `polygon(10% 25%, 35% 25%, 35% 0%, 65% 0%, 65% 25%, 90% 25%, 90% 50%, 65% 50%, 65% 100%, 35% 100%, 35% 50%, 10% 50%)`,
        }}
        // animate={{
        //   x: elX,
        //   y: elY,
        // }}
      ></motion.div>
      <motion.div
        className="kangsr-dice"
        // animate={{
        //   x: elX,
        //   y: elY,
        // }}
        initial={{
          background:
            "linear-gradient(180deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
        }}
        whileHover={{
          scale: 1.15,
          skewX: 1,
          background:
            "linear-gradient(0deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 13%, rgba(252,250,69,1) 100%)",
        }}
        transition={{
          // type: "tween",
          // ease: "easeInOut"
          type: "spring",
          stiffness: 400,
          damping: 30,
          mass: 1,
        }}
      >
        <div className="kangsr-number">Cars</div>
        <div className="kangsr-emoji-container">
          <div className="kangsr-emoji">🚗</div>
          <div className="kangsr-emoji">🚗</div>
          <div className="kangsr-emoji">🚗</div>
        </div>
      </motion.div>
    </div>
  );
};
