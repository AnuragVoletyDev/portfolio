import React from "react";
import styles from "./styles.module.css";

const Bezel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div
      className={`${styles.bezel} border text-black h-full w-full z-2 flex relative border-black bg-black justify-center`}
    >
      {children}
    </div>
  );
};

export default Bezel;
