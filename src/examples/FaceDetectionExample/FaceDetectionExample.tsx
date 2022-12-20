import { motion } from "framer-motion";
import { useHuman } from "hooks/useHuman";
import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import "./FaceDetect.css";
import { Intro } from "./Intro";
import { Keypad } from "./keypad";

export const FaceDetectionExample: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);

  const [videoWidth, setVideoWidth] = useState(700);
  const [videoHeight, setVideoHeight] = useState(500);

  useEffect(() => {
    setInterval(() => {
      setVideoWidth(window.innerWidth);
      setVideoHeight(window.innerHeight);
    }, 1000);
  }, []);

  // input
  const faces = useHuman(webcamRef);

  // data
  const firstFace = faces[0];
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
        {firstFace && (
          <div
            style={{
              position: "absolute",
              border: "2px solid red",
              left: firstFace.box[0],
              top: firstFace.box[1],
              width: firstFace.box[2],
              height: firstFace.box[3],
              zIndex: 9999,
              perspective: 4000,
            }}
          >
            <motion.div
              style={{
                rotateX: -firstFace.rotation.angle.pitch * 50,
                rotateY: -firstFace.rotation.angle.yaw * 50,
                transformOrigin: "center",
              }}
            >
              <div
                className="background-filter"
                style={{
                  width: "300px",
                  display: "table",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "30px",
                  transform: `translate(-10%,-100%)`,
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
