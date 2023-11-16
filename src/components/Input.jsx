import React from "react";
import Arrow from "../assets/arrow.svg?react";
import styles from "./Input.module.css";

const Input = ({ handleSubmit, color, handleChange }) => {
  return (
    <div className={styles.input}>
      <form className={styles.inputForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your Hex code"
          maxLength="7"
          value={color}
          onChange={handleChange}
        />

        <button type="submit">
          <Arrow />
        </button>
      </form>

      <div className={styles.inputColorPicker}>
        <button>OR select your own color</button>
      </div>
    </div>
  );
};

export default Input;
