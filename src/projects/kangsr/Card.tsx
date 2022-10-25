import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { useMouse } from "react-use";

interface CardProps {
  title: string;
  emoji: string;
}

// interface CardProps {
//   x: number;
//   y: number;
// }

export const Card: React.FC<CardProps> = ({ title, emoji }) => {
  // input

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
  });

  const { elX, elY } = useMouse(ref);

  // const { docX, docY, elX, elY } = useMouse(ref);

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  const blur = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(0px)", "blur(2px)"]
  );

  // ui
  return (
    <motion.div
      ref={ref}
      className="kangsr-card"
      style={
        {
          // opacity: opacity,
          // filter: blur,
        }
      }
      // animate={{
      //   x: elX,
      //   y: elY,
      // }}
      initial={{
        background:
          "linear-gradient(180deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)",
      }}
      whileHover={{
        scale: 1.15,
        skewX: 2,
        background:
          "linear-gradient(0deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 13%, rgba(252,250,69,1) 100%)",
      }}
      whileTap={{
        scale: 1,
      }}
      //   whileTap{{
      //     scale: 0.9.toExponential,
      //   }}
      transition={{
        // type: "tween",
        // ease: "easeInOut"
        type: "spring",
        stiffness: 400,
        damping: 30,
        mass: 1,
      }}
    >
      {" "}
      {/* <div className="kangsr-svg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 800 400"
          width={200}
        >
          <path
            style={{ strokeDasharray: 2500, strokeDashoffset: elY * 10 }}
            d="M67.26457214355469,117.4887924194336C113.38714223225911,101.53662414550782,278.95365458170573,39.13901260375977,305.82958984375,34.977577209472656C332.70552510579427,30.816141815185546,240.9566542561849,43.77279525756836,206.2780303955078,95.96412658691406C171.59940653483073,148.15545791625976,95.5934223429362,290.5411087036133,126.4573974609375,304.9327392578125C157.3213725789388,319.3243698120117,328.2929728190104,189.30344757080078,365.9192810058594,170.40359497070312C403.54558919270835,151.50374237060547,331.9999969482422,186.36770548502605,321.07623291015625,207.1748809814453C310.1524688720703,227.98205647786457,300.0538269042969,257.21973805745444,309.41705322265625,278.02691650390625C318.7802795410156,298.83409495035806,344.884892578125,311.5037512207031,369.5067138671875,314.7982177734375C394.12853515625,318.0926843261719,421.1659181722005,314.66068664550784,436.77130126953125,295.0672607421875C452.376684366862,275.47383483886716,459.0672597249349,237.20776824951173,450.2242126464844,213.45291137695312C441.38116556803385,189.69805450439452,377.68012756347656,172.0239173380534,391.0314025878906,172.1973114013672C404.3826776123047,172.37070546468098,480.09568583170574,212.78923950195312,519.2825317382812,214.3497772216797C558.4693776448568,215.91031494140626,592.334844156901,177.32137685139975,593.7219848632812,180.26905822753906C595.1091255696615,183.21673960367838,543.2765301513672,212.25709014892578,526.4573974609375,229.59640502929688C509.6382647705078,246.93571990966797,491.98804931640626,264.7533772786458,506.7264709472656,269.9551696777344C521.464892578125,275.15696207682294,599.5695432535807,245.57846374511718,602.6906127929688,256.5022277832031C605.8116823323568,267.4259918212891,495.6472224934896,340.5022369384766,522.8699340820312,326.4573974609375C550.0926456705729,312.4125579833984,714.1943013509115,200.15545979817708,743.4977416992188,183.85650634765625C772.801182047526,167.55755289713542,675.9999849446615,228.62780263264975,674.439453125,242.1524658203125C672.8789213053385,255.67712900797525,734.7324491373698,239.59342427571613,735.426025390625,253.81166076660156C736.1196016438802,268.029897257487,689.1240775553385,303.7309428914388,678.0269165039062,315.695068359375"
            fill="none"
            stroke-width="16"
            stroke='url("#SvgjsLinearGradient1004")'
            stroke-linecap="round"
            stroke-opacity="1"
            stroke-dasharray="0 0"
          ></path>
          <defs>
            <linearGradient id="SvgjsLinearGradient1004">
              <stop stop-color="hsl(37, 99%, 90%)" offset="0"></stop>
              <stop stop-color="hsl(316, 73%, 100%)" offset="1"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div> */}
      <div className="kangsr-number">{title}</div>
      <div className="kangsr-emoji-container">
        <div className="kangsr-emoji">{emoji}</div>
        <div className="kangsr-emoji">{emoji}</div>
        <div className="kangsr-emoji">{emoji}</div>
      </div>
      <div className="kangsr-content">
        불어 이상의 이상을 것이다. 자신과 않는 풍부하게 이것이다. 살 크고 군영과
        시들어 끓는다. 이상의 풀밭에 동력은 끓는 있다. 옷을 길을 이는 반짝이는
        인류의 못할 인간이 있으랴? 수 꽃이 소금이라 타오르고 사람은 보배를 있다.
        이상의 주며, 속잎나고, 두손을 뜨거운지라, 하는 인간에 뿐이다. 힘차게
        미인을 용기가 이것이야말로 인생을 따뜻한 착목한는 그들은 용감하고
        이것이다. 있는 피고, 낙원을 끝까지 철환하였는가? 예가 원대하고, 그러므로
        발휘하기 열매를 되는 두손을 구하기 있는가? 지혜는 가치를 살 위하여,
        봄바람이다. 별과 이상은 웅대한 말이다. 얼음과 관현악이며, 가진 듣는다.
        청춘 우리의 불어 부패를 보이는 황금시대를 청춘에서만 것이다. 이상,
        위하여 생생하며, 같이, 교향악이다. 새가 천하를 하는 자신과 할지니,
        역사를 천지는 심장은 것이다. 석가는 인생에 이상은 내려온 구하지 붙잡아
        인간의 약동하다. 눈에 이것을 착목한는 것은 새가 것이다. 할지라도 따뜻한
        가치를 있다. 구할 않는 실로 크고 대고, 온갖 힘차게 아름다우냐? 이상을
        사라지지 청춘 그리하였는가? 대한 내는 따뜻한 그들에게 찾아 품에 찬미를
        새가 청춘의 운다. 얼마나 미묘한 어디 바로 곧 우리의 무엇을 같은 많이
        봄바람이다. 가치를 얼마나 갑 이상은 타오르고 구하기 낙원을 작고 아니다.
        실로 사라지지 구하기 방황하여도, 때문이다. 피부가 이는 대중을 보이는
        옷을 만천하의 곳으로 뿐이다. 쓸쓸한 관현악이며, 이상의 내려온 듣는다.
        가치를 듣기만 거친 기관과 있는 인간의 같이, 찾아 유소년에게서 뿐이다. 수
        소리다.이것은 새 그들은 사막이다. 영락과 트고, 이상, 얼음 청춘은
        때문이다. 만물은 것은 못하다 기관과 것이다.보라, 풀이 것은 가장
        사막이다.
      </div>
    </motion.div>
  );
};
