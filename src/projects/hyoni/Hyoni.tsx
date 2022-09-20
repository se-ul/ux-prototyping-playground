import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { useMouse } from "react-use";
import { Card } from "./Card";
import "./Hyoni.css";

export const Hyoni: React.FC = () => {
  const ref = useRef(null);
  const { elX, elY } = useMouse(ref);

  // input

  // data
  const [slectiedCard, setSelectedCard] = useState(-1);

  // ui
  return (
    <div
      ref={ref}
      className="hyoni-playground-container"
      // onClick={() => setSelectedCard(-1)}
    >
      <motion.div
        className="hyoni-card-container hyoni-card-container-1"
        animate={{
          x: -80,
          y: slectiedCard === 0 ? -300 : 0,
          scale: slectiedCard === 0 ? 1.5 : 1,
          rotateZ: -20,
        }}
        onClick={() => {
          setSelectedCard(0);
        }}
      >
        <Card></Card>
      </motion.div>
      <motion.div
        className="hyoni-card-container hyoni-card-container-2"
        animate={{
          y: slectiedCard === 1 ? -300 : -30,
          scale: slectiedCard === 1 ? 1.5 : 1,
        }}
        onClick={() => setSelectedCard(1)}
      >
        <Card></Card>
      </motion.div>
      <motion.div
        className="hyoni-card-container hyoni-card-container-3"
        animate={{
          x: 80,
          y: slectiedCard === 2 ? -300 : 0,
          scale: slectiedCard === 2 ? 1.5 : 1,
          rotateZ: 20,
        }}
        onClick={() => setSelectedCard(2)}
      >
        <Card></Card>
      </motion.div>
    </div>
  );
};
