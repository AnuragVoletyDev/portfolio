import React from "react";

const Camera = () => {
  return (
    <div
      style={{
        height: "13px",
        width: "13px",
        borderRadius: "50%",
        backgroundColor: "#111524",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "9px",
          width: "9px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(3,1,13,1) 0%, rgba(8,20,71,1) 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "2px",
            width: "3px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #5163A7, #1C1962)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        ></div>
        <div
          style={{
            height: "3px",
            width: "3px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(35,89,101,1) 0%, rgba(14,49,73,1) 60%, rgba(0,23,54,1) 100%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Camera;
