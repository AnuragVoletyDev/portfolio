import React from "react";
import Camera from "./Camera";

const Notch = () => {
  return (
    <div
      className="absolute notch"
      style={{
        marginTop: "13px",
        height: "35px",
        width: "120px",
        backgroundColor: "black",
        borderRadius: "17.5px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: 11,
        zIndex: 1,
      }}
    >
      <Camera />
    </div>
  );
};

export default Notch;
