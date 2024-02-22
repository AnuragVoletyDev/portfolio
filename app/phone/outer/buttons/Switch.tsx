import React from "react";

const Switch = () => {
  return (
    <div
      style={{
        backgroundColor: "#8e8a87",
        borderWidth: "0.5",
        borderColor: "#514D4A",
        borderTopLeftRadius: "7px",
        borderBottomLeftRadius: "7px",
        height: "33px",
        width: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        position: "absolute",
        top: 170,
        left: -4,
        justifyContent: "center",
      }}
    >
      <div
        style={{
          height: 1,
          width: 1,
          backgroundColor: "#0c0a09",
        }}
      ></div>
      <div
        style={{
          height: 27,
          display: "flex",
        }}
      >
        <div
          style={{
            height: "100%",
            width: 1,
            backgroundColor: "#5c5a57",
            display: "flex",
          }}
        ></div>
        <div
          style={{
            height: "100%",
            width: 1,
            backgroundColor: "#312e2b",
            display: "flex",
          }}
        ></div>
      </div>
      <div
        style={{
          height: 1,
          width: 1,
          backgroundColor: "#0c0a09",
        }}
      ></div>
    </div>
  );
};

export default Switch;
