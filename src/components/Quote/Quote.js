import React from "react";
import "./Quote.scss";

function Quote({ quote }) {
  return <p className="game__quote">{quote}</p>;
}

export default Quote;
