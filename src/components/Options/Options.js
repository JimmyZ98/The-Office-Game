import React from "react";
import "./Options.scss";

function Options({ options, handleAnswerOptionClick }) {
  return (
    <form className="options">
      {!options
        ? ""
        : options.map((option, index) => (
            <input
              key={index}
              type="button"
              onClick={() => handleAnswerOptionClick()}
              value={option}
              placeholder={option}
            />
          ))}
    </form>
  );
}

export default Options;
