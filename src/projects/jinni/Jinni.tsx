import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import useMouse from "react-use/lib/useMouse";
import { Card } from "./Card";
import "./Jinni.css";

export const Jinni: React.FC = () => {
  // input
  const ref = useRef(null);
  const { docX, docY, elX, elY } = useMouse(ref);

  //data
  const [selectedCard, setSelectedCard] = useState(-1);

  // ui
  return (
    // <div ref={ref} className="jinni-playground-container">
    //   {docX} {docY}
    //   <motion.div
    //     className="jinni-dice"
    //     // animate={{
    //     //   x: elX,
    //     //   y: elY,
    //     // }}
    //     initial={{
    //       background:
    //         "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
    //     }}
    //     whileHover={{
    //       scale: 1.1,
    //       y: 50,
    //       skewX: 10,
    //       background:
    //         "linear-gradient(60deg, rgba(114,209,210,1) 0%, rgba(253,187,45,1) 100%)",
    //     }}
    //     whileTap={{
    //       scale: 0.9,
    //       background:
    //         "linear-gradient(71deg, rgba(19,150,152,1) 0%, rgba(255,230,176,1) 100%)",
    //     }}
    //     transition={{
    //       type: "spring",
    //       stiffness: 400,
    //       damping: 30,
    //       mass: 1,
    //     }}
    //   >
    //     <div className="jinni-number">숫자1</div>
    //     <div className="jinni-emoji-container">
    //       <div className="jinni-emoji">👻</div>
    //       <div className="jinni-emoji">👉</div>
    //       <div className="jinni-emoji">🧿</div>
    //     </div>
    //   </motion.div>
    // </div>

    <div
      ref={ref}
      className="jinni-playground-container"
      onClick={() => setSelectedCard(-1)}
    >
      <motion.div
        className="jinni-card-container jinni-card-container-1"
        animate={{
          x: 40,
          rotateZ: -20,
          y: selectedCard === 1 ? -300 : 0,
        }}
      >
        <Card></Card>
      </motion.div>
      <motion.div
        className="jinni-card-container jinni-card-container-2"
        animate={{
          x: -80,
          rotateZ: -5,
          y: selectedCard === 2 ? -300 : 0,
          scale: selectedCard === 1 ? 3 : 1,
          zIndex: selectedCard === 2 ? 10 : undefined,
        }}
        onClick={() => setSelectedCard(2)}
      >
        <Card></Card>
      </motion.div>
      <motion.div
        className="jinni-card-container jinni-card-container-3"
        animate={{
          x: -30,
          y: selectedCard === 3 ? -300 : 0,
          rotateZ: 5,
        }}
        onClick={() => setSelectedCard(3)}
      >
        <Card></Card>
      </motion.div>
      <motion.div
        className="jinni-card-container jinni-card-container-4"
        animate={{
          x: 80,
          y: selectedCard === 4 ? -300 : 0,
          rotateZ: 20,
        }}
        onClick={() => setSelectedCard(4)}
      >
        <Card></Card>
      </motion.div>
    </div>
  );
};
