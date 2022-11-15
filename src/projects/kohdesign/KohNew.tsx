import { motion } from "framer-motion";
import React, { useRef } from "react";
import { useMouse } from "react-use";

export const KohNew: React.FC = () => {
  // input
  const ref = useRef(null);
  const { elX, elY } = useMouse(ref);

  // data
  const x = (elX / 296) * 8 - 4;
  const y = (elY / 196) * 16 - 8;

  // ui
  return (
    <div
      style={{
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <div
        style={{
          background:
            "linear-gradient(45deg, #40ffe8, rgba(187,100,255,1) 100%)",
          width: 300,
          height: 200,
          borderRadius: 16,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          perspective: "600px",
        }}
      >
        <motion.div
          ref={ref}
          style={{
            width: 299,
            height: 199,
            background: "white",
            borderRadius: 16,
            display: "flex",
            alignItems: "flex-end",
          }}
          animate={{
            rotateX: -y,
            rotateY: x,
            perspective: "1100px",
          }}
        >
          <div style={{ display: "flex", padding: 20, gap: 8 }}>
            <div
              style={{
                borderRadius: "100%",
                width: 32,
                height: 32,
                background:
                  "linear-gradient(45deg, #40ffe8, rgba(187,100,255,1) 100%)",
              }}
            ></div>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              <div
                style={{
                  width: 100,
                  height: 12,
                  borderRadius: 4,
                  background:
                    "linear-gradient(45deg, #40ffe8, rgba(187,100,255,1) 100%)",
                }}
              ></div>
              <div
                style={{
                  width: 60,
                  height: 12,
                  borderRadius: 4,
                  background:
                    "linear-gradient(45deg, #40ffe8, rgba(187,100,255,1) 100%)",
                }}
              ></div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
