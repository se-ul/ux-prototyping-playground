import {
  AnnotatedPrediction,
  FaceMesh,
  load,
} from "@tensorflow-models/facemesh";
import "@tensorflow/tfjs";
import { RefObject, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

export function useFacePredictions(webcamRef: RefObject<Webcam>) {
  const intervalRef = useRef<NodeJS.Timer>();
  const [facePredictions, setFacePredictions] = useState<AnnotatedPrediction[]>(
    []
  );

  useEffect(() => {
    webcamRef.current.video.width = webcamRef.current.video.videoWidth;
    webcamRef.current.video.height = webcamRef.current.video.videoHeight;
    load().then((network) => {
      intervalRef.current = setInterval(async () => {
        const predictions = await detectFace(webcamRef.current, network);
        setFacePredictions(predictions);
      }, 50);
    });

    return () => clearInterval(intervalRef.current);
  }, [webcamRef]);

  return facePredictions;
}

async function detectFace(
  webcam: Webcam,
  network: FaceMesh
): Promise<AnnotatedPrediction[]> {
  const video = webcam.video;
  video.width = webcam.video.videoWidth;
  video.height = webcam.video.videoHeight;
  return await network.estimateFaces(video);
}
