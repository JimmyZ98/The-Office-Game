import React from "react";
import "./Options.scss";

function Options({ options }) {
  return (
    <ul className="options">
      {options.map((option, index) => (
        <li key={index}>{option}</li>
      ))}
    </ul>
  );
}

export default Options;
