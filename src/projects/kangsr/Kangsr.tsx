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
        className="kangsr-dice"
        animate={{
          x: elX,
          y: elY,
        }}
        // whileHover={{
        //   scale: 1.15,
        //   skewX: 1,
        //   background: "black"
        // }}
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
