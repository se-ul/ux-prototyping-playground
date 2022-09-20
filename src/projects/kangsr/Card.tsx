import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useMouse } from "react-use";

// interface CardProps {
//   x: number;
//   y: number;
// }

export const Card: React.FC = () => {
  // input

  const ref = useRef(null);
  const { docX, docY, elX, elY } = useMouse(ref);

  // ui
  return (
    <motion.div
      className="kangsr-card"
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
        skewX: 2,
        background:
          "linear-gradient(0deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 13%, rgba(252,250,69,1) 100%)",
      }}
      whileTap={{
        scale: 1,
      }}
      //   whileTap{{
      //     scale: 0.9.toExponential,
      //   }}
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
  );
};
