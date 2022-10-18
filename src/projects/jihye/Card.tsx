import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { useMouse } from "react-use";

interface CardProps {
  title: string;
  emoji: string;
}
export const Card: React.FC<CardProps> = ({ title, emoji }) => {
  // input
  const ref = useRef(null);
  const { elX, elY } = useMouse(ref);

  const { scrollYProgress } = useScroll({
    container: ref,
  });
  // data
  // const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const color = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "linear-gradient(120deg, rgba(0,151,255,1) 0%, rgba(0,255,218,1) 100%)",
      "linear-gradient(120deg, rgba(0,255,218,1) 0%, rgba(0,151,255,1) 100%)",
    ]
  );
  const moving = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-15, 15]);

  // ui
  return (
    <motion.div
      ref={ref}
      className="jihye-card"
      style={{
        // opacity: opacity,
        background: color,
        translateY: moving,
        scale: moving,
        rotateZ: rotate,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
    >
      <div className="jihye-sign">
        <svg
          width={200}
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 800 400"
        >
          <path
            style={{
              strokeDasharray: 2500,
              strokeDashoffset: elY * 10,
            }}
            d="M67.26457214355469,117.4887924194336C113.38714223225911,101.53662414550782,278.95365458170573,39.13901260375977,305.82958984375,34.977577209472656C332.70552510579427,30.816141815185546,240.9566542561849,43.77279525756836,206.2780303955078,95.96412658691406C171.59940653483073,148.15545791625976,95.5934223429362,290.5411087036133,126.4573974609375,304.9327392578125C157.3213725789388,319.3243698120117,328.2929728190104,189.30344757080078,365.9192810058594,170.40359497070312C403.54558919270835,151.50374237060547,331.9999969482422,186.36770548502605,321.07623291015625,207.1748809814453C310.1524688720703,227.98205647786457,300.0538269042969,257.21973805745444,309.41705322265625,278.02691650390625C318.7802795410156,298.83409495035806,344.884892578125,311.5037512207031,369.5067138671875,314.7982177734375C394.12853515625,318.0926843261719,421.1659181722005,314.66068664550784,436.77130126953125,295.0672607421875C452.376684366862,275.47383483886716,459.0672597249349,237.20776824951173,450.2242126464844,213.45291137695312C441.38116556803385,189.69805450439452,377.68012756347656,172.0239173380534,391.0314025878906,172.1973114013672C404.3826776123047,172.37070546468098,480.09568583170574,212.78923950195312,519.2825317382812,214.3497772216797C558.4693776448568,215.91031494140626,592.334844156901,177.32137685139975,593.7219848632812,180.26905822753906C595.1091255696615,183.21673960367838,543.2765301513672,212.25709014892578,526.4573974609375,229.59640502929688C509.6382647705078,246.93571990966797,491.98804931640626,264.7533772786458,506.7264709472656,269.9551696777344C521.464892578125,275.15696207682294,599.5695432535807,245.57846374511718,602.6906127929688,256.5022277832031C605.8116823323568,267.4259918212891,495.6472224934896,340.5022369384766,522.8699340820312,326.4573974609375C550.0926456705729,312.4125579833984,714.1943013509115,200.15545979817708,743.4977416992188,183.85650634765625C772.801182047526,167.55755289713542,675.9999849446615,228.62780263264975,674.439453125,242.1524658203125C672.8789213053385,255.67712900797525,734.7324491373698,239.59342427571613,735.426025390625,253.81166076660156C736.1196016438802,268.029897257487,689.1240775553385,303.7309428914388,678.0269165039062,315.695068359375"
            fill="none"
            stroke-width="26"
            stroke='url("#SvgjsLinearGradient1004")'
            stroke-linecap="round"
            stroke-opacity="1"
            stroke-dasharray="0 0"
          ></path>
          <defs>
            <linearGradient id="SvgjsLinearGradient1004">
              <stop stop-color="hsl(37, 99%, 67%)" offset="0"></stop>
              <stop stop-color="hsl(316, 73%, 52%)" offset="1"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="jihye-title">
        With Messages, users can now edit or recall recently sent messages
      </div>
      <div className="jihye-content">
        With Messages, users can now edit or recall recently sent messages, and
        mark conversations as unread to revisit them later.9 iCloud Shared Photo
        Library makes it even easier to share a collection of photos with
        family. With Messages, users can now edit or recall recently sent
        messages, and mark conversations as unread to revisit them later.9
        iCloud Shared Photo Library makes it even easier to share a collection
        of photos with family. With Messages, users can now edit or recall
        recently sent messages, and mark conversations as unread to revisit them
        later.9 iCloud Shared Photo Library makes it even easier to share a
        collection of photos with family.
      </div>
    </motion.div>
  );
};
