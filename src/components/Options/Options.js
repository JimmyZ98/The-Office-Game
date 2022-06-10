import React from "react";
import "./Options.scss";

function Options({ options, updateScore }) {
  
  const selectOption = (e) => {
    const selectedName = e.target.value
    // post that sends the value, keep track score BED
    // response include score to update state
    updateScore()
  }
  
  return (
    <form className="options">
      {options.map((option, index) => (
        <input key={index} type="button" onClick={selectOption} value={option} placeholder={option} />
      ))}
    </form>
  );
}

export default Options;
