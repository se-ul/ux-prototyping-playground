import "./FaceDetect.css";

interface IntroProps {}

export const Intro: React.FC<IntroProps> = ({}) => {
  // ui
  return (
    <div>
      <div
        style={{
          fontFamily: "Sf Pro Display",
          fontWeight: 600,
          color: "white",
          width: "300px",
          height: "180px",
          borderColor: "red",
          border: "2px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            fontSize: 22,
            opacity: 0.3,
          }}
        >
          {" "}
          TOTAL
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: 42,
          }}
        >
          {" "}
          21,900
        </div>
      </div>
      <div
        style={{
          color: "white",
          opacity: 0.6,

          width: "300px",
          height: "84px",
          border: "2px",
          borderColor: "blue",
          display: "flex",
          gap: "20px",
          flexDirection: "column",
          paddingBottom: "36px",
          justifyContent: "flex-end",
        }}
      >
        <div
          style={{
            fontFamily: "Sf Pro Display",
            fontSize: 22,

            fontWeight: 600,
            padding: "0 32px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>삼다수</div>
          <div>12,000</div>
        </div>
        <div
          style={{
            fontFamily: "Sf Pro Display",
            fontSize: 22,
            fontWeight: 600,
            padding: "0 32px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>돌얼음</div>
          <div>9,800</div>
        </div>
      </div>
    </div>
  );
};
