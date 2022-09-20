import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { useMouse } from "react-use";
import { Card } from "./Card";
import "./Cheolee.css";

export const Cheolee: React.FC = () => {
  // input
  const ref = useRef(null);
  const { elX, elY } = useMouse(ref);

  // data
  const [selectedCard, setSelectedCard] = useState(-1);

  // ui
  return (
    <div ref={ref} className="cheolee-container">
      <motion.div
        className="cheolee-card-container cheolee-card-container-1"
        animate={{
          x: -80,
          y: selectedCard === 0 ? -300 : 0,
          scale: selectedCard === 0 ? 1.2 : 1,
          rotateZ: -20,
          zIndex: selectedCard === 0 ? 10 : undefined,
        }}
        onClick={() => setSelectedCard(0)}
      >
        <Card></Card>
      </motion.div>
      <motion.div
        className="cheolee-card-container cheolee-card-container-2"
        animate={{
          y: selectedCard === 1 ? -300 : -20,
          scale: selectedCard === 1 ? 1.2 : 1,
          rotateZ: 0,
          zIndex: selectedCard === 1 ? 10 : undefined,
        }}
        onClick={() => setSelectedCard(1)}
      >
        <Card></Card>
      </motion.div>
      <motion.div
        className="cheolee-card-container cheolee-card-container-3"
        animate={{
          x: 80,
          y: selectedCard === 2 ? -300 : 0,
          scale: selectedCard === 2 ? 1.2 : 1,
          rotateZ: 20,
          zIndex: selectedCard === 2 ? 10 : undefined,
        }}
        onClick={() => setSelectedCard(2)}
      >
        <Card></Card>
      </motion.div>
    </div>
  );
};
