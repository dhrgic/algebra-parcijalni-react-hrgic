import React from "react";
import "./Input.scss";

const Input = () => {
  return (
    <div className="InputContainer">
      <input
        className="Input"
        type="text"
        placeholder="Enter the name of a GitHub user..."
      />
      <button className="Input-Button">SEARCH</button>
    </div>
  );
};

export default Input;
