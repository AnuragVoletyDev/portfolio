import React from "react";
import styles from "./styles.module.css";
import Time from "./Time";
import Image from "next/image";

const StatusBar = () => {
  return (
    <section
      className={`${styles.status_bar} flex justify-between items-center`}
    >
      <Time />
      <Image
        src={"/images/indicators.png"}
        alt="indicators"
        width={0}
        height={0}
        sizes="100vw"
        className={styles.networks}
      />
    </section>
  );
};

export default StatusBar;
