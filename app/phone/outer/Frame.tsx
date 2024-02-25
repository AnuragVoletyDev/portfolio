import React, { FunctionComponent } from "react";
import styles from "./styles.module.css";
const Frame: FunctionComponent<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className={`${styles.frame} border absolute frame p-px`}>
      {children}
    </div>
  );
};

export default Frame;
