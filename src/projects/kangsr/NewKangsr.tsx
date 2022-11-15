import { motion } from "framer-motion";
import { useRef, useState } from "react";

export const NewKangsr: React.FC = () => {
  // input
  const ref = useRef(null);
  const [selectedToggle, setSelectedToggle] = useState(0);

  // data

  // ui
  return (
    <div
      style={{
        background: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        style={{
          background: "#E6E8EB",
          width: "190px",
          height: "140px",
          borderRadius: "50px",
        }}
        whileHover={{
          background: "#DDE0E4",
        }}
      >
        <motion.div
          style={{
            background: "white",
            width: "110px",
            height: "110px",
            borderRadius: "38px",
            boxShadow: "0px 10px 10px 0px rgba(0, 0, 0, 0.08)",
            marginTop: "15px",
            marginLeft: "15px",
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 30px 30px 0px rgba(0, 0, 0, 0.1)",
          }}
          whileTap={{
            scale: 0.95,
            boxShadow: "0px 10px 10px 0px rgba(0, 0, 0, 0.08)",
          }}
          onClick={(event) => {
            setSelectedToggle(selectedToggle === 1 ? 0 : 1);
          }}
          animate={{
            x: selectedToggle === 0 ? 0 : 50,
          }}
        >
          <motion.div
            animate={{
              opacity: selectedToggle === 0 ? 1 : 0,
              scale: selectedToggle === 0 ? "100%" : "50%",
            }}
          >
            <img
              src="https://static.toss.im/icons/svg/icon-dollar-toggle-mono.svg"
              style={{
                width: "80px",
                height: "80px",
                position: "absolute",
                marginTop: "15px",
                marginLeft: "15px",
              }}
            />
          </motion.div>
          <motion.div
            style={{
              scale: "50%",
              opacity: "0",
            }}
            animate={{
              opacity: selectedToggle === 0 ? 0 : 1,
              scale: selectedToggle === 0 ? "50%" : "100%",
            }}
          >
            <img
              src="https://static.toss.im/icons/svg/icon-won-toggle-mono.svg"
              style={{
                width: "80px",
                height: "80px",
                position: "absolute",
                marginTop: "15px",
                marginLeft: "15px",
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
