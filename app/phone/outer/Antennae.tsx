import React from "react";
import styles from "./styles.module.css";

const Antennae = () => {
  return (
    <>
      <div
        className={`${styles.antenna} ${styles.bottom} absolute z-1 bottom-0`}
      />
      <div className={`${styles.antenna} ${styles.top} absolute z-1`} />
      <div className={`${styles.antenna} ${styles.side_top} absolute z-1`} />
      <div className={`${styles.antenna} ${styles.side_bottom} absolute z-1`} />
      <div
        className={`${styles.antenna} ${styles.side_top} absolute z-1 right-0`}
      />
      <div
        className={`${styles.antenna} ${styles.side_bottom} absolute z-1 right-0`}
      />
    </>
  );
};

export default Antennae;
