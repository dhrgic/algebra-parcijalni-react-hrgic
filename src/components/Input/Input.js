import React, { useState } from "react";
import "./Input.scss";
import PropTypes from "prop-types";
import { ResetButton } from "../../lib/styles/globalStyles";

const Input = ({ handleSubmit, handleReset }) => {
  const [user, setUser] = useState("");

  const onChange = (e) => {
    setUser(e.target.value.toLowerCase());
  };

  const handleClick = () => {
    handleSubmit(user);
  };

  const setUserExists = () => {
    setUser("");
    handleReset();
  };

  return (
    <div className="InputContainer">
      <div className="Input-Buttons">
        <input
          value={user}
          className="Input"
          type="text"
          placeholder="Enter the name of a GitHub user..."
          onKeyDown={(e) => {
            if (e.key === "Enter" && user.length > 0) {
              e.preventDefault();
              handleClick();
            }
          }}
          onChange={onChange}
        />
        <button className="Input-Button" onClick={handleClick}>
          SEARCH
        </button>
      </div>
      <ResetButton onClick={setUserExists}>RESET</ResetButton>
    </div>
  );
};

Input.propTypes = {
  handleSubmit: PropTypes.func,
  handleReset: PropTypes.func,
};

export default Input;
