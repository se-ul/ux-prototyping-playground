import { motion } from "framer-motion";
import React, { useRef } from "react";
import useMouse from "react-use/lib/useMouse";
import "./Jinni.css";

export const Jinni: React.FC = () => {
  // input
  const ref = useRef(null);
  const { docX, docY, elX, elY } = useMouse(ref);

  //data

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

    <div ref={ref} className="jinni-playground-container">
      {docX} {docY}
      <motion.div
        className="jinni-background-filter"
        initial={{
          clipPath: `polygon(50% 0%, 0% 100%, 100% 100%)`,
        }}
        whileHover={{
          clipPath: `polygon(50% 0%, 0% 100%, 100% 50%)`,
        }}
      ></motion.div>
      <motion.div
        className="jinni-dice"
        animate={{
          x: elX,
          y: elY,
        }}
        initial={{
          background:
            "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
        }}
        whileHover={{
          scale: 1.1,
          y: 50,
          skewX: 10,
          background:
            "linear-gradient(60deg, rgba(114,209,210,1) 0%, rgba(253,187,45,1) 100%)",
        }}
        whileTap={{
          scale: 0.9,
          background:
            "linear-gradient(71deg, rgba(19,150,152,1) 0%, rgba(255,230,176,1) 100%)",
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
          mass: 1,
        }}
      >
        <div className="jinni-number">숫자1</div>
        <div className="jinni-emoji-container">
          <div className="jinni-emoji">👻</div>
          <div className="jinni-emoji">👉</div>
          <div className="jinni-emoji">🧿</div>
        </div>
      </motion.div>
    </div>
  );
};
