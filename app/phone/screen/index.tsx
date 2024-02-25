import React from "react";
import styles from "./styles.module.css";
import StatusBar from "./StatusBar";
import Content from "./Content";
import Footer from "./Footer";

const Screen = () => {
  return (
    <div
      className={`${styles.screen} flex flex-col relative text-white h-full w-full bg-no-repeat bg-center bg-cover p-3.5 flex flex-col items-center	justify-center`}
    >
      <StatusBar />
      <Content />
      <Footer />
    </div>
  );
};

export default Screen;
