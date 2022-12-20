import React from "react";
import { Chip } from "./Chip";
import json from "./colors.json";

const colors = Object.entries(json);

export const KangsrGrad: React.FC = () => {
  return (
    <div
      style={{
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap",
        padding: "30px",
      }}
    >
      {colors.map((color) => (
        <Chip
          name={color[0]}
          lighthex={color[1].light}
          darkhex={color[1].dark}
        ></Chip>
      ))}
    </div>
  );
};
