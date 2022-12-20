import "./FaceDetect.css";

interface KeypadProps {}

export const Keypad: React.FC<KeypadProps> = ({}) => {
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
    </div>
  );
};
