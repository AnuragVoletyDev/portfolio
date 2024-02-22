import React from "react";

const PowerButton = () => {
  return (
    <div
      style={{
        backgroundColor: "#8e8a87",
        borderWidth: "0.5",
        borderColor: "#514D4A",
        borderTopRightRadius: "7px",
        borderBottomRightRadius: "7px",
        height: "100px",
        width: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        position: "absolute",
        top: 279,
        right: -4,
        justifyContent: "center",
      }}
    >
      <div
        style={{
          height: 3,
          width: 3,
          backgroundColor: "#0c0a09",
        }}
      ></div>
      <div
        style={{
          height: 85,
          display: "flex",
        }}
      >
        <div
          style={{
            height: "100%",
            width: 1,
            backgroundColor: "#312e2b",
            display: "flex",
          }}
        ></div>
        <div
          style={{
            height: "100%",
            width: 1,
            backgroundColor: "#5c5a57",
            display: "flex",
          }}
        ></div>
      </div>
      <div
        style={{
          height: 3,
          width: 3,
          backgroundColor: "#0c0a09",
        }}
      ></div>
    </div>
  );
};

export default PowerButton;
