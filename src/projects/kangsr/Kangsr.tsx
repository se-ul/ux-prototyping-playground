import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { useMouse } from "react-use";
import { Card } from "./Card";
import "./Kangsr.css";

export const Kangsr: React.FC = () => {
  // input

  const ref = useRef(null);
  const { docX, docY, elX, elY } = useMouse(ref);

  const [selectedCard, setSelectedCard] = useState(-1);
  // ui
  return (
    <div
      ref={ref}
      className="kangsr-container"
      // onClick={() => setSelectedCard(-1)}
    >
      {/* {elX} {elY} */}

      <motion.div
        className="kangsr-card-container kangsr-card-container-1"
        animate={{
          x: -80,
          rotateZ: selectedCard === 0 ? 0 : -20,
          y: selectedCard === 0 ? -400 : 0,
          scale: selectedCard === 0 ? 1.2 : 1,
        }}
        onClick={(event) => {
          setSelectedCard(0);
        }}
      >
        <Card title="Car" emoji="🚗"></Card>
      </motion.div>
      <motion.div
        className="kangsr-card-container kangsr-card-container-2"
        animate={{
          y: selectedCard === 1 ? -400 : -20,
          scale: selectedCard === 0 ? 1.2 : 1,
        }}
        onClick={() => setSelectedCard(1)}
      >
        <Card title="Ship" emoji="🛳"></Card>
      </motion.div>
      <motion.div
        className="kangsr-card-container kangsr-card-container-3"
        animate={{
          x: 80,
          rotateZ: selectedCard === 2 ? 0 : 20,
          y: selectedCard === 2 ? -400 : 0,
          scale: selectedCard === 0 ? 1.2 : 1,
        }}
        onClick={() => setSelectedCard(2)}
      >
        <Card title="Rocket" emoji="🚀"></Card>
      </motion.div>
    </div>
  );
};
