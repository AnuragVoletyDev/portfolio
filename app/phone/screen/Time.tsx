"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";

const Time = () => {
  const [currentTime, setCurrentTime] = useState("");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (intervalRef?.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      const currentHours = new Date().getHours();
      const currentMinutes = new Date().getMinutes();
      setCurrentTime(
        `${currentHours < 10 ? `0${currentHours}` : currentHours}:${
          currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes
        }`
      );
    }, 1000);

    return () => {
      if (intervalRef?.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  if (!currentTime) {
    return <div className={styles.loading} />;
  }
  return <span className={styles.time}>{currentTime}</span>;
};

export default Time;
