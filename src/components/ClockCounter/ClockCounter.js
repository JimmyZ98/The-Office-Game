import React from "react";
import "./ClockCounter.scss";

function ClockCounter({ timer, score }) {
  return (
    <>
      <p>Time left: {timer}</p>
      <p>Score: {score}</p>
    </>
  );
}

export default ClockCounter;
