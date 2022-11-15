import { useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { useMouse } from "react-use";

export const JeongbinCard: React.FC = ({}) => {
  //input
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
  });

  const { elY } = useMouse(ref);

  //data
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(187,0,255,1) 100%)",
      "linear-gradient(270deg, rgba(255,0,36,1) 0%, rgba(187,0,255,1) 100%)",
    ]
  );

  //ui
  return <div></div>;
};
