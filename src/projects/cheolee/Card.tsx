import { motion } from "framer-motion";
import React from "react";

export const Card: React.FC = () => {
  // input

  // data

  // ui
  return (
    <motion.div
      className="cheolee-card"
      initial={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(187,0,255,1) 100%)",
      }}
      whileHover={{
        background:
          "linear-gradient(180deg, rgba(255,0,36,1) 0%, rgba(187,0,255,1) 100%)",
      }}
      whileTap={{
        scale: 0.9,
        background:
          "linear-gradient(270deg, rgba(255,0,36,1) 0%, rgba(187,0,255,1) 100%)",
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
        mass: 1,
      }}
    >
      <div className="cheolee-number">숫자 1</div>
      <div className="cheolee-emoji-container">
        <div className="cheolee-emoji">👁</div>
      </div>
    </motion.div>
  );
};
