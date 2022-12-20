import { motion } from "framer-motion";
import { useFacePredictions } from "hooks";
import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import "./FaceDetect.css";
import { Intro } from "./Intro";
import { Keypad } from "./keypad";
const videoWidth = "700px";
const videoHeight = "500px";

export const FaceDetectionExample: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);

  // input
  const predictions = useFacePredictions(webcamRef);

  // data
  const firstFaceBox = predictions[0]?.boundingBox;
  const [step, setStep] = useState(0);

  // ui
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{ position: "absolute", width: videoWidth, height: videoHeight }}
      >
        <Webcam forceScreenshotSourceSize ref={webcamRef} />
        {firstFaceBox && (
          <div
            style={{
              position: "absolute",
              border: "2px solid red",
              left: firstFaceBox.topLeft[0],
              top: firstFaceBox.topLeft[1],
              width: firstFaceBox.bottomRight[0] - firstFaceBox.topLeft[0],
              height: firstFaceBox.bottomRight[1] - firstFaceBox.topLeft[1],
            }}
          >
            <motion.div
              // layout
              transition={{ type: "tween", ease: "linear", duration: 0.1 }}
            >
              <div
                className="background-filter"
                style={{
                  width: "300px",
                  display: "table",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "30px",
                  transform: "translate(-10%,-100%)",
                }}
              >
                {step === 0 ? (
                  <div
                    // layoutId="1"
                    // initial={{ opacity: 0 }}
                    // animate={{ opacity: 1 }}
                    onClick={() => setStep(1)}
                  >
                    <Intro></Intro>
                  </div>
                ) : (
                  <div
                    // initial={{ opacity: 0 }}
                    // animate={{ opacity: 1 }}
                    onClick={() => setStep(0)}
                  >
                    <Keypad></Keypad>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};
