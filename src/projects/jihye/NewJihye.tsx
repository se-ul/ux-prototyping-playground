import React, { useRef } from "react";
import { useMouse } from "react-use";
import "./Jihye.css";

export const NewJihye: React.FC = () => {
  // input
  const ref = useRef(null);
  const { elX, elY } = useMouse(ref);
  // data
  // const x = (elX / 300) * 30 - 30;
  // const y = (elY / 200) * 30 - 30;

  // ui
  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        backgroundColor: "grey",
        display: "table",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "30px",
      }}
    >
      <div
        style={{
          width: "300px",
          height: "180px",
          borderColor: "red",
          border: "2px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            textAlign: "center",
            fontFamily: "Sf Pro Rounded, bold",
            fontSize: 22,
          }}
        >
          {" "}
          TOTAL
        </div>
        <div
          style={{
            textAlign: "center",
            fontFamily: "Sf Pro Rounded, bold",
            fontSize: 42,
          }}
        >
          {" "}
          21,900
        </div>
      </div>
      <div
        style={{
          width: "300px",
          height: "120px",
          border: "2px",
          borderColor: "blue",
          display: "table",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            padding: "4px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>삼다수</div>
          <div>12,000</div>
        </div>
        <div
          style={{
            padding: "4px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>돌얼음</div>
          <div>9,800</div>
        </div>
      </div>
    </div>
    // <div
    //   style={{
    //     backgroundColor: "black",
    //     width: "100%",
    //     height: "100%",
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //   }}
    // >
    //   <motion.div
    //     style={{
    //       background:
    //         "linear-gradient(56deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
    //       width: "300px",
    //       height: "200px",
    //       borderRadius: "22px",
    //       display: "flex",
    //       alignItems: "center",
    //       justifyContent: "center",
    //       perspective: "1200px",
    //     }}
    //   >
    //     <motion.div
    //       ref={ref}
    //       style={{
    //         backgroundColor: "black",
    //         width: "296px",
    //         height: "196px",
    //         borderRadius: "20px",
    //         display: "flex",
    //         alignItems: "flex-end",
    //       }}
    //       animate={{
    //         rotateY: -y,
    //         rotateX: x,
    //       }}
    //     >
    //       <div style={{ display: "flex", padding: 22, gap: 12 }}>
    //         <div
    //           style={{
    //             backgroundColor: "white",
    //             opacity: 0.2,
    //             borderRadius: "100%",
    //             width: "48px",
    //             height: "48px",
    //           }}
    //         ></div>
    //         <div
    //           style={{
    //             display: "flex",
    //             alignItems: "center",
    //             justifyContent: "center",
    //             flexDirection: "column",
    //             gap: 12,
    //           }}
    //         >
    //           <div
    //             style={{
    //               backgroundColor: "white",
    //               opacity: 0.2,
    //               borderRadius: "4px",
    //               width: "150px",
    //               height: "18px",
    //             }}
    //           ></div>
    //           <div
    //             style={{
    //               backgroundColor: "white",
    //               opacity: 0.2,
    //               borderRadius: "4px",
    //               width: "150px",
    //               height: "18px",
    //             }}
    //           ></div>
    //         </div>
    //       </div>
    //     </motion.div>
    //   </motion.div>
    // </div>
  );
};
