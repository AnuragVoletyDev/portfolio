import React from "react";

const InnerFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className="frame-inner"
      style={{
        height: "100%",
        width: "100%",
        borderRadius: "69px",
        padding: 4,
        backgroundColor: "#4E4A49",
        position: "relative",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {children}
    </div>
  );
};

export default InnerFrame;
