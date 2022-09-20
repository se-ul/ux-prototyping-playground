import { motion } from "framer-motion";
import React, { useRef } from "react";
import useMouse from "react-use/lib/useMouse";

interface CardProps {
  x: number;
  y: number;
}

export const Card: React.FC = () => {
  // input
  const ref = useRef(null);
  const { docX, docY, elX, elY } = useMouse(ref);

  //data

  // ui
  return (
    <motion.div
      className="jinni-card"
      initial={{
        background:
          "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
      }}
      whileHover={{
        scale: 1.1,
        y: 30,
        skewX: 3,
        background:
          "linear-gradient(60deg, rgba(114,209,210,1) 0%, rgba(253,187,45,1) 100%)",
      }}
      whileTap={{
        scale: 0.9,
        background:
          "linear-gradient(71deg, rgba(19,150,152,1) 0%, rgba(255,230,176,1) 100%)",
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
        mass: 1,
      }}
    >
      <div className="jinni-number">CARD</div>
      <div className="jinni-emoji-container">
        <div className="jinni-emoji">👻</div>
        <div className="jinni-emoji">👉</div>
        <div className="jinni-emoji">🧿</div>
      </div>
    </motion.div>
  );
};
