import React from "react";
import styles from "./styles.module.css";

const Content = () => {
  return (
    <section className="flex flex-col items-center space-y-9 flex-1">
      <h1 className={`${styles.title_first_name} font-title mt-12  opacity-75`}>
        Anurag
      </h1>
      <h2 className={`${styles.title_last_name} font-title opacity-75`}>
        Volety
      </h2>
    </section>
  );
};

export default Content;
