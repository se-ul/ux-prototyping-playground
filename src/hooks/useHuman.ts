import Human, { Config, FaceResult, Result } from "@vladmandic/human";
import { RefObject, useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";

const humanConfig: Partial<Config> = {
  backend: "webgl",
  modelBasePath: "/models",
  face: {
    enabled: true,
    detector: { rotation: true },
  },
  filter: { enabled: false },
  gesture: { enabled: false },
  body: { enabled: false },
  hand: { enabled: false },
  object: { enabled: false },
  segmentation: { enabled: false },
};

const human = new Human(humanConfig);

export function useHuman(webcamRef: RefObject<Webcam>) {
  const rafRef = useRef<number>();
  const [faces, setFaces] = useState<FaceResult[]>([]);

  useEffect(() => {
    webcamRef.current.video.width = webcamRef.current.video.videoWidth;
    webcamRef.current.video.height = webcamRef.current.video.videoHeight;

    const detect = async () => {
      const result = await detectFace(webcamRef.current);
      setFaces(result.face);
      rafRef.current = requestAnimationFrame(detect);
    };

    detect();

    return () => cancelAnimationFrame(rafRef.current);
  }, [webcamRef]);

  return faces;
}

async function detectFace(webcam: Webcam): Promise<Result> {
  const video = webcam.video;
  video.width = webcam.video.videoWidth;
  video.height = webcam.video.videoHeight;
  return await human.detect(video);
}
