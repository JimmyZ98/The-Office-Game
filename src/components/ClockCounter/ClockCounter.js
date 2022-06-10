import React from "react";
import "./ClockCounter.scss";

function ClockCounter({ timer, score }) {
  return (
    <>
      <p>{timer}</p>
      <p>{score}</p>
    </>
  );
}

export default ClockCounter;
