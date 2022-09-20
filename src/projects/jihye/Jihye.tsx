import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { useMouse } from "react-use";
import { Card } from "./Card";
import "./Jihye.css";

export const Jihye: React.FC = () => {
  // input
  const ref = useRef(null);
  const { elX, elY } = useMouse(ref);

  // data
  const [selectedCard, setSelectedCard] = useState(-1);

  // ui
  return (
    <div
      ref={ref}
      className="jihye-container"
      // onClick={() => setSelectedCard(-1)}
    >
      <motion.div
        className="jihye-card-container jihye-card-container-1"
        animate={{
          rotateY: -10,
          rotateX: -10,
          rotateZ: selectedCard === 0 ? -40 : -10,
          x: selectedCard === 0 ? -200 : -30,
          y: selectedCard === 0 ? -300 : 0,
        }}
        onClick={() => setSelectedCard(0)}
      >
        <Card></Card>
      </motion.div>
      <motion.div
        className="jihye-card-container jihye-card-container-2"
        animate={{
          translateY: -40,
          x: -10,
          y: selectedCard === 1 ? -300 : 0,
        }}
        onClick={() => setSelectedCard(1)}
      >
        <Card></Card>
      </motion.div>
      <motion.div
        className="jihye-card-container jihye-card-container-3"
        animate={{
          rotateZ: selectedCard === 2 ? 40 : 10,
          x: selectedCard === 2 ? 200 : 30,
          y: selectedCard === 2 ? -300 : 0,
        }}
        onClick={() => setSelectedCard(2)}
      >
        <Card></Card>
      </motion.div>
    </div>
  );
};
