"use client";
import React, { useEffect, useRef, useState } from "react";

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
  return <span style={{ fontSize: 17 }}>{currentTime}</span>;
};

export default Time;
