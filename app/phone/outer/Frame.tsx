import React, { FunctionComponent } from "react";

const Frame: FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div
      className="border frame"
      style={{
        height: "888px",
        width: "442px",
        borderRadius: "70px",
        borderWidth: 1,
        padding: 1,
        borderColor: "#121511",
        backgroundColor: "#DFD2CF",
        position: "absolute",
      }}
    >
      {children}
    </div>
  );
};

export default Frame;
