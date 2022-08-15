import React from "react";
import "./ClockCounter.scss";

function ClockCounter({ timer, score }) {
  return (
    <>
      <p className="game__time">Time left: {timer}</p>
      <p className="game__score">Score: {score}</p>
    </>
  );
}

export default ClockCounter;
