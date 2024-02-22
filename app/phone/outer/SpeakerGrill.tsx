import React from "react";

const SpeakerGrill = () => {
  return (
    <div
      className="speaker-grill"
      style={{
        height: "4px",
        width: "84px",
        borderBottomLeftRadius: "10px",
        borderBottomRightRadius: "10px",
        background:
          "linear-gradient(0deg, rgba(45,45,45,1) 0%, rgba(10,8,6,1) 100%)",
        position: "absolute",
        display: "flex",
        alignItems: "center",
        zIndex: 3,
      }}
    ></div>
  );
};

export default SpeakerGrill;
