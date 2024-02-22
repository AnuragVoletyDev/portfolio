import React from "react";

const VolumeUp = () => {
  return (
    <div
      style={{
        backgroundColor: "#8e8a87",
        borderWidth: "0.5",
        borderColor: "#514D4A",
        borderTopLeftRadius: "7px",
        borderBottomLeftRadius: "7px",
        height: "65px",
        width: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        position: "absolute",
        top: 233,
        left: -4,
        justifyContent: "center",
      }}
    >
      <div
        style={{
          height: 2,
          width: 2,
          backgroundColor: "#0c0a09",
        }}
      ></div>
      <div
        style={{
          height: 55,
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
          height: 2,
          width: 2,
          backgroundColor: "#0c0a09",
        }}
      ></div>
    </div>
  );
};

export default VolumeUp;
