import { motion } from "framer-motion";
import React from "react";
import { useDeviceOrientation } from "the-platform";
import "./DeviceOrientationExample.css";

export const DeviceOrientationExample: React.FC = () => {
  // input
  const { alpha, beta, gamma } = useDeviceOrientation();

  // ui
  return (
    <div className="device-orientation-example-container">
      <motion.div
        className="device-orientation-example-plate"
        animate={{
          rotateZ: alpha,
          rotateX: -beta,
          rotateY: -gamma,
          transition: {
            duration: 0,
          },
        }}
        whileTap={{
          scale: 0.8,
        }}
      />
    </div>
  );
};
