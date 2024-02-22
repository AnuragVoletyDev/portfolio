import React from "react";

const Bezel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className="border text-black bezel"
      style={{
        height: "100%",
        width: "100%",
        borderRadius: "65px",
        padding: 11,
        borderColor: "black",
        backgroundColor: "#000",
        zIndex: 2,
        position: "relative",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
};

export default Bezel;
