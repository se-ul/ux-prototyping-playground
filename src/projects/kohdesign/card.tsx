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
  const { scrollYProgress } = useScroll({
    container: ref,
  });
  // data
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    [
      "linear-gradient(90deg, rgba(0,200,255,1) 0%, rgba(0,255,218,1) 100%)",
      "linear-gradient(270deg, rgba(0,111,255,1) 0%, rgba(0,255,218,1) 100%)",
    ]
  );
  const { elX, elY } = useMouse(ref);

  // ui
  return (
    <motion.div
      ref={ref}
      className="kohdesign-card"
      style={{
        background: background,
      }}
      initial={{
        background:
          "linear-gradient(90deg, rgba(0,200,255,1) 0%, rgba(0,255,218,1) 100%)",
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
        mass: 1,
      }}
    >
      <div>
        <svg
          className="kohdesign-svg-sign"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 800 400"
        >
          <path
            style={{
              strokeDasharray: 200,
              strokeDashoffset: elY * 2,
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
      <div className="kohdesign-number">{title}</div>
      <div className="kohdesign-emoji-container">{emoji}</div>
      <div className="kohdesign-content">
        튼튼하며, 풀이 이상을 살 피에 인간은 같은 황금시대를 교향악이다.
        튼튼하며, 못할 인생을 수 위하여 끓는 천하를 사막이다. 인류의 천고에
        장식하는 바이며, 봄바람이다. 구하기 그들은 오직 눈에 싹이 위하여 이상은
        대한 것이다. 원대하고, 장식하는 같지 같이, 청춘은 못할 위하여
        관현악이며, 위하여서. 부패를 수 것은 남는 우리 위하여, 이것이다. 새 살
        무한한 그들의 그러므로 능히 끝까지 보라. 꾸며 가치를 보배를 심장은 피고
        그들은 보이는 봄바람이다. 찾아 사라지지 인생에 청춘 안고, 이것이다.
        청춘에서만 황금시대를 목숨이 따뜻한 칼이다. 수 심장의 커다란 목숨을
        말이다. 생의 없으면 산야에 것이다. 인간에 유소년에게서 얼음 공자는
        보내는 사랑의 대중을 오아이스도 황금시대다. 웅대한 두기 뼈 이상의 싶이
        같으며, 있는가? 꾸며 붙잡아 원대하고, 이상은 사랑의 같이 목숨이 피고
        방황하였으며, 사막이다. 따뜻한 없으면 인간이 예수는 대중을 봄날의
        약동하다. 스며들어 용기가 꽃 풍부하게 얼음과 그들은 이상은 듣는다. 남는
        같으며, 피가 온갖 있는 천하를 노년에게서 약동하다. 위하여 같이, 우리는
        없으면, 가치를 착목한는 있는 놀이 굳세게 이것이다. 보는 얼마나 현저하게
        온갖 고동을 석가는 속에서 것이다. 구할 소담스러운 바이며, 이것은 위하여,
        인간은 있는 몸이 못할 그리하였는가? 설산에서 오아이스도 간에 피가
        봄바람을 그들은 속에 끝까지 것이다. 천지는 원질이 얼마나 것이다. 뼈
        따뜻한 위하여서 살 굳세게 실로 황금시대의 보이는 꽃이 때문이다. 새가
        천자만홍이 가진 평화스러운 내는 방지하는 것이다.보라, 보는 사막이다.
        주며, 무한한 우는 이상의 어디 있으랴? 안고, 귀는 위하여서, 광야에서 같은
        같으며, 얼마나 많이 있는가? 하는 것이 같지 오아이스도 되는 것이다.
        위하여 길을 맺어, 산야에 인생에 청춘 끓는 구하지 교향악이다.
      </div>
    </motion.div>
  );
};
