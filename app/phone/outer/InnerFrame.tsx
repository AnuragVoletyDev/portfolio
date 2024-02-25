import React from "react";
import styles from "./styles.module.css";
const InnerFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className={`${styles.inner_frame} frame-inner h-full w-full p-1 relative flex justify-center`}
    >
      {children}
    </div>
  );
};

export default InnerFrame;
