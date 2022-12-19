import { useFacePredictions } from "hooks";
import React, { useRef } from "react";
import Webcam from "react-webcam";

const videoWidth = 640;
const videoHeight = 480;

export const FaceDetectionExample: React.FC = () => {
  const webcamRef = useRef<Webcam>(null);

  // input
  const predictions = useFacePredictions(webcamRef);

  // data
  const firstFaceBox = predictions[0]?.boundingBox;

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
          ></div>
        )}
      </div>
    </div>
  );
};
