import { motion } from "framer-motion";
import React from "react";

interface ChipProps {
  name: string;
  lighthex: string;
  darkhex: string;
}

export const Chip: React.FC<ChipProps> = ({ name, lighthex, darkhex }) => {
  return (
    <motion.div
      style={{
        display: "flex",
        alignItems: "left",
        justifyContent: "center",
        flexDirection: "column",
        gap: "6px",
        backgroundColor: "white",
        padding: "16px",
        position: "relative",
        borderRadius: "28px",
        boxShadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px",
      }}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 1,
      }}
    >
      <motion.div
        style={{
          backgroundColor: "#" + lighthex.substring(2) + "ff",
          width: "120px",
          height: "120px",
          marginBottom: "6px",
          borderRadius: "16px",
        }}
      ></motion.div>
      <div
        style={{
          textAlign: "left",
          fontWeight: "700",
          fontSize: "20px",
          color: "#191f28",
          marginLeft: "4px",
          width: "120px",
        }}
      >
        {name}
      </div>
      <div
        style={{
          textAlign: "left",
          fontWeight: "500",
          fontSize: "15px",
          color: "#b0b8c1",
          marginLeft: "4px",
          marginBottom: "2px",
        }}
      >
        #{lighthex}
      </div>
    </motion.div>
  );
};
