import { motion } from "framer-motion";
import React from "react";

interface ChipProps {
  name: string;
  lighthex: string;
  darkhex: string;
  trans: string;
}

export const Chip: React.FC<ChipProps> = ({
  name,
  lighthex,
  darkhex,
  trans,
}) => {
  return (
    <motion.div
      style={{
        display: "flex",
        alignItems: "left",
        justifyContent: "top",
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
          backgroundColor:
            "#" + lighthex.slice(2, 8) + lighthex.substring(0, 2),
          width: "120px",
          height: "120px",
          marginBottom: "6px",
          borderRadius: "16px",
          borderColor: "rgba(0, 0, 0, 0.05)",
          borderWidth: "0.2px",
          border: "solid",
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
          fontSize: "14px",
          color: "#b0b8c1",
          marginLeft: "4px",
          marginBottom: "2px",
        }}
      >
        #{lighthex.slice(2, 8)} {Math.floor(parseInt(trans, 16) * (100 / 255))}%
      </div>
    </motion.div>
  );
};
