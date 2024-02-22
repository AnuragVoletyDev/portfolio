import React from "react";

const Antennae = () => {
  return (
    <>
      <div
        className="antenna-bottom absolute"
        style={{
          height: "7px",
          width: "6px",
          backgroundColor: "#31302E",
          left: "104px",
          bottom: "0",
          zIndex: 1,
        }}
      ></div>
      <div
        className="antenna-top absolute"
        style={{
          height: "7px",
          width: "6px",
          backgroundColor: "#31302E",
          right: "104px",
          zIndex: 1,
        }}
      ></div>
      <div
        className="antenna-left-top absolute"
        style={{
          height: "7px",
          width: "6px",
          backgroundColor: "#31302E",
          top: "104px",
          zIndex: 1,
        }}
      ></div>
      <div
        className="antenna-left-bottom absolute"
        style={{
          height: "7px",
          width: "6px",
          backgroundColor: "#31302E",
          bottom: "104px",
          zIndex: 1,
        }}
      ></div>
      <div
        className="antenna-right-top absolute"
        style={{
          height: "7px",
          width: "6px",
          backgroundColor: "#31302E",
          top: "104px",
          right: "0",
          zIndex: 1,
        }}
      ></div>
      <div
        className="antenna-right-bottom absolute"
        style={{
          height: "7px",
          width: "6px",
          backgroundColor: "#31302E",
          bottom: "104px",
          right: "0",
          zIndex: 1,
        }}
      ></div>
    </>
  );
};

export default Antennae;
